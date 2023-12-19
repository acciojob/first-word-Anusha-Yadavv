function firstWord(s) {
  // your code here
	s=s.trim();
	if(s==" "){
		return " ";
	}

	let firstSpceIndex=s.indexOf(" ");
	if(firstSpceIndex===-1){
		return s;
	}
	let subString=s.substring(0,firstSpceIndex);
	return subString;
	
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
