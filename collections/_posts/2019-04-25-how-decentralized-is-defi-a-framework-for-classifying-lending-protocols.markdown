---
layout: post
title:  "How Decentralized is DeFi? A Framework for Classifying Lending Protocols"
date:   2019-04-25 20:12:46 -0700
cover: /images/blog/how-decentralized/Blog_cover_Defi_Protocol.png
author: Kistner
metadescription: "Presented here is a description of prominent DeFi lending protocols and a framework for understanding the degree of decentralization of each."
intro: "Presented here is a description of prominent DeFi lending protocols and a framework for understanding the degree of decentralization of each."
---
_Thanks to Brendan Forster of Dharma, Robert Leshner of Compound, Nik Kunkel of MakerDAO, Antonio Juliano of dYdX, Varun Deshpande of Nuo, and Emilio Frangella of AAVE for input on their respective sections._

Presented here is a description of prominent DeFi lending protocols and a framework for understanding the degree of decentralization of each. This framework attempts to understand lending protocols as they currently exist in a practical sense and as they are currently used. It has been said that a system is only as decentralized as its most central component, and while there is some truth to this, decentralization exists on a continuum. This article will enumerate the different DeFi lending protocols, describe their function, then assign them a place on the decentralization continuum.

## Breaking Down Lending Protocols

The components common between all DeFi lending protocols include custody, price feeds, initiation of margin calls, provision of margin call liquidity, interest rate determination, and protocol development. Based on the number of these components that are decentralized a category on the decentralization continuum is assigned. This categorization system while simple is surprisingly powerful at capturing the degree of control the teams behind the protocols have over held assets.

### Categories
![](/images/blog/how-decentralized/Defi protocols.png)

**CeFi:** CeFi products are custodial, use centralized price feeds, initiate margin calls centrally, centrally determine interest rates, and centrally provide liquidity for their margin calls. Examples include SALT, BlockFi, Nexo, and Celsius.

**Degree 1 DeFi:** These DeFi products are non-custodial but use centralized price feeds, centrally initiate margin calls, centrally provide liquidity, centrally determine interest rates, and centrally administer platform developments & updates. Examples include Dharma.

**Degree 2 DeFi:** These DeFi products are non-custodial and have one additional decentralized component which could include price feeds, initiation of margin calls, margin liquidity, interest rate determination, or platform development, while the rest are still centralized. Examples include Expo, Nuo, and ETHLend.

**Degree 3 DeFi:** These DeFi products are non-custodial, have permissionless initiation of margin calls, and permissionless provision of margin call liquidity, while centrally administering price feeds, centrally controlling interest rates, and centrally controlling platform developments and updates. Examples include Compound, MakerDAO.

**Degree 4 DeFi:** These DeFi products are non-custodial, have permissionless margin calls, permissionless provision of margin call liquidity, and decentralized price feeds, but centrally determine interest rates and centrally control platform developments and updates. Examples include Fulcrum, Torque, and dYdX.

**Degree 5 DeFi:** These DeFi products are non-custodial, have permissionless margin calls, permissionless provision of margin call liquidity, decentralized price feeds, and decentralized interest rate determination, but centrally control platform developments & updates. Examples include bZx.

**Degree 6 DeFi:** Every component in these DeFi protocols, including development, is decentralized. There are no existing examples, as no DeFi protocol is completely decentralized.

## Enumeration

![](/images/blog/how-decentralized/Protocols_1.png)

### Dharma

**Custody:** Dharma uses their open-source debt kernel smart contract described in the Dharma whitepaper. A Dharma-controlled address is designated as the ‘underwriter’. The debt kernel smart contract routes borrower collateral to the collateralizer contracts which, for the active duration of the loan, has custody of borrower funds. This aspect of the system is non-custodial. Dharma’s loan origination process involves contract code that is closed source. When a borrower or lender sends assets to a supplied address to initiate a Dharma loan, the receiving address contains a contract that interacts with a watcher script located on a centralized Dharma server. If the watcher process goes offline or fails to use the correct gas price when redirecting the funds, the assets can be stuck until the transaction is resubmitted, which is currently done by the Dharma team. While this entails a temporary potential loss of control of funds for Dharma users, as their assets may sit in the smart contract system waiting to be processed, the Dharma team cannot steal the funds as they do not control users’ private keys. At a future date Dharma plans to publish documentation allowing users to process transactions themselves if they so desire.

**Margin Calls:** Dharma centrally monitors positions, centrally initiates margin calls, and supplies liquidity from their own personal liquidity pool.

**Price Feeds:** Prices are imputed by Dharma. The price feed does not play a role in enforcing good behavior.

**Interest Rates:** Interest rates on Dharma are centrally determined and currently subsidized by the operators of the platform in order to act as a loss-leader.

**Development:** The development of the Dharma core contracts and underwriting contracts are undertaken by Dharma itself. The underwriting contracts are open source and loan origination contracts are closed source.
Note: Dharma has recently revealed that it plans to move to a MakerDAO style liquidation mechanism. This would greatly increase the level of decentralization.

**Update:** Dharma has pivoted to become a Compound relay that offers interest rate swaps, so this description only covers Dharma Lever v1.0.

![](/images/blog/how-decentralized/Protocols_2.png)

### Nuo

**Custody:** Nuo contracts are open-source non-custodial from the point of loan origination.
Initiating Margin Calls: Nuo centrally monitors margin positions off-chain, and calls into their contracts when a position has gone under margin maintenance. Liquidations are only executed if the price feed confirms that the position is under margin maintenance. Only Nuo’s whitelisted address can call into the contract to initiate the margin call, making this a potential central point of failure.

**Margin Call Liquidity:** Nuo sources margin call liquidity from Kyber and Uniswap, making their margin call liquidity decentralized.

**Price Feeds:** A combination of Binance, Coinbase, and Kyber price feeds are used to guard against premature liquidations and price feed manipulation. This is a centralized aspect of the system.

**Interest Rates:** Nuo uses algorithmic interest rates. Though the rates are responsive to supply and demand, Nuo
controls the underlying parameters and can effectively set the rates.

**Development:** Nuo is currently being developed centrally by the team. All contracts are open source. The contracts are mutable with no time-lock.

### Expo

**Custody:** The Expo contracts are open-source and non-custodial from the point of loan origination.
Initiating Margin Calls: Expo centrally monitors margin positions, and calls into their contracts when a position has gone under margin maintenance. Only dYdX’s whitelisted address can call into the contract to initiate the margin call, making this a central point of failure.

**Margin Call Liquidity:** When a margin call is initiated, the Expo contracts initiate a Dutch Auction. Currently, Expo centrally provides liquidity during the Dutch Auction using RadarRelay and ETH2DAI. In theory, other parties could participate, however none do, perhaps owing to the lack of an intuitive interface.

**Price Feeds:** Due to the use of a Dutch Auction, no price feed is required, making this component decentralized.
Interest Rates: Expo interest rates are centrally determined and static.

**Development:** The Expo contracts are centrally developed and open source. The contracts are largely not mutable, but there are a number of opt-in upgrades available such as ETH wrapper proxy contracts and additional decentralized exchange wrappers.

### ETHLend

**Custody:** The ETHLend contracts are closed source and non-custodial from the point of loan origination.
Initiating Margin Calls: Margin calls are initiated by the lender. They are prevented from prematurely liquidating a position through the price feed. The fact that only one party is in charge of initiating a margin call makes this aspect of the protocol centralized.

**Margin Call Liquidity:** Lenders are in charge of liquidating positions, and they receive an 8% discount on collateral for doing so. ETHLend collects 2% as a fee. The sourcing of margin call liquidity is centralized to the lender.

**Interest Rates:** Interest rates are agreed upon freely by borrowers and lenders. This aspect of the protocol is decentralized.

**Development:** The ETHLend contracts are closed source and partially mutable. The protocol is centrally developed by the team. The core functions are not mutable, but auxiliary functionality such as single loan repayments can be built on top.

![](/images/blog/how-decentralized/Protocols_3.png)

### Compound

**Custody:** Compound smart contracts are open source and non-custodial from the point of loan origination.
Initiating Margin Calls: Margin monitoring and margin call initiation is permissionless, incentivized, and decentralized.

**Margin Call Liquidity:** Provision of liquidity is permissionless, decentralized, and incentivized. A 5% discount on any collateral liquidated provides the incentive to monitor, initiate, and provide liquidity for margin calls.

**Price Feeds:** Compound price feeds are centralized and imputed directly by a whitelisted address controlled by Compound. Manipulation of the price feed by Compound itself is mitigated by the existence of a sensitivity parameter that prevents updates from being moved outside a range of 10% per hour.

**Interest Rates:** Currently interest rates are centrally determined. In Compound v2 the same model will initially be deployed, though later there will be a cToken DAO that allows for lenders to vote on the interest rate parameters of their respective money market reserves. The cToken DAO approach is less decentralized than an orderbook approach because an orderbook gives the entire market input into the interest rate. However, the cToken DAO approach is far more decentralized than a single central party determining the interest rate model parameters.

**Development:** Compound contracts are centrally developed and open source. The v1 contracts are not mutable except for the interest rate logic contracts while the v2 contracts are mutable. The v2 protocol is made up of a series of cToken contracts. In the beginning, Compound will have central control over the cToken contracts, but control will be ceded to a cToken DAO that can change the contracts with a time delay of 48 hours.

**Update**: Compound has recently moved their contracts behind a timelock.

### MakerDAO

**Custody:** MakerDAO smart contracts are open source and non-custodial from the point of loan origination.
Initiating Margin Calls: Margin monitoring and margin call initiation is permissionless, incentivized, and decentralized.

**Margin Call Liquidity:** Provision of liquidity is permissionless, decentralized, and incentivized.

