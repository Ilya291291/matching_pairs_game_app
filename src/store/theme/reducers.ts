
const initialState = {
  isDarkMode: 'light'
}

const themeReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'theme/toggleSwitch' : 
      return {
        ...state,
        isDarkMode: action.payload
      }
    default:
      return state
  }
}

export default themeReducer