import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { useHistory } from "react-router-dom";
import {CalendarComponent} from "../components/CalendarComponent";
  

function CalendarAvailability() {
    
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
        API.login(formObject)
            .then(res => {
                console.log(res);
                //history.push({ pathname: "/CalenderAvailability", state: { detail: res.data } });
            })
            .catch(err => console.log(err));
    };

    return (

    
        <div>
            <form>

                <CalendarComponent>
                    
                </CalendarComponent>
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

                {/* <div className="row mb-1">
                    <div className="col-md-12">
                        <input id="passwordInput" type="password" 
                        name="password"
                        placeholder="password" 
                         onChange={handleInputChange}
                        >
                        </input>

                    </div>
                </div> */}

                {/* <div className="row">
                    <div className="col-md-12">
                        <input id="submitInput" type="submit" placeholder="Login" 
                         onClick={handleFormLogin}
                       
                        >
                        </input>

                    </div>
                </div> */}
            </form>


        </div>

    );
}

export default CalendarAvailability;