/**
 * @param {string[]} cpdomains
 * @return {string[]}
 */
var subdomainVisits = function(cpdomains) {
    var oDomain = {};
    var iNumber = 0;
    var aResult = [];


    for(var i=0; i<cpdomains.length; i++){
        aDomainWithNumber = cpdomains[i].split(' ')
        iNumber = aDomainWithNumber[0];
        sEachDomain = aDomainWithNumber[1];
        aEachDomain = sEachDomain.split('.');

        var iEachDomainLength = aEachDomain.length;

        var sNewDomain = '';

        for(var j= iEachDomainLength-1 ; j >= 0; j--){

            var sWord = aEachDomain[j];

            if(j != iEachDomainLength-1){
                sNewDomain = "".concat(sWord, '.', sNewDomain);
            } else{
                sNewDomain = sWord;
            }

            if(!oDomain[sNewDomain]){
                oDomain[sNewDomain] = parseInt(iNumber,10);
            }else{
                iTotal = parseInt(iNumber,10) + parseInt(oDomain[sNewDomain],10);
                oDomain[sNewDomain] = iTotal;
            }

        }
    }
    aResult =Object.keys(oDomain).map(sDomain => {return oDomain[sDomain] + " " + sDomain;})
    return aResult;
};
