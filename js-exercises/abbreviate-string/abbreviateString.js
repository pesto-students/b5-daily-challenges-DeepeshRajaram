function abbreviateString(str) {
    const wordArray = str.split(' ');
    return wordArray[0] + ' ' + (wordArray[wordArray.length-1][0]).toUpperCase() + ".";
}

export { abbreviateString };
