import Characters from "./components/Characters"
import Fruits from "./components/Fruits"
import Home from "./components/Home"

const App = () => {
  return (
    <div className='h-auto overflow-x-hidden'>
      <Home />
      <Characters />
      <Fruits />
    </div>
  )
}

export default App