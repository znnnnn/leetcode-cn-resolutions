/**
  * @param {string[]} words
  * @return {number}
  */
 var uniqueMorseRepresentations = function (words) {
  var wordList = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.",
    "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."
  ];
  var result = [];
  for (i of words) {
    let str = ''
    for (let j = 0; j < i.length; j++) {
      str += wordList[i[j].charCodeAt() - 97];
    }
    result.push(str)
  }
  return [...new Set(result)].length
};