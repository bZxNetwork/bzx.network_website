---
layout: media-assets
permalink: bzrx-token
metadescription: BZRX Token - could be used to govern the protocol and as a medium of exchange
featured-image: /images/blog/bzrx-cover.png
title: The BZRX Token Audits and Explainer
h1title: The BZRX Token Audits and Explainer

---
<script>
document.addEventListener('DOMContentLoaded', function (){

    function numberWithCommas(x) {
        var parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }
    const circulatingSupply = 140610067;
    document.getElementById("circulating-supply").innerHTML = numberWithCommas(circulatingSupply);

    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bzx-protocol&vs_currencies=usd")
    .then(response => response.json())
    .then(data => {
        const bzrxPrice = data["bzx-protocol"]["usd"];
        const marketCap = bzrxPrice * circulatingSupply
        document.getElementById("bzrx-price").innerHTML = `<span class="sign">$</span>${numberWithCommas(bzrxPrice.toFixed(4))}`;
        document.getElementById("market-cap").innerHTML = `<span class="sign">$</span>${numberWithCommas(marketCap.toFixed(0))}`;
    })
}, false);

</script>
<div class="container container-xl">
    <div class="container-bzrx">
        <div class="item-bzrx">
            <div class="icon">{% include svg/bzrx/price.svg %}</div>
            <div class="title">Price</div>
            <div id="bzrx-price" class="value"><span class="sign">$</span>0.1540</div>
        </div>
        <div class="item-bzrx">
            <div class="icon">{% include svg/bzrx/market-cap.svg %}</div>
            <div class="title">Market Cap</div>
            <div id="market-cap" class="value"><span class="sign">$</span>21,654,091</div>
        </div>
        <div class="item-bzrx">
            <div class="icon">{% include svg/bzrx/circulating-supply.svg %}</div>
            <div class="title">Circulating Supply</div>
            <div id="circulating-supply" class="value">140,610,067</div>
        </div>
        <div class="item-bzrx">
            <div class="icon">{% include svg/bzrx/total-supply.svg %}</div>
            <div class="title">Total Supply</div>
            <div class="value">1,030,000,000</div>
        </div>
    </div>
</div>

<div class="container container-md content-bzrx">
    <p>We are happy to announce that the <a href="/pdfs/BZRX_vBZRX_CertiK_Report_1_07_11_2020.pdf">manual audits</a> and <a href="/pdfs/BZRX_vBZRX_CertiK_Verification_Report_1_07_11_2020.pdf">formal verification</a> of the BZRX and vBZRX tokens are complete. We give our thanks to Certik for doing such a thorough job in both optimizing and securing the contracts. As we mentioned in our original article, <a href="https://bzx.network/blog/bzrx-token">The BZRX Token Model v3</a>, all tokens not distributed during the presale are locked inside a vesting contract. The tokens vest over 4 years and a six month cliff. </p>
<p>We tokenized the ownership of the vesting contract so that it could be streamed proportionally to multiple addresses. When vBZRX is in an address, it directs the vesting contract to vest the tokens to that address as per the vesting schedule.</p>
    <div class="container-chart">{% include svg/bzrx/chart.svg %}</div>
    <p>The total supply of BZRX is 1.030B. Currently all but 140MM of the tokens are inside the vesting contract. You can <a href="https://etherscan.io/token/0xB72B31907C1C95F3650b64b2469e08EdACeE5e8F">track the number of tokens</a> inside the vesting contract transparently via Etherscan.</p>

    <h2>The Utility of BZRX</h2>
<p>The BZRX token is a governance token, first and foremost. Collectively, the token holders have the power to upgrade the protocol as they see fit, only constrained by the checks-and-balances of the <a href="https://bzx.network/blog/introducing-bzxdao">bZxDAO</a>. This allows token holders to create incentives to reward participation and drive usage of the protocol. A number of proposals have been made to capture value and drive participation in governance. These include: </p>

<ul>
  <li>Fee sharing for participation in governance </li>
  <li>Fee mining incentives for protocol users</li>
  <li>Using the floating liquidity from unclaimed fees to liquidity mine BAL rewards</li>
  <li>Asset backing the token with the insurance fund </li>
