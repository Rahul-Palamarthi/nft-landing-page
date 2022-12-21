import "./Outro.css";

const Outro = () => {
    return (
        <>
            <section className="outro">
                <div className="outro-wrapper min-width">
                    <span className="outro-img-wrapper1">
                        <img
                            src="https://raw.githubusercontent.com/Rahul-Palamarthi/nft-landing-page/main/src/assets/images/outroimg1.webp"
                            alt="outro-img-1"
                        />
                    </span>
                    <span className="outro-img-wrapper2">
                        <img
                            src="https://raw.githubusercontent.com/Rahul-Palamarthi/nft-landing-page/main/src/assets/images/outroimg2.webp"
                            alt="outro-img-2"
                        />
                    </span>
                    <div>
                        <h2 className="outro-title">
                            Ready to sell your NFTs?
                        </h2>
                        <p className="outro-info">
                            Risus commodo id odio turpis pharetra elementum.
                            Pulvinar porta porta feugiat scelerisque in elit.
                            Morbi rhoncus, tellus, eros consequat magna semper
                            orci a tincidunt.
                        </p>
                        <button className="outro-button">Sell right now</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Outro;
