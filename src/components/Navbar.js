import React from 'react';

function Navbar() {
    return (
        <React.Fragment>
            <nav className="navbar navbar-expand bg-dark navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand mb-2" href="#">TicTacToe</a>
                    <ul className="navbar-nav me-auto mb-2">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" style={{ 'background': '#f0efeb' }} type="search" name="search" placeholder="Search Here" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default Navbar;