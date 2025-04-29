import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
 import "./footer.scss";

function Footer() {
    return (
        <footer>

            <div className="footer-content">
                <div className="coluna">
                    <p>Acompanhe as novidades</p>
                    <div className="icons">
                        <FaFacebook />
                        <FaInstagram />
                    </div>
                </div>
            

                <div className="coluna">
                    <p>Entre em contato</p>
                    <i className="fas fa-comment-dots"></i>
                </div>

                <div className="logo-footer">
                    <img src="./images/logo2.png" alt="Urso Amigurumi" />
              </div>

            </div>
        </footer>
    )
}

export default Footer;