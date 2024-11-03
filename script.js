function mapLetters(word) {
  const result = {};

  for (let i = 0; i < word.length; i++) {
    const letter = word[i];
    if (!result[letter]) {
      result[letter] = [];
    //  console.log(`Created new array for ${letter}: ${letter}: []`);
    }
    result[letter].push(i);
  //  console.log(`After pushing index ${i}, ${letter}: ${result[letter]}`);
  }

  return result;
}

// Example
console.log(mapLetters("dodo"));
