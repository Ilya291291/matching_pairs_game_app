import React, { useEffect } from "react";
import './index.css';

import Cards from "components/Cards";
import Timer from "components/Timer";
import Modal from "components/Modal";
import Result from "components/Result";

import useModal from "hooks/useModal";
import useDelayUnmount from "hooks/useDelayUnmount";

import { useSelector } from "react-redux";
import { selectTimer } from "store/timer/selectors";
import { selectGame } from "store/game/selectors";
import Header from "components/Header";
import Footer from "components/Footer";

const Main = () => {

  const { isOpen, toggleOpen, toggleClose } = useModal()

  const { isDifficultyChosen } = useSelector(selectTimer)
  const { gameGlobalStart } = useSelector(selectGame)

  const { mountedStyle, unmountedStyle } = useDelayUnmount()

  const style = gameGlobalStart && isDifficultyChosen ? mountedStyle : unmountedStyle

  return (
    <main className="main_wrapper" style={style}>
        <Header />
        <Cards onOpen={toggleOpen}/>
        <Modal isOpen={isOpen} onClose={toggleClose}>
          <Result />
        </Modal>
        {/* <button onClick={toggleOpen}></button> */}
        <Timer onOpen={toggleOpen}/>
        <Footer />
    </main>
  )
}

export default Main