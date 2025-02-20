function MenuFooter({links}) {
    const { general, shop, dc, sites } = links;
    return (
        <>
            <div>
                <h3>dc comics</h3>
                <ul>
                    {
                        general.map((element) => {
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
                        shop.map((element) => {
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
                        dc.map((element) => {
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
                        sites.map((element) => {
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
