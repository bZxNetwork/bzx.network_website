---
layout: post
title:  "Introducing the bZxDAO"
date:   2020-01-15 01:12:46 -0700
cover: /images/blog/bZxDAO.png
author: Kistner
metadescription: "We believe in a bold vision of radical decentralization that allows a project to transform into an unstoppable and self-perpetuating  set of economic incentive structures  outside the jurisdiction of any central party."
intro: "Over the last two and a half years of building bZx, we have seen numerous attempts at implementing governance. "
---
>Thanks to Peter Zeitz of 0x for providing valuable feedback, Tom Bean for scoping the technical feasibility of the proposal, & Alessio Delmonti of Dexwalllet for proposing extended staking periods to guard against attackers voting with borrowed tokens.

Over the last two and a half years of building bZx, we have seen numerous attempts at implementing governance. Even more commonly, we have seen projects decline to do so. Governance is not just regarded as hard, it is regarded as potentially impossible. For any protocol with substantial locked value, the stakes are high. If governance is not implemented properly, all value within the protocol could be siphoned by an attacker.

We believe in a bold vision of radical decentralization that allows a project to transform into an unstoppable and self-perpetuating  set of economic incentive structures  outside the jurisdiction of any central party. This article will explore what that looks like and what that means.

## Properties of Decentralized Governance

### Restricted Mutability

The protocol should only be upgradable through the consensus of representative stakeholders. The original team which developed the protocol should not be able to arbitrarily upgrade the logic of the smart contracts. Requiring changes made by administrators to pass through a timelock is an improvement on completely centralized trust models, but still leaves the protocol vulnerable to regulatory risk and malicious operators.

### Inexorability

An unstoppable protocol has no central party capable of activating a kill-switch.  This means that in the event of legal or regulatory threat, no party can be compelled to prevent or censor activity on the protocol. If a kill switch exists, it must be under the control of a diffusely distributed set of representative stakeholders.

### Self-Perpetuance

