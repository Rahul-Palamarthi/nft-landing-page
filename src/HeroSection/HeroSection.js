import "./HeroSection.css";

const HeroSection = () => {
    return (
        <>
            <section className="hero-section" id="home">
                <div className="hero-section-wrapper min-width">
                    <span className="heroimg1">
                        <img
                            src="https://raw.githubusercontent.com/Rahul-Palamarthi/nft-landing-page/main/src/assets/images/heroimg1.webp"
                            alt="heroimg1"
                        />
                    </span>
                    <span className="heroimg2">
                        <img
                            src="https://raw.githubusercontent.com/Rahul-Palamarthi/nft-landing-page/main/src/assets/images/heroimg2.webp"
                            alt="heroimg2"
                        />
                    </span>
                    <span className="heroimg3">
                        <img
                            src="https://raw.githubusercontent.com/Rahul-Palamarthi/nft-landing-page/main/src/assets/images/heroimg3.webp"
                            alt="heroimg3"
                        />
                    </span>
                    <span className="heroimg4">
                        <img
                            src="https://raw.githubusercontent.com/Rahul-Palamarthi/nft-landing-page/main/src/assets/images/heroimg4.webp"
                            alt="heroimg4"
                        />
                    </span>
                    <div>
                        <h2 className="hero-section-title">
                            Create & sell
                            <br />
                            your NFTs today
                        </h2>
                        <p className="hero-section-info">
                            Velit, odio bibendum eu, viverra sit laoreet
                            posuere. Ut scelerisque posuere massa amet. Ornare
                            lacinia vitae at vestibulum morbi. Volutpat libero
                            curabitur feugiat risus dui pulvinar. Elementum.
                        </p>
                        <button className="lets-sell">Let's sell</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;
