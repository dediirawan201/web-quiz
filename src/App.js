
import { useState } from 'react';
import './app.css';
import Trivia from './components/Trivia';

function App() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false); 

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];

  const moneyPyramid = [
    {id:1, amount: "Rp 100"},
    {id:2, amount: "Rp 200"},
    {id:3, amount: "Rp 300"},
    {id:4, amount: "Rp 500"},
    {id:5, amount: "Rp 1000"},
    {id:6, amount: "Rp 5000"},
    {id:7, amount: "Rp 8000"},
    {id:8, amount: "Rp 16000"},
    {id:9, amount: "Rp 32000"},
    {id:10, amount:"Rp 50000"},
    {id:11, amount:"Rp 100000"},
    {id:12, amount:"Rp 125000"},
    {id:13, amount:"Rp 250000"},
  ].reverse();
  return (
    <div className="app">
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
          <div className="bottom">
            <Trivia 
            data={data} 
            setStop={setStop}
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}/>
          </div>
      </div>
      <div className="pyramid">
        <ul className="moneyList">
          {moneyPyramid.map((m) => (
            <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
            <span className="moneyListItemNumber">{m.id}</span>
            <span className="moneyListItemAmount">{m.amount}</span>
          </li>
            ))}
          

        </ul>
      </div>
      
    </div>
  );
}

export default App;
