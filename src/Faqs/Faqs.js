import "./Faqs.css";
import faqs from "../data/faqs.json";
import arrow from "../assets/images/arrow.svg";

const Faqs = () => {
    const handleAnswer = (id) => {
        const answer = document.querySelector(`.faqs-answer-${id}`);
        const arrow = document.querySelector(`.arrow-wrapper-${id}`);
        answer.classList.toggle("display-none");
        arrow.classList.toggle("transform-180");
    };

    return (
        <>
            <section className="faqs">
                <div className="faqs-wrapper min-width">
                    <h2 className="faqs-title">Frequently Asked Questions</h2>
                    <p className="faqs-info">
                        Risus commodo id odio turpis pharetra elementum.
                        Pulvinar porta porta feugiat scelerisque in elit. Morbi
                        rhoncus, tellus, eros consequat magna semper orci a
                        tincidunt.
                    </p>
                    <div className="faqs-cards-wrapper">
                        {faqs.map((val) => (
                            <div className="faqs-card" key={val.id}>
                                <div
                                    className={`arrow-wrapper arrow-wrapper-${val.id}`}
                                    onClick={() => handleAnswer(val.id)}
                                >
                                    <img src={arrow} alt="arrow" />
                                </div>
                                <p className="faqs-question">
                                    <strong>{val.question}</strong>
                                </p>
                                <p
                                    className={`faqs-answer display-none faqs-answer-${val.id}`}
                                >
                                    {val.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Faqs;
