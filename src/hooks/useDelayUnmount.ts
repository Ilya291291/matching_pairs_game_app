const useDelayUnmount = () => {

  const mountedStyle: {animation: string} = { animation: "inAnimation 750ms ease-in" };

  const unmountedStyle :{animation: string, animationFillMode: string}= {
    animation: "outAnimation 770ms ease-out",
    animationFillMode: "forwards"
  }

  return {
    mountedStyle,
    unmountedStyle
  }
}

export default useDelayUnmount
