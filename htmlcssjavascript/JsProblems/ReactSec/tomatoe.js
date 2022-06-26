import "./styles.css";
import {useState} from 'react'


// 1 -> display the counter number w/ state
// 2 -> render the actual tomatoes 🍅
// 3 -> refactor to create a TomatoBox component
export default function App() {
  
  const [counter, setCounter] = useState(0)
  const tomaote = []
  for(let i = 0; i< counter;i++){
    tomaote.push("🍅")
  }

  const tomatoeString = tomaote.join("")

  const incrementUp = ()=>{
    setCounter(counter + 1)
  }

  const decrementDown = ()=>{
    setCounter(counter - 1)
  }
  
  return (
    <div className="App">
      <div className="window">
        <h2>Tomato Counter</h2>
        <div className="tomato-box">
          <h1>{tomatoeString}</h1>
        </div>
        <div className="buttons-container">
          <div className="button" onClick={decrementDown}>-</div>
          <div className="button" onClick={incrementUp}>+</div>
        </div>
      </div>
    </div>
  );
}
