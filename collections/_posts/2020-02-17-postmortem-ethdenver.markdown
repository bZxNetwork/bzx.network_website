---
layout: post
title:  "Post-Mortem"
date:   2020-02-17 01:12:46 -0700
cover: /images/blog/postmortem.png
author: Kistner
metadescription: "This report is to issue a comprehensive accounting of the events and our response. TL;DR: No users have lost funds or will lose funds. Funds are SAFU"
intro: "This report is to issue a comprehensive accounting of the events and our response."
---
### TL;DR: No users have lost funds or will lose funds. Funds are SAFU.

This report is to issue a comprehensive accounting of the events and our response.

- 9:28 pm MST: We were contacted by Lev Livnev alerting us to a [suspicious transaction](https://etherscan.io/tx/0xb5c8bd9430b6cc87a0e2fe110ece6bf527fa4f170a4bc8cd032f768fc5219838).

The attack was launched on Valentine’s day, a Friday Night, and during ETHDenver when the team was out. We immediately returned home from the tBTC happy hour.

We returned home and analyzed the transactions. The series of transactions were extremely complex and did not yield to a straightforward chain analysis.

We made the determination that the attack could continue, that lender funds were at risk, and that we needed to take steps to disable the attack.

All relevant logic and state changing functionality exists behind a twelve hour timelock. After evaluating our options to immediately mitigate the damage, we acted to delist the whitelisted tokens on the oracle token registry, which was not protected by a timelock. We pushed this change to the contract. This paused trading and borrowing on the protocol. Lending and un-lending was not affected.

- 10:59 pm MST: we joined a chat with several white-hat security professionals including samczsun, Lev, and palkeo.
- 12:02 pm MST: we took steps to coordinate with wBTC merchants to reduce the exchange liquidity, preventing the attacker from effectively cashing out their proceeds.
- 3:30 am MST: the general flow of the attack was identified, and will be described in detail below.
- 8:30 am MST: The team identified a safeguard that was bypassed. There was a safety check that did not fire, caused by a logic error in flagging the loan as overcollateralized. Overcollateralized loans don’t involve swaps, which bypasses the final slippage check.
- 9:33 am MST: We began pushing the fixes described in more detail below through the timelock.
- 11:22pm MST: The pause on the protocol was removed.

## Upgradability vs Centralization

There have been a number of questions about whether pauses and administrator keys are 'decentralized'. Much of the dialogue around these issues have been informed by discussions around Layer 1. We want to bring this discussion to the application layer and make the case that upgrading contracts and using pause buttons can, implemented thoughtfully, be part of the toolkit of a decentralized protocol.  To demonstrate this, we will run through how we believe the bZxDAO would have handled the situation.

We present: Now and DAO.

![](/images/blog/Post-Mortem_-_Google_Docs.png)


The core of the debate here is whether we should be ruled by machines or by economics. When you have an immutable contract that can’t be upgraded, you are ruled by machines. When the power to exist is distributed among representative stakeholders, you are ruled by economics. Both are valid methods of implementing decentralization. Unfortunately, many commentators have exhibited some degree of confusion, seeming to believe that upgradability precludes decentralization.  

## The Attack

- A flash loan from dYdX for 10,000 ETH was opened.
- 5500 ETH was sent to Compound to collateralize a loan of 112 wBTC.
- 1300 ETH was sent to the Fulcrum pToken sETHBTC5x, opening a 5x short position against the ETHBTC ratio.
- 5637 ETH was borrowed and swapped to 51 WBTC through Kyber’s Uniswap reserve, causing large slippage.
- The attacker swapped the 112 wBTC borrowed from Compound to 6871 ETH on Uniswap, resulting in a profit.
- The flash loan of 10,000 ETH from dYdX was paid back from the proceeds.

The total profit from this sequence of events was 1193 ETH, currently worth $298,250 @ $250/ETH. For a complete call-by-call analysis of the attack, we recommend reading the [latest Peckshield analysis](https://medium.com/@peckshield/bzx-hack-full-disclosure-with-detailed-profit-analysis-e6b1fa9b18fc).  

## The Impact

This has resulted in an undercollateralized loan on the platform. Note that this is not yet a loss, but has the potential to become a loss. This is not semantics, and it’s critical to understanding our options going forward. According to our calculations, the collateral currently residing in our vault is enough to service interest payments at market rates on the loan for hundreds of years if nothing is done. However, there is an element of volatility risk since the collateral is in wBTC, the interest is denominated in ETH, and interest is only converted into ETH every 28 days. If we assume a borrow rate of .2% APY (supply rates on other lending protocols are around .02 - .05%) then it requires 9.396 ETH per year to service the debt.

The wBTC can currently be converted to 1902.26 ETH at current prices at the time of writing. This means that the debt can be serviced with the current collateral for the next 202 years. When the collateral runs out in the year 2222, there will be a 4698.02 ETH loss that will be socialized across the entire lending pool. If we used the administrator key to liquidate the wBTC into ETH, we could eliminate the impact of market volatility and guarantee that the debt would settle on this date. For even the most reasonably conservative discount rates, the net present value of this negative cash flow approaches zero.

Lastly, by only realizing the debt far off into the future, we give time for the insurance fund of the protocol, which was designed to prevent lender losses, to get large enough to comfortably cover the costs.

## Going Forward

We have made the following upgrades using the administrator key to prevent this attack from occurring again. First, we addressed the condition that prevented the check from firing in the first place by requiring the check to take place even in the case of overcollateralized loans. Second, the ETHBTC margin tokens were delisted from the oracle token registry. Third, we implemented maximum trade sizes to limit the possible scope of any attack.

The first change, by itself, will ensure that an incident like this cannot happen again. We will also be implementing Chainlink oracles as a supplement to the Kyber price feed to provide time-weighted information on price data. Even though this was not an oracle attack, there were many that expressed concern that the security properties of our oracle could be more robust, and we have listened to the feedback. We are taking great care to ensure that Chainlink does not become a central point of failure in our oracle model, as the technology is still developing and cryptoeconomic security guarantees have not yet been implemented.

We will be creating a governance structure so that existing token holders can vote using a loosely-coupled governance process, signaling their approval or disapproval of use of the keys. As we transition to the bZxDAO, it is important to start building a culture around collective decision making so that the transition to the DAO does not become decentralization theatre.

We are faced with the choice of whether to use the administrator key to insulate iETH holders from the volatility of the wBTC collateral, ensuring the loan is serviced for the rest of our lives and for generations to come, or to simply let the process take its course. Another possible option is to pay back some of the principle in order to insulate the protocol from the price of ETH increasing, making it more difficult to pay back the 4698.02 ETH principle that remains from the attacker’s loan. Token holders will need to make the decision as to what option they want to pursue.

## Transparency

This incident has shown that we have spent too much time trying to ship and not enough time providing the documentation and transparency that peers and users demand at this current stage of development. We will be working to publish a comprehensive SecurityWiki outlining our bug bounty program, the timelock, the powers of our administrative key, the administrative key  address, our pause capabilities, and our security audits.

## Ethics

Should we be able to take over the loan of the attacker? Some argue that it is “their money” after all. However, the attacker’s loan is under margin maintenance, meaning, by the rules of our protocol, it is subject to liquidation. The fact that it has not been liquidated yet is because of a final safeguard that we placed in the code allowing governance to handle extraordinary situations where a margin call would blast through the entire insurance fund. By the rules of the protocol, because their liabilities exceed their assets, their funds are fair game to confiscate without any moral ambiguity.

## Ultimate Responsibility

The team completely stands by the product and our users. There currently exist reasonably strong guarantees that this loan will continue to be serviced into the indefinite future. If for any reason whatsoever this stops being true, we accept complete financial responsibility as a company. As of now, the loss is going to accrue to token holders like ourselves in the far future, but we are standing by to service the debt, and we may simply pay it off in the future when it is financially tractable to do so.

## Reflecting On The Present

This attack is one of the most sophisticated we’ve ever seen, possible only with an extremely in-depth knowledge of every DeFi protocol and its various tools. This attack demonstrates the power of composability and how many different protocols can interface meaningfully with bZx at the same time. Without tornado cash and flash loans, it would be difficult to have the anonymity or capital to pull an attack like this off. The space is evolving quickly, and security is becoming increasingly more dire as the barriers to entry to executing an exploit drop to zero. There is no analog to this in the traditional financial system. We are now in uncharted territories.

## Silver Lining

In understanding the approaches we could take to stop this attack in the future, we were gifted with one of our most innovative protocol features yet. It  will make traders far more money while at the same time dramatically increasing our security guarantees. If it was implemented at the time of the attack, the attack would not have succeeded. In the end, we believe this lesson will be valuable for us.
