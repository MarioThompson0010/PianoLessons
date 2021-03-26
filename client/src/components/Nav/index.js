import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link className="navbar-brand"
                to="/Login"
            >
                Log in
            </Link>

            <Link className="navbar-brand"
                to="/SignUp"
            >
                Sign up
            </Link>

            <Link className="navbar-brand"
                to="/EnterDates"
            >
                Enter Dates
            </Link>



        </nav>
    );
}

export default Nav;
