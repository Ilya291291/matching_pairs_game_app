import React from "react";
import './index.css'

import Header from "components/Header";
import Main from "components/Main";
import Footer from "components/Footer";
import { shuffleCards } from "utils/shuffleCards";
import { duplicateCards } from "utils/duplicateCards"


// console.log(shuffleCard(duplicateCards(arr, 8)))

const AppContent = () => {
  return (
    <div className="appcontent_wrapper">
      <Header />
      AppContent here
      <Main />
      <Footer />
    </div>
  )
}

export default AppContent