import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { useHistory } from "react-router-dom";
import { CalendarComponent } from "../components/CalendarComponent";
import SessionTimeout from "../components/SessionTimeout";


function Login() {
    let history = useHistory();
    let sendarray =  {
        fromLogin : true,
        datearray: []
    };
    const [formObject, setFormObject] = useState({});

    useEffect(() => {
    }, []);

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormLogin(event) {

        event.preventDefault();
        API.login(formObject)
            .then(res => {
                console.log(res);
                API.getDates()
                    .then(res => {
                        console.log(res);
                        const datearray = [];
                        for (let i = 0; i < res.data[0].CalendarModels.length; i++){
                            const objguy = {
                                start : res.data[0].CalendarModels[i].dateStart,
                                end: res.data[0].CalendarModels[i].dateEnd,
                                title: res.data[0].CalendarModels[i].title
                            }

                            sendarray.datearray.push(objguy);
                        }
                        const stater = {
                            events: [
                                {
                                    start: res.data[0].CalendarModels[0].dateStart,         //moment().toDate(),
                                    end: res.data[0].CalendarModels[0].dateEnd,
                                    title: res.data[0].CalendarModels[0].title //"Some title"
                                }
                            ]
                        };

                        history.push({ pathname: "/CalendarAvailability", state: { detail: sendarray /*stater datearray*/ /*res.data[0].CalendarModels*/ } });

                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <form>
                <div className="row mb-1">
                    <div className="col-md-12">
                        <input id="usernameInput" type="text"
                            name="username"
                            placeholder="User name"
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

                <div className="row">
                    <div className="col-md-12">
                        <input id="submitInput" type="submit" placeholder="Login"
                            onClick={handleFormLogin}

                        >
                        </input>

                    </div>
                </div>
            <SessionTimeout/>

            </form>
            

        </div>

    );
}

export default Login;