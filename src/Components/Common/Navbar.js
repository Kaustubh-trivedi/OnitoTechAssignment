import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineDingding } from "react-icons/ai";

const Navbar = () => {
    let path = window.location.pathname;
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" title='Ontio Tech Assignment'>
                        <AiOutlineDingding />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${path === "/" && "active"}`} aria-current="page" to="/">
                                    List
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${(path === "/personal-details" || path=="/address-details") && "active"}`} to="/personal-details">
                                    Add Details
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar