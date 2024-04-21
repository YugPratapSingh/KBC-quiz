import { useEffect, useState, useMemo } from "react";
import "./app.css";
import Trivia from "./components/Trivia";
import Timer from "./components/Timer";
import Start from "./components/Start";

function App() {

  const [userName, setUserName] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("₹ 0");


  const data = [
    {
      id: 1,
      question: "Current Railway Minister of India is ?",
      answers: [
        {
          text: "Piyush Goyal",
          correct: false,
        },
        {
          text: "Mamta Banarjee",
          correct: false,
        },
        {
          text: "Ashwini Vaishnaw",
          correct: true,
        },
        {
          text: "Ram Vilash",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "Which Indian god is also known as 'Gauri Nandan' ?",
      answers: [
        {
          text: "Agni",
          correct: false,
        },
        {
          text: "Indra",
          correct: false,
        },
        {
          text: "Hanuman",
          correct: false,
        },
        {
          text: "Ganesha",
          correct: true,
        },
      ],
    },
    {
      id: 3,
      question: "Which city is known as Pink City in India ?",
      answers: [
        {
          text: "Jaipur",
          correct: true,
        },
        {
          text: "Udaipur",
          correct: false,
        },
        {
          text: "Kochii",
          correct: false,
        },
        {
          text: "Maysore",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "When is the National Hindi Diwas celebrated ?",
      answers: [
        {
          text: "15 August",
          correct: false,
        },
        {
          text: "14 September",
          correct: true,
        },
        {
          text: "13 September",
          correct: false,
        },
        {
          text: "14 July",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "How many states are there in India ?",
      answers: [
        {
          text: "28",
          correct: true,
        },
        {
          text: "29",
          correct: false,
        },
        {
          text: "30",
          correct: false,
        },
        {
          text: "27",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "The death anniversary of which of the following leaders is observed as Martyrs' Day ?",
      answers: [
        {
          text: "Smt. Indira Gandhi",
          correct: false,
        },
        {
          text: "PI. Jawaharlal Nehru",
          correct: false,
        },
        {
          text: "Mahatma Gandhi",
          correct: true,
        },
        {
          text: "Lal Bahadur Shastri",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "What is the capital of Australia ?",
      answers: [
        {
          text: "Sydney",
          correct: false,
        },
        {
          text: "Melbourne",
          correct: false,
        },
        {
          text: "Brisbane",
          correct: false,
        },
        {
          text: "Canberra",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "In which year was the first ever IPL match played ?",
      answers: [
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: true,
        },
        {
          text: "2008",
          correct: false,
        },
        {
          text: "2009",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Who among the following is said to have witnessed the reigns of eight Delhi Sultans ?",
      answers: [
        {
          text: "Minhaj-us-Siraj",
          correct: false,
        },
        {
          text: "Ziauddin Barani",
          correct: false,
        },
        {
          text: "Shams-i-Siraj Afif",
          correct: false,
        },
        {
          text: "Amir Khusro",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "Which one of the following is essentially a solo dance ?",
      answers: [
        {
          text: "Kuchipudi",
          correct: false,
        },
        {
          text: "Kathak",
          correct: false,
        },
        {
          text: "Manipuri",
          correct: false,
        },
        {
          text: "Mohiniattam",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: "What was the name and type of the first primate launched into space ?",
      answers: [
        {
          text: "George, Dog",
          correct: false,
        },
        {
          text: "Albert, Rheus Monkey",
          correct: true,
        },
        {
          text: "Harrison, Cat",
          correct: false,
        },
        {
          text: "Chloe, Cow",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Where are the WHO headquarters located ?",
      answers: [
        {
          text: "Paris, France",
          correct: false,
        },
        {
          text: "Monaco",
          correct: false,
        },
        {
          text: "Austin, Texas",
          correct: false,
        },
        {
          text: "Geneva, Switzerland",
          correct: true,
        },
      ],
    },
    {
      id: 13,
      question: "What was the title of the thesis that Dr. B. R. Ambedkar submitted to the London School of Economics for which he was awarded his doctorate in 1923 ?",
      answers: [
        {
          text: "The Want and Means of India",
          correct: false,
        },
        {
          text: "National Dividend of India",
          correct: false,
        },
        {
          text: "The Problem of the Rupee",
          correct: true,
        },
        {
          text: "The Law and Lawyers",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "What was the only dowry, apart from a few yards of khadi, that Lal Bahadur Shastri accepted in his marriage ?",
      answers: [
        {
          text: "Bhagavad Gita",
          correct: false,
        },
        {
          text: "Khadaunm",
          correct: false,
        },
        {
          text: "Gandhi topi",
          correct: false,
        },
        {
          text: "Charkha",
          correct: true,
        },
      ],
    },
    {
      id: 15,
      question: "Where in Singapore did Netaji Subhash Chandra Bose make the first proclamation of an Azad Hind government ?",
      answers: [
        {
          text: "Cathay Cinema Hall",
          correct: true,
        },
        {
          text: "Fort Canning Park",
          correct: false,
        },
        {
          text: "National University of Singapore",
          correct: false,
        },
        {
          text: "National Gallery of Singapore",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(() => 
    [
      { id: 15, amount: "₹ 7 crore" },
      { id: 14, amount: "₹ 5 crore" },
      { id: 13, amount: "₹ 3 crore" },
      { id: 12, amount: "₹ 1 crore" },
      { id: 11, amount: "₹ 50,00,000" },
      { id: 10, amount: "₹ 25,00,000" },
      { id: 9, amount: "₹ 12,50,000" },
      { id: 8, amount: "₹ 6,40,000" },
      { id: 7, amount: "₹ 3,20,000" },
      { id: 6, amount: "₹ 1,60,000" },
      { id: 5, amount: "₹ 80,000" },
      { id: 4, amount: "₹ 40,000" },
      { id: 3, amount: "₹ 20,000" },
      { id: 2, amount: "₹ 10,000" },
      { id: 1, amount: "₹ 5,000" },
    ] ,[]) ;

  useEffect(()=> {
      questionNumber > 1 && setEarned(moneyPyramid.find(m=>m.id === questionNumber-1).amount)
  }, [moneyPyramid,questionNumber])

  const displayEarnings=() => {
    console.log(questionNumber);
    if (questionNumber!==1)
    {
      return("!---Congratulations---!");
    }
    // else if(questionNumber===15)
    // {
    //   return("!---Great Job---!\nYou won the Game.");
    // }
    else
    {
      return("!---Sorry---!");
    }
  }

  return (
    <div className="app">
      { !userName ? ( 
       <Start setUserName={setUserName}/> 
      ) : (
        <>
      <div className="main">

        { stop ? <h1 className="endText"> <center>{displayEarnings()}</center> <br /> You earned : {earned}</h1> : (
      <>
        <div className="top">
          <div className="timer"><Timer setStop={setStop} questionNumber={questionNumber}/></div>
        </div>
        <div className="bottom">
          <Trivia
            data={data}
            setStop={setStop}
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
          />
        </div>
      </>
        )}
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) => (
            <li
              className={
                questionNumber === m.id
                  ? "moneyListItem active"
                  : "moneyListItem"
              }
            >
              <span className="moneyListItemNumber">{m.id}</span>
              <span className="moneyListItemAmount">{m.amount}</span>
            </li>
          ))}
        </ul>
      </div>
      </>
      )}
    </div>
  );
}

export default App;
