import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { useHistory } from "react-router-dom";
import { CalendarComponent } from "../components/CalendarComponent";

function Logoff() {
    let history = useHistory();


    const [formObject, setFormObject] = useState({});

    useEffect(() => {
    }, []);

    API.logOff()
        .then(res => {
            history.push({ pathname: "/Login" /*, state: { detail: {} }*/ });

        })
        .catch(err => {
            history.push({ pathname: "/Login" , state: { detail: err }});
            console.log(err);
        })


    return (
        <div>
            {}
        </div>
    );

}

export default Logoff;