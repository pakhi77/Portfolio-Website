import React from "react";

export default function Footer() {
    return(
        <footer className="footer">
            <a href="mailto:raopakhi@gmail.com" className="footer__link">raopakhi@gmail.com</a>
            <ul className="social-list">
                <li className="social-list__item">
                    <a className="social-list__link" href="www.linkedin.com/in/pakhi-rao-40507221a" target="_blank" title="LinkedIn">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://github.com/pakhi77" target="_blank" title="Github">
                        <i className="fab fa-github"></i>
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" href="https://leetcode.com/pakhir/" target="_blank" title="Leetcode">
                        <i className="fas fa-laptop-code"></i>
                    </a>
                </li>
            </ul>
        </footer>
    )
}
