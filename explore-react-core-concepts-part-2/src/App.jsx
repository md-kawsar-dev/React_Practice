import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Team from './Team';
import Users from './Users';
function App() {
  function handleClick()
  {
    alert('Button clicked!');
  }
  const handleClick2 = () =>{
    alert('Button 2 clicked!');
  }
  const handleAddToFive = (num) =>{
    alert(num + 5);
  }
  return (
    <>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <h1>React Core Concepts</h1>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me Too</button>
      <button onClick={()=>{alert('Button 3 clicked!')}}>Click Me Three</button>
      <button onClick={() => handleAddToFive(5)}>Add 5</button>
    </>
  )
}

export default App
