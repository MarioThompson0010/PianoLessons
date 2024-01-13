import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { useHistory } from "react-router-dom";

function SignUp() {



    let history = useHistory();

    const [formObject, setFormObject] = useState({});

    useEffect(() => {
    }, []);

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormLogin(event) {

        event.preventDefault();
        const pword1 = formObject.password;
        const pword2 = formObject.passwordConfirm;

        if (pword1 !== pword2) {

        }

        API.register(formObject)
            .then(res => {
                console.log(res);
                history.push({ pathname: "/Login", state: { detail: res.data } });

            })
            .catch(err => console.log(err));
    };


    return (
        <div>
            <form>
                {}

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