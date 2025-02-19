import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {
      //CENTRALIZZAZIONE DEI DATI
      const links = [
        { id: 1, text: 'Characters', url: '#', current: true },
        { id: 2, text: 'Comics', url: '#', current: false },
        { id: 3, text: 'Movies', url: '#', current: false },
        { id: 4, text: 'Tv', url: '#', current: false },
        { id: 5, text: 'Games', url: '#', current: false },
        { id: 6, text: 'Collectibles', url: '#', current: false },
        { id: 7, text: 'Videos', url: '#', current: false },
        { id: 8, text: 'Fans', url: '#', current: false },
        { id: 9, text: 'News', url: '#', current: false },
        { id: 10, text: 'Shop', url: '#', current: false }
    ]
  return (
    <>
        <Header links={links} />
        <Main />
        <Footer />

    </>

  )
}

export default App
