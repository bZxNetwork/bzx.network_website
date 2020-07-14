---
layout: media-assets
permalink: bzrx-token
metadescription: BZRX Token - could be used to govern the protocol and as a medium of exchange
featured-image: /images/blog/bzrx-cover.png
title: BZRX Token
h1title: BZRX Token
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
    <h2>Token Unlock Schedule</h2>
    <p>On January 4, 2020, we released our projected token release schedule. This can also be found in Binance's Research Report on Origin. Note that actual actual circulating supply may differ from modeled circulating supply as time passes. It is our intention to decrease actual circulating supply when compared to modeled circulating supply whenever possible.</p>
    <div class="container-chart">{% include svg/bzrx/chart.svg %}</div>
    <h2>Locked Tokens</h2>
    <p>Many of our investors and team members have voluntarily increased their lock-ups. Locked tokens include tokens that otherwise would have been released and entered the circulating supply. This number also includes OGN that is locked up by users in  Deals.</p>
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
    <h2>Wallets excluded from circulating supply</h2>
    <p>Many of our investors and team members have voluntarily increased their lock-ups. Locked tokens include tokens that otherwise would have been released and entered the circulating supply. This number also includes OGN that is locked up by users in  Deals.</p>
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
