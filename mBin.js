/*
 *Author:Michael Ababio
 *Date: 11/21/2015
 *Purpose: Multiplying a pair of integers by converting to decimal
 * put a little spice in it!!!
*/


var mBin = function(int1,int2){
  
  var rule = int1.toString(2).split("")
  var pattern = int2.toString(2).split("")
  var binIndex = function(index, length){ return Math.abs(index -(length-1))}
  var tot =0
  var ruleLoop =  function(element,index,array){
      if(element==1){
	  for(i=0;i<pattern.length;i++){
	      if(pattern[i]==1){
		 tot+= Math.pow(2, (binIndex(index,array.length) + binIndex(i,pattern.length)))
	      }
	  }
      }
   }
    rule.forEach(ruleLoop);

    return tot
}
