---
layout: itokens
permalink: itokens
metadescription: "iTokens, such as iDAI or iUSDC, are interest accumulating tokens that continuously go up in value as you hold them. They represent a share in a lending pool that grows in size as borrowers pay interest into them."
featured-image: /images/ogp-itokens.png
title: iTokens - interest-bearing ERC-20 assets. What are iTokens?
h1title: What are iTokens and pTokens?
---
<div class="container container-md post-content">
    <h1 class="fw-800 fs-46 lh-120 color-black text-center mb-20 mt-70 mt-sm-30 fs-sm-32">{{page.h1title}}</h1>
    <h2>iTokens</h2>
    <p>iTokens, such as iDAI or iUSDC, are interest accumulating tokens that continuously go up in value as you hold them. They represent a share in a lending pool that grows in size as borrowers pay interest into them. iTokens can be traded, used as collateral, composed by developers into structured products, or sent to cold storage for safety.</p>
    <img src="/images/itokens.png" alt="iTokens" title="iTokens">
    <p>iTokens constantly accrue value and increase in price because its underlying assets are loaned out to borrowers. Two notable features of iTokens are that they compounds each second (as opposed to per block) and that their exchange rate is capable of falling if the underlying pool suffers a loss. This makes them well suited for risk management derivatives to be built on top.</p>
    <h3>Minting an iToken</h3>
    <p>When the iToken contract for an asset is first deployed, it creates on-chain base protocol order objects corresponding to each level of leverage. The initial margin of the order object defines the level of leverage, and each order object has margin maintenance set at 15%. The length of the loan in the order object is defined as 28 days. When a lender wants to create a loan, they invoke the function mintWithEther when loaning ETH, or if loaning an ERC20, approve a token allowance and invoke the function mint.</p>
    <p>Anyone can borrow directly against the iToken to execute a typical base protocol loan with a fixed interest rate. Alternatively, loans can be taken by calling the borrowTokenFromEscrow function through a pToken contract, which will then mint pTokens using the loan. Calling either borrowTokenFromEscrow or borrowToken causes the iToken liquidity to be added to the appropriate order object corresponding to the level of leverage specified by the borrower. The interest rates on loans initiated by the pToken contracts are dynamic, reacting in real-time to the supply and demand of lending and borrowing as described in the section below titled Interest Determination. When the loan is taken by a borrower, the 28 days begins. Once a loan has been initiated, each subsequent borrower at that level of leverage partially fills the loan order but does not refresh the expiration date.</p>
    <h3>Closing an iToken</h3>
    <p>Lenders are able to divest themselves of an iToken position in two ways: burning the token by sending it to the iToken contract or selling it on the open market. When an iToken holder burns the token by sending it to the iToken contract, the funds they deposited are returned to their address immediately, assuming doing so does not bring loan utilization over 100%. In the case that burning the iToken brings loan utilization over 100%, as much of the funds that can be returned are returned. When a redemption does not result in a full refund, the user is placed in a queue to have the remainder of their funds returned. When the loans taken out by pToken contracts reach the end of the loan duration, they are then used to fully remunerate the first lender in the queue. Any interaction with the iToken contract including minting, burning, or borrowing acts as a trigger for the funds to be returned to the next lender in the queue. If a queue forms, lenders can call the redeem function to claim any existing liquidity within the iToken contract and place themselves at the front of the queue. Lenders continue to earn interest on any funds not returned to them, even if all their iTokens are burnt.</p>
    <p>The redemption mechanics outlined above primarily govern edge cases. It is most likely that loan utilization will not stay near 100% for any substantial period of time. This is because of the interest rate mechanics at work for lending and borrowing. When loan utilization is near 100%, the interest rate will be high, attracting loan interest. This will create liquidity for lenders wanting to exit their iToken positions.</p>
</div>

