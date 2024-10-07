const decodeTheRing = function (s, p) {
  // write your code here
  if (p.length === 0) {
    return s.length === 0;
  }

  // If the first character of the key is a star, try all possible lengths for the star
  if (p[0] === "*") {
    for (let i = 0; i <= s.length; i++) {
      if (decodeTheRing(s.substring(i), p.substring(1))) {
        return true;
      }
    }
    return false;
  }

  // If the first character of the key is a question mark, try all possible replacements for the question mark
  if (p[0] === "?") {
    for (let i = 0; i < 26; i++) {
      const replacement = String.fromCharCode(i + 97); // Generate a lowercase letter
      if (
        decodeTheRing(s.substring(1), p.substring(1).replace("?", replacement))
      ) {
        return true;
      }
    }
    return false;
  }

  // If the first characters of the message and key match, try decoding the rest
  if (s[0] === p[0]) {
    return decodeTheRing(s.substring(1), p.substring(1));
  }

  // If none of the above conditions match, the message and key do not match
  return false;
};

module.exports = decodeTheRing;
