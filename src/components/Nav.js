import React from 'react';
import { Link } from 'react-router-dom';




function Nav() {



    return (
        <div className="Nav">
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <div className="container">
                    <a className="navbar-brand" href="#">lorem, epsome</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-primary"
                        aria-controls="navbar-primary" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar-primary">
                        <div className="navbar-collapse-header">
                            <div className="row">
                                <div className="col-6 collapse-close">
                                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar-primary"
                                        aria-controls="navbar-primary" aria-expanded="false" aria-label="Toggle navigation">
                                        <span></span>
                                        <span></span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <ul className="navbar-nav ml-lg-auto">
                            <li className="nav-item">
                                <Link to='/add' className="nav-link">AJOUTER</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
