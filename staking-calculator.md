---
layout: media-assets
permalink: staking-calculator
metadescription: ''
featured-image: /images/ogp.png
title: 'Staking Calculator'
h1title: 'Staking Calculator'
---

<section>
    <div class="container container-xl">
        <div class="calc-wrapper"> 
            <div>
                <p class="title">Your Stake:</p>
                <input id="bzrx-input" step="any" type="number" value="100000"/>
                <div>
                    <label>Trading Volume, Daily</label>
                    <div class="border-quantity">                            
                      <input id="trading-volume-input" class="quantity-trading" type="range" value="7000000" min="1" max="100000000"/>
                      <div class="left-quantity left-quantity-trading"></div>
                      <div class="right-quantity right-quantity-trading"></div>
                      <div class="track-quantity track-quantity-trading"></div>
                  </div>
                </div>
                <div>
                    <label>New Loans Volume, Daily</label>
                     <div class="border-quantity">                            
                      <input id="new-loans-volume-input" class="quantity-new-loans" type="range" value="10000000" min="1" max="100000000"/>
                      <div class="left-quantity left-quantity-new-loans"></div>
                      <div class="right-quantity right-quantity-new-loans"></div>
                      <div class="track-quantity track-quantity-new-loans"></div>
                  </div>
                </div>
                <div>
                    <label>Open Loans Volume</label>
                     <div class="border-quantity">                            
                      <input id="open-loans-volume-input" class="quantity-open-loans" type="range" value="30000000" min="1" max="100000000"/>
                      <div class="left-quantity left-quantity-new-loans"></div>
                      <div class="right-quantity right-quantity-new-loans"></div>
                      <div class="track-quantity track-quantity-new-loans"></div>
                  </div>
                </div>
                <p class="descriptoin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque in vitae tellus viverra accumsan pharetra.</p>
            </div>
            <div>
                <p class="title">Your Profit:</p>
                <div>
                <div class="value-profit">
                    <div><span class="sign">$</span><span id="monthly-profit-value">100,500.30</span></div>
                    <label>Monthly</label>
                </div>
                <div class="value-profit">
                    <div><span class="sign">$</span><span id="weekly-profit-value">100,500.30</span></div>
                    <label>Weekly</label>
                </div>
                <div class="value-profit">
                    <div><span class="sign">$</span><span id="daily-profit-value">100,500.30</span></div>
                    <label>Daily</label>
                </div>
                </div>
            </div>
        </div>
    </div>
</section>


<section class="pb-120">
  <div class="container container-md">
    <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
    <p>Many of our investors and team members have voluntarily increased their lock-ups. Locked tokens include tokens that otherwise would have been released and entered the circulating supply. This number also includes OGN that is locked up by users in  Deals.</p>
  </div>
</section>

<script type="text/javascript" src="/assets/js/staking-calculator.js"></script>