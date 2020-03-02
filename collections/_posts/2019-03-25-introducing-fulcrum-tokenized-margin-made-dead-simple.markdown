---
layout: post
title:  "Introducing Fulcrum: Tokenized Margin Made Dead Simple"
date:   2019-03-25 20:12:46 -0700
cover: /images/blog/1_qOacYDyqR4cSxl24qnDc-g.png
canonical: https://medium.com/bzxnetwork/introducing-fulcrum-tokenized-margin-made-dead-simple-e65ccc82393f
author: Kistner
metadescription: "bZx is excited to introduce Fulcrum, the most simple and powerful way to lend and margin trade. "
intro: "bZx is excited to introduce Fulcrum, the most simple and powerful way to lend and margin trade. "
---
bZx is excited to introduce [Fulcrum](https://fulcrum.trade/), the most simple and powerful way to lend and margin trade. It is the first and only completely trustless platform for margin; it does not use centralized price feeds or centrally administered margin calls. It is permissionless and rent free; there are no fees and no accounts. Fulcrum is built on the bZx base protocol and extends the protocol by allowing both loans and margin positions to be tokenized. The [bZx base protocol](https://bzx.network/) was [successfully audited](https://github.com/mattdf/audits/blob/master/bZx/bzx-audit.pdf) by ZK Labs. The audit of the margin loan tokens (iTokens) and margin position tokens (pTokens) will be released on launch.

### Fulcrum will be live June 1st, 2019.

In the coming weeks we will be debuting a mobile optimized interface for Fulcrum and publishing a user guide video.
*Update*: The release of Fulcrum has been delayed as our security auditor Matthew DiFerrante at ZK Labs is ill. We will be launching when the security audit is completed.
*Update 2.0*: The audit is done.

## How To Use Fulcrum

### Lending

The lending process on Fulcrum is so simple that it can be performed with just a few clicks. If you have a web3 wallet such as Metamask or [Equal](http://equal.tech/) installed, simply go to Fulcrum.trade, click lend, select your asset, submit the quantity, and approve the transaction (see user guide below). If you don’t have a web wallet installed, using Fulcrum is still easy. In the initial launch we will be supporting [Fortmatic](https://fortmatic.com/), [Portis](https://www.portis.io/), and [Bitski](https://www.bitski.com/).

In the coming months we will be implementing new ways of lending on Fulcrum for ERC20s. Soon we will support lending for ERC20s such as DAI, BAT, ZRX, and more in the same way. It will be as simple as sending the ERC20 to the appropriate ENS address (e.g., dai.tokenloan.eth, bat.tokenloan.eth, zrx.tokenloan.eth).
Once your loan is complete, the corresponding iToken will be delivered to your account. You can use these iTokens as collateral for secured loans, sell them on the open market, or redeem them for the underlying assets. iTokens allow you to turn your assets into [superfluid collateral](https://tokeneconomy.co/superfluid-collateral-in-open-finance-8c3db15efac?ref=tokendaily).

### web3 Wallets

From the lending interface:

![](/images/blog/0_JySK5pkJIOAQby2u.png)

(1) Click Loan

![](/images/blog/0_1BOrCxXKDGTY_UZe.png)

(2) Enter quantity and click submit. By default the maximum quantity is selected.

![](/images/blog/0_2zJ6qowz6BpdADOD.png)

(3) Approve the transaction(s).

If you’re lending ETH, you will only be asked to submit one transaction. If you’re lending an ERC20, Fulcrum will check if you’ve approved a token allowance and prompt you to do so if you have not. You only ever have to approve a token allowance once for any given ERC20. After the transactions are approved, you’re finished. The process is asynchronous, so you can start trading or lending other assets while transactions are pending.

### Trading

The trading process is extremely simple, requiring only three clicks before you are prompted to approve the transaction. The trading interface allows you to purchase pTokens, which give you exposure to a desired short or leveraged position. If you want 4x long exposure to ETH, simply select 4x under ETH long, click buy, enter the number you want to buy, click buy, and approve the transaction (see user guide below). In the case of the example, a pToken representing 4x long ETH exposure (pLETH4x) will be deposited into your wallet. You can then sell those pTokens on the open market, use them as collateral in secured loans, or redeem them for the underlying asset.

### web3 Wallets

(1) Select the amount of leverage for your asset.

![](/images/blog/0_PK9l6CGC9ZrmwSIq.png)

(2) Click “Buy”

![](/images/blog/0_Jk0ZBKY52hDLrvPo.png)

(3) Enter the quantity and click “Buy”.

You will be prompted to approve the transaction. When the transaction has been approved, the pToken will be deposited into your wallet. You are free to enter into other trades, create loans, or navigate away from the site while the transaction is pending. By default all pTokens will be purchased with ETH, but additional purchase options will be added over the coming weeks.

## How It Works

### Minting an iToken

When the iToken contract for an asset is first deployed, it creates on-chain base protocol order objects corresponding to each level of leverage. The initial margin of the order object defines the level of leverage, and each order object has margin maintenance set at 15%. The length of the loan in the order object is defined as 28 days. When a lender wants to create a loan, they invoke the function mintWithEther when loaning ETH, or if loaning an ERC20, approve a token allowance and invoke the function mint.

Anyone can borrow directly against the iToken to execute a typical base protocol loan with a fixed interest rate. Alternatively, loans can be taken by calling the borrowTokenFromEscrow function through a pToken contract, which will then mint pTokens using the loan. Calling either borrowTokenFromEscrow or borrowToken causes the iToken liquidity to be added to the appropriate order object corresponding to the level of leverage specified by the borrower. The interest rates on loans initiated by the pToken contracts are dynamic, reacting in real-time to the supply and demand of lending and borrowing as described in the section below titled Interest Determination. When the loan is taken by a borrower, the 28 days begins. Once a loan has been initiated, each subsequent borrower at that level of leverage partially fills the loan order but does not refresh the expiration date.

### Minting a pToken

In order to enter into a margin position, two steps must take place: a loan must be filled, and the borrowed asset must be exchanged. When the mint function of a pToken contract is called, it fills a loan using the appropriate iToken lending pool then calls the KyberSwap contract to swap the borrowed asset. If you are purchasing a leveraged long margin token such as pLETH2x, the contract first borrows DAI then exchanges that DAI for ETH using KyberSwap. pToken contracts require collateral in order to fulfill the first leg of the process, filling the loan. Any collateral can be used to fulfill the initial margin requirement. If you are using ETH as collateral, the mintWithEther function takes ETH into the contract to back the loan. If you are using an ERC20 as collateral, a transaction approving a token allowance to the pToken contract is first required before calling the mint function. At first an approval transaction will be required for each type of pToken. Later, a master routing contract will be implemented to reduce the number of approvals required to one per asset.

### Closing an iToken

Lenders are able to divest themselves of an iToken position in two ways: burning the token by sending it to the iToken contract or selling it on the open market. When an iToken holder burns the token by sending it to the iToken contract, the funds they deposited are returned to their address immediately, assuming doing so does not bring loan utilization over 100%. In the case that burning the iToken brings loan utilization over 100%, as much of the funds that can be returned are returned. When a redemption does not result in a full refund, the user is placed in a queue to have the remainder of their funds returned. When the loans taken out by pToken contracts reach the end of the loan duration, they are then used to fully remunerate the first lender in the queue. Any interaction with the iToken contract including minting, burning, or borrowing acts as a trigger for the funds to be returned to the next lender in the queue. If a queue forms, lenders can call the redeem function to claim any existing liquidity within the iToken contract and place themselves at the front of the queue. Lenders continue to earn interest on any funds not returned to them, even if all their iTokens are burnt.

The redemption mechanics outlined above primarily govern edge cases. It is most likely that loan utilization will not stay near 100% for any substantial period of time. This is because of the interest rate mechanics at work for lending and borrowing. When loan utilization is near 100%, the interest rate will be high, attracting loan interest. This will create liquidity for lenders wanting to exit their iToken positions.

### Closing a pToken

The exposure granted by pTokens can be exited by either selling them on secondary markets or burning the pToken by sending it back to the originating pToken contract. When a pToken is burned it swaps the held assets within the pToken contract back into the borrowed asset via KyberSwap. The borrowed asset is then returned to the originating iToken lending pool. The collateral used to purchase the pToken and fulfill the iToken loan terms is then returned to the address that initiated the burn.

### Interest Determination
iToken interest rates are set algorithmically in each iToken contract based on the rate of loan utilization. As more funds from the iToken loan pool are borrowed, the interest rate increases. Interest is computed, accrued, and added to the lending pool every block. There are several interest rates to be aware of and the functions that return each will be described:
### (1)
nextLoanInterestRate(uint256 newBorrowAmount):
This function returns the fixed interest rate the next borrower will receive, based on the amount they are borrowing (newBorrowAmount). The rate is calculated according to the following formulas:
next_interest_rate = utilizationRate * rateMultiplier + baseRate
utilizationRate = totalAssetBorrowed / totalAssetSupplied
totalAssetBorrowed = asset_amount_previously_borrowed + newBorrowAmount(passed by user)
totalAssetSupplied = total_deposits_from_lenders + total_accrued_interest_from_loans
next_interest_rate has a minimum value equal to baseRate and a maximum value equal to rateMultiplier+baseRate.
The rates that have been set by default for the current implementation are as follows:
baseRate = 1%
rateMultiplier = 39%
All iToken loans will initially use these values. The values can be adjusted by governance vote on a per asset basis. The details of this governance process will be discussed in later posts.

### (2)
borrowInterestRate()
This function returns the cumulative rate that current borrowers are collectively paying for all loans taken against the iToken contract.
current_borrow_interest_rate = interest_owed_per_day_total * 365 / totalAssetBorrowed * supply_change_adjustment
supply_change_adjustment= last_supply_change_checkpoint / current_supply
last_supply_change_checkpointis a snapshot taken of the current supply amount when borrow amount changes. last_supply_change_checkpointis used to adjust up or down the current_borrow_interest_rate based on changing supply and demand.

### (3)
supplyInterestRate()
This function returns the cumulative rate that the iToken is currently earning based on current utilizationRate.
current_supply_interest_rate = current_borrow_interest_rate * utilizationRate * (1-spread).
spread = interest retained by the protocol for lender insurance = 10%
pTokens that borrow against iTokens have interest rates set according to the above functions.
Pricing of iTokens
iToken prices are denominated in terms of the loan asset. The price of an iToken initially corresponds one to one (1:1) with the loan asset. For example, when the iETH contract is originally deployed, each iETH will be priced at precisely 1 ETH. Likewise, 1 iDAI will be priced at precisely 1 DAI. As funds from the iToken contract are borrowed and interest accrues to the lending pool, the exchange rate between iTokens and the loan asset increases, allowing iToken holders to redeem a greater amount of the underlying asset relative to when they first minted the iToken.
iToken Price = (Assets Deposited + Earned Interest) / Total Supply

### Pricing of pTokens

pTokens are priced relative to the positions they represent. The exchange rate of a pToken initially corresponds one to one thousand (1:1,000) with the loan asset. As pTokens are minted and burned, this price will fluctuate up and down according to the total collateral backing the loan, plus any change in the underlying loan position, plus any interest that has not yet accrued to the iToken lender. The value of the underlying loan position changes according to the value of the backed asset and moves by a factor equal to the amount of leverage. For instance, a 4x Long ETH pToken increases in price four times faster than the price of ETH, and two times faster than a 2x Long ETH pToken. Furthermore, it moves in the same direction as the price of ETH. Likewise, assuming equal leverage, short versions of these same pTokens would move at the same rate as their long counterparts but in the opposite direction of ETH.
pToken Price = (Initial Collateral + Profit/Loss + Unpaid Interest) / Total Supply

### Volatility Decay

The exchange rate of a leveraged asset will tend toward zero over a long enough time horizon, a phenomenon known as volatility decay. Since pTokens are perpetual, it is a concern that over time their exchange rate will become so fractional that it becomes a UX burden. In order to counter this, we have introduced the concept of reverse token splits. A similar concept is used to manage the volatility decay of leveraged ETFs in traditional financial markets. When the exchange rate of a pToken goes below 0.0000001, any interaction with the pToken contract automatically performs a 10,000,000,000:1 split, resetting the exchange rate to 1,000. This is an event that relays and exchanges will have to monitor and compensate for as this could distort existing orders. These reverse split events should be exceedingly rare, occurring a few times a decade at most.

### Liquidating pToken Positions

The underlying iToken order object specifies a margin maintenance of 15%. The code is open source and other implementations of iTokens/pTokens can use any parameter. This parameter will be subject to governance in the future. This parameter was chosen as it is the lowest margin maintenance that is covered by the insurance fund. When a pToken position goes under margin maintenance, the entire pToken contract is treated as a bankrupt margin account and can be liquidated by anyone monitoring margin positions by calling liquidate() in the bZx.sol contract. pTokens that have gone under margin maintenance are treated the same as any other loan on the base protocol. The health of the margin account is verified by calling into Chainlink’s decentralized oracle network for price information, then if the account is unhealthy, the held assets are swapped for the borrowed assets and returned to the lender. In the case of the pToken contracts, the lender is the iToken contract.
Since liquidations function the same as they do in the base protocol, and indeed the loan order object exists on the base protocol, the bounty hunter that called liquidate() is then compensated from a portion of the borrower’s collateral. This compensation is based on an exponential moving average (EMA) of previous gas prices constructed through prior interactions with the contract. The only gas price not considered when constructing the EMA is the calling of liquidate() itself. The EMA has a lookback window of ten transactions and discards outliers when gas price > 2x + 5, where x is the current EMA value.

### Liquidity Risk and Price Feed Manipulation

Chainlink’s decentralized oracle network is used for price information.  Chainlink’s decentralized oracle network provides the same security guarantees as smart contracts themselves. By allowing multiple Chainlinks to evaluate the same data before it becomes a trigger, we eliminate any one point of failure and maintain the overall value of a smart contract that is highly secure, reliable, and trustworthy. 

One benefit of liquidations taking place on the blockchain is the existence of a latency between the initiation of a liquidation and the completion of the liquidation. This latency gives market makers the opportunity to front-run large liquidations to deposit reserves into KyberSwap. The larger the liquidation, the larger the slippage, and the larger the potential profits market makers can reap from successfully absorbing volume. This process is both open and competitive, allowing multiple market makers to compete for the volume. This competition minimizes the slippage any liquidation may experience, allowing Kyber reserves to tap into a large source of dynamic liquidity.

Multiple market makers will potentially be watching the mempool for KyberSwap transactions, waiting for a large market order that could cause enough slippage to make an account eligible for a margin call. This means that attempting to manipulate the price feed poses considerable risks to an attacker in the event that a market maker successfully front-runs the transaction.

Unlike other margin protocols that provide robust profits from liquidating positions, no special incentives exist to force a liquidation within the bZx protocol because the system is designed such that revenues from liquidations converge on the marginal cost. We discuss the [game theory and incentives](https://medium.com/bzxnetwork/bzx-announces-mainnet-launch-releases-zk-labs-security-audit-and-unveils-upcoming-relay-a690cc6c7bf1) behind margin calling in great detail in our security audit article. The main incentive for forcing liquidations is [stop-hunting](https://www.investopedia.com/terms/s/stophunting.asp), a practice where a market participant attempts to force a [short squeeze](https://www.investopedia.com/video/play/short-squeeze/). This is a risk that is inherent to margin trading.

### pToken Perpetuity

pTokens draw borrowing liquidity from iToken loan pools. The underlying order object representing the iToken loan pool has a loan length of 28 days. When the loan expires, the protocol recognizes the loan as being unhealthy. This allows bounty hunters to call liquidate() causing the held asset to be swapped for the borrowed asset and returned to the lending pool. When a bounty hunter calls the liquidate() function, borrowers experience the standard liquidation penalty. Unlike most margin calling implementations, the liquidation penalty is within 10% of the estimated gas cost of submitting the liquidation transaction. We estimate that the liquidation penalty will be in the range of a dollar to a few dollars. This cost will be spread out among the entire pToken collateral pool, making the penalty any pToken holder personally incurs barely noticeable.

When liquidate() is called by a bounty hunter on a pToken position, the bounty hunter is also paying the gas required to roll the position over. This cost includes the computations required to borrow from the iToken loan pool and swap the borrowed token into the appropriate asset. This entire process happens atomically within a single transaction, resulting in no loss of exposure. This means that pTokens never expire. Additional pToken contracts never have to be deployed. The entire process is permissionless and decentralized, not requiring intervention on the part of any central actor.

When a base protocol loan is initiated, all the interest required for the full length of the loan is escrowed in the bZxVault.sol contract. If the loan is terminated prematurely, the interest is paid back to the borrower pro-rata. When a pToken loan is rolled over, the collateral is used to fund the next round of interest payments. Assuming a flat market with no new pTokens minted, this means that the price of pTokens slowly but continuously decreases. Since interest payments are a percentage of the collateral, the interest payments never completely deplete the collateral. Instead, the price of the pToken gradually and asymptotically approaches zero. This is not a problem for the pTokens, and in fact it exhibits the same behavior as manually reentering a margin position with a flat amount of collateral. It should also be noted that as the interest depletes collateral, it reduces the loan utilization rate, lowering the interest rate for new borrowers, incentivizing the minting of new pTokens and the introduction of fresh collateral into the system.

### pToken Borrowing Under Liquidity Constraints

If the iToken loan pool required to create pToken exposure lacks liquidity, meaning loan utilization of that pool is at 100%, it will not be possible to mint additional pTokens using that lending pool. In the case that loan utilization is 100%, the interest rate offered to lenders will be 40%, given the parameters described in the Interest Rate Determination section. This strongly incentivizes lenders to provide loan liquidity, thereby lowering the rate of loan utilization, making this scenario unlikely.

There exists an exceptional but possible case where iToken holders will attempt to burn their iToken when loan utilization is already at 100%. In that circumstance, the iToken holders will be reimbursed when the pToken loans have expired, which would be a maximum of 28 days. Assuming no pTokens are burned, there would be more pToken demand for loans than can be sustained by the existing iToken loan pool. This is an extreme edge case, but the consequences are non-lethal. When pTokens are rolled over, if there is not adequate loan volume, the pTokens are unable to take further loans. This causes the volatility of the pTokens to become unpegged, meaning they will no longer provide the same exposure to the market. If all lending liquidity exited the market, it would cause pTokens to simply track their underlying collateral.

## Conclusion

Fulcrum is designed to be a robust yet simple platform for margin trading and lending that takes full advantage of the benefits of tokenization. In the future, we envision iTokens [collateralizing every loan and backing every MakerDAO CDP](https://medium.com/bzxnetwork/bzx-makerdao-9db74678e16e). We are working with major market makers to ensure that Fulcrum has the liquidity to fully service demand on day one. If you are a market maker or interested in being a Fulcrum launch partner, please email team@bzx.network.
Credit to Tom Bean for writing the pToken Pricing and Interest Determination sections.
