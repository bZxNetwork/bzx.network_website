(function () {
    const bzrxInput = document.getElementById("bzrx-input");
    const tradingVolumeInput = document.getElementById("trading-volume-input");
    const newLoansVolumeInput = document.getElementById("new-loans-volume-input");
    const openLoansVolumeInput = document.getElementById("open-loans-volume-input");
    const percentageStakedInput = document.getElementById("percentage-staked-input");

    const bzrxInputSpan = document.getElementById("bzrx-input-value");
    const monthlyProfitSpan = document.getElementById("monthly-profit-value");
    const weeklyProfitSpan = document.getElementById("weekly-profit-value");
    const dailyProfitSpan = document.getElementById("daily-profit-value");


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

    const getTokensStakedPercent = (stakedTokens, percentageStaked) => {
        return stakedTokens / (circulatingSupply * percentageStaked / 100) * 100;
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
            percentageStakedInputValue: percentageStakedInput.value
        }
    }

    const getProfits = (inputValues) => {
        const tokensStakedPercent = getTokensStakedPercent(inputValues.bzrxInputValue, inputValues.percentageStakedInputValue);

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
    const changePositionBorderThumb = (range,) => {
        let border = range.closest(".border-quantity");
        let leftRangeQuantity = border.querySelector(".left-quantity");
        let rightRangeQuantity = border.querySelector(".right-quantity");
        let trackRangeQuantity = border.querySelector(".track-quantity");
        let valueRangeQuantity = border.querySelector(".label-quantity-value");
        valueRangeQuantity.textContent = numberWithCommas(range.value);
        trackRangeQuantity.style.width = 'calc(' + range.value / (range.max) * 100 + '% - 12px - (16px *' + (range.value - (range.max) / 2) / range.max + '))';
        changePositionLabelValue(range);
    }

    const changePositionLabelValue = (range) => {
        let border = range.closest(".border-quantity");
        let labelRangeQuantity = border.querySelector(".label-quantity");
        let widthLabelRangeQuantity = labelRangeQuantity.offsetWidth;
        labelRangeQuantity.style.left = 'calc(' + range.value / (range.max) * 100 + '% - (1px *' + (widthLabelRangeQuantity / 2) + '))';
    }
    const onInput = () => {
        if (bzrxInput.value > 14000000) bzrxInput.value = 14000000;
        else if (!(bzrxInput.value > 0)) bzrxInput.value = "";

        bzrxInputSpan.textContent = numberWithCommas(bzrxInput.value);
    }

    const onChangeRange = (event) => {
        let target = event.target;
        changePositionBorderThumb(target, target);
        changePositionLabelValue(target);
        onInputChange();
    }

    const onInputChange = () => {
        const inputValues = getInputValues();
        const profitValues = getProfits(inputValues);
        updateProfitLabels(profitValues);
    }
    bzrxInput.addEventListener("input", onInput, false);

    bzrxInput.oninput = onInputChange;
    tradingVolumeInput.oninput = onChangeRange;
    changePositionBorderThumb(tradingVolumeInput);
    newLoansVolumeInput.oninput = onChangeRange;
    changePositionBorderThumb(newLoansVolumeInput);
    openLoansVolumeInput.oninput = onChangeRange;
    changePositionBorderThumb(openLoansVolumeInput);
    percentageStakedInput.oninput = onChangeRange;
    changePositionBorderThumb(percentageStakedInput);

    onInput();
    onInputChange();

    function numberWithCommas(x) {
        const parts = x.toString().split(".");

        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }
})();