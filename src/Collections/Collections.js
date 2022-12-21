import "./Collections.css";
import collections from "../data/collections.json";

const Collections = () => {
    return (
        <>
            <section className="collections" id="collections">
                <div className="collections-wrapper min-width">
                    <h2 className="collections-heading">Hotest Collections</h2>
                    <p className="collections-info">
                        Risus commodo id odio turpis pharetra elementum.
                        Pulvinar porta porta feugiat scelerisque in elit. Morbi
                        rhoncus, tellus, eros consequat magna semper orci a
                        tincidunt.
                    </p>
                    <div className="collections-card-wrapper">
                        {collections.hotCollections.map((val) => (
                            <div key={val.id} className="collection-card">
                                <div className="collection-card-img-wrapper">
                                    <img src={val.img} alt={val.id} />
                                </div>
                                <h3 className="collection-card-name">
                                    {val.name}
                                </h3>
                                <p className="collection-card-info">
                                    {val.info}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Collections;
