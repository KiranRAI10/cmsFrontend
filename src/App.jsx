
import './App.css'

function App() {
  const name = "Kiran"
  const subName = "Rai"
 

  return (
    <div>
      <h1>Hello World</h1>
      <h1>{name+" "+subName}</h1>
      <h2 style={{ color: "red"}}>Bye World</h2>
    </div>
  )
}

export default App
