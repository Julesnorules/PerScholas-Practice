import './App.css';
import './style.css';
import Question from './components/Question';
import { useEffect, useState } from 'react';


function App() {

  const [question, setQuestion] = useState([]);
  const getQuestion = async () => {
      try {
        const response = await fetch('http://jservice.io/api/random');
        const data = await response.json();
        setQuestion(data);
      } catch (error) {
        console.error(error);
      }
  }

  useEffect(() => {
    getQuestion();
  }, [])

  return (    
    <div className="App">
      <header>Welcome to JEOPARDY!</header>
      <h3>Let's Play!</h3>
        <Question  />
        <div>
          {question.map(question => (
            <div key={question.id}>
                <h4>Category: {question.category.title}</h4>
                    {/* {question.question} */}
              <div> 
                <button onClick={() => {
                }}><h3>Show Answer</h3></button>
                <span>Answer: {question.answer}</span>
                <div>
                <button onClick={() => {
                }}><p>Click to Reveal Question</p></button>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}
export default App;