**Price Feeds:** MakerDAO price feeds are semi-centralized and imputed by a consortium of addresses voted on by MKR holders. Manipulation of the price feed by the consortium is mitigated by a sensitivity parameter that prevents updates from being moved outside a bounded range. The MakerDAO price feeds should be considered more decentralized than Compound’s price feeds.

**Interest Rates:** Called “stability fees” in the MakerDAO ecosystem. Stability fees are interest paid by CDP holders. The stability fee is voted for by MKR holders. This is a semi-decentralized approach. It should be noted that currently, because of differences in interest rate determination, MakerDAO should be considered more decentralized than Compound, however the difference is nuanced.

**Development:** MakerDAO contracts are centrally developed and open source. The contracts are not mutable. The release of MCD will require migration to a new contract.

![](/images/blog/how-decentralized/Protocols_4.png)

### Fulcrum

**Custody:** Fulcrum smart contracts are open source and non-custodial from the point of loan origination,
Initiating Margin Calls: Margin monitoring and margin call initiation is permissionless, decentralized, and incentivized. Margin callers receive a bounty for successfully executing a margin call.

**Margin Call Liquidity:** Provision of liquidity is permissionless, decentralized, and incentivized. Liquidity is sourced from KyberSwap.

**Price Feeds:** KyberSwap’s secure on-chain price feed is used for decentralized price information. Kyber aggregates information from Uniswap, Biniance, Bitfinex, Huobi, and its own internal inventory. Kyber’s prices stay within pre-defined bounds in the absence of a price update from reserve managers, mitigating the potential for price feed manipulation. The KyberSwap price feed does not have a central point of failure.

**Interest Rates:** The bZx team controls the interest rate model parameters, allowing the rates to effectively be set centrally. There are plans to increase the decentralization of this by allowing token holders to set rates in the future.

**Development:** Fulcrum contracts are centrally developed and open source. The contracts are mutable with a 2-day time lock on core functions.

## Torque

All details for https://torque.loans are the same as for Fulcrum as they share the same liquidity pool and contracts.  

### dYdX

**Custody:** dYdX smart contracts are non-custodial from the point of loan origination.

**Initiating Margin Calls:** Margin calls can be initiated by anyone. There is a 5% discount on liquidated collateral to incentivize margin callers. Margin calls are permissionless.

**Margin Call Liquidity:** Anyone can provide margin call liquidity, making this feature decentralized.

**Price Feeds:** dYdX uses the MakerDAO price feed for ETH and DAI, but also uses the Uniswap and ETH2DAI price feed to bound the update price to mitigate attacks on the feed. The MakerDAO price feed is semi-centralized, but is also not controlled by dYdX. For this reason we believe the dYdX price feed should be considered decentralized, but not as decentralized as using Kyber. It should be noted that the centralization of the dYdX approach increases the cost of an attack on the price feed.

**Interest Rates:** dYdX sets the interest rate model parameters, giving them central control over the interest rates.

**Development:** The dYdX smart contracts are centrally developed and closed source. The team reports that the contracts will be verified on Etherscan shortly.

**Update:** dYdX has moved their contracts behind a two day timelock.

![](/images/blog/how-decentralized/Protocols_bzx.png)

### bZx

**Custody:** bZx smart contracts are open source and non-custodial from the point of loan origination.
Initiating Margin Calls: Anyone can initiate margin calls. The process is permissionless, decentralized, and incentivized.

**Margin Call Liquidity:** Anyone can provide margin call liquidity through KyberNetwork. In the near future there will be ways to provide margin call liquidity through 0x or directly from the caller’s assets.

**Price Feeds:** bZx uses KyberSwap’s secure, decentralized price feeds. Kyber aggregates information from Uniswap, Binance, Bitfinex, Huobi, and its own internal inventory. Kyber’s prices stay within predefined bounds in the absence of a price update from reserve managers, mitigating the potential for price feed manipulation.The KyberSwap price feed does not have a central point of failure.

**Interest Rates:** Interest rates are determined by the market through an orderbook. Since each person is playing a role in setting interest rates, this is a completely decentralized mechanism for interest rate determination.

**Development:** bZx is centrally developed by the team and the contracts are open source. The contracts are mutable but will be guarded by a 28 day time-locked multisig after the first major round of liquidations.

## Conclusion

This article provides a continuum based framework of the degrees of decentralization of various protocols by analyzing the essential constituent elements that all margin lending protocols hold in common. The framework successfully formalizes existing intuitions about where each protocol stands relative to each other. One shortcoming of this framework is that it fails to capture the full granularity of decentralization; within categories there are projects that are more decentralized than others (e.g., MakerDAO is more decentralized than Compound.) In order to make the framework easy to understand and general, the creation of subcategories was avoided. One major flaw of the framework is the lack of category weighting. For example, unmitigated contract mutability is a far greater source of centralization than margin call initiation being centralized to lenders or a single third party. Nevertheless, the framework provides a constructive way of thinking systematically about the decentralization continuum for margin lending protocols.
