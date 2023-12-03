import React, { useState, useEffect } from "react";
import ReactDOM  from 'react-dom';
import './index.css';

interface ModalParams {
  isOpen: boolean,
  children: JSX.Element[] | JSX.Element,
  onClose: () => void
}

const Modal: React.FC<ModalParams> = ({ isOpen, children, onClose }) => {

  const [active, setActive] = useState(false)
  const [className, setClassName] = useState('')

  const transitionEnd = (): void => {
    setClassName(isOpen ? 'enter-end' : 'exit-end')
    if(!isOpen) {
      setActive(false)
    }
  }

  useEffect(() => {
    if(isOpen) {
      setActive(true)
      setClassName('enter')
      setTimeout(() => {
        setClassName('enter-active')
      })
    }else {
      setClassName('exit')
      setTimeout(() => {
        setClassName('exit-active')
      })
    }
  }, [isOpen])

  const handleClose = (event: React.MouseEvent<HTMLButtonElement>): void => {
    event.preventDefault()
    onClose()
  }

  if(!isOpen && !active) return null

  return ReactDOM.createPortal(
    <div className={'modal ' + className} onTransitionEnd={transitionEnd}>
       <div className='modal-content'>
           {children}
        <button className="modal-close-btn" onClick={handleClose}>close</button>
       </div>
   </div>,
  document.body
  )
}

export default Modal