export const shuffleCards = (arr : string[]) => {
  const start = Math.floor(Math.random() * (arr.length - (8 - 1)))
  const end = start + 8
  const randomedSlicedArray = arr.slice(start, end)
  const copyOfRandomedSlicedArray = randomedSlicedArray
  return [...randomedSlicedArray, ...copyOfRandomedSlicedArray].sort(() => Math.random() - 0.5)
}

  

