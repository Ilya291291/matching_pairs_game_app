import React from "react";
import './index.css';

import { useSelector } from "react-redux";

import { selectGame } from "store/game/selectors";

import Main from "components/Main";
import StartGame from "components/StartGame";
import ChooseDifficulty from "components/ChooseDifficulty";


const AppContent = () => {

  const { gameGlobalStart, isDifficultyChosen } = useSelector(selectGame)

  return (
    <div className="appcontent_wrapper">
      {gameGlobalStart ? (
        isDifficultyChosen ? (
          <>
            <Main />
          </>
        ) : ( <ChooseDifficulty /> )
      ) : ( <StartGame/> )}
    </div>
  )
}

export default AppContent