function MenuFooter(props) {
    const { linksGeneral, linksShop, linksDc, linksSites } = props;

    // Filtra l'array per escludere l'elemento con id 10
    const filteredLinks = linksGeneral.filter((element) => element.id !== 10);

    return (
        <>
            <div>
                <h3>dc comics</h3>
                <ul>
                    {
                        filteredLinks.map((element) => {
                            const { id, text, url } = element;
                            return (
                                <li key={id}>
                                    <a href={url}>{text}</a>
                                </li>
                            );
                        })
                    }
                </ul>
                <h3>shop</h3>
                <ul>
                    {
                        linksShop.map((element) => {
                            const { id, text, url } = element;
                            return (
                                <li key={id}>
                                    <a href={url}>{text}</a>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
            <div>
                <h3>dc</h3>
                <ul>
                    {
                        linksDc.map((element) => {
                            const { id, text, url } = element;
                            return (
                                <li key={id}>
                                    <a href={url}>{text}</a>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
            <div>
                <h3>sites</h3>
                <ul>
                    {
                        linksSites.map((element) => {
                            const { id, text, url } = element;
                            return (
                                <li key={id}>
                                    <a href={url}>{text}</a>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </>
    );
}

export default MenuFooter;
