use anchor_lang::prelude::*;
use anchor_lang::{AccountDeserialize, AnchorDeserialize};
use anchor_spl::token::{self, TokenAccount, Transfer};

declare_id!("HbUJHkcG4C6BZMdGxRiVtqTBJPzww7fjMmdRAfJhwjs7");

#[program]
pub mod aggieshell {
    use super::*;

    pub fn create_project(ctx: Context<CreateProject>, target: u64) -> ProgramResult {
        if target <= 0 {
            return Err(ProjectErr::TargetTooLow.into());
        }
        // init project
        let project = &mut ctx.accounts.project;
        project.ongoing = true;
        project.raiser = *ctx.accounts.raiser.key;
        project.currency_holder = *ctx.accounts.currency_holder.to_account_info().key;
        project.target = target;
        Ok(())
    }

    pub fn fund(ctx: Context<Funding>, amount: u64) -> ProgramResult {
        let project = &mut ctx.accounts.project;

        // check bid price
        if amount <= 0 {
            return Err(ProjectErr::FundTooLow.into());
        }

        // transfer money to custodial currency holder
        let cpi_accounts = Transfer {
            from: ctx.accounts.from.to_account_info().clone(),
            to: ctx.accounts.currency_holder.to_account_info().clone(),
            authority: ctx.accounts.from_auth.clone(),
        };
        let cpi_program = ctx.accounts.token_program.clone();
        let cpi_ctx = CpiContext::new(cpi_program, cpi_accounts);
        token::transfer(cpi_ctx, amount)?;

        // update project info
        // let project = &mut ctx.accounts.project;
        project.current += amount;

        Ok(())
    }

    pub fn close_project(ctx: Context<CloseProject>) -> ProgramResult {
        let project = &mut ctx.accounts.project;

        let (_, seed) =
            Pubkey::find_program_address(&[&project.raiser.to_bytes()], &ctx.program_id);
        let seeds = &[project.raiser.as_ref(), &[seed]];
        let signer = &[&seeds[..]];

        // currency ownership transfer
        if project.current >= project.target {
            let cpi_accounts = Transfer {
                from: ctx.accounts.currency_holder.to_account_info().clone(),
                to: ctx.accounts.currency_receiver.to_account_info().clone(),
                authority: ctx.accounts.currency_holder_auth.clone(),
            };
            let cpi_program = ctx.accounts.token_program.clone();
            let cpi_ctx = CpiContext::new_with_signer(cpi_program, cpi_accounts, signer);
            token::transfer(cpi_ctx, project.current)?;
        }

        project.ongoing = false;
        Ok(())
    }
}

#[account]
pub struct Project {
    ongoing: bool,
    raiser: Pubkey,
    target: u64,
    current: u64,
    currency_holder: Pubkey,
}

// Transaction instructions
#[derive(Accounts)]
pub struct CreateProject<'info> {
    #[account(init, payer = user, space = 64 + 64)]
    project: ProgramAccount<'info, Project>,
    #[account(mut)]
    raiser: AccountInfo<'info>,
    #[account("&currency_holder.owner == &Pubkey::find_program_address(&[&raiser.key.to_bytes()], &program_id).0")]
    currency_holder: Account<'info, TokenAccount>,
    #[account(mut)]
    user: Signer<'info>,
    system_program: Program <'info, System>,
}

#[derive(Accounts)]
pub struct Funding<'info> {
    #[account(mut, "project.ongoing")]
    project: ProgramAccount<'info, Project>,
    #[account(signer)]
    funder: AccountInfo<'info>,
    #[account(
        mut,
        "from.mint == currency_holder.mint",
        "&from.owner == from_auth.key"
    )]
    from: Account<'info, TokenAccount>,
    #[account(signer)]
    from_auth: AccountInfo<'info>,
    #[account(
        mut,
        "currency_holder.to_account_info().key == &project.currency_holder"
    )]
    currency_holder: Account<'info, TokenAccount>,
    #[account("&currency_holder.owner == currency_holder_auth.key")]
    currency_holder_auth: AccountInfo<'info>,
    #[account("token_program.key == &token::ID")]
    token_program: AccountInfo<'info>,
}

#[derive(Accounts)]
pub struct CloseProject<'info> {
    #[account(mut, "project.ongoing")]
    project: ProgramAccount<'info, Project>,
    #[account(signer)]
    raiser: AccountInfo<'info>,
    // todo: no.1 
    // #[account(
    //     mut,
    //     "currency_holder.to_account_info().key == &project.currency_holder"
    //     "&currency_holder.owner == &Pubkey::find_program_address(&[&raiser.key.to_bytes()], &program_id).0"
    // )]
    #[account(
        mut,
        "currency_holder.to_account_info().key == &project.currency_holder"
    )]
    currency_holder: Account<'info, TokenAccount>,
    #[account("&currency_holder.owner == currency_holder_auth.key")]
    currency_holder_auth: AccountInfo<'info>,
    #[account(mut)]
    currency_receiver: Account<'info, TokenAccount>,
    #[account("token_program.key == &token::ID")]
    token_program: AccountInfo<'info>,
}

#[error]
pub enum ProjectErr {
    #[msg("your target amount is too low")]
    TargetTooLow,
    #[msg("your funding amount is too low")]
    FundTooLow,
}