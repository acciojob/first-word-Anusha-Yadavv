function firstWord(s) {
  // your code here
	s=s.trim();
	let first_word="";
	let n=s.length;
	for(let i=0;i<n;i++){
		if(s[i]=" "){
			return;
		}else{
			first_word+=s[i];
		}
	}
	return first_word;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
