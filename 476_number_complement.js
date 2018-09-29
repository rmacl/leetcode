var findComplement = function(num) {
    var aBinary = num.toString(2).split('');
    var sResult = 0;
    aBinary.map((iBinary)=>  {
        iBinary = (iBinary == 1 ) ? '0' : '1';
        sResult += iBinary; 
    });
    return parseInt(sResult, 2);
};