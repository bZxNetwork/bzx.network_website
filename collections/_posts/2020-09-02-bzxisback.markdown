---
layout: post
title:  "We Have Returned: bZx Is Back "
date:   2020-09-02 09:40:46 -0700
cover: /images/blog/bzxisback.jpg
author: Kistner
metadescription: "For six months, the team worked diligently to refactor, refine, and revamp the protocol from the ground up."
intro: "For six months, the team worked diligently to refactor, refine, and revamp the protocol from the ground up"
---

In the beginning of 2020, Fulcrum was the fastest growing dApp in DeFi. Then it was paused. For six months, the team worked diligently to refactor, refine, and revamp the protocol from the ground up. We listened to the feedback of our users and the community. Fulcrum 2.0 is leaner, more elegant, _and more than twice as gas efficient_. It is also now one of the most audited protocols in the industry with 19 person weeks of manual auditing.


## What’s New?


### 🔐 World Class Security

The core protocol received two major manual audits, a 12 person-week manual audit from Peckshield and a 7 person-week manual audit from Certik.

![](/images/blog/bzxisback/image10.png)

Final reports of both audits will be made fully available to the public after the firms complete the drafting process.

![](/images/blog/bzxisback/image8.png)

Several other audits have been performed of the peripheral contracts including a manual audit and formal verification of the BZRX and vBZRX contracts (see [here](https://bzx.network/pdfs/BZRX_vBZRX_CertiK_Report_1_07_11_2020.pdf) and [here](https://bzx.network/pdfs/BZRX_vBZRX_CertiK_Verification_Report_1_07_11_2020.pdf)), and a manual audit of the flash loan functionality (see [here](https://bzx.network/pdfs/CertiK%20Verification%20Report%20for%20bZx.pdf)). This makes the protocol among the most audited in the industry. Moving forward, we intend to receive a third manual security audit of the core protocol,  an economic audit by either Gauntlet Network or Delphi Digital, and formal verification. It is our goal to become the most audited and secure protocol in the industry.


### 🌀 Chainlink Oracles

Oracles are one of the cornerstones of a decentralized financial application. Without reliable, secure oracles, user funds could be at risk of an attack. Chainlink’s decentralized oracle infrastructure, high quality data, and security-reviewed node operators fetch and aggregate market data from numerous premium data aggregators. This provides the bZx protocol extensive volume adjusted market coverage across all DEX and CEX trading environments, ultimately arriving at a price feed that is highly available, accurate, and tamper resistant.

Chainlink oracles are used at three critical junctures in the protocol: opening a loan/trade, liquidating a loan/trade, and dispensing protocol rewards. When opening a loan/trade and liquidating a loan/trade, it is critical to verify that the collateral after the liquidation incentive  exceeds the borrowed amount and/or meets the parameters for closure. When dispensing tokens in exchange for activity, it is critical that the disbursement does not exceed the payment. Since the protocol is not natively aware of the price of its own network token, Chainlink oracles provide the most fitting solution.


### ⛽️ Refactoring and Gas Cost Optimization

The protocol has been stripped down and rebuilt from the ground up, allowing us to draw on our years of building to create the most optimized, elegant, and mature lending protocol yet. We’ve reachitected and reduced the number of contracts used. There is no longer an external vault contract or external swaps connector. Swaps and storage of escrowed assets occur directly from the main protocol contract. Functionality from much earlier in our development cycle such as 0x-style off-chain peer-to-peer order objects have also been excised from the code, leading to less complexity and surface area. We have also removed ENS loans from the system to further this goal. Lastly, Chi token has been natively integrated into the platform.


### 🌊 Liquidation Management

The original version of Fulcrum did not allow traders to manage the collateral of their margin positions. This was because Fulcrum positions were pooled positions created by minting ERC20 tokens called [pTokens](https://bzx.network/ptokens). Fulcrum positions are now individualized, using the same structure of Torque loans. Just as a user could adjust their collateralization on Torque, the same is now possible for users with open Fulcrum positions. One consequence of using Torque-like loans for Fulcrum is that each user now has their own liquidation price. In Fulcrum v1.0, since each position was pooled, positions shared a liquidation price. This sometimes caused confusion, especially when the current price and liquidation price were nearly equal. While pTokens have not been included in the latest release of the protocol, they will quickly be brought back in subsequent releases as they still represent the most effective way for CEXs and L2 DEXs to integrate margin.


### ✨ Professional Grade Interfaces

![](/images/blog/bzxisback/image2.png)

We’ve overhauled the Fulcrum interface from the ground up, listening to the feedback we received from our users. The entire trading interface now fits neatly on nearly any screen, allowing for an effortless user experience from any device. We’ve also updated Fulcrum to include TradingView charts and technical analysis tools. In the coming weeks, we will launch a second major update to the interface enabling real time updates, which will later be followed by the release of Fulcrum PRO.   


### 📝 Order Histories

![](/images/blog/bzxisback/image9.png)

The original version of Fulcrum, a model of simplicity and ease of use, did not always leave users with a full understanding of the life cycle of their trades. Once a trade was closed, no further information about the trade was displayed, making it difficult for users to analyze their trading activity on Fulcrum. Detailed explanations of each order past and present are now available, along with an in-depth accounting of fees and slippage. We have done this without requiring Fulcrum to have a backend database. All of the order history data is stored on the chain using an efficient checkpointing system, making the data simple to recover if the front end ever goes down, but also simplifying the process of building analytical tools on top of the protocol..


### ⚡️ Flash Loans

Flash loans allow users to borrow assets with zero collateral. This is conditioned on paying back the loan within the same transaction. If this condition is not met, the transaction reverts, undoing the loan. Flash loans are a potentially lucrative source of revenue for a lending protocol, but there is significant competition across assets. The flash loan fee for each asset in the protocol is set individually and will be determined by governance.

Flash loans allow for a number of interest use cases including refinancing, arbitrage, liquidations, and exploits. While flash loans can do great damage in the ecosystem, the vast majority of flash loans are simply used for refinancing large positions. We see this eventually being a significant source of cash flow to the protocol.


### BZRX Token Model v3.0: Governance and Sustainable Yield Farming

BZRX token holders can immediately stake their token via the [Staking Portal](staking.bzx.network), allowing stakers to begin earnings fees immediately. Fees come from usage of the protocol. When stakers receive these fees, they can be cashed out in DAI, USDC, ETH, or any other supported ERC20. There are three major fees collected by the protocol:

*   **Origination Fees**: .09%
*   **Trading Fees**: .15%
*   **Interest Fees**: 10% of interest paid

![](/images/blog/bzxisback/image5.png)

Fees are deposited into Balancer pools which earn trading fees and while mining BPT. In the beginning there will be two Balancer pools: an impermanent loss free stablecoin pool and an ETH+ERC20 pool for more volatile assets. By grouping assets with similar volatility together, impermanent loss can be minimized. The trading fee on each of the pools will initially be set according to the square of the historical volatility of the assets within the pool, the best known method for no-arbitrage parameterization.

![](/images/blog/bzxisback/image13.png)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Stake with only three clicks_

Staking has already started! You can stake your BZRX or BZRX LP token at our [staking portal](staking.bzx.network).

Initially, the LP token eligible for staking will be [this](https://pools.balancer.exchange/#/pool/0xe26a220a341eaca116bda64cf9d5638a935ae629/) 80/20 BZRX-ETH Balancer pool. The pool address can be modified by governance in the future.

We have launched a preliminary staking contract, but governance must vote to enable the fee claiming function. The contract will simply register intent to stake and the BZRX balance of the wallet. This staking contract will not hold BZRX. Pending finalization of the staking contract and governance audits, the team will be deploying the final staking contract along with the governance module. When the governance module has been deployed, the community will be empowered to retroactively distribute all protocol fees collected from the beginning of the platform relaunch. **If you want to start earning fees, you need to stake as soon as possible.**


### Native Gas Token Integration

![](/images/blog/bzxisback/image1.png)

Fulcrum now natively supports gas token, allowing users to burn Chi gas tokens when making transactions. The Chi gas token is an improvement on the [GST2](https://gastoken.io/) standard first introduced by IC3 and later iterated on by the 1inch team. Use of Chi token allows for up to 50% lower gas costs when performing transactions.


### 🚶 Exit Rights

If for any reason the system is paused in the future, _you will always be able to exit your position_. This means that you will never get stuck in a position on Fulcrum or Torque. So whether you’ve taken out a leveraged long position on ETH or are borrowing an ERC20, the system will always release your collateral if you simply pay back the loan, and you always have the option of paying back the principle in full even if swaps are disabled. This was more difficult to execute when Fulcrum positions were based on pooled pTokens; now that they are based on individual Torque-style loans, exit rights are guaranteed.

Lenders and borrowers maintain the right to lend and unlend at will, just like with previous versions of Fulcrum.


### 🚂 A New Liquidation Engine

The funds under management by lending protocols have exceeded billions. Managing the demands of this scale of capital requires a heavy duty liquidation system that is capable of liquidating hundreds of millions in assets at a time. We believe that the current industry standard liquidation mechanisms are wasteful, costing traders and borrowers tens of millions of dollars a year. However, a high throughput liquidation system is essential to scaling the protocol; the costs of high throughput are worth it under the right circumstances.

The industry standard liquidation system auctions off collateral at a discount using a price feed to value the collateral. This system is necessary in an ecosystem where liquidity is fragmented between centralized and decentralized exchanges. If all liquidity was located on DEXs, directly liquidating via DEXs would have major efficiency advantages with few downsides compared to a collateral auction. As we have been increasingly seeing, liquidity is shifting from CEXs to DEXs, increasing the viability of liquidating directly on DEXs at larger and larger scales.  

![](/images/blog/bzxisback/image14.png)
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_Better than CEX_

The new liquidation engine is a two-tiered system designed to maximally capitalize on the efficiency of DEX liquidations, keeping dollars in the hands of users rather than miners and capital intensive liquidation bots.

**Tier 1 (Fulcrum Saver): The first line of defense.** Fulcrum Saver allows users to delegate calling the close() function on their position to a contract that anyone can call permissionlessly. If the position is not at margin maintenance, the transaction reverts. Anyone can call the close() function near margin maintenance to receive a bounty. This bounty is in the form of both a flat and percentage-based fee that is taken out of collateral. The flat fee is intended to cover gas, while the percentage-based fee is intended to preferentially attract liquidators to larger positions. The payout is ultimately determined by the borrowers and traders opening positions. While it is possible to opt out of Fulcrum Saver or change the bounty to zero, doing so puts users at risk of incurring much larger liquidation costs if their position is forced to undergo a collateral auction. _Fulcrum Saver will be released in the coming weeks.   

**Tier 2 (Collateral Auction):** If a position is below margin maintenance and Fulcrum Saver has failed to close the position, anyone who calls liquidate() will be entitled to purchase the collateral from the insolvent account at a discount. The collateral is valued using Chainlink price feeds. Each collateral has its own discount factor depending on the risk parameters of the asset. Both the volatility and depth of liquidity will be considered when determining the discount factor for any given collateral. Liquidators face two main risks when liquidating collateral: that the price changes while they hold it (volatility risk), and that the slippage turns the liquidation unprofitable (liquidity risk). Generally, the discount applied during the collateral auction will reflect the overall depth of liquidity available to that asset across all exchanges. Since liquidation penalties from collateral auctions can be significant, it is in the best interest of borrowers and traders to either close the position in a timely manner or enable Fulcrum Saver.  


### 🌞🌚 Light and Dark Mode

![](/images/blog/bzxisback/image4.gif)

After many requests, we’ve added both light and dark modes to Fulcrum.

![](/images/blog/bzxisback/image12.gif)

Some of other interfaces such as the staking portal have yet to receive a light/dark mode. This will be updated in later releases.


### Protocol Explorer

![](/images/blog/bzxisback/image6.png)

The new protocol explorer, found at [explorer.bzx.network](https://explorer.bzx.network), allows you to view all the vital protocol statistics including TVL and pending or complete liquidations. Additionally, it provides in-depth information regarding all supported assets and collateral.

### The Biggest Bug Bounties

![](/images/blog/bzxisback/image3.png)


**Scope**

Only vulnerabilities found in the smart contracts on-chain will be considered eligible for a bug bounty. Bugs in the web front-end will not be included in the scope of the program. We ask that any bugs found be disclosed privately to the team. Please do not execute a proof of concept on mainnet.

**Triage**

Determinations as to the severity and qualification for payout will be made by a third party board of independent security engineers. This is intended to prevent conflicts of interest between the team and the recipient.   

**Payouts**

Payouts will be made in the form of ETH or USDC, depending on the preference of the bounty awardee. Up to 20% of the bounty reward may be constituted in BZRX or vBZRX.  

- 🚨Critical: $350,000.
- High: Up to $50,000 USD
- Medium: Up to $1,000 USD
- Low: Up to $500 USD
- Note: Up to $100 USD

As the TVL of the protocol scales, we will scale these figures upward. It is our goal to have the most favorable bug bounty to asset locked ratio in the industry.


### Safeguards

Most protocol attacks we have seen leverage a significant amount of capital via flash loans to achieve their desired effect. In acknowledgement of that, we are engaging in a guarded launch with trade sizes on Fulcrum margin positions limited to 1500 ETH. This is enough to allow the vast majority of typical users to engage with the platform without restrictions while making many attacks against the protocol no longer possible. Trading size limits can be adjusted via governance over time as the protocol ossifies.


### Transparency

*   All of our contracts are [open-source](https://github.com/bzxnetwork) with permissive licenses.
*   We’ve released extensive information on our [token distribution and metrics](https://bzx.network/bzrx-token).
*   Smart contract [audits](https://bzx.network/pdfs/BZRX_vBZRX_CertiK_Report_1_07_11_2020.pdf) and [formal verification](https://bzx.network/pdfs/BZRX_vBZRX_CertiK_Verification_Report_1_07_11_2020.pdf) for both the BZRX and vBZRX tokens are publicly hosted on our website for the general public.
*   We have [published a standardized template](https://github.com/bZxNetwork/bzips) for submitting BZX Improvement Proposals (BZIPS) to our public Github.
*   We have launched a [community forum](https://forum.bzx.network/) to discuss various governance topics.
*   We are hosting bimonthly governance calls with the community and uploading the calls to [our Youtube](https://www.youtube.com/channel/UCc9PZUDy2IMs5j0DcOq3egQ).The next call will be hosted this Friday on September 4th at 9AM PDT. Join the call via Zoom with [this link]( https://zoom.us/j/97332777369).
*   We are publishing a security page, asset risk framework, and protocol docs in the coming days and weeks.
*   _On the first day of launch, the protocol will be custodial with a fully functional administrative key_. We will rapidly transition to a 48 hour time locked administrator key. The timeline for this transition is within 48 hours to 96 hours, depending on community feedback and protocol conditions. Within the next month, we will install the governance and staking modules, moving to a full-fledged DAO.         


### The Most Granular Risk Parameters

Many leading lending protocols have poorly optimized risk parameters that are based solely on  the collateral being liquidated. This has resulted in massive capital inefficiency since many loans are overcollateralized far in excess of the actual risks at play. Instead of setting risk parameters on the basis of collateral, the protocol sets risk parameters on the basis of trading pairs.

Determining risk on the basis of trading pairs allows less risky pairs to have more permissive parameters. It is more difficult to turn wBTC collateral into KNC than ETH. Hence, borrowing KNC against wBTC should have heightened risk parameters relative to borrowing ETH. We believe that there is a significant amount of data that can be brought to bear on the problem of optimizing risk parameters on the basis of trading pairs. Delving deeply into this will be the subject of our asset risk  framework.

![](/images/blog/bzxisback/image11.png)
The asset risk parameters for Torque

Initially we will be bucketing the trading pairs into categories with similar liquidity and volatility. We believe this already represents a massive leap forward in risk assessment relative to simply assessing on a per-collateral basis. As we move forward, we will take a data-driven approach to optimizing each risk parameter for every trading pair.  


### Integration Risk Assessment

We used the Trail of Bits [token integration checklist](https://github.com/crytic/building-secure-contracts/blob/master/development-guidelines/token_integration.md) as a template for assessing the worthiness of an asset as collateral in the protocol. Of the assets included, the highest risk collateral is USDC. We are allowing USDC to be used as collateral in the initial release of the protocol. However, it presents significant integration risks, and must be the topic of further discussion by the community. **Among the assets listed, only USDT cannot be used as collateral. **  

![](/images/blog/bzxisback/image15.png)

### 🥳 Surprise

**The team will not be staking their tokens for fees in the first month.** 100% of all fees will go to stakers. This means that staking revenues will be tripled during the first month relative to initial expectations.  

## What to Expect: Sticker Shock

Since Torque rates are fixed, it is important that we are able to find the equilibrium rate in the presence of yield farming incentives. This rate could be quite high due to the effective subsidy borrowers receive. We will be conducting a dutch auction of the lending liquidity, slowly lowering the rate until the pools achieve a high utilization rate. 

## Coming Soon


### Fulcrum PRO


![](/images/blog/bzxisback/image7.png)


Fulcrum PRO offers a trading interface more suited to professional traders or those more accustomed to centralized exchanges. It supports both leveraged and spot market trading. To select the PRO interface, simply slide the tab next to the Fulcrum logo.


### ⛏Generalized Security Mining

During the last governance call, we asked the community whether they would like to be able to stake their BZRX to a trading pair in exchange for a share of the insurance fund revenue. The response was strongly in the affirmative. Several other protocols including MKR use their token as a backstop in exchange for offering their holders a share of the fees generated by the system. However, the proposition of these systems is always binary: either the entire system is backstopped, or no fees are shared.

Generalized security mining allows BZRX holders to stake their tokens to trading pairs individually, allowing them to make use of their ability to assess the risk of each pair. Some pairs are potentially more risky to the system and therefore may attract a greater yield due to less competition. Hence, allowing BZRX holders to stake to individual trading pairs gives a market based signal to BZRX holders regarding the efficacy of the risk parameters for each asset. If the risk parameters are configured too liberally, the trading pair would appear to offer higher yield to stakers, though this would be an illusion in risk adjusted terms. If the parameters are configured too conservatively, the trading pair would appear to offer lower yields to stakers, though again this would be an illusion. This provides a powerful feedback mechanism through which stakers can tune the risk parameters.

One wonderful consequence of this system is that it allows for risk assessment to be performed in a decentralized, permissionless, and near-instant manner. Security mining of this sort can be generalized beyond the whitelisted assets already available on Fulcrum. This system can be applied to any arbitrary trading pair, allowing for any trading pair to be assessed for risk and provided commensurate backstop. When BZRX is staked to a trading pair, it creates a debt ceiling from which any trader or borrower can draw on to obtain a line of credit, go short, or take a leveraged long position.

We believe that addressing the long tail of assets is a critical function still underserved by lending protocols, and it is this role that we intend to fill with the introduction of generalized security mining. More information regarding permissionlessly listed assets will be released in the coming weeks.


## Conclusion

This has been the most interesting year of our lives. We’ve persevered through one the most daunting gauntlet of challenges any team has faced. On the other side, we’ve come out even stronger and more resilient. Our community, forged in the crucible of adversity, is united together by a bond that few other projects can boast. As we head into the next chapter, we are excited to hand over the protocol to the community and build as one. What we’ve built here is not just a protocol, but a family, that we believe will stand the test of time. We ask you to keep up with us on [Telegram](t.me/b0xnet), [Discord](https://discord.gg/sp4cvy), [Twitter](https://twitter.com/bzxhq?lang=en), our community calls, and the [forum](forum.bzx.network).

- **Lend & Trade**: [https://app.fulcrum.trade/](https://fulcrum.trade/)
- **Borrow**: [https://app.torque.loans/](https://app.torque.loans/)
- **Build**: [https://bzx.network](https://bzx.network)
