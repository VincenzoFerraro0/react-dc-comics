import ComicCard from "./ComicCard"

function ComicsList({ comics }) {
    return (
        <div id="comicsList" className="">
            {
                comics.map((comic) => {
                    return (
                        <ComicCard key={comic.id} comic={comic} />
                    )
                })
            }

            <button>
                load more
            </button>
        </div>

    )
}

export default ComicsList