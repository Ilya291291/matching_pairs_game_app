import React, { useState, useEffect } from "react";

const useModal = () => {
  
  const [isOpen, setIsOpen] = useState(false)

  // console.log(isOpen)

  const toggleOpen = (): void => {
    setIsOpen(true)
  }

  const toggleClose = (): void => {
    setIsOpen(false)
  }

  // useEffect(() => {
  //   if(isOpen) {
  //     toggleOpen()
  //   }
  // } , [isOpen])

  return {
    isOpen,
    toggleOpen,
    toggleClose
  }
}

export default useModal