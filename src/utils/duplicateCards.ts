export const duplicateCards = (data, cardCount) => {
//   return [...data.slice(0, cardCount), ...data.slice(0, cardCount)].map((item,index) => ({...item, id: index}))
return [...data.slice(0, cardCount), ...data.slice(0, cardCount)].map((item) => (item))
}
