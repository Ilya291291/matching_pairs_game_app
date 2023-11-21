// const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

export const shuffleCards = (array) => {
  return [...array].sort(() => Math.random() - 0.5)
}