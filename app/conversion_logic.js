
//the char array allows conversion in the function below
const char = [['M', 1000], ['CM', 900], ['D', 500], ['CD', 400],
    [ 'C',  100], ['XC',   90],[ 'L',   50], ['XL',   40], [ 'X',   10],['IX',    9],
    [ 'V',    5], ['IV',    4],[ 'I',    1]];
  
module.exports = {
    inRoman1: (pt) => {
        function beRepeat(stay, char)
        {
            if (stay == 0) return '';
            //The destructuring makes possible to unpack values from characters array "char"
            const [[numeral, valueChar], ...line] = char;
            return numeral.repeat(stay / valueChar) +
//(%) returns the remainder left over when one operand is divided by a second operand.
                beRepeat(stay % valueChar, line);
        };
        return beRepeat(pt, char);
    }
}  
// console.log('test 1',inRoman1(1));
// console.log('test 2',inRoman1(0));
// console.log('test 3',inRoman1(2587));
// console.log('test 4',inRoman1(1597));
// console.log('test 5',inRoman1(9999));
// console.log('test 6',inRoman1(55));

