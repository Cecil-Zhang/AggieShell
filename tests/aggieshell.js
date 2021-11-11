const assert = require("assert");
const anchor = require("@project-serum/anchor");
const { SystemProgram } = anchor.web3;

describe('story 1: a failed project', () => {

  /* create and set a Provider */
  const provider = anchor.Provider.env();
  anchor.setProvider(provider);
  const program = anchor.workspace.Aggieshell;
  const feePayerPubkey = provider.wallet.publicKey;

  it("create the project", async () => {
    let project = anchor.web3.Keypair.generate();
    _project = project;
    let raiser = anchor.web3.Keypair.generate();
    _raiser = raiser;
    let [pda] = await anchor.web3.PublicKey.findProgramAddress([raiser.publicKey.toBuffer()], program.programId);
    _pda = pda;
    let currencyPubkey = await createMint(provider, feePayerPubkey);
    _currencyPubkey = currencyPubkey;
    let currencyHolderPubkey = await createTokenAccount(provider, currencyPubkey, pda);
    _currencyHolderPubkey = currencyHolderPubkey;

    console.log("create project - start");

    await program.rpc.createProject(new anchor.BN(1000), {
      accounts: {
        project: project.publicKey,
        raiser: raiser.publicKey,
        currencyHolder: currencyHolderPubkey,
        user: feePayerPubkey,
        systemProgram: SystemProgram.programId,
      },
      signers: [project],
    });

    console.log("create project - half");

    const projectAccount = await program.account.project.fetch(project.publicKey);
    assert.ok(projectAccount.ongoing);
    assert.ok(projectAccount.raiser.equals(raiser.publicKey));
    assert.ok(projectAccount.currencyHolder.equals(currencyHolderPubkey));
    assert.ok(projectAccount.target == 1000);
    assert.ok(projectAccount.current == 0);
  });

  it("close the project which no one funds", async () => {
    let project = _project;
    let raiser = _raiser;
    let pda = _pda;
    let currencyPubkey = _currencyPubkey;
    let currencyHolderPubkey = _currencyHolderPubkey;
    let currencyReceiver = await createTokenAccountWithBalance(provider, currencyPubkey, raiser.publicKey, 0);

    await program.rpc.closeProject({
      accounts: {
        project: project.publicKey,
        raiser: raiser.publicKey,
        currencyHolder: currencyHolderPubkey,
        currencyHolderAuth: pda,
        currencyReceiver: currencyReceiver,
        tokenProgram: TOKEN_PROGRAM_ID,
      },
      signers: [raiser],
    });

    let projectAccount = await program.account.project.fetch(project.publicKey);
    assert.ok(!projectAccount.ongoing);

    tokenAccount = await getTokenAccount(provider, currencyReceiver);
    assert(tokenAccount.amount == 0);
  });

});

