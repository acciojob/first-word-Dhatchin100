function firstWord(s) {
   const words = str.split(' ');
    return words.length > 0 ? words[0] : str;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
alert(firstWord(s));