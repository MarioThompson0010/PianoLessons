import React, { useState, useEffect } from "react";
//import LookupBtn from "../components/LookupBtn";
//import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
//import { Link as a } from "react-router-dom";
//import { Col, Row, Container } from "../components/Grid";
//import { List, ListItem } from "../components/List";
//import { Input, TextArea, FormBtn } from "../components/Form";
import { useHistory } from "react-router-dom";


function Login() {
    let history = useHistory();

    return (
        <div>
            <form>
                <div className="row mb-1">
                    <div className="col-md-12">
                        <input id="usernameInput" type="text" placeholder="User name" >
                        </input>

                    </div>
                </div>

                <div className="row mb-1">
                    <div className="col-md-12">
                        <input id="passwordInput" type="text" placeholder="password" >
                        </input>

                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <input id="submitInput" type="submit" placeholder="Login" >
                        </input>

                    </div>
                </div>
            </form>


        </div>

    );
}

export default Login;