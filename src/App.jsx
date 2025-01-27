import Characters from "./components/Characters"
import Home from "./components/Home"

const App = () => {
  return (
    <div className='h-auto overflow-x-hidden'>
      <Home />
      <Characters />
    </div>
  )
}

export default App