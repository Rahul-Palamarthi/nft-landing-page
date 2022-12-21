import "./Services.css";
import services from "../data/services.json";

const Services = () => {
    return (
        <>
            <section className="services" id="services">
                <div className="services-wrapper min-width">
                    <h2 className="services-heading">We Provide</h2>
                    <p className="services-title">
                        Risus commodo id odio turpis pharetra elementum.
                        Pulvinar porta porta feugiat scelerisque in elit. Morbi
                        rhoncus, tellus, eros consequat magna semper orci a
                        tincidunt.
                    </p>
                    <div className="services-card-wrapper">
                        {services.map((val) => (
                            <div key={val.id} className="services-card">
                                <div className="services-card-img-wrapper">
                                    <img src={val.img} alt={val.id} />
                                </div>
                                <h3 className="services-card-title">
                                    {val.title}
                                </h3>
                                <p className="services-card-description">
                                    {val.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
