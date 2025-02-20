import ComicCard from "./ComicCard"

function ComicsList ({comics}) {
    return (
        <div id="comicsList" className="container-80">
            {
                comics.map((comic) => {
                    return(
                        <ComicCard key={comic.id}  comic={comic} />
                    )
                })
            }

            
        </div>
        
    )
}

export default ComicsList