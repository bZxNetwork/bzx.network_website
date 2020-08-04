(function () {
    const bzrxInput = document.getElementById("bzrx-input");
    const tradingVolumeInput = document.getElementById("trading-volume-input");
    const newLoansVolumeInput = document.getElementById("new-loans-volume-input");
    const openLoansVolumeInput = document.getElementById("open-loans-volume-input");

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

    const getProtocolCashFlowForPeriod = (dailyTradingVolume, dailyNewLoanVolume, dailyOpenLoans, period) => {
        if (!["day", "week", "month", "year"].includes(period)) return;
        return dailyTradingVolume * multiplier[period] * tradingVolumeFeePercent / 100
            + dailyNewLoanVolume * multiplier[period] * newLoanVolumeFeePercent / 100
            + dailyOpenLoans * multiplier[period] * dailyIPYPercent * multiplier[period] / 100;
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

    const getProfits = () => {
        const inputValues = getInputValues();
        const tokensStakedPercent = getTokensStakedPercent(inputValues.bzrxInputValue);

        const dailyProtocolCashFlow = getProtocolCashFlowForPeriod(inputValues.tradingVolumeInputValue, inputValues.newLoansVolumeInputValue, inputValues.openLoansVolumeInputValue, "day");
        const weeklyProtocolCashFlow = getProtocolCashFlowForPeriod(inputValues.tradingVolumeInputValue, inputValues.newLoansVolumeInputValue, inputValues.openLoansVolumeInputValue, "week");
        const monthlyProtocolCashFlow = getProtocolCashFlowForPeriod(inputValues.tradingVolumeInputValue, inputValues.newLoansVolumeInputValue, inputValues.openLoansVolumeInputValue, "month");
        const yearlyProtocolCashFlow = getProtocolCashFlowForPeriod(inputValues.tradingVolumeInputValue, inputValues.newLoansVolumeInputValue, inputValues.openLoansVolumeInputValue, "year");

        const dailyProfit = getStakingProfit(tokensStakedPercent, dailyProtocolCashFlow);
        const weeklyProfit = getStakingProfit(tokensStakedPercent, weeklyProtocolCashFlow);
        const monthlyProfit = getStakingProfit(tokensStakedPercent, monthlyProtocolCashFlow);
        const yearlyProfit = getStakingProfit(tokensStakedPercent, yearlyProtocolCashFlow);
        return {dailyProfit, weeklyProfit, monthlyProfit, yearlyProfit};
    }
})();