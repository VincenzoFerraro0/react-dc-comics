import Header from "./section/Header"
import Main from "./components/Main"
import Footer from "./section/Footer"
import Links from "./data/links"
import arrayComics from "./data/comics"


function App() {

    //CENTRALIZZAZIONE DEI DATI
      const links = Links;
      const comics = arrayComics

      
  return (
    <>
        <Header links={ links }/>
        <Main comics={ comics } />
        <Footer links={ links }  />

    </>

  )
}

export default App
