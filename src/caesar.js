// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (!input || shift === undefined || shift === 0 || shift < -25 || shift > 25 || typeof input !== "string" || typeof shift !== "number") {
      return false;
    }
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const alphabetArr = alphabet.split("");

 
    const inputLowerCase = input.toLowerCase();


    let result = "";


    for (let i = 0; i < inputLowerCase.length; i++) {
   
      const currentChar = inputLowerCase[i];

      
      if (alphabetArr.includes(currentChar)) {
      
        const currentIndex = alphabetArr.indexOf(currentChar);

       
        let newIndex;
        if (encode) {
          newIndex = currentIndex + shift;
        } else {
          newIndex = currentIndex - shift;
        }

     
        while (newIndex < 0) {
          newIndex = newIndex + alphabetArr.length;
        }
        while (newIndex >= alphabetArr.length) {
          newIndex = newIndex - alphabetArr.length;
        }

     
        result += alphabetArr[newIndex];
      } else {

        result += currentChar;
      }
    }

  
    if (!encode) {
      shift = -shift;
    }

 
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };




