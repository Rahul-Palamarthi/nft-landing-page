import "./Testimonials.css";
import testimonials from "../data/testimonials.json";

const Testimonials = () => {
    return (
        <>
            <section className="testimonials" id="testimonials">
                <div className="testimonials-wrapper min-width">
                    <h2 className="testimonials-title">Testimonials</h2>
                    <div className="testimonials-card-wrapper">
                        {testimonials.map((val) => (
                            <div className="testimonial-card" key={val.id}>
                                <div>
                                    <div className="testimonial-card-img-wrapper">
                                        <img src={val.img} alt={val.id} />
                                    </div>
                                    <div>
                                        <h3 className="testimonial-profile">
                                            {val.profile}
                                        </h3>
                                        <p className="testimonial-username">
                                            {val.username}
                                        </p>
                                    </div>
                                </div>
                                <p className="testimonial-review">
                                    {val.review}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Testimonials;
