function buildHistogram(magazine){
  const hgram = {}
  for (const letter of magazine){
    if (hgram[letter]){
      hgram[letter] += 1
    } else {
      hgram[letter] = 1
    }
  }
  return hgram;
}

function canBuildNote(magazine, note){
  const noteLetters = buildHistogram(note);
  const availableLetters = buildHistogram(magazine);

  for (const letter in noteLetters) {
    if (availableLetters[letter] && noteLetters[letter]){
      if (availableLetters[letter] < noteLetters[letter])
        return false;
    } else {
      return false;
    }
  }
  return true;
}
