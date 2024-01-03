import './App.css'
import Input from './modules/Input'
import AddButton from './modules/Button'
import List from './modules/List'

function App() {

  return (
    <>
    <header>
        <h1>What you have to do?</h1>
    </header>
    <div className="input-container">
    <Input/>
    <AddButton/>
    </div>
    <List/>
    </>
  )
}

export default App
