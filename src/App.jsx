
import Titulo from './components/titulo'
import { Items } from './components/itemList'
import { Navb } from './components/navBar'
import './App.css'




function App() {

  return (
    <div>
      <div className="tPrin">
        <Titulo titulo="Centro de ropa"/>
      </div>  

      <div>
       <Navb/>
      </div>

      <div>
        <Items/>
      </div>
    </div>
  )
}

export default App
