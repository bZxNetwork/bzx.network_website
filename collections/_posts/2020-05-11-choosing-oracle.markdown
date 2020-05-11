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

A month after the upgrade, we wanted to share our impressions regarding this integration.

bZx has remained highly secure through Chainlink thanks to multiple security guarantees that we didn’t get from our earlier setup and have now come to appreciate even more after doing a thorough review of other oracles. As mentioned in our earlier blog post, we planned to do further research which would allow us to arrive at an informed decision about what the optimal oracle mechanism looks like for a widely used DeFi product such as bZx.

After conducting extensive due diligence into other oracle solutions, we had three additional insights that led us away from an initial assumption about combining multiple oracle solutions into any one system. Which in the spirit of transparency and helping everyone in the DeFi ecosystem learn from our own experience and research, we’d like to share more widely.



* Almost all other solutions were either centralized oracles or were insufficiently decentralized in the design of their oracle mechanism. Chainlink was the only oracle network we found that provided sufficiently high levels of decentralization and was able to show us how it could easily scale as the value secured in our contracts rose to require more security from an oracle mechanism.
* Other systems were unable to provide access to high quality data, due to limitations such as not being able to access credentialed APIs. As a result, they are only able to provide low quality data sources, which were often pulled from a single source that didn’t provide the actual market price across various market conditions.
* Other oracle solutions had lower quality node operators, because they didn’t maintain high quality standards about their nodes, and provided almost no transparency regarding their node operators, weakening the oracle’s reliability in producing consistently trusted oracle reports. These solutions either rely on security through obscurity to create a false sense of security, or provide almost no provable information about the nodes we’d actually be relying on to provide price data to our smart contracts.
* As a result of the above and after further consideration of our security needs, we now believe that the combination of low quality data from less secure oracle mechanisms, together with high quality data from a more secure system like Chainlink, would create both a less accurate and much less secure oracle mechanism. After further research, we believe that the combination of other lower quality oracles in their current state, together with a higher quality oracle such as Chainlink, is something to be avoided by both us and others.

Our oracle mechanism is only as strong as its weakest link; adding unproven, non-transparent, or less resilient oracle solutions can result in lowering the system’s overall security and data quality. To better understand our decision process, we outline the qualities most important to our analysis of why Chainlink is the only oracle framework we could find providing the levels of data quality, decentralization, and overall security that a DeFi application like ours can actually rely on.

## Examining Chainlink’s Best Features for DeFi

### High Quality Data

One of the most important components of a reliable oracle mechanism is the quality of data it provides. Since bZx’s price oracles are partially responsible for the security of millions of dollars in user funds, enforcing data quality standards is an important consideration for our choice of oracles. We identified that [Chainlink’s Price Reference Contracts](https://feeds.chain.link/) have the highest quality data of any other oracle mechanism. Chainlink was the only decentralized oracle solution we encountered that provides nodes with credential management capabilities, a prerequisite to accessing password protected/premium APIs. Oracles with lower data quality standards can become vulnerable to all types of easy to implement data manipulation attack vectors.

![](/images/blog/Decentralized_Price_Reference_Data___Chainlink.png)

Chainlink’s Reference Contract nodes source exclusively from premium APIs, specifically high-quality data aggregators. Using Aggregator APIs allow bZx contracts to maintain strong market coverage across all the areas where trading volume may shift. We feel this data sourcing technique is more reflective of an asset’s true market price than exchange spot prices. It’s also more responsive to changing volume dynamics compared with solutions that medianize a few set exchange APIs.

### Decentralized Oracle Mechanism

Another factor we reviewed is decentralization of the oracle mechanism, a critical component in protecting against data corruption and network downtime. Chainlink was the most decentralized oracle network we examined, having hundreds of listed nodes and progressively greater guarantees for its highest quality nodes. This provides large security guarantees to bZx, with the ability to scale the number of nodes used to provide data as the need for greater decentralization increases.  

Each Price Reference Contract leveraged by bZx contains multiple independent Chainlink nodes, with price updates occurring at price deviations (every 1% change in price) and linear time cycles (every 2 hours). Other oracle solutions incorporated fewer nodes per update, offered a smaller pool of accessible nodes, or had inconsistencies in their node quality and update frequency.

### Sybil Resistant and Security Reviewed Nodes

The oracle mechanism is only as secure and reliable as the collection of node operators that support it. All Chainlink nodes supplying data to bZx have been through a rigorous security review process. Most node operators consist of leading blockchain DevOps and security teams, many of which have extensive experience running Proof-Of-Stake nodes that secure millions of dollars in value across multiple blockchain networks. We are able to review information about nodes in both [https://market.link/](https://market.link/) and more recently [https://www.reputation.link/](https://www.reputation.link/). In comparison, other oracle solutions opted to go with unknown or unfiltered node operators, which can lead to less predictability, quality control, and security of oracle services..  

### Verifiable Performance

As a live application, bZx requires a proven mainnet oracle solution. Chainlink is the only decentralized oracle network that has a verifiable on-chain record of servicing smart contracts worth hundreds of millions of dollars with secure and reliable data live on mainnet. Other oracles we evaluated were either less/not battle tested on mainnet or did not provide transparent methods of verifying performance on-chain.

### Economic Sustainability and Governance

Considering the time and resources spent on integrations, we preferred a long-term viable oracle solution that can evolve alongside DeFi. Chainlink’s Price Reference Contracts are mutually supported by many other DeFi teams, which reduce the financial costs for each individual user. Chainlink also plans to decentralize the governance of the Price Reference Contracts. After understanding more of their plans on how the reference contracts will evolve, we see this as a sustainable oracle mechanism that we’re excited to contribute to as a user.

## A Standard Oracle Framework for DeFi

Integrating an oracle mechanism is something we take very seriously; picking the wrong one not only threatens our security, but it diverts valuable time and resources away from developing our core protocol. We view Chainlink as both an immediate and long term solution for bZx and the entire DeFi ecosystem.

We’re excited to navigate the DeFi landscape with the support of Chainlink and look forward to our users getting the full benefit of bZx’s liquidity protocol without having to worry about the underlying risks of faulty oracles. We encourage other DeFi projects to do their own oracle due diligence; we believe they will come to similar conclusions that Chainlink is a decentralized and high quality data delivery system for smart contracts that is being used and supported by many of the top teams in the DeFi ecosystem.

## About Chainlink

If you’re a developer and want to connect your smart contract to existing data and infrastructure outside the underlying blockchain, reach out to them[ here](https://chainlink.typeform.com/to/gEwrPO). They can help you quickly and securely launch your data-enabled application or[ Chainlink Price Reference Data Contract](https://feeds.chain.link/) on mainnet today. You can also visit the[ developer documentation](https://docs.chain.link) or join the technical discussion on[ Discord](https://discordapp.com/invite/aSK4zew). Learn more about them by visiting the[ Chainlink website](https://chain.link) or follow us on[ Twitter](https://twitter.com/chainlink) or[ Reddit](https://www.reddit.com/r/Chainlink/).
