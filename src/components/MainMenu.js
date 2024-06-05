import React,{useContext} from "react";
import { QuizContext } from "../Helpers/Context";

const MainMenu = () => {
    const {setGameState}=useContext(QuizContext)
  return (
    <div className="">
        
      <button onClick={()=>setGameState('quiz')} className="bg-green-900 text-white w-[15vw] h-[40px] rounded-lg hover:bg-green-800">Start Quiz</button>
    </div>
  );
};

export default MainMenu;
