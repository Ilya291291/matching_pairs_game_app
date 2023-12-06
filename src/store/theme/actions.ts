
export const toggleSwitch = (theme : string) => {
  return {
    type: 'theme/toggleSwitch',
    payload: theme
  }
}