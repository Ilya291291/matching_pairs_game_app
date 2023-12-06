import { AnyAction } from '@reduxjs/toolkit';
import { ITheme } from './types';

const initialState = {
  isDarkMode: 'light'
}

const themeReducer = (state: ITheme = initialState, action : AnyAction) => {
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