---
layout: post
title:  "Announcing Community Testing for the New Fulcrum UI"
date:   2020-08-20 01:12:46 -0700
cover: /images/blog/testing.png
author: Sawinyh
metadescription: "bZx is releasing its latest version of Fulcrum for beta testing on the Kovan Test Network"
intro: "Help bZx Test The New Fulcrum UI"
---

bZx is releasing its latest version of Fulcrum for beta testing on the Kovan Test Network.

Join our public test phase to help us identify any bugs or major issues to address before launching on the Ethereum mainnet.

![](/images/blog/kovan/image1.png)


## Testing The New Fulcrum

The bZx team has deployed "mock" versions of possible mainnet assets and iTokens on the Kovan testnet (you can find the list in [iTokenList.js](https://github.com/bZxNetwork/fulcrum_ui/blob/kovan_build/packages/fulcrum/src/assets/artifacts/kovan/iTokenList.js).

In our testing environment, swap liquidity is unlimited as long as the loan pools have enough assets to borrow. Below are instructions for acquiring assets to deposit to loan pools.

For testing, please visit:

*   [Fulcrum Lend/Unlend Page](https://kovan.fulcrum.trade/lend)
*   [Fulcrum Trade Page](https://kovan.fulcrum.trade/trade)
*   [Torque](https://kovan.torque.loans)
*   [Protocol Explorer and Liquidations Page](https://kovan-explorer.bzx.network/liquidations)

Try out our UI for trading and lending and join us on [Telegram](https://t.me/b0xNet) to let us know how your testing goes! Please be aware that token prices may not match exactly with mainnet due to the complexity of the system.

To test the Liquidation feature, simply connect your wallet, scroll down to the “Unhealthy Loans” section, and click “Liquidate.”

If you come across any bugs or major problems, please create an issue in the [GitHub repo here](https://github.com/bZxNetwork/fulcrum_ui/issues).

## Where to get Kovan ETH

All Ethereum transcation require gas, so you'll need to obtain some Kovan ETH to interact with the blockchain on Kovan. This faucet can be used: https://faucet.kovan.network

## Where to get Kovan fWETH

To test the platform, you’ll need to obtain some fWETH. This is a fake version of Wrapped Ether (WETH).

Here’s a step-by-step guide to obtaining fWETH on the Kovan Test Network.

### Step 1: Connect to Kovan

Log in to your MetaMask, Fortmatic, or Portis wallet and connect to the Kovan Test Network.

![](/images/blog/kovan/image4.png)

### Step 2: Mint fWETH Tokens

Go to the Etherscan page for Kovan fWETH tokens

[https://kovan.etherscan.io/address/0xe65d99a06d0ded0d318e31db3ae5d77629c625fc#writeContract](https://kovan.etherscan.io/address/0xe65d99a06d0ded0d318e31db3ae5d77629c625fc#writeContract)

![](/images/blog/kovan/image7.png)

Click “Connect to Web3” and select your Web3 Wallet from the options provided.

![](/images/blog/kovan/image2.png)

The contract will ask to connect to your wallet. Click “Connect” to interact with the smart contracts for fWETH tokens on the Kovan Test Network.

### Step 3: Mint fWETH

Copy and paste your wallet address into the “_to (address)” field and enter the number of fWETH tokens you want to mint under the function for minting tokens.

Since you’re entering the number of new tokens as a uint256 value, enter “1000000000000000000” to mint a single fWETH token.

![](/images/blog/kovan/image8.png)

Click the “Write” button and your wallet will pop up to confirm the transaction. Accept the transaction to mint new fWETH tokens and transfer them to your wallet.

Once you’ve confirmed the transaction, a button to “View your transaction” will appear next to the “Write” button.

![](/images/blog/kovan/image5.png)

### Step 4: Check Your Wallet

To see the tokens in your wallet, scroll to the top of the page, copy the address of the contract.

![](/images/blog/kovan/image6.png)

Go to the “Add Tokens” section of your Web3 Wallet and click “Custom Token.” Paste the address into the field labeled “Token Contract Address” and click “Next” to tell your wallet to display the balance of your fWETH tokens.

![](/images/blog/kovan/image3.png)

# Report Bugs and Provide Feedback

If you run into bugs or issues or have any feedback to share with the team, please create an issue in the [GitHub repo here](https://github.com/bZxNetwork/fulcrum_ui/issues).

![](/images/blog/Issues_·_bZxNetwork_fulcrum_ui.png)

Thanks for participating!
