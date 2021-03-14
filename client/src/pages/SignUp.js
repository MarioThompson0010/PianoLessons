import React, { useState, useEffect } from "react";
//import LookupBtn from "../components/LookupBtn";
//import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
//import { Link as a } from "react-router-dom";
//import { Col, Row, Container } from "../components/Grid";
//import { List, ListItem } from "../components/List";
//import { Input, TextArea, FormBtn } from "../components/Form";
import { useHistory } from "react-router-dom";
//import { signup } from "../../../server/controllers/auth";

function SignUp() {



    let history = useHistory();

    const [formObject, setFormObject] = useState({});

    useEffect(() => {
        // loadBooks() // this would have loaded the books
    }, []);

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormLogin(event) {

        event.preventDefault();
        //const email = formObject.email;
        const pword1 = formObject.password;
        const pword2 = formObject.passwordConfirm;

        if (pword1 !== pword2) {

        }
        //    const {username} = event.target;
        //    const [password] = event.target;

        API.register(formObject)
            .then(res => {
                console.log(res);
                history.push({ pathname: "/Login", state: { detail: res.data } });

                //console.log(res.items);
                // setBooks(res.data.items);
            })
            .catch(err => console.log(err));
    };


    return (
        <div>
            <form>
                {/* <div className="row mb-1">
                    <div className="col-md-12">
                        <input id="usernameInput" type="text"
                            name="username"
                            placeholder="User name"
                            onChange={handleInputChange}
                        >
                        </input>

                    </div>
                </div> */}

                <div className="row mb-1">
                    <div className="col-md-12">
                        <input id="email" type="text"
                            name="email"
                            placeholder="email"
                            onChange={handleInputChange}
                        >
                        </input>

                    </div>
                </div>

                <div className="row mb-1">
                    <div className="col-md-12">
                        <input id="passwordInput" type="password"
                            name="password"
                            placeholder="password"
                            onChange={handleInputChange}
                        >
                        </input>

                    </div>
                </div>

                <div className="row mb-1">
                    <div className="col-md-12">
                        <input id="passwordInputConfirm" type="password"
                            name="passwordConfirm"
                            placeholder="confirm password"
                            onChange={handleInputChange}
                        >
                        </input>

                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <input id="submitInput" type="submit" placeholder="Sign up"
                            onClick={handleFormLogin}

                        >
                        </input>

                    </div>
                </div>
            </form>
        </div>
    );

}

export default SignUp;