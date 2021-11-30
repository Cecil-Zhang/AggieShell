# AggieShell
A decentralized platform for student start-ups in which the platform offers transparency, security, seamless payment experience, and low transaction fee. Successful fundraising is completed when a predetermined amount threshold is met before the fundraising deadline. Should the project fail to meet the above condition, the payment will be fully refunded to the donators.


## Prerequisites
1. Node.js
2. [Solana Tool Suite](https://docs.solana.com/cli/install-solana-cli-tools)
3. [Phantom](https://phantom.app/)

# Smart Contract 
## Set up
1. Set to network to localhost: `solana config set --url <localhost>`
2. Start a local Solana node: `solana-test-validator`
3. Using Phantom to browse wallet:
    * open a browser with Phantom plugin
    * add a new wallet with network 'Localhost'
    * copy the account address by click the top of the wallet interface
4. Airdrop tokens to the wallet: `solana airdrop 10 <address>`
5. Check balance of the wallet anytime: `solana balance 10 <address>`

## Build
1. Install the dependencies: `npm install`
2. Build the project: `cargo build-bpf --manifest-path=Cargo.toml --bpf-out-dir=dist/program`

## Deploy
`solana deploy dist/program/program.so <--url https://api.devnet.solana.com>`