import Header from "./components/header/Header"
import Main from "./components/Main"
import Footer from "./components/footer/Footer"
import Links from "../data/links"

function App() {
      //CENTRALIZZAZIONE DEI DATI
      const links = Links 
     
      

  return (
    <>
        <Header links={ links }/>
        <Main />
        <Footer links={ links }  />

    </>

  )
}

export default App
