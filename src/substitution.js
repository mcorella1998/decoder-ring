// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  function substitution(input, alphabet, encode = true) {
    
    if (!alphabet || alphabet.length !== 26) {
      return false;
    }

    const alphaSet = new Set(alphabet);
    if (alphaSet.size !== 26) {
      return false;
    }

    const standardAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const substitutionAlphabet = alphabet.toLowerCase();
    const result = [];

    for (let i = 0; i < input.length; i++) {
      const char = input[i].toLowerCase();
      if (encode && standardAlphabet.includes(char)) {
        const index = standardAlphabet.indexOf(char);
        result.push(substitutionAlphabet[index]);
      } else if (!encode && substitutionAlphabet.includes(char)) {
        const index = substitutionAlphabet.indexOf(char);
        result.push(standardAlphabet[index]);
      } else {
        result.push(input[i]); // Maintain special characters and spaces
      }
    }

    return result.join("");
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };




