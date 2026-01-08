import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import { MockupContext } from "./store/MockupContext"

function App() {

  return (
    <MockupContext>
      <Header />
      <Footer />
    </MockupContext>
  )
}

export default App
