import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { useHistory } from "react-router-dom";
import { CalendarComponent } from "../components/CalendarComponent";

function Logoff() {
    let history = useHistory();


    const [formObject, setFormObject] = useState({});

    useEffect(() => {
        // loadBooks() // this would have loaded the books
    }, []);

    //if (history) {
    API.logOff()
        .then(res => {
            history.push({ pathname: "/Login" /*, state: { detail: {} }*/ });

        })
        .catch(err => {
            //setFormObject(err);
            history.push({ pathname: "/Login" , state: { detail: err }});
            console.log(err);
        })

    // }
    // else{
    //     setFormObject(`<div>
    //        Log in first
    //     </div>`)
    // }

    return (
        <div>
            {/* {formObject} */}
        </div>
    );

}

export default Logoff;