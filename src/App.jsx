import Characters from "./components/Characters"
import Fruits from "./components/Fruits"
import Home from "./components/Home"
import NewsletterSection from "./components/NewsletterSection"

const App = () => {
  return (
    <div className='h-auto overflow-x-hidden'>
      <Home />
      <Characters />
      <Fruits />
      <NewsletterSection />
    </div>
  )
}

export default App