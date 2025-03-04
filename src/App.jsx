import { useEffect } from "react"
import Characters from "./components/Characters"
import Contact from "./components/Contact"
import Fruits from "./components/Fruits"
import Home from "./components/Home"
import NewsletterSection from "./components/NewsletterSection"

const App = () => {

  useEffect(() => {

    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    window.scrollTo(0, 0);
  }, []);

  return (
    <div className='h-auto overflow-x-hidden scroll-smooth'>
      <Home />
      <Characters />
      <Fruits />
      <NewsletterSection />
      <Contact />
    </div>
  )
}

export default App