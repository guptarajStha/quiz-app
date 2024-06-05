import React,{useContext} from "react";
import { QuizContext } from "../Helpers/Context";


const EndScreen = () => {
    const {score,setGameState}=useContext(QuizContext)
  return (
    <div className="flex flex-col justify-center items-center gap-y-4">
        <h1 className="text-3xl font-bold">Result!!!</h1>
        <div>You have Score {score} out of 5</div>
        <div>{score}/5</div>
        <button className="bg-green-900 text-white w-[15vw] h-[40px] rounded-lg hover:bg-green-800" onClick={()=>{setGameState('menu')}}>Restart Quiz</button>
    </div>
  );
}

export default EndScreen;
