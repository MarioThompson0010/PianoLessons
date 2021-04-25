import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { useHistory, useParams } from "react-router-dom";
import CalendarComponent from "../components/CalendarComponent";
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
//import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import DatePicker from "react-datepicker";

function EnterDates() {
    const localizer = momentLocalizer(moment);
    let history = useHistory();
    const [formObject, setFormObject] = useState({});
    const [startDate, setStartDate] = useState(new Date());

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    function handleFormLogin(event) {

        event.preventDefault();
        const datejson = startDate.toJSON();

        API.createDate({
            "dateStart": datejson,
            "dateEnd": datejson,
            "title": "Piano lesson"
        }
        )
            .then(res => {
                console.log(res);
            })
            .catch(err => console.log(err));
        // API.login(formObject)
        //     .then(res => {
        //         console.log(res);

        //     })
        //     .catch(err => console.log(err));
    };

    API.checkAuth()
        .then(res => {

            if (res.data === "good logon") {
                dateGetter();
            }
            else {
                history.push({ pathname: "/Login" });
            }
        })
        .catch(err => {
            console.log(err);
            history.push({ pathname: "/Login" });
        });

    return (
        <div>

            <div className="row mb-1">
                <div className="col-md-5">

                </div>
                <div className="col-md-7">
                    <form>
                        <DatePicker
                            selected={startDate}
                            onChange={date => setStartDate(date)}
                        // onSelect={handleDateSelect} //when day is clicked
                        />

                    </form>

                </div>
            </div>
            <div className="row mt-1">
                <div className="col-md-5">

                </div>

                <div className="col-md-7">
                    <input id="submitInput" type="submit" placeholder="Save Date"
                        onClick={handleFormLogin}

                    >
                    </input>
                </div>
            </div>
        </div>

    );

}

export default EnterDates;