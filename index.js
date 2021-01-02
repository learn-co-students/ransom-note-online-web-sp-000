function buildHistogram(magazine) {
    let sortedMagazine = magazine.sort();
    let histogram = {};

    sortedMagazine.map( function(letter) {
        if (histogram[letter]) {
            histogram[letter] = histogram[letter] + 1;
        } else {
            histogram[letter] = 1;
        }
    });

    return histogram;
}

function buildHistogramUntilLetterFound(cutMagazine, histogram, letter) {

    let i = 0; 

    while (i < cutMagazine.length) {
        let magLetter = cutMagazine.shift();

        if (histogram[magLetter]) {
            histogram[magLetter] = histogram[magLetter] + 1;
        } else {
            histogram[magLetter] = 1;
        }

        if (magLetter === letter) {
            return histogram;
        } else {
            i = i + 1;
        }
    }

    return histogram;
}

function canBuildNote(magazine, note) {
    let histogram = buildHistogram(magazine);
    let noteArray = note.split('');
    let boolean = true;

    for (const letter of noteArray) {
        if (histogram[letter] && histogram[letter] > 0) {
            histogram[letter] = histogram[letter] - 1
        } else {
            boolean = false;
            break;
        }
    } 
    return boolean;
    // let noteArray = note.split('');
    // let histogram = {};
    // // start at first letter

    // noteArray.map( (function(letter) {
    //     // if the histogram includes the letter and it's greater than 1, subtract from histogram and move on to second letter
    //     if (histogram[letter] && histogram[letter] > 0) {
    //         histogram[letter] = histogram[letter] - 1;
    //     // otherwise, go to the magazine and begin building a histogram
    //     } else {
    //         histogram = buildHistogramUntilLetterFound(magazine, histogram, letter);

    //         if (histogram[letter]) {
    //             histogram[letter] = histogram[letter] - 1;
    //         } else {
    //             return false;
    //         }
    //     }
    // }))


    // return true;
    // build histogram until letter is reached 
    // if letter is never reached, return false
    // if letter is reached, add it to the histogram, then subtract 1 from the total quantity and move on the next letter 

    // let magazineHistogram = buildHistogram(magazine);

    // let noteArray = note.split("");
    // noteArray.map( function(letter) {
    //     if (magazineHistogram[letter] && magazineHistogram[letter] > 0) {
    //         magazineHistogram[letter] = magazineHistogram[letter] - 1;
    //     } else {
    //         return false;
    //     }
    // })

    // return true;
}