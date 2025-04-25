import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <footer>

            <div className="footer-content">
                <div className="coluna">
                    <p>Acompanhe as novidades</p>
                    <div className="icons">
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-facebook"></i>
                    </div>
                </div>
            

                <div className="coluna">
                    <p>Entre em contato</p>
                    <i className="fas fa-comment-dots"></i>
                </div>

                <div className="logo-footer">
                    <img src="" alt="Urso Amigurumi" />
                    <h3>Amiguche</h3>
              </div>

            </div>
        </footer>
    )
}

export default Footer;