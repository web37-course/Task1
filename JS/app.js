
//Standard deduction 12,550

//10%	Up to $9,950
//12%	$9,951 to $40,525
//22%	$40,526 to $86,375
//24%	$86,376 to $164,925
//32%	$164,926 to $209,425
//35%	$209,426 to $523,600
//37%	$523,601 or more

let stdDeduction = 12550;

let grossIncome = 55000;

let taxableIncome = grossIncome - stdDeduction;

let taxAmount = 0;

let taxRateBrackets = [0.1, 0.12, 0.22, 0.24, 0.32, 0.35, 0.37];

let taxRateMargins = [9950, 40525, 86375, 164925, 209425, 523600];

let taxRateMarginsDiff = [];

for(let i = 1; i <= taxRateMargins.length - 1; i++){
    taxRateMarginsDiff.push(taxRateMargins[i] - taxRateMargins[i-1]);
}

taxRateMarginsDiff.unshift(taxRateMargins[0]);

taxRateMarginsDiff.push(Number.POSITIVE_INFINITY);

console.log(taxRateMarginsDiff);



for(let i = 0; i <= taxRateBrackets.length; i++){
    if(taxableIncome <= taxRateMarginsDiff[i]){
        taxAmount += taxableIncome * taxRateBrackets[i];
        break;
    }else{
        taxAmount += taxRateBrackets[i] * taxRateMarginsDiff[i];
        taxableIncome -= taxRateMarginsDiff[i];
    }
}

console.log(taxAmount);


