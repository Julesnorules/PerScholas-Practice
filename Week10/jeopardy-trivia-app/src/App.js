import './App.css';
import Button from './components/Button';


// const questions = questionsArr.map((element, index) => {
//   return (
//     <Button
//       key={index}
//       {...element}
//     />
//   )
// });

export default function App() {
  return (
    <div className="App">
      <h1>WELCOME to Jeopardy!</h1>
      <Button />
    </div>
  );
}
