import './App.css';
import './style.css';
import Question from './components/Question';
import Answear from './components/Answear';
import Score from './components/Score';


function App() {

  return (    
    <div className="App">
      <header>Welcome to JEOPARDY!</header>

      <div>
        <Score />
      </div>

      <div>
        <h1>Let's Play!</h1>
      </div>

      <div><Question /></div>  

      <div><Answear /></div>


    </div>
  )        
}
export default App;