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
    const percentageStakedAmountSpan = document.getElementById("percentage-staked-amount");

    //const baseCirculatingSupply = 140000000;
    const maxCirculatingSupply = 412000000


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
        return stakedTokens / (maxCirculatingSupply * percentageStaked / 100) * 100;
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
    const changePositionBorderThumb = (range, ) => {
        let border = range.closest(".border-quantity");
        let leftRangeQuantity = border.querySelector(".left-quantity");
        let rightRangeQuantity = border.querySelector(".right-quantity");
        let trackRangeQuantity = border.querySelector(".track-quantity");
        let valueRangeQuantity = border.querySelector(".label-quantity-value");
        valueRangeQuantity.textContent = numberWithCommas(range.value);
        const thumbSize = 16;
        const ratio = (range.value - range.min) / (range.max - range.min)
        trackRangeQuantity.style.width = `calc( 1px * ${ratio * (range.offsetWidth - thumbSize)} + 1px *${thumbSize} - 1px * ${thumbSize + 4})`;
        changePositionLabelValue(range);

        const percentageStakedAmount = maxCirculatingSupply * valueRangeQuantity.textContent / 100;
        percentageStakedAmountSpan.textContent = numberWithCommas(percentageStakedAmount.toFixed(0));
    }

    const changePositionLabelValue = (range) => {
        let border = range.closest(".border-quantity");
        let labelRangeQuantity = border.querySelector(".label-quantity");
        let getBoundingClientRectBorder = border.getBoundingClientRect();
        let getBoundingClientRectLabel = labelRangeQuantity.getBoundingClientRect();

        let getPositionTrack = getBoundingClientRectBorder.width * range.value / range.max + 16 * (range.value - range.max / 2) / range.max;

        if (getPositionTrack < getBoundingClientRectLabel.width / 2) {
            labelRangeQuantity.style.left = '0';
        } else if (getBoundingClientRectBorder.width - getPositionTrack < getBoundingClientRectLabel.width / 2) {
            labelRangeQuantity.style.left = 'calc(100% - 1px*' + getBoundingClientRectLabel.width + ')';
        } else {
            labelRangeQuantity.style.left = 'calc(' + range.value / (range.max) * 100 + '% - (1px *' + (getBoundingClientRectLabel.width / 2) + '))';
        }
    }
    const onInput = () => {
        if (bzrxInput.value > maxCirculatingSupply) bzrxInput.value = maxCirculatingSupply;
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
