import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { useHistory, useParams } from "react-router-dom";
import CalendarComponent from "../components/CalendarComponent";
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import SessionTimeout from "../components/SessionTimeout";

function CalendarAvailability(arg0, ...arg1) {
    let caught = false;
    let fromhist = false;
    const localizer = momentLocalizer(moment);
    let goodary = [];
    try {
        let [formObject, setFormObject] = useState({});



        caught = true;
        
        let history = useHistory();

        if (history.location !== null && history.location.state !== null &&
            history.location.state.detail !== null && history.location.state.detail.fromLogin === true) {
            fromhist = true;
            //THIS CHANGES DATEARRAY!!!
            goodary = history.location.state.detail.datearray.map(x => {
                if (typeof x.start === "string") {
                    if (!x.start.includes("Z")) {
                        var parts = x.start.split('-');
                        let parts2 = x.end.split('-');
                        x.start = new Date(parts[0], parts[1] - 1, parts[2]);
                        x.end = new Date(parts2[0], parts2[1] - 1, parts2[2]);

                        x.title;
                        return x;
                    }
                    else {
                        var parts = x.start.split('-');
                        let parts2 = x.end.split('-');
                        x.start = new Date(parts[0], parts[1] - 1, parts[2].substring(0, 2));
                        x.end = new Date(parts2[0], parts2[1] - 1, parts2[2].substring(0, 2));

                        x.title;
                        return x;
                        return x;
                    }
                }
                else{
                    return x;
                }

            });
        }
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

        

        const { id } = useParams(); // not currently being used, but good to keep in mind



        useEffect(() => {
            if (fromhist === true)
                return;

            API.getDates()
                .then(res => {
                    console.log(res);
                    if (res.data[0].CalendarModels) {

                        stater.events = [];
                        let sendarray = {
                            fromLogin: true,
                            datearray: []
                        };

                        res.data[0].CalendarModels.forEach(element => {

                            let obj2 = {
                                start: element.dateStart,         
                                end: element.dateEnd,
                                title: element.title 

                            };

                            sendarray.datearray.push(obj2);

                        });


                        


                        goodary = sendarray.datearray.map(x => {
                            //figure out type
                            if (typeof x.start === "string") {
                                if (!x.start.includes("Z")) {
                                    var parts = x.start.split('-');
                                    let parts2 = x.end.split('-');
                                    // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
                                    // January - 0, February - 1, etc.
                                    x.start = new Date(parts[0], parts[1] - 1, parts[2]);
                                    x.end = new Date(parts2[0], parts2[1] - 1, parts2[2]);

                                    x.title;
                                    return x;
                                }
                                else {
                                    var parts = x.start.split('-');
                                    let parts2 = x.end.split('-');
                                    // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
                                    // January - 0, February - 1, etc.
                                    x.start = new Date(parts[0], parts[1] - 1, parts[2].substring(0, 2));
                                    x.end = new Date(parts2[0], parts2[1] - 1, parts2[2].substring(0, 2));

                                    x.title;
                                    return x;
                                    return x;
                                }
                            }
                            else {
                                return x;
                            }

                        });


                        history.push({ pathname: "/CalendarAvailability", state: { detail: sendarray  } });

                    }


                    else {




                        stater = {
                            events: [
                                {
                                    start: res.data[0].dateStart,         
                                    end: res.data[0].dateEnd,
                                    
                                    title: res.data[0].title //"Some title"
                                }
                            ]
                        };
                    }
                })
                .catch(err => console.log(err));
        }, []);


        

        return (
            <div>
                <form>


                    {
                        fromhist
                            
                            ?

                            <Calendar
                                localizer={localizer}
                                defaultDate={new Date()}
                                defaultView="month"
                                events={history.location.state.detail.datearray}
                                style={{ height: "100vh" }}
                            />

                            
                            :




                            <Calendar
                                localizer={localizer}
                                defaultDate={new Date()}
                                defaultView="month"
                                events={[]}
                                style={{ height: "100vh" }}
                            />

                        
                    }
<SessionTimeout/>
                </form>
            </div>
        );
    }
    catch (err) {
        console.log(err);
        return (
            <div>
                <label>Use monthly only</label>
            </div>
        );
    }
}

export default CalendarAvailability;