const allElements = { 
  inputField: document.getElementById('field-box1'),
  outputField: document.getElementById('field-box2'),  
  generateBtn: document.getElementById('sumbit-button'),
  resetBtn: document.getElementById('reset-button'),
  resultP: document.getElementById('test'),
  dropOptions: document.getElementsByClassName('options'),
  arrowImage: document.getElementById('arrow'),
  selectBtn: document.getElementById('select-button'),
  exitBtn: document.getElementById('exit-button'),
  promptWin: document.getElementById('window-container'),
  infoWin: document.getElementById('info-window-container'),
  bodyTag: document.getElementsByTagName('body'),
  copyBtn: document.getElementById('copy-button'),
  outputResult: '',
  inputDropdown: '',
  outputDropdown: ''
};

allElements.generateBtn.addEventListener('click', function(){
	let x = allElements.inputField.value;
	if(x === ''){
		alert('empty field not vaild');
	}
	else{
    allElements.inputDropdown = allElements.dropOptions[0].value;
    allElements.outputDropdown = allElements.dropOptions[1].value;
    checkTranslation(allElements.inputDropdown, allElements.outputDropdown);
	}  // end else

});

allElements.resetBtn.addEventListener('click', function(){
	allElements.inputField.value = '';
	allElements.outputField.innerHTML = '';
})

allElements.arrowImage.addEventListener('click', function(){
  let dropOptionNew1 = allElements.dropOptions[0].value;
  let dropOptionNew2 = allElements.dropOptions[1].value;
  let fieldBoxNew1 = allElements.inputField.value;
  let fieldBoxNew2 = allElements.outputField.innerHTML;

  allElements.dropOptions[0].value = dropOptionNew2;
  allElements.dropOptions[1].value = dropOptionNew1;

  allElements.inputField.value = fieldBoxNew2;
  allElements.outputField.innerHTML = fieldBoxNew1;

  if(allElements.dropOptions[0].value === 'binary'){
    allElements.inputField.placeholder = 'enter your binary'; 
  }
  else{
    allElements.inputField.placeholder= 'enter your string';
  }
});

allElements.selectBtn.addEventListener('click', function(){
  // allElements.outputField.focus();
  allElements.outputField.select();
});

allElements.exitBtn.addEventListener('click', function(){
  allElements.promptWin.style.visibility = 'hidden';
  allElements.bodyTag[0].style.background = '#ffffff';
  allElements.inputField.style.background = '#ffffff';
  allElements.outputField.style.background = '#ffffff';
  allElements.generateBtn.style.background = ''
  allElements.selectBtn.style.background = ''
  allElements.resetBtn.style.background = ''
  allElements.copyBtn.style.background = ''
});

allElements.copyBtn.addEventListener('click', function(){
  allElements.promptWin.style.visibility = 'visible';
  allElements.bodyTag[0].style.background = '#a6a6a6';
  allElements.inputField.style.background = '#a6a6a6';
  allElements.outputField.style.background = '#a6a6a6';
  allElements.generateBtn.style.background = '#a6a6a6';
  allElements.selectBtn.style.background = '#a6a6a6';
  allElements.resetBtn.style.background = '#a6a6a6';
  allElements.copyBtn.style.background = '#a6a6a6';

//   window.addEventListener('click', function(event){
//   // let popValue = event.target.attributes.class.value;
//   // if(popValue === 'info-window-container'|popValue === 'window-container'
//   //   |popValue === 'info-window'){
//   //   console.log('success');
//   // }

//   if(event.target == promptWin){
//     allElements.promptWin.style.visibility = 'hidden';
//   }
  
//   // console.log(event.target.attributes);
// });

});




function checkTranslation(field1, field2){
  if(field1 === 'string' && field2 === 'binary'){
    allElements.outputResult = stringToNumber(allElements.inputField.value);
    allElements.outputField.innerHTML = allElements.outputResult;
  }

  else if(field1 === 'binary' && field2 === 'string'){
    allElements.outputResult = binaryConvert(allElements.inputField.value);   
    allElements.outputField.innerHTML = allElements.outputResult;
  }

  else{
    allElements.outputField.innerHTML = '???';
    alert('incompatible translation types'); 
  }
}

function binaryConvert(str) {
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

function stringToNumber(str){
  let resultStr = '';
  let letters = str.split('');
  let decimalNums = [];
  let binaryNums = [];
  for(let i = 0; i < letters.length; i++){
    decimalNums.push(letters[i].charCodeAt(0));  
    binaryNums.push('0'+Number(decimalNums[i]).toString(2));
  }

  binaryCheck(binaryNums);
  for(let i = 0; i < binaryNums.length; i++){
    resultStr += binaryNums[i];
  }
  return resultStr;
}

function binaryCheck(binaryNumber){
  let newBinaryNum;
  for(let i = 0; i < binaryNumber.length; i++){
    if(binaryNumber[i].length < 8 ){
      let subtract = 8 - binaryNumber[i].length;
      for(let j = 0; j < subtract; j++){
         newBinaryNum = '0'+binaryNumber[i];
      }
      binaryNumber[i] = newBinaryNum;
    }
  }
}
