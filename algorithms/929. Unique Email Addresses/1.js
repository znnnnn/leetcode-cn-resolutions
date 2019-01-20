/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  const arr = emails.map((val) => {
      return (val.split('@')[0].replace(/\./g, '') + '@'+val.split('@')[1]).replace(/\+.*(?=@)/, '')
  })
  return [...new Set(arr)].length;
};