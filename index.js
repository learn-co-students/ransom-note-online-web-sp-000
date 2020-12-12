function buildHistogram(magazine) {
    let histogram = {}

    for (let letter of magazine) {
        histogram[letter] ? histogram[letter] += 1 : histogram[letter] = 1;
    }

    return histogram;
}

function canBuildNote(magazine, note) {
    let histogram = buildHistogram(magazine);

    for (let letter of note) {
        if (histogram[letter] && histogram[letter] > 0) {
            histogram[letter] -= 1
        }
        else {
            return false;
        }
    } 

    return true;
}