<div class="container container-xl">
    <h3 class="fs-24 fs-sm-20 fw-700 lh-160 lh-xs-150 mb-15 color-primary text-center mb-30">iTokens Smart Contracts</h3>
    <div class="buttons-tabs-itokens">       
        <button class="tablinks-itokens active" data-itokens="itokens-mainnet">Mainnet</button>            
        <button class="tablinks-itokens" data-itokens="itokens-kovan">Kovan</button>            
    </div>
    <div id="itokens-mainnet" class="tabcontent-itokens active">    
        <table class="table-itokens">
            <thead>
                <tr>
                    <td class="thead-ticker">Ticker</td>
                    <td class="thead-address">Adress</td>
                    <td class="thead-description">Description</td>
                    <td class="thead-icon">Icon</td>
                </tr>
            </thead>
            <tbody>
                {% for mainnet in site.data.itokens[0].mainnet %}
                    <tr>
                        <td class="ticker">{{mainnet.ticker}}</td>
                        <td class="address">{{mainnet.address}}</td>
                        <td class="description">{{mainnet.description}}</td>
                        <td class="icon"><div class="bg-gradient">{% include svg/itokens/{{mainnet.ticker}}.svg %}</div></td>
                    </tr>
                {% endfor %}
            </tbody>
        </table>
    </div>
    <div id="itokens-kovan" class="tabcontent-itokens">
        <table class="table-itokens">
            <thead>
                <tr>
                    <td class="thead-ticker">Ticker</td>
                    <td class="thead-address">Adress</td>
                    <td class="thead-description">Description</td>
                    <td class="thead-icon">Icon</td>
                </tr>
            </thead>
            <tbody>
                {% for kovan in site.data.itokens[1].kovan %}
                    <tr>
                        <td class="ticker">{{kovan.ticker}}</td>
                        <td class="address">{{kovan.address}}</td>
                        <td class="description">{{kovan.description}}</td>
                        <td class="icon"><div class="bg-gradient">{% include svg/itokens/{{kovan.ticker}}.svg %}</div></td>
                    </tr>
                {% endfor %}
            </tbody>
        </table>
    </div>
</div>
<div class="container container-md post-content">
    <h2>pTokens</h2>
    <p> The trading interface allows you to purchase pTokens, which give you exposure to a desired short or leveraged position. If you want 4x long exposure to ETH, simply select 4x under ETH long, click buy, enter the number you want to buy, click buy, and approve the transaction (see user guide below). In the case of the example, a pToken representing 4x long ETH exposure (pLETH4x) will be deposited into your wallet. You can then sell those pTokens on the open market, use them as collateral in secured loans, or redeem them for the underlying asset.</p>
    <h3> Minting a pToken</h3>
    <p> In order to enter into a margin position, two steps must take place: a loan must be filled, and the borrowed asset must be exchanged. When the mint function of a pToken contract is called, it fills a loan using the appropriate iToken lending pool then calls the KyberSwap contract to swap the borrowed asset. If you are purchasing a leveraged long margin token such as pLETH2x, the contract first borrows DAI then exchanges that DAI for ETH using KyberSwap. pToken contracts require collateral in order to fulfill the first leg of the process, filling the loan. Any collateral can be used to fulfill the initial margin requirement. If you are using ETH as collateral, the mintWithEther function takes ETH into the contract to back the loan. If you are using an ERC20 as collateral, a transaction approving a token allowance to the pToken contract is first required before calling the mint function. At first an approval transaction will be required for each type of pToken. Later, a master routing contract will be implemented to reduce the number of approvals required to one per asset.</p>
    <h3> Closing a pToken</h3>
    <p>The exposure granted by pTokens can be exited by either selling them on secondary markets or burning the pToken by sending it back to the originating pToken contract. When a pToken is burned it swaps the held assets within the pToken contract back into the borrowed asset via KyberSwap. The borrowed asset is then returned to the originating iToken lending pool. The collateral used to purchase the pToken and fulfill the iToken loan terms is then returned to the address that initiated the burn.</p>
    <h3> Pricing of pTokens</h3>
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