</ul>
<p>These proposals will be voted on by the DAO upon relaunch.
</p>
<h2>The Structure of vBZRX</h2>
<p>The vBZRX token is an ERC20 token, making each token fungible and uniform. The underlying BZRX within the contract can be staked. However, there are limits to the number of vBZRX that can be staked at any given time. This limitation will be set by the staking contract itself. As currently proposed, it will be possible to participate in fee sharing with the staked BZRX inside the vBZRX contract; however, the fees do not vest until the token vests. Moreover, the voting power of BZRX staked from inside the vesting contract possesses only half of the voting power of a typical BZRX token. This was done to prevent the team from having a majority voting share over the DAO.
</p>
<h4>Key Takeaways:</h4>

<ul>
  <li>When BZRX is vesting, any fees it generates vests with the token that generated it.</li>
  <li>vBZRX is only entitled to 50% of the voting rights of a BZRX token.</li>
  <li>There are limitations on the number of BZRX in the vesting contract that can be staked.</li>

</ul>
    <h2>Token Distribution Breakdown</h2>
    <img src="/images/blog/Table%2002.png" alt="">

    <ul>
      <li><strong>Vesting tokens</strong> - These are tokens that will be allocated to strategic partners and backers.</li>

<li><strong>Presale</strong> - These are unlocked tokens sold to early backers in late 2018.</li>

<li><strong>Team</strong> - vBZRX allocated to current and future team members.</li>

<li><strong>BZX Builder Fund</strong> - These funds will be controlled by the bZxDAO. We anticipate that these funds will be used to fund security audits and provide operating capital for teams building value generating protocols and products on top of bZx.</li>

<li><strong>Security and Alignment Fund</strong> - These funds will be used for our trader/lender rescue program, the Governance Bootstrap program, bug bounties, and security audits of the core protocol.</li>

<li><strong>Ecosystem Fund</strong> - These funds will be used to provide liquidity mining (3%) and fee mining (17%) incentives to users of the protocol.</li>
</ul>
</div>
<!--
<div class="container container-xl">
    <div class="container-locked">
        <div class="container container-md content-bzrx">
            <div class="d-flex f-wrap">
                <div class="item-locked">
                    <div class="title">Total number <br /> of locked tokens</div>
                    <div class="value">14,383,208.540</div>
                </div>
                <div class="item-locked">
                    <div class="title">Investors, team members & <br /> users with locked tokens</div>
                    <div class="value">356</div>
                </div>
            </div>
        </div>
    </div>
</div> -->
<div class="container container-md content-bzrx">
<h2 class="mt-0">Wallets List</h2>
</div>

<div class="container container-xl overflow-x-scroll">
    <table class="bzrx-table">
        <tbody>
            <tr class="bzrx-row">
                <th class="title">Vesting</th>
                <th class="account">0x95BeeC2457838108089fcD0E059659A4E60B091A</th>
                <th class="action"><a href="https://etherscan.io/address/0x95BeeC2457838108089fcD0E059659A4E60B091A">Open</a></th>
            </tr>
            <tr class="bzrx-row">
                <th class="title">Team</th>
                <th class="account">0x7a1d27e928CCFeAa2C5182031aeb6F2ECB07eA13</th>
                <th class="action"><a href="https://etherscan.io/address/0x7a1d27e928CCFeAa2C5182031aeb6F2ECB07eA13">Open</a></th>
            </tr>
            <tr class="bzrx-row">
                <th class="title">bZx Builder Fund</th>
                <th class="account">0xe94351E6B538ceaf292fD56254A5dB5D4a0A62aF</th>
                <th class="action"><a href="https://etherscan.io/address/0xe94351E6B538ceaf292fD56254A5dB5D4a0A62aF">Open</a></th>
            </tr>
            <tr class="bzrx-row">
                <th class="title">Security and Alignment Fund</th>
                <th class="account">0xD890834EC4B0e5d4f5dEf21F64718DDB597f4A4B</th>
                <th class="action"><a href="https://etherscan.io/address/0xD890834EC4B0e5d4f5dEf21F64718DDB597f4A4B">Open</a></th>
            </tr>
            <tr class="bzrx-row">
                <th class="title">Ecosystem Fund</th>
                <th class="account">0xbdBeCB2b87b3F7ba6F71A7a45019782D6E169A48</th>
                <th class="action"><a href="https://etherscan.io/address/0xbdBeCB2b87b3F7ba6F71A7a45019782D6E169A48">Open</a></th>
            </tr>

        </tbody>
    </table>
</div>
