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

    useEffect(() => {
        // loadBooks() // this would have loaded the books

        API.checkAuth()
            .then(res => {

                if (res.data !== "good logon") {
                    history.push({ pathname: "/Login" });
                }
                // else {
                //     history.push({ pathname: "/Login" });
                // }
            })
            .catch(err => {
                console.log(err);
                history.push({ pathname: "/Login" });
            });
    }, []);

    function handleFormLogin(event) {

        event.preventDefault();
        const temp4 = event.target.value;
        const temp5 = startDate.toString();
        const temp3 = startDate.inputValue;
        const dater = startDate.toUTCString();;
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
                            showTimeSelect
                            dateFormat="MMMM d, yyyy h:mm aa"
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