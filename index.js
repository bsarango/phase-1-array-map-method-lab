const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = (() => {   //will destructively change tutorials since global variable is being used
  return tutorials.map((titles) => {   //map function as an anonymous function
    const splitTitles = titles.split(" ") //splits stirng into an array of each individual word
    return splitTitles.map((wordOfTitle)=>{    //map out the new array to check individual word
        //check to see if the first letter is capitalized
        return wordOfTitle.charAt(0).toUpperCase() + wordOfTitle.slice(1) //return capitalized Word
    }).join(" ")
    //return splitTitles.join(" ") //convert the array of words to strings
  })
  //const brokenUpTitle = tutorials.split(" ") //Breaks up title string into individaul words stored in individual indexes in the stated array
  //for(const word in brokenUpTitle){
    //if(word.charAt(0) !== (word.charAt(0)).toUpperCase){  //Checks to see if the first letter of the word in the array for the Title is capital or not.
      //titleCasedTitle = titleCasedTitle + " " + word.charAt(0).toUpperCase + word.slice(1);
    //}
    //else{
      //titleCasedTitle = titleCasedTitle + " " + word;
    //}
  //}
  //return tutorials;
})
  //return tutorials // This should return a new array, not tutorials


