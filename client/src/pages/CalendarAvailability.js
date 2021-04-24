import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { useHistory, useParams } from "react-router-dom";
import CalendarComponent from "../components/CalendarComponent";
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';

function CalendarAvailability() {
    const localizer = momentLocalizer(moment);
    let stater = {
        events: [
            {
                start: moment().toDate(),
                end: moment()
                    .add(1, "days")
                    .toDate(),
                title: "Some title"
            }
        ]
    };

    const dateGetter = () => {
        // none of the following matters because API.getDates is async
        API.getDates()
            .then(res => {
                console.log(res);
                if (res.data[0].CalendarModels) {

                    stater.events = [];

                    res.data[0].CalendarModels.forEach(element => {

                        //let stater2 = [];
                        let obj2 = {
                            start: element.dateStart,         //moment().toDate(),
                            end: element.dateEnd,
                            title: element.title //"Some title"

                        };

                        stater.events.push(obj2);
                        
                    });

                }


                else {




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
                }
            })
            .catch(err => console.log(err));
    }

    let history = useHistory();
    const { id } = useParams(); // not currently being used, but good to keep in mind
    const [formObject, setFormObject] = useState({});
    //console.log(history.location.state.detail);



    useEffect(() => {
        console.log(history.location.state.detail);
    }, []);

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    // if (!history.location.state) {
    //     dateGetter();

    //}


    return (
        <div>
            <form>



                <CalendarComponent
                    events={history.location.state}
                    height="100vh"
                >
                </CalendarComponent>

            </form>
        </div>
    );
}

export default CalendarAvailability;