import Characters from "./components/Characters"
import Footer from "./components/Footer"
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
      <Footer />
    </div>
  )
}

export default App