describe('story 2: a successful project', () => {

  /* create and set a Provider */
  const provider = anchor.Provider.env();
  anchor.setProvider(provider);
  const program = anchor.workspace.Aggieshell;
  const feePayerPubkey = provider.wallet.publicKey;

  it("create the project", async () => {
    let project = anchor.web3.Keypair.generate();
    _project = project;
    let raiser = anchor.web3.Keypair.generate();
    _raiser = raiser;
    let [pda] = await anchor.web3.PublicKey.findProgramAddress([raiser.publicKey.toBuffer()], program.programId);
    _pda = pda;
    let currencyPubkey = await createMint(provider, feePayerPubkey);
    _currencyPubkey = currencyPubkey;
    let currencyHolderPubkey = await createTokenAccount(provider, currencyPubkey, pda);
    _currencyHolderPubkey = currencyHolderPubkey;

    await program.rpc.createProject(new anchor.BN(10), {
      accounts: {
        project: project.publicKey,
        raiser: raiser.publicKey,
        currencyHolder: currencyHolderPubkey,
        user: feePayerPubkey,
        systemProgram: SystemProgram.programId,
      },
      signers: [project],
    });

    const projectAccount = await program.account.project.fetch(project.publicKey);
    assert.ok(projectAccount.ongoing);
    assert.ok(projectAccount.raiser.equals(raiser.publicKey));
    assert.ok(projectAccount.currencyHolder.equals(currencyHolderPubkey));
    assert.ok(projectAccount.target == 10);
    assert.ok(projectAccount.current == 0);
  });

  it("first fund", async () => {
    let project = _project;
    let funder = anchor.web3.Keypair.generate();
    let pda = _pda;
    let currencyPubkey = _currencyPubkey;
    let currencyHolderPubkey = _currencyHolderPubkey;
    let funderCurrencyHolder = await createTokenAccountWithBalance(provider, currencyPubkey, funder.publicKey, 2000);

    await program.rpc.fund(new anchor.BN(2000), {
      accounts: {
        project: project.publicKey,
        funder: funder.publicKey,
        from: funderCurrencyHolder,
        fromAuth: funder.publicKey,
        currencyHolder: currencyHolderPubkey,
        currencyHolderAuth: pda,
        tokenProgram: TOKEN_PROGRAM_ID,
      },
      signers: [funder],
    });

    let projectAccount = await program.account.project.fetch(project.publicKey);
    assert.ok(projectAccount.ongoing);
    assert.ok(projectAccount.target == 10);
    assert.ok(projectAccount.current == 2000);

    // check currency holder balance
    let receiverAccount = await getTokenAccount(provider, currencyHolderPubkey);
    assert(receiverAccount.amount == 2000);
    // check founder holder balance
    let founderAccount = await getTokenAccount(provider, funderCurrencyHolder);
    assert(founderAccount.amount == 0);
  });

  it("second fund", async () => {
    let project = _project;
    let funder = anchor.web3.Keypair.generate();
    let pda = _pda;
    let currencyPubkey = _currencyPubkey;
    let currencyHolderPubkey = _currencyHolderPubkey;
    let funderCurrencyHolder = await createTokenAccountWithBalance(provider, currencyPubkey, funder.publicKey, 100);

    await program.rpc.fund(new anchor.BN(20), {
      accounts: {
        project: project.publicKey,
        funder: funder.publicKey,
        from: funderCurrencyHolder,
        fromAuth: funder.publicKey,
        currencyHolder: currencyHolderPubkey,
        currencyHolderAuth: pda,
        tokenProgram: TOKEN_PROGRAM_ID,
      },
      signers: [funder],
    });

    let projectAccount = await program.account.project.fetch(project.publicKey);
    assert.ok(projectAccount.ongoing);
    assert.ok(projectAccount.target == 10);
    assert.ok(projectAccount.current == 2020);

    // check currency holder balance
    let receiverAccount = await getTokenAccount(provider, currencyHolderPubkey);
    assert(receiverAccount.amount == 2020);
    // check founder holder balance
    let founderAccount = await getTokenAccount(provider, funderCurrencyHolder);
    assert(founderAccount.amount == 80);
  });

  it("close the successful project", async () => {
    let project = _project;
    let raiser = _raiser;
    let pda = _pda;
    let currencyPubkey = _currencyPubkey;
    let currencyHolderPubkey = _currencyHolderPubkey;
    let currencyReceiver = await createTokenAccountWithBalance(provider, currencyPubkey, raiser.publicKey, 0);

    let currencyHolderAccount = await getTokenAccount(provider, currencyHolderPubkey);
    assert(currencyHolderAccount.amount == 2020);

    let raiserAccount = await getTokenAccount(provider, currencyReceiver);
    assert(raiserAccount.amount == 0);

    console.log("close project - start");

    await program.rpc.closeProject({
      accounts: {
        project: project.publicKey,
        raiser: raiser.publicKey,
        currencyHolder: currencyHolderPubkey,
        currencyHolderAuth: pda,
        currencyReceiver: currencyReceiver,
        tokenProgram: TOKEN_PROGRAM_ID,
      },
      signers: [raiser],
    });

    console.log("close project - end");

    let projectAccount = await program.account.project.fetch(project.publicKey);
    assert.ok(!projectAccount.ongoing);

    // check currency holder balance
    currencyHolderAccount = await getTokenAccount(provider, currencyHolderPubkey);
    assert(currencyHolderAccount.amount == 0);
    // check raiser balance
    raiserAccount = await getTokenAccount(provider, currencyReceiver);
    assert(raiserAccount.amount == 2020);
  });

});

const serumCmn = require("@project-serum/common");
const TokenInstructions = require("@project-serum/serum").TokenInstructions;
const TOKEN_PROGRAM_ID = new anchor.web3.PublicKey(TokenInstructions.TOKEN_PROGRAM_ID.toString());

async function getTokenAccount(provider, addr) {
  return await serumCmn.getTokenAccount(provider, addr);
}

async function createMint(provider, authority) {
  if (authority === undefined) {
    authority = provider.wallet.publicKey;
  }
  const mint = anchor.web3.Keypair.generate();
  const instructions = await createMintInstructions(provider, authority, mint.publicKey);

  const tx = new anchor.web3.Transaction();
  tx.add(...instructions);

  await provider.send(tx, [mint]);

  return mint.publicKey;
}

async function createMintInstructions(provider, authority, mint) {
  let instructions = [
    anchor.web3.SystemProgram.createAccount({
      fromPubkey: provider.wallet.publicKey,
      newAccountPubkey: mint,
      space: 82,
      lamports: await provider.connection.getMinimumBalanceForRentExemption(82),
      programId: TOKEN_PROGRAM_ID,
    }),
    TokenInstructions.initializeMint({
      mint,
      decimals: 0,
      mintAuthority: authority,
    }),
  ];
  return instructions;
}

async function createTokenAccount(provider, mint, owner) {
  const vault = anchor.web3.Keypair.generate();
  const tx = new anchor.web3.Transaction();
  tx.add(...(await createTokenAccountInstrs(provider, vault.publicKey, mint, owner)));
  await provider.send(tx, [vault]);
  return vault.publicKey;
}

async function createTokenAccountInstrs(provider, newAccountPubkey, mint, owner, lamports) {
  if (lamports === undefined) {
    lamports = await provider.connection.getMinimumBalanceForRentExemption(165);
  }
  return [
    anchor.web3.SystemProgram.createAccount({
      fromPubkey: provider.wallet.publicKey,
      newAccountPubkey,
      space: 165,
      lamports,
      programId: TOKEN_PROGRAM_ID,
    }),
    TokenInstructions.initializeAccount({
      account: newAccountPubkey,
      mint,
      owner,
    }),
  ];
}

async function createTokenAccountWithBalance(provider, mint, owner, initBalance) {
  const vault = anchor.web3.Keypair.generate();
  const tx = new anchor.web3.Transaction();
  tx.add(
    ...(await createTokenAccountInstrs(provider, vault.publicKey, mint, owner)),
    TokenInstructions.mintTo({
      mint: mint,
      destination: vault.publicKey,
      amount: initBalance,
      mintAuthority: provider.wallet.publicKey,
    })
  );
  await provider.send(tx, [vault]);
  return vault.publicKey;
}