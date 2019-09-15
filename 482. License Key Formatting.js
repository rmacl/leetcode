var licenseKeyFormatting = function(S, K) {
     let result = "";
     let kIndex = K;
     for(let index = S.length-1; index >=0; index--){
         if(S.charAt(index) == "-"){
             continue;
         }
          let word = (result.length % (K+1) == K && index != S.length-1) ? S.charAt(index).toUpperCase() + '-' : S.charAt(index).toUpperCase();
         result = word + result;
     }
     return result;
};
