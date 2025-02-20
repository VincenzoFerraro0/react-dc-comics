function ComicCard ({comic}) {
    
    const {id,series, thumb} =  comic
    return (
        <div key={id} className="comicCard">
            <img src={thumb} alt={series} />
            <span>{series}</span>
        </div>
    )
}

export default ComicCard