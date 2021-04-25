import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { useHistory, useParams } from "react-router-dom";
import CalendarComponent from "../components/CalendarComponent";
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';

 function  ViewDates() {



    // API.login(formObject)
    //     .then(res => {
    //   console.log(res);
    const localizer = momentLocalizer(moment);
    let history = useHistory();
    const { id } = useParams(); // not currently being used, but good to keep in mind
    const [formObject, setFormObject] = useState({});


    useEffect(() => {
        //console.log(history.location.state.detail);
    }, []);

    let stater = {};
    const dateGetter = () => {
        //event.preventDefault();
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
        // })
        // .catch(err => console.log(err));
    }

    try {

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
        
    }
    catch (err) {
        console.log(err);
        history.push({ pathname: "/Login" });
    };




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

export default ViewDates;