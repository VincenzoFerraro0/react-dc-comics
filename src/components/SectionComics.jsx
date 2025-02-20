import comics from "../data/comics"
import ComicsList from "./ComicsList"

function SectionComics ({comics}) {
   
    return (
        <section id="sectionComics">
            <div className="container-80">
                <h2 className="label">current series</h2>
            </div>
            <ComicsList comics={comics} />
        </section>
    )
}

export default SectionComics