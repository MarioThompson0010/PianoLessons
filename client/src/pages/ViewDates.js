import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { useHistory, useParams } from "react-router-dom";
import CalendarComponent from "../components/CalendarComponent";
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';

function ViewDates() {



    // API.login(formObject)
    //     .then(res => {
    //   console.log(res);
    const localizer = momentLocalizer(moment);
    let history = useHistory();
    const { id } = useParams(); // currently being used
    const [formObject, setFormObject] = useState({});


    useEffect(() => {
        if (id === "2") {
            API.masterDates()
                .then(res => {
                    console.log(res);
                    getCalendarAvailability(res, history, stater);

                })
                .catch(err => console.log(err))
        }
        else {
            API.getDates()
                .then(res => {
                    console.log(res);

                    stater = {
                        events: [
                            {
                                start: res.data[0].dateStart,         //moment().toDate(),
                                end: res.data[0].dateEnd,
                                // end: moment()
                                //     .add(1, "days")
                                //     .toDate(),
                                title: res.data[0].title //"Some title"
                            }
                        ]
                    };

                    history.push({ pathname: "/CalendarAvailability", state: { detail: stater } });

                })
                .catch(err => console.log(err));
        }

    }, []);

    let stater = {};



    return (
        <div>
            <form>


                {/* {
                    stater.events !== undefined ?
                    

                    <CalendarComponent
                    events={stater}
                    height="100vh"
                >
                </CalendarComponent>
                :
                    setFormObject({})

                } */}




            </form>
        </div>
    );

}

function getCalendarAvailability(res, history, stater) {

    stater = {
        events: [
            {
                start: res.data[0].dateStart,         //moment().toDate(),
                end: res.data[0].dateEnd,
                // end: moment()
                //     .add(1, "days")
                //     .toDate(),
                title: res.data[0].title //"Some title"
            }
        ]
    };

    history.push({ pathname: "/CalendarAvailability", state: { detail: stater } });
}
export default ViewDates;