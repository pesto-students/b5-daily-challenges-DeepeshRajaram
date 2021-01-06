const alphabeticShift = input => {
  let output = '';
  for (const char of input) {
    output += String.fromCharCode(char.charCodeAt() + 1);
  }
  return output;
};

export { alphabeticShift };
