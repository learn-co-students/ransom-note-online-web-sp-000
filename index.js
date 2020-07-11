function buildHistogram(magazine)
{
  let histogram = [];
  let sortedMagazine = mergeSort(magazine)
  for(let i = 0; i < magazine.length; i++)
  {
    if(!histogram[`${magazine[i]}`])
    {
      histogram[`${magazine[i]}`] = 1
    }
    else
    {
      histogram[`${magazine[i]}`] += 1
    }
  }
  return histogram
}

function canBuildNote(magazine, note)
{
  let histogram = buildHistogram(magazine)
  for(let i = 0; i < note.length; i++)
  {
    if(histogram[`${note[i]}`] === 0)
    {
      return false
    }
    else if(!histogram[`${note[i]}`])
    {
      return false
    }
    else
    {
      histogram[`${note[i]}`] -= 1
    }
  }
  return true
}


///Merge sort with .charCodeAt comparisons

function mergeSort(array)
{
  let middle = array.length / 2
  let firstHalf = array.slice(0, middle)
  let secondHalf = array.slice(middle, array.length)
  
  if(array.length < 2)
  {
    return array
  }
  else
  {
    return merge(mergeSort(firstHalf), mergeSort(secondHalf));
  }
}

function merge(firstArray, secondArray)
{
  let sortedArray = [];
  while(firstArray.length > 0 && secondArray.length > 0)
  {
    if(firstArray[0].charCodeAt() < secondArray[0].charCodeAt())
    {
      let min = findMinAndRemoveSorted(firstArray)
      sortedArray.push(min);
    }
    else
    {
      let min = findMinAndRemoveSorted(secondArray)
      sortedArray.push(min);
    }
  }
  return sortedArray.concat(firstArray).concat(secondArray);
}

function findMinAndRemoveSorted(array)
{
  return array.shift()
}