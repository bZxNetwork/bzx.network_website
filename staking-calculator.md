---
layout: media-assets
permalink: staking-calculator
metadescription: ''
featured-image: /images/ogp.png
title: 'Staking Calculator'
h1title: 'Staking Calculator'
---

<section class="pb-160">
    <div class="container container-xl">
        <div class="calc-wrapper"> 
            <div>
                <p class="title">Your Stake:</p>
                <div class="input-item">
                   <input id="bzrx-input" step="any" type="number" value="100000"/>
                   <label><span id="bzrx-input-value">100,000</span> <span class="sign">BZRX</span><img class="lazyload" data-src="/images/logo-icon.svg" alt="" /></label>
                </div>
                <div class="calc-item">
                    <label>Trading Volume, Daily</label>
                    <div class="border-quantity">    
                      <label class="label-quantity"><span class="sign">$</span><span class="label-quantity-value">28,000,000</span></label>                        
                      <input id="trading-volume-input" class="quantity-trading" type="range" value="28000000" min="1" max="140000000"/>
                      <div id="left-trading-volume" class="left-quantity"></div>
                      <div id="right-trading-volume" class="right-quantity"></div>
                      <div id="right-trading-volume" class="track-quantity red"></div>
                  </div>
                </div>
                <div class="calc-item">
                    <label>New Loans Volume, Daily</label>
                    <div class="border-quantity">
                        <label class="label-quantity"><span class="sign">$</span><span class="label-quantity-value">46,000,000</span></label>                         
                        <input id="new-loans-volume-input" type="range" value="46000000" min="1" max="140000000"/>
                        <div class="left-quantity"></div>
                        <div class="right-quantity"></div>
                        <div class="track-quantity green"></div>
                    </div>
                </div>
                <div class="calc-item">
                    <label>Open Loans Volume</label>
                     <div class="border-quantity">                            
                      <label class="label-quantity"><span class="sign">$</span><span class="label-quantity-value">112,000,000</span></label>
                      <input id="open-loans-volume-input" class="quantity-open-loans" type="range" value="112000000" min="1" max="140000000"/>
                      <div class="left-quantity"></div>
                      <div class="right-quantity"></div>
                      <div class="track-quantity yellow"></div>
                    </div>
                </div>
                <div class="calc-item">
                    <label>Percentage staked</label>
                     <div class="border-quantity">   
                      <label class="label-quantity"><span class="label-quantity-value">24</span><span class="percent">%</span></label>
                      <input id="percentage-staked-input" class="quantity-tokens-staked" type="range" value="24" min="1" max="100"/>
                      <div class="left-quantity"></div>
                      <div class="right-quantity"></div>
                      <div class="track-quantity blue"></div>
                  </div>
                </div>
                <p class="descriptoin">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas pellentesque in vitae tellus viverra accumsan pharetra.</p>
            </div>
            <div>
                <p class="title">Your Profit:</p>
                <div class="wrapper-profit">
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



<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/chart.js@2.9.3/dist/Chart.min.js"></script>
<script type="text/javascript" src="/assets/js/staking-calculator.js"></script>