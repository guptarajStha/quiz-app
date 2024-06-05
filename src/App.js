import React, { useState } from "react";
import MainMenu from "./components/MainMenu";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";
import { QuizContext } from "./Helpers/Context";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score,setScore] = useState(0)

  return (
    <div className="App flex justify-center flex-col items-center h-[100vh] w-[100vw] bg-gray-300">
      <h1 className=" font-bold text-4xl">Quiz APP</h1>
      <QuizContext.Provider value={{gameState,setGameState,score,setScore}}>
        <div className="w-[90%] h-[80%] lg:w-[60%] mt-4 bg-green-400 flex items-center justify-center flex-col border-4  rounded-lg">

        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "end" && <EndScreen />}
        </div>
      </QuizContext.Provider>
    </div>
  );
}

export default App;
