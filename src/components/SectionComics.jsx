
import ComicsList from "./ComicsList"

function SectionComics ({comics}) {
   
    return (
        <section id="sectionComics">
            <div className="container-80">
                <h2 className="label">current series</h2>
                
                <ComicsList comics={comics} />
                
                
            </div>
            
        </section>
    )
}

export default SectionComics