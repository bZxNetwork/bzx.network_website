(function () {
    const bzrxInput = document.getElementById("bzrx-input");
    const tradingVolumeInput = document.getElementById("trading-volume-input");
    const newLoansVolumeInput = document.getElementById("new-loans-volume-input");
    const openLoansVolumeInput = document.getElementById("open-loans-volume-input");

    const monthlyProfitSpan = document.getElementById("monthly-profit-value");
    const weeklyProfitSpan = document.getElementById("weekly-profit-value");
    const dailyProfitSpan = document.getElementById("daily-profit-value");

    const barChartOptions = {
        type: 'bar',
        data: {},
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: {
                duration: 0
            },
            hover: {
                animationDuration: 0
            },
            responsiveAnimationDuration: 0,
            legend: {
                display: false,
            },
            scales: {
                yAxes: [{
                    gridLines: {
                        display: false,
                        drawTicks: false,
                        drawBorder: false
                    },
                    ticks: {
                        display: false
                    }
                }],
                xAxes: [{
                    gridLines: {
                        display: false,
                        drawTicks: false,
                        drawBorder: false
                    },
                    ticks: {
                        display: false
                    }
                }]
            }
        }
    }
    const dailyCtx = document.getElementById('bar-chart-daily').getContext('2d');
    const weeklyCtx = document.getElementById('bar-chart-weekly').getContext('2d');
    const monthlyCtx = document.getElementById('bar-chart-monthly').getContext('2d');
    window.dailyBar = new Chart(dailyCtx, barChartOptions);
    window.weeklyBar = new Chart(weeklyCtx, barChartOptions);
    window.monthlyBar = new Chart(monthlyCtx, barChartOptions);

    const circulatingSupply = 140610067;

    const tradingVolumeFeePercent = 0.15;
    const newLoanVolumeFeePercent = 0.09;

    const openLoansSpreadPercent = 10;
    const yearlyIPYPercent = 9 / openLoansSpreadPercent;
    const dailyIPYPercent = yearlyIPYPercent / 365;

    const multiplier = {
        day: 1,
        week: 7,
        month: 30,
        year: 365
    }

    const getProtocolCashFlowForPeriod = (dailyTradingVolume, dailyNewLoanVolume, openLoans, period) => {
        if (!["day", "week", "month", "year"].includes(period)) return;
        return dailyTradingVolume * multiplier[period] * tradingVolumeFeePercent / 100
            + dailyNewLoanVolume * multiplier[period] * newLoanVolumeFeePercent / 100
            + openLoans * dailyIPYPercent * multiplier[period] / 100;
    }

    const getTokensStakedPercent = (stakedTokens) => {
        return stakedTokens / circulatingSupply * 100;
    }

    const getStakingProfit = (protocolCashFlow, tokensStakedPercent) => {
        return protocolCashFlow * tokensStakedPercent / 100;
    }

    const getInputValues = () => {
        return {
            bzrxInputValue: bzrxInput.value,
            tradingVolumeInputValue: tradingVolumeInput.value,
            newLoansVolumeInputValue: newLoansVolumeInput.value,
            openLoansVolumeInputValue: openLoansVolumeInput.value,
        }
    }

    const getProfits = (inputValues) => {
        const tokensStakedPercent = getTokensStakedPercent(inputValues.bzrxInputValue);

        const dailyProtocolCashFlow = getProtocolCashFlowForPeriod(inputValues.tradingVolumeInputValue, inputValues.newLoansVolumeInputValue, inputValues.openLoansVolumeInputValue, "day");
        const weeklyProtocolCashFlow = getProtocolCashFlowForPeriod(inputValues.tradingVolumeInputValue, inputValues.newLoansVolumeInputValue, inputValues.openLoansVolumeInputValue, "week");
        const monthlyProtocolCashFlow = getProtocolCashFlowForPeriod(inputValues.tradingVolumeInputValue, inputValues.newLoansVolumeInputValue, inputValues.openLoansVolumeInputValue, "month");
        const yearlyProtocolCashFlow = getProtocolCashFlowForPeriod(inputValues.tradingVolumeInputValue, inputValues.newLoansVolumeInputValue, inputValues.openLoansVolumeInputValue, "year");

        const dailyProfit = getStakingProfit(tokensStakedPercent, dailyProtocolCashFlow);
        const weeklyProfit = getStakingProfit(tokensStakedPercent, weeklyProtocolCashFlow);
        const monthlyProfit = getStakingProfit(tokensStakedPercent, monthlyProtocolCashFlow);
        const yearlyProfit = getStakingProfit(tokensStakedPercent, yearlyProtocolCashFlow);
        return { dailyProfit, weeklyProfit, monthlyProfit, yearlyProfit };
    }

    const updateProfitLabels = (profitValues) => {
        monthlyProfitSpan.textContent = numberWithCommas(profitValues.monthlyProfit.toFixed(2));
        weeklyProfitSpan.textContent = numberWithCommas(profitValues.weeklyProfit.toFixed(2));
        dailyProfitSpan.textContent = numberWithCommas(profitValues.dailyProfit.toFixed(2));
    }

    const updateBarChartWithPeriod = (barChart, period, dailyTradingVolume, dailyNewLoanVolume, openLoans) => {
        if (!["day", "week", "month", "year"].includes(period)) return;
        
        const barChartData = {
            labels: ["Daily", "Weekly", "Monthly"],
            datasets: [
                {
                    backgroundColor: "red",
                    data: [dailyTradingVolume * multiplier[period]]
                },
                {
                    backgroundColor: "green",
                    data: [dailyNewLoanVolume * multiplier[period]]
                },
                {
                    backgroundColor: "yellow",
                    data: [openLoans]
                }
            ]

        }
        barChart.data = barChartData;
        barChart.update();
    }

    const onInputChange = () => {

        const inputValues = getInputValues();
        const profitValues = getProfits(inputValues);
        updateProfitLabels(profitValues);

        updateBarChartWithPeriod(window.dailyBar, "day", inputValues.tradingVolumeInputValue, inputValues.newLoansVolumeInputValue, inputValues.openLoansVolumeInputValue);
        updateBarChartWithPeriod(window.weeklyBar, "week", inputValues.tradingVolumeInputValue, inputValues.newLoansVolumeInputValue, inputValues.openLoansVolumeInputValue);
        updateBarChartWithPeriod(window.monthlyBar, "month", inputValues.tradingVolumeInputValue, inputValues.newLoansVolumeInputValue, inputValues.openLoansVolumeInputValue);


    }


    bzrxInput.addEventListener("change", onInputChange, false);
    tradingVolumeInput.addEventListener("change", onInputChange, false);
    newLoansVolumeInput.addEventListener("change", onInputChange, false);
    openLoansVolumeInput.addEventListener("change", onInputChange, false);
    onInputChange();

    function numberWithCommas(x) {
        const parts = x.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }


})();