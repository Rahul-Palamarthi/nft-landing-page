import "./Clients.css";
import clients from "../data/clients.json";

const Clients = () => {
    return (
        <>
            <section className="clients">
                <div className="clients-wrapper min-width">
                    {clients.map((val) => (
                        <div key={val.id}>
                            <div className="clients-img-wrapper">
                                <img src={val.img} alt={val.id} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Clients;
