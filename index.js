export const calculate_incremental_cashflow = obj => {

    const incremental_cashflow_go = obj.revenue_go - obj.capex_go - obj.opex_go;
    const incremental_cashflow_nogo = obj.revenue_nogo - obj.capex_nogo - obj.opex_nogo;
    return {
        investment_id: obj.investment_id,
        year: obj.year,
        incremental_cashflow: incremental_cashflow_go - incremental_cashflow_nogo
    };
}
export const calculate_cumulative_cashflow = array => {
    let new_array = [];
    array.reduce((acc, curr) => {
        acc = acc + curr.incremental_cashflow;
        new_array.push({
            investment_id: curr.investment_id,
            year: curr.year,
            cashflow: acc
        });
        return acc;
    }, 0);
    return new_array;
}
export const calculate_payback_period = (data, id) =>{

    //exctract the investement metrics that belongs to the given id
    const investment_yearly_metrics = data.filter(item => item.investment_id === id);

    //calculate incremental cashflow
    const incremental_cashflow = investment_yearly_metrics.map(item => calculate_incremental_cashflow(item));

    //calculate cumulative cashflow
    const cumulative_cashflow = calculate_cumulative_cashflow(incremental_cashflow);

    //calculate payback_period 
    /* Payback Period =	A +	B/C
        Where:
        A is the last year with a negative cumulative cashflow
        B is the absolute value of cumulative cashflow at the end of the year A
        C is the incremental cashflow during the year following  A
    */
    let period;
    let period_cashflow;
    for (let i = 0; i < cumulative_cashflow.length; i++) {
        if (cumulative_cashflow[i + 1].cashflow > 0) {
            period = cumulative_cashflow[i].year;
            period_cashflow = Math.abs(cumulative_cashflow[i].cashflow);
            break;
        };
    };
    let next_period_incremental_cashflow = incremental_cashflow.find(item => item.year === period + 1).incremental_cashflow;
    return Number((period + (period_cashflow / next_period_incremental_cashflow)).toFixed(2));

}


