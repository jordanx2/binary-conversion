function binaryAgent(str) {
  // 128 64 32 16 8 4 2 1

  // remove all of whitespace from the binary input. store in new variable
  let newStr = str.replace(/\s/g, "");

  // regex to match to every 8 byte binary number 
  let regex = /\d\d\d\d\d\d\d\d/g;

  // array created by using `.match()` which stores our binary numbers 
  let bytes = newStr.match(regex);
  let numArr = [];
  let ans = '';

  for(let i = 0; i < bytes.length; i++){
    let result = 0;
    for(let j = 0; j < bytes[i].length; j++){
      // 0 === 1
      if(bytes[i][j].indexOf(0)){
        switch(j){
          case 0:
            result += 128;
            break;
          case 1:
            result += 64;
            break;
          case 2:
            result += 32;
            break;
          case 3:
            result += 16;
            break;
          case 4:
            result += 8;
            break;
          case 5:
            result += 4;
            break;
          case 6:
            result += 2;
            break;
          case 7:
            result += 1;
            break;
        } // end switch
        
      } //end if 
      
    } // end for
    numArr.push(result);
  } // end for 

  for(let i = 0; i < numArr.length; i++){
    let answer = String.fromCharCode(numArr[i]);
    ans += answer;
  }
  
  return ans;
}




