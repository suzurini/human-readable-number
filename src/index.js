module.exports = function toReadable (number) {
    let numberSmall = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let numberRound = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'thousand'];
    let humanReadable = 'zero';
    let numberLength = toString(number).length;
        console.log('numberLength = '+numberLength);
    if (number < 20) { 
        humanReadable = numberSmall[number-1]; 
    }
    else 
        if (toString(number).length == 2 ) {
            let firstSymbol = +toString(number).slice(0, 1);
            let lastSymbol = +toString(number).slice(-1);
            if (lastSymbol == 0) {
                humanReadable = numberRound[firstSymbol - 2];
            }
            else {
                humanReadable = numberRound[firstSymbol - 1] + ' ' + numberSmall[lastSymbol - 1];
            }
        }
        else
            if (toString(number).length == 3) {
                let firstSymbol = +toString(number).slice(0, 1);
                let middleSymbol =  +toString(number).slice(1, 2);
                let lastSymbol = +toString(number).slice(-1);
                if (lastSymbol == 0) {
                    humanReadable = numberSmall[firstSymbol - 1] + ' hundred ' + numberRound[middleSymbol - 1];
                }
                else 
                    if (middleSymbol == 0) {
                        humanReadable = numberSmall[firstSymbol - 1] + ' hundred ' + numberSmall[lastSymbol - 1];
                    }
                    else {
                        humanReadable = numberSmall[firstSymbol - 1] + ' hundred ' + numberRound[middleSymbol - 1] + ' ' + numberSmall[lastSymbol - 1];
                    }
            }
    return humanReadable;
}
