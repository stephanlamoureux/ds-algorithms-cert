function cipher(str, n) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';

  return str.replace(/[a-z]/gi, letter => alphabet[alphabet.indexOf(letter) + n]);
}

console.log(cipher("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.", 13))