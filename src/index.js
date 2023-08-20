module.exports = function toReadable (number) {
    let numberSmall = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let numberRound = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'thousand'];
    let humanReadable = 'zero';
    if (number < 20) { 
        humanReadable = numberSmall[number-1]; 
    }
    else 
        if (toString(number).length == 2 ) {
            if (+toString(number).slice(-1) == 0) {
                humanReadable = numberRound[+toString(number).slice(0, 1) - 2];
            }
            else {
                humanReadable = numberRound[+toString(number).slice(0, 1) - 1] + ' ' + numberSmall[+toString(number).slice(-1) - 1];
            }
        }
        else
            if (toString(number).length == 3) {
                if (+toString(number).slice(-1) == 0) {
                    humanReadable = numberSmall[+toString(number).slice(0, 1) - 1] + ' hundred ' + numberRound[+toString(number).slice(1, 2) - 1];
                }
                else 
                    if (+toString(number).slice(1, 2) == 0) {
                        humanReadable = numberSmall[+toString(number).slice(0, 1) - 1] + ' hundred ' + numberSmall[+toString(number).slice(-1) - 1];
                    }
                    else {
                        humanReadable = numberSmall[+toString(number).slice(0, 1) - 1] + ' hundred ' + numberRound[+toString(number).slice(1, 2) - 1] + ' ' + numberSmall[+toString(number).slice(-1) - 1];
                    }
            }
    return humanReadable;
}
