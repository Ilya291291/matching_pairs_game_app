const SMILES_ARRAY = ['0x1f600', '0x1f604', '0x1f923','0x1f643','0x1f607','0x1f929','0x1f911','0x1f922','0x1f976','0x1f92F','0x1f60E','0x1f632','0x1f631','0x1f621','0x1f608','0x1f480']

// export const SHUFFLED_SMILES_ARRAY = () => {
//     return duplicateCards(shuffleCards(SMILES_ARRAY),8)
// }

export const SHUFFLED_SMILES_ARRAY = () => {
  const start = Math.floor(Math.random() * (SMILES_ARRAY.length - (8 - 1)))
  const end = start + 8
  const randomedSlicedArray = SMILES_ARRAY.slice(start, end)
  const copyOfRandomedSlicedArray = randomedSlicedArray
  return [...randomedSlicedArray, ...copyOfRandomedSlicedArray].sort(() => Math.random() - 0.5)
}

  

