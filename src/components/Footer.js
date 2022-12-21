import "./styles/Footer.css";

const Footer = () => {
    return (
        <>
            <footer className="footer" id="contact-us">
                <div className="footer-wrapper min-width">
                    <div className="footer-links">
                        <ul>
                            <li>
                                <a href="/">Terms & Conditions</a>
                            </li>
                            <li>
                                <a href="/">Privacy Policy</a>
                            </li>
                            <li className="cookies-link">
                                <a href="/">Cookies</a>
                            </li>
                            <li>
                                <a href="/">Refunds</a>
                            </li>
                            <li>
                                <a href="/">License</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-logo-wrapper">
                        <img
                            src="https://raw.githubusercontent.com/Rahul-Palamarthi/nft-landing-page/main/src/assets/images/l1.webp"
                            alt="logo"
                        />
                    </div>
                    <p className="made-with-love">
                        Made with ❤️ by Rahul Palamarthi
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