The demands of a protocol are constantly evolving, as is the Ethereum execution environment. Future upgrades are not guaranteed to avoid [breaking changes to existing contracts](https://gist.github.com/ritzdorf/1c6bd72955391e831f8a397d3152b4e0). A DAO must have a source of funds and a process for allocating those funds for development in a way which is secure. By far, this is the most challenging property for a DAO to achieve.


## Problems of Governance

### Participation

Current governance schemes record extremely low participation rates. There are several proposed explanations for why this might be the case. The leading explanation is that it requires substantial effort to determine when to vote and how best to cast that vote while the effects of any one participant’s votes is unlikely to be determinative. In light of this, voters, especially smaller ones, rationally abstain from voting. Some have expressed that this is a feature, not a bug, and that voting participation reflects an organic form of [holographic consensus.](https://medium.com/daostack/holographic-consensus-part-1-116a73ba1e1c)

Consider the case of a stability fee vote in the Maker ecosystem. If DAI is selling for higher than the peg, voters will generally agree to lower the stability fee (or now decrease the DSR). If only a few participate, it doesn’t reflect voter apathy or a failure of the voting system, it reflects the fact that most voters agree with the course of action. If it is true that voters are more engaged than their participation would suggest, we would expect high turnout for controversial proposals and low turnout otherwise.

It is likely that both explanations have merit. There is some degree of holographic consensus built in to turnout, but it’s also the case that a large percentage of voters do not feel adequately incentivized to vote. Reasoning about incentive structures that can promote voter engagement is a useful endeavor because the larger and more engaged the voter base, the more expensive an attack becomes.

### Shadow Voters

A shadow vote is a vote cast by a token holder with no economic stake in the protocol. This can be accomplished by [borrowing a governance token](https://www.placeholder.vc/blog/2020/1/7/how-much-does-a-crypto-vote-cost), voting with it, then returning it to the lender.  In the worst case, a shadow vote can be virtually free. The attacker executes a flash loan, votes, and returns the loan within a single atomic transaction, incurring no capital carrying costs or interest payments. In more ideal cases, the attacker is forced to bear capital carrying costs, to pay interest for an extended period, or to expose their collateral to margin calls and penalties.

### Plutocracy

Without identity, governance structures [collapse into plutocracy](https://vitalik.ca/general/2019/04/03/collusion.html). Identity ideally imposes a cost greater than the reward for an attacker to act as more than one entity. Existing forms of identity, both centralized and decentralized, are lacking, failing to impose substantial costs on attackers. Low quality proofs of identity such as Twitter accounts can sell between a few cents to a thousand dollars depending on the age of the account, the number of followers, the quality of the followers, and other factors. Proofs of identity at the highest end, e.g., government issued passports, can range between a few dollars for a digital scan to low five figures for a hard copy. If a sufficiently valuable dApp was to implement [quadratic voting](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2003531), the rewards of sybil attacks would far outweigh the costs.

Consider the case of MakerDAO. It was recently published by [Micah Zoltan](https://medium.com/coinmonks/how-to-turn-20m-into-340m-in-15-seconds-48d161a42311) that an attacker could steal all the funds insider Maker with only 20MM (40,000 MKR). If quadratic voting were in effect, an account with 40,000 MKR would only have the influence of two hundred individuals holding 1 MKR, meaning that 20MM in the hands of a single person would have the same influence as $100,000 in the hands of two hundred people. If Maker had implemented a robust KYC system requiring multiple identity documents, it would cost an attacker at most $15,000-$20,000 to register a second identity. By splitting MKR holdings into two piles of 20,000 MKR, the attacker would possess voting power equal to 282 people, a $41,000 increase in voting power. This example should demonstrate just how ineffective even current identity schemes are for the purposes of implementing quadratic voting.

Lastly, a major risk of having a few large stakeholders along with linear voting is the possibility that they will collude amongst each other to drain funds from the DAO into their own wallets.

### Cartels and Bribes

Representative democracy is often deployed to counter a lack of voter enthusiasm and expertise. If representatives are incentivized, and they are able to vote on their own compensation, then this opens the door to cartels and rent-seeking. There are two possible equilibria for a set of representatives: the Nash equilibrium and the Cournot equilibrium. Under the Nash Equilibrium, each potential representative competes with each other, leading to a situation where no rent is extracted and the representative offers their service at the marginal cost of doing so. The alternative is the Cournot equilibrium, where representatives cooperate with each other to extract rent. Since cooperation is the most profitable long term strategy for representatives to pursue, this equilibrium can arise spontaneously without explicit coordination during infinitely iterated games.

![](/images/blog/dao-image2.png)
_[Credit to Vitalik Buterin](https://vitalik.ca/general/2018/03/28/plutocracy.html)_

# The Structure of bZxDAO

## The Trias Politicas

There is a rich history of experiments in governance going back hundreds of years in the form of liberal democracy. These experiments show that the most enduring and stable governance structures have both checks and balances. Instead of reinventing the wheel, we have reinterpreted it in the context of the blockchain. As with most systems of governance in the real world, the DAO has three main branches: the legislative, the executive, and the judicial.

**The Legislative** is a variant of liquid democracy with representatives elected by token holders staking BZRX. The three representatives with the highest number of tokens staked to their address become the legislature. At any point, token holders can change the representative(s) to whom their tokens are staked, but they cannot directly vote on proposals. Proposals passed by this branch must pass by a majority vote.

The legislative branch approves upgrades to the protocol and sets the critical parameters:
- the margin maintenance covered by the insurance fund,
- the assets supported by the protocol,
- the percent of interest collected from lenders,
- the coefficients of the interest rate model,
- the minimum staking time for token holders,
- the rate of inflation of the BZRX token,
- and the distribution of BZRX tokens minted via inflation.

The tokens can be distributed to representatives, token holders, or through grants.  A consequence of there being only three representatives in a system requiring majority rule is that an attack on the DAO requires at least 2/3rds of the active voting power. To pass a resolution, votes must be signaled twice, and between each signal at least 16 hours must elapse. This prevents a representative from making even a single finalized vote without the full consent of their stakers.

**The Executive** is composed of the two leads of the core development team. The members of the executive branch will not always be part of the original core development team. Representatives may submit proposals to elect new executives. However, since this requires the vote of the executives themselves, the model resembles a Web of Trust. Much like the executive branch in traditional political systems, the executive has no power to propose or pass proposals on its own. Instead, the executive is to simply act as a check on the legislative branch, vetoing malicious proposals and attempts by representatives to form cartels. By restricting the powers of the executive to ratifying upgrade proposals and inflation reward distributions, regulatory risk is minimized. In the worst case scenario, a regulator could prevent further upgrades to the protocol by apprehending the executive administrator keys. To mitigate this risk, executives can be replaced by a unanimous vote of the legislative. Replacement of the executive does not require approval of the executive.

The executive has the ability to unilaterally pause the protocol for 48 hours, after which there is a 3 month refractory period before another pause can be invoked. If a serious security issue is found in the protocol, security researchers can disclose the vulnerability discretely to the executive, have the system paused, and then allow for the vulnerability to be disclosed to the legislature. If the legislature cannot mobilize a comprehensive response within that 48 hour period, the pause period can be extended through the normal governance process.  

**The Judicial** is the smart contract code and the EVM. Both branches can only act within the constraints of the smart contracts governing them.

## The Economics of Staking

In order to begin earning staking rewards, token holders must deposit their funds into the governance contract and stake their tokens to a representative. Doing so entitles holders to staking rewards created through minting new BZRX tokens. If all token holders are staking to representatives, the result is that all holders maintain their overall share of ownership over the protocol. However, it is unlikely that all token holders participate in staking. The result of this is that the token holders participating in governance and staking to a representative slowly increase their share of protocol ownership while those not staking are slowly diluted. Staking rewards are effectively a tax on free riders and speculators that can be used towards sustaining protocol development and/or enriching existing token holders.

### Aligning The Incentives of Stakeholders

It is anticipated that one of the first proposals the legislature and executive will pass is the ability for BZRX holders to redeem a given percent of BZRX for a proportional amount of the insurance fund. Since the health of the insurance fund is critical to the overall health of the protocol in every respect, this ensures that token holders have an incentive to choose representatives that steward the protocol parameters judiciously. If the insurance fund becomes excessively denominated in BZRX, token holders can vote to rebalance the fund. Since in most circumstances BZRX will be worth more than its redemption value, it is unlikely that the fund comes to be excessively denominated in BZRX. In the rare event that it does,  token holders should rebalance the insurance fund when the market price of BZRX rises above the redemption price.

## Solutions to Governance

### Participation

Representative democracy prevents individual token holders from having to understand the minutiae of every governance proposal, reducing their decision down to the most qualified and knowledgeable representative -- likely someone with a track record of activity and visibility in the community. Staking represents both a carrot and a stick at once. Inflation dilutes free riders neglecting to participate in the governance process, serving as a stick. Those same inflation rewards function as a carrot for those actively participating in the governance process. Along an extended time horizon, protocol ownership condenses completely in the hands of those participating in governance.

### Shadow Voters

It is not possible to stop lending protocols from listing the BZRX token, nor is it possible to prevent attackers from staking BZRX tokens that have been borrowed from lending protocols. The only recourse against shadow voters is to force exposure to collateral, margin calls, and interest payments. This can be accomplished by requiring an extended minimum staking period. We propose an initial staking period of one year. This imposes, as much as is feasible, significant costs on shadow voters. This also has the dual purpose of both aligning the incentives of current token holders with the long term health of the protocol and also selecting for holders with a longer time horizon.

### Plutocracy

The issue of plutocracy is effectively addressed by quadratic voting. As the tokens become unlocked and voting is weighted linearly, it becomes possible for a few large parties to collude with 66.67% of the tokens to loot the DAO. There are two safeguards against this. First, the executive branch can simply veto any malicious proposal to loot the DAO even if someone comes to own over two-thirds of the tokens. Second, if the executive branch collaborates with the attackers, any changes passed by both branches will be required to pass through a two day time lock, allowing protocol users to evacuate their funds. Undertaking such an action will have the effect of hurting the BZRX token price, serving as a deterrent to seizing funds.

### Cartels and Bribes

The role of the executive is to disrupt rent-seeking cartels from establishing a Cournot equilibrium. The two powers of the executive are to veto protocol upgrades and inflation reward distribution proposals. If representatives pass a proposal that is cooperative rather than competitive, it is the purview of the executive to veto that proposal. One weakness of this model is that legislative cartels can collude with the executive by offering a bribe.

The executive will rationally accept a bribe if:

![](/images/blog/bribe-forl2.png)

An executive will be more resistant to accepting a bribe from the legislature the larger their existing stake in the token and the larger their stake in deriving revenues from the protocol.

The value of BZRX tokens play an important role in the security of the protocol. It is important that DAO participants are forced to maintain exposure to the price action of the tokens after each vote. After every vote ratified by both the legislature and the executive, the staking period of every participant is extended by 24 hours. The system is secure if the value of the tokens held by all attackers exceeds the value held by the protocol. Since two thirds of the tokens are required to pass a malicious proposal, this means that the system is secure against a rogue executive so long as:

![](/images/blog/bribe-forl3.png)

If an attacker derives an income stream from the protocol independent of the token, the discounted value of these future cash flows should be added to the value of the tokens staked when calculating the cost of an attack. This means that participation by legislators or executives with a business built on the protocol increases the security of the protocol governance by reducing their incentive to cooperate with an attack.  
