/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
  const reg=/^([A-Z][a-z]+|[a-z]+|[A-Z]+)$/;
  return reg.test(word);
};