---
layout: post
title:  "Choosing a Reliable Solution for bZx’s Oracle"
date:   2020-05-11 03:12:46 -0700
cover: /images/blog/Blog VS Chainlink.png
author: Bean
metadescription: "As part of a comprehensive effort to harden bZx’s security, we implemented several key protocol improvements to better protect against future attacks."
intro: "As part of a comprehensive effort to harden bZx’s security, we implemented several key protocol improvements to better protect against future attacks."
---
As part of a comprehensive effort to harden bZx’s security, we implemented several key protocol improvements to better protect against future attacks. One of the most important upgrades we made was switching our oracle mechanism from the issues caused by a combination of Uniswap and Kyber to [Chainlink’s Price Reference Contracts](https://feeds.chain.link/).

Since integration on March 9th, bZx has remained highly secure thanks to Chainlink’s multiple security guarantees.  We believe there are three core competencies that have been critical to our success with Chainlink:

* Chainlink does not suffer from an insufficiently decentralized oracle, and the security of its infrastructure is able to scale with the value in our contracts.
* Chainlink provides access to high quality data, due being able to access credentialed APIs. As a result, they avoid low quality data sources, such as those pulled from a single source that doesn’t provide the actual market price across various market conditions.
* Chainlink provides high quality node operators, maintains high quality control standards around their nodes, and provides unprecedented transparency regarding their node operators, strengthening the oracle’s reliability in producing consistently trusted oracle reports. Their solution does not rely on security through obscurity to create a false sense of security, or provide almost no provable information about the nodes we’d actually be relying on to provide price data to our smart contracts.

As a result of the above and after further consideration of our security needs, we will be moving forward with Chainlink as our sole oracle provider. We've also concluded that the design space for multi-oracle solutions is complex and can lead to a potential increase in the protocol’s attack surface.

To better understand our decision process, we outline the qualities most important to our analysis of why Chainlink is the best framework we could find providing the levels of data quality, decentralization, and overall security that a DeFi application like ours can rely on.

## Examining Chainlink’s Best Features for DeFi

### High Quality Data

One of the most important components of a reliable oracle mechanism is the quality of data it provides. Since bZx’s price oracles are partially responsible for the security of millions of dollars in user funds, enforcing data quality standards is an important consideration for our choice of oracles. We identified that [Chainlink’s Price Reference Contracts](https://feeds.chain.link/) have the highest quality data of any other oracle mechanism. Chainlink was the only decentralized oracle solution we encountered that provides nodes with credential management capabilities, a prerequisite to accessing password protected/premium APIs. Oracles with lower data quality standards can become vulnerable to all types of easy to implement data manipulation attack vectors.

![](/images/blog/Decentralized_Price_Reference_Data___Chainlink.png)

Chainlink’s Reference Contract nodes source exclusively from premium APIs, specifically high-quality data aggregators. Using Aggregator APIs allow bZx contracts to maintain strong market coverage across all the areas where trading volume may shift. We feel this data sourcing technique is more reflective of an asset’s true market price than exchange spot prices. It’s also more responsive to changing volume dynamics compared with solutions that medianize a few set exchange APIs.

### Decentralized Oracle Mechanism

Another factor we reviewed is decentralization of the oracle mechanism, a critical component in protecting against data corruption and network downtime. Chainlink was the most decentralized oracle network we examined, having hundreds of listed nodes and progressively greater guarantees for its highest quality nodes. This provides large security guarantees to bZx, with the ability to scale the number of nodes used to provide data as the need for greater decentralization increases.  

Each Price Reference Contract leveraged by bZx contains multiple independent Chainlink nodes, with price updates occurring at price deviations (every 1% change in price) and linear time cycles (every 2 hours). Other oracle solutions incorporated fewer nodes per update, offered a smaller pool of accessible nodes, or had inconsistencies in their node quality and update frequency.

### Sybil Resistant and Security Reviewed Nodes

The oracle mechanism is only as secure and reliable as the collection of node operators that support it. All Chainlink nodes supplying data to bZx have been through a rigorous security review process. Most node operators consist of leading blockchain DevOps and security teams, many of which have extensive experience running Proof-Of-Stake nodes that secure millions of dollars in value across multiple blockchain networks. We are able to review information about nodes in both [market.link](https://market.link/) and more recently [reputation.link](https://www.reputation.link/). In comparison, other oracle solutions opted to go with unknown or unfiltered node operators, which can lead to less predictability, quality control, and security of oracle services

### Verifiable Performance

As a live application, bZx requires a proven mainnet oracle solution. Chainlink is th  e only decentralized oracle network that has a verifiable on-chain record of servicing smart contracts worth hundreds of millions of dollars with secure and reliable data live on mainnet. Other oracles we evaluated were either less/not battle tested on mainnet or did not provide transparent methods of verifying performance on-chain.

### Economic Sustainability and Governance

Considering the time and resources spent on integrations, we preferred a long-term viable oracle solution that can evolve alongside DeFi. Chainlink’s Price Reference Contracts are mutually supported by many other DeFi teams, which reduce the financial costs for each individual user. Chainlink also plans to decentralize the governance of the Price Reference Contracts. After understanding more of their plans on how the reference contracts will evolve, we see this as a sustainable oracle mechanism that we’re excited to contribute to as a user.

## A Standard Oracle Framework for DeFi

Integrating an oracle mechanism is something we take very seriously. Accordingly, we view Chainlink as both an immediate and long term solution for bZx and the entire DeFi ecosystem.

We’re excited to navigate the DeFi landscape with the support of Chainlink and look forward to our users getting the full benefit of bZx’s liquidity protocol without having to worry about the underlying risks of faulty oracles. We encourage other DeFi projects to do their own oracle due diligence; we believe they will come to similar conclusions that Chainlink is a decentralized and high quality data delivery system for smart contracts that is being used and supported by many of the top teams in the DeFi ecosystem.


## About Chainlink

If you’re a developer and want to connect your smart contract to existing data and infrastructure outside the underlying blockchain, reach out to them[ here](https://chainlink.typeform.com/to/gEwrPO). They can help you quickly and securely launch your data-enabled application or[ Chainlink Price Reference Data Contract](https://feeds.chain.link/) on mainnet today. You can also visit the[ developer documentation](https://docs.chain.link) or join the technical discussion on[ Discord](https://discordapp.com/invite/aSK4zew). Learn more about them by visiting the[ Chainlink website](https://chain.link) or follow us on[ Twitter](https://twitter.com/chainlink) or[ Reddit](https://www.reddit.com/r/Chainlink/).
