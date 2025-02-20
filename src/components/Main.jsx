import SectionBuy from "./SectionBuy"
import SectionComics from "./SectionComics"
import SectionJumbo from "./SectionJumbo"


function Main({comics}) {
   
    return (
            <main>
                <SectionJumbo /> 
                <SectionComics comics={comics} />
                <SectionBuy />
            </main>
    )
}
export default Main