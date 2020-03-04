---
layout: itokens
permalink: ptokens
metadescription: "Fulcrum trading interface allows you to purchase pTokens, ERC-20 assets which give you exposure to a desired short or leveraged position. "
featured-image: /images/pTokens_cover.png
title: pTokens - Margin Perpetual Position ERC-20 assets. What are pTokens?
h1title: What are pTokens?
---
<div class="container container-md post-content">
    <h1 class="fw-800 fs-46 lh-120 color-black text-center mb-20 mt-70 mt-sm-30 fs-sm-32">{{page.h1title}}</h1>
    <img src="/images/pTokens_cover.png" alt="pTokens" title="pTokens">
    <p>[Fulcrum](https://fulcrum.trade) trading interface allows you to purchase pTokens, which give you exposure to a desired short or leveraged position. If you want 4x long exposure to ETH, simply select 4x under ETH long, click buy, enter the number you want to buy, click buy, and approve the transaction. In the case of the example, a pToken representing 4x long ETH exposure (pLETH4x) will be deposited into your wallet. You can then sell those pTokens on the open market, use them as collateral in secured loans, or redeem them for the underlying asset.</p>
    <h3>Minting a pToken</h3>
    <p>In order to enter into a margin position, two steps must take place: a loan must be filled, and the borrowed asset must be exchanged. When the mint function of a pToken contract is called, it fills a loan using the appropriate iToken lending pool then calls the KyberSwap contract to swap the borrowed asset. If you are purchasing a leveraged long margin token such as pLETH2x, the contract first borrows DAI then exchanges that DAI for ETH using KyberSwap. pToken contracts require collateral in order to fulfill the first leg of the process, filling the loan. Any collateral can be used to fulfill the initial margin requirement. If you are using ETH as collateral, the mintWithEther function takes ETH into the contract to back the loan. If you are using an ERC20 as collateral, a transaction approving a token allowance to the pToken contract is first required before calling the mint function. At first an approval transaction will be required for each type of pToken. Later, a master routing contract will be implemented to reduce the number of approvals required to one per asset.</p>
    <h3>Closing a pToken</h3>
    <p>The exposure granted by pTokens can be exited by either selling them on secondary markets or burning the pToken by sending it back to the originating pToken contract. When a pToken is burned it swaps the held assets within the pToken contract back into the borrowed asset via KyberSwap. The borrowed asset is then returned to the originating iToken lending pool. The collateral used to purchase the pToken and fulfill the iToken loan terms is then returned to the address that initiated the burn.</p>
    <h3>Pricing of pTokens</h3>
    <p>pTokens are priced relative to the positions they represent. The exchange rate of a pToken initially corresponds one to one thousand (1:1,000) with the loan asset. As pTokens are minted and burned, this price will fluctuate up and down according to the total collateral backing the loan, plus any change in the underlying loan position, plus any interest that has not yet accrued to the iToken lender. The value of the underlying loan position changes according to the value of the backed asset and moves by a factor equal to the amount of leverage. For instance, a 4x Long ETH pToken increases in price four times faster than the price of ETH, and two times faster than a 2x Long ETH pToken. Furthermore, it moves in the same direction as the price of ETH. Likewise, assuming equal leverage, short versions of these same pTokens would move at the same rate as their long counterparts but in the opposite direction of ETH. pToken Price = (Initial Collateral + Profit/Loss + Unpaid Interest) / Total Supply</p>
</div>


<div class="container container-xl">
    <h3 class="fs-24 fs-sm-20 fw-700 lh-160 lh-xs-150 mb-15 color-primary text-center mb-30">pTokens Smart Contracts</h3>
    <div class="buttons-tabs-ptokens">
        <button class="tablinks-ptokens active" data-ptokens="mainnet">Mainnet</button>
        <button class="tablinks-ptokens" data-ptokens="kovan">Kovan</button>
    </div>
    <div id="mainnet" class="tabcontent-ptokens active">
        <table class="table-ptokens">
            <thead>
                <tr>
                    <td class="thead-ticker">Ticker</td>
                    <td class="thead-address">Adress</td>
                    <td class="thead-description">Description</td>
                    <td class="thead-icon">Icon</td>
                </tr>
            </thead>
            <tbody>
                {% for mainnet in site.data.ptokens[0].mainnet %}
                    <tr>
                        <td class="ticker">{{mainnet.ticker}}</td>
                        <td class="address">{{mainnet.address}}</td>
                        <td class="description">{{mainnet.description}}</td>
                        <td class="icon">{% include svg/ptokens/{{mainnet.ticker}}.svg %}</td>
                    </tr>
                {% endfor %}
            </tbody>
        </table>
    </div>
    <div id="kovan" class="tabcontent-ptokens">
        <table class="table-ptokens">
            <thead>
                <tr>
                    <td class="thead-ticker">Ticker</td>
                    <td class="thead-address">Adress</td>
                    <td class="thead-description">Description</td>
                    <td class="thead-icon">Icon</td>
                </tr>
            </thead>
            <tbody>
                {% for kovan in site.data.ptokens[1].kovan %}
                    <tr>
                        <td class="ticker">{{kovan.ticker}}</td>
                        <td class="address">{{kovan.address}}</td>
                        <td class="description">{{kovan.description}}</td>
                        <td class="icon">{% include svg/ptokens/{{kovan.ticker}}.svg %}</td>
                    </tr>
                {% endfor %}
            </tbody>
        </table>
    </div>
</div>
