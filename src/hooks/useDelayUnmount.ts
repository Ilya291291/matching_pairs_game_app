import React from 'react';

const useDelayUnmount = () => {

//   const [showDiv, setShowDiv] = useState(false)

//   useEffect(() => {
//     let timeOutId
//     if(isMouned && !showDiv) {
//       setShowDiv(true)
//     }else if (!isMouned && showDiv) {
//         timeOutId = setTimeout(() => setShowDiv(false), delayTime)
//     }
//     return () => clearTimeout(timeOutId)
//   }, [isMouned, delayTime, showDiv])

  const mountedStyle = { animation: "inAnimation 750ms ease-in" };

  const unmountedStyle = {
    animation: "outAnimation 770ms ease-out",
    animationFillMode: "forwards"
  }

  return {
    mountedStyle,
    unmountedStyle
  }
}

export default useDelayUnmount
