import { useRef } from "react";
import "./styles/Header.css";
import mobileMenu from "../assets/images/mobileMenu.svg";

const Header = () => {
    const headerLinksWrapper = useRef();
    const handleMobileMenu = () => {
        headerLinksWrapper.current.classList.toggle("full-height");
    };

    const handleHeaderLinks = (e) => {
        const activeHeader = document.querySelector(".header-links-active");
        activeHeader.classList.toggle("header-links-active");

        e.target.classList.toggle("header-links-active");
    };

    return (
        <>
            <header className="min-width">
                <div className="header-wrapper">
                    <div
                        className="mobile-menu-img-wrapper"
                        onClick={() => handleMobileMenu()}
                    >
                        <img src={mobileMenu} alt="handburger-menu" />
                    </div>
                    <div className="logo-wrapper">
                        <a href="/">
                            <img
                                src="https://raw.githubusercontent.com/Rahul-Palamarthi/nft-landing-page/main/src/assets/images/l1.webp"
                                alt="logo"
                            />
                        </a>
                    </div>
                    <div className="links-wrapper" ref={headerLinksWrapper}>
                        <ul>
                            <li>
                                <a
                                    href="#home"
                                    className="header-links header-links-active"
                                    onClick={(e) => handleHeaderLinks(e)}
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#collections"
                                    className="header-links"
                                    onClick={(e) => handleHeaderLinks(e)}
                                >
                                    Collections
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#team"
                                    className="header-links"
                                    onClick={(e) => handleHeaderLinks(e)}
                                >
                                    Team
                                </a>
                            </li>
                            <li className="services-link">
                                <a
                                    href="#services"
                                    className="header-links"
                                    onClick={(e) => handleHeaderLinks(e)}
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#testimonials"
                                    className="header-links"
                                    onClick={(e) => handleHeaderLinks(e)}
                                >
                                    Testimonials
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact-us"
                                    className="header-links"
                                    onClick={(e) => handleHeaderLinks(e)}
                                >
                                    Contact Us
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
