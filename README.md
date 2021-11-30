# AggieShell

A decentralized platform for student start-ups in which the platform offers transparency, security, seamless payment experience, and low transaction fee. Successful fundraising is completed when a predetermined amount threshold is met before the fundraising deadline. Should the project fail to meet the above condition, the payment will be fully refunded to the donators.

## Visit our demo page

1. Create Phantom Wallet Account and install Phantom Wallet Extension in your browser(e.g. Chrome)
2. Create a wallet and set the network to DevNet
3. [Airdrop](https://docs.solana.com/cli/transfer-tokens) yourself some SOLs to get started
4. Our demo web page is hosted at [AggieShell](https://aggie-shell.vercel.app)

## Prerequisites

1. Node.js
2. [Solana Tool Suite](https://docs.solana.com/cli/install-solana-cli-tools)
3. [Phantom](https://phantom.app/)

## Smart Contract (For Developers)

### Set up

1. Set to network to localhost: `solana config set --url <localhost>`
2. Start a local Solana node: `solana-test-validator`
3. Using Phantom to browse wallet:
    * open a browser with Phantom plugin
    * add a new wallet with network 'Localhost'
    * copy the account address by click the top of the wallet interface
4. Airdrop tokens to the wallet: `solana airdrop 10 <address>`
5. Check balance of the wallet anytime: `solana balance <address>`

### Build

1. Install the dependencies: `npm install`
2. Build the project: `cargo build-bpf --manifest-path=Cargo.toml --bpf-out-dir=dist/program`

### Deploy

`solana deploy dist/program/program.so <--url https://api.devnet.solana.com>`

## Frontend Client (For Developers)

Our Frontend App is built upon [Notus Nextjs](https://github.com/creativetimofficial/notus-nextjs) Template(Nextjs, TailwindCSS), using React and Ant Design UI.

### How to Run Dev, Build, Deploy

1. Go into frontend dir: `cd frontendAggieShell`
2. Install dependencies and run dev in one command: `npm run install:clean`
3. Or in sparated steps:
   * `npm install`
   * `npm run build:tailwind`
   * For dev environment: `npm run dev` and see your app in [localhost:3000](localhost:3000)
   * For depolyment build: `npm run build` and `npm run start`
