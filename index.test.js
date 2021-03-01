import { calculate_incremental_cashflow, calculate_cumulative_cashflow , calculate_payback_period} from './index';
import data from './data';


test('properly calculate incremental cashflow', () => {
    const incremental_cashflow = {
        "investment_id": "12JXK5",
        "year": 0,
        "incremental_cashflow": -50000
    };
    const investment = {
        "investment_id": "12JXK5",
        "year": 0,
        "revenue_go": 0.0,
        "capex_go": 30000.0,
        "opex_go": 10000.0,
        "revenue_nogo": 15000.0,
        "capex_nogo": 0.0,
        "opex_nogo": 5000.0
    };
    expect(calculate_incremental_cashflow(investment)).toEqual(incremental_cashflow);
});

test('properly calculate cumulative cashflow', () => {
    const incremental_cashflow_array = [
        { investment_id: '12JXK5', year: 0, incremental_cashflow: -50000 },
        { investment_id: '12JXK5', year: 1, incremental_cashflow: 10000 },
        { investment_id: '12JXK5', year: 2, incremental_cashflow: 30000 },
        { investment_id: '12JXK5', year: 3, incremental_cashflow: 35000 }
    ];
    const cumulative_cashflow_array= [
        { investment_id: '12JXK5', year: 0, cashflow: -50000 },
        { investment_id: '12JXK5', year: 1, cashflow: -40000 },
        { investment_id: '12JXK5', year: 2, cashflow: -10000 },
        { investment_id: '12JXK5', year: 3, cashflow: 25000 }
    ];
    expect(calculate_cumulative_cashflow(incremental_cashflow_array)).toEqual(cumulative_cashflow_array)
});

test('properly compute payback period', () => {
    expect(calculate_payback_period(data,"12JXK5")).toBe(2.29)
});
test('properly compute payback period', () => {
    expect(calculate_payback_period(data, "HT4AA2")).toBe("we do not have enough data to calculate the payback period");
});
test('properly compute payback period', () => {
    expect(calculate_payback_period(data, 123)).toBe("this id does not exist");
});
