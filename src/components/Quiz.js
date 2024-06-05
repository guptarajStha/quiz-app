import React, { useContext, useState, useEffect } from "react";
import { QuizContext } from "../Helpers/Context";
import { Questions } from "../Helpers/Question";

const Quiz = () => {
  const { setGameState, score, setScore } = useContext(QuizContext);
  const [currQuestion, setCurrQuestion] = useState(0);
  //   const shuffledQuestion = Questions.sort(() => Math.random() - 0.5);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [answerSelected, setAnswerSelected] = useState({});

  useEffect(() => {
    const shuffled = Questions.sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, []);
  const handleAnswer = (currQuestion, index) => {
    // console.log(currQuestion)
    // console.log(index)
    setAnswerSelected((prevState) => ({ ...prevState, [currQuestion]: index }));
    console.log(answerSelected)
    // setAnswer([currQuestio])
  };

  const handleConfirm = () => {
    let newScore = score;
    const answerArray = Object.entries(answerSelected);
    answerArray.forEach(([key, value]) => {
      if (
        shuffledQuestions[key].answer === shuffledQuestions[key].options[value]
      ) {
        newScore++;
      }
    });
    console.log(newScore);

    setGameState("end");
    setScore(newScore);
  };

  const handleNext = () => {
    console.log(answerSelected)
    const answerArray = Object.entries(answerSelected);
    answerArray.forEach(([key,value])=>{
       if(parseInt(key) === currQuestion){
           setCurrQuestion(currQuestion+1)
       }
    })


  };
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h1 className="font-bold text-xl mb-6">
        {currQuestion + 1}. {shuffledQuestions[currQuestion]?.question}
      </h1>
      <div className="lg:grid lg:grid-cols-2 gap-2 text-white">
        {shuffledQuestions[currQuestion]?.options.map((option, index) => (
          <div
            key={index}
            className={` ${
              answerSelected[currQuestion] === index && "bg-green-600"
            } bg-green-700 w-[50vw] lg:w-[15vw] flex justify-center p-2 mb-4 hover:bg-green-600 cursor-pointer rounded-sm`}
            onClick={() => {
              handleAnswer(currQuestion, index);
            }}
          >
            {option}
          </div>
        ))}
      </div>
      {currQuestion === 4 ? (
        <>
          <button
            className="bg-green-900 text-white w-[15vw] h-[40px] rounded-lg hover:bg-green-800 "
            onClick={() => handleConfirm()}
          >
            Confirm
          </button>
        </>
      ) : (
        <div className="w-full flex flex-row justify-center items-center">
          {currQuestion !== 0 && (
            <button
              className="bg-green-900 text-white w-[15vw] h-[40px] rounded-lg hover:bg-green-800"
              onClick={() => {
                setCurrQuestion(currQuestion - 1);
              }}
            >
              Previous
            </button>
          )}
          <button
            className="bg-green-900 text-white w-[15vw] h-[40px] rounded-lg hover:bg-green-800 ml-2"
            onClick={() => handleNext()}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
