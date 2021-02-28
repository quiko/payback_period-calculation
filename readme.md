# Payback period exercise

This is a little script that compute the payback period of an investement given an array of dataset.

# Formulas

incremental_cashflow_go  = revenue_ go −capex_go − opex _ go 
incremental _cashflow_nogo  = revenue_nogo  − capex _ nogo  − opex _ nogo 
incremental _cashflow  = incremental _cashflow_ go  − incremental _cashflow_ nogo 
Payback Period =	A +	B/C
        Where:
        A is the last year with a negative cumulative cashflow
        B is the absolute value of cumulative cashflow at the end of the year A
        C is the incremental cashflow during the year following  A

see: https://en.wikipedia.org/wiki/Payback_period ,https://xplaind.com/849768/payback-period

## Installation

```bash
git clone https://github.com/quiko/payback_period-calculation.git
cd ./payback_period-calculation
npm install
npm start
```

## Run tests
```bash
npm test
```


## License
[MIT](https://choosealicense.com/licenses/mit/)
