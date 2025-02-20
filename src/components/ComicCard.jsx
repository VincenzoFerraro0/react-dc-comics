function ComicCard ({comic}) {
    
    const {id,series, thumb} =  comic
    return (
        <div key={id} className="comicCard">
            <img src={thumb} alt={series} />
            <h2></h2>
        </div>
    )
}

export default ComicCard