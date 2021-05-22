import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { useHistory, useParams } from "react-router-dom";
import CalendarComponent from "../components/CalendarComponent";
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';

function CalendarAvailability(arg0, ...arg1) {
    //let [formObject, setFormObject];
    let caught = false;
    let fromhist = false;
    const localizer = momentLocalizer(moment);
    let goodary = [];
    try {
        let [formObject, setFormObject] = useState({});


        // catch(ex){

        caught = true;
        // API.getDates()
        //     .then(res => {
        //         console.log(res);
        //         if (res.data[0].CalendarModels) {

        //             stater.events = [];
        //             //sendarray {}
        //             let sendarray =  {
        //                 fromLogin : true,
        //                 datearray: []
        //             };

        //             res.data[0].CalendarModels.forEach(element => {

        //                 //let stater2 = [];
        //                 let obj2 = {
        //                     start: element.dateStart,         //moment().toDate(),
        //                     end: element.dateEnd,
        //                     title: element.title //"Some title"

        //                 };

        //                 sendarray.datearray.push(obj2);
        //                 //stater.events.push(obj2);

        //             });

        //             //setFormObject(true);
        //             history.push({ pathname: "/CalendarAvailability", state: { detail: sendarray /*stater datearray*/ /*res.data[0].CalendarModels*/ } });

        //         }


        //         else {




        //             stater = {
        //                 events: [
        //                     {
        //                         start: res.data[0].dateStart,         //moment().toDate(),
        //                         end: res.data[0].dateEnd,
        //                         // end: moment()
        //                         //     .add(1, "days")
        //                         //     .toDate(),
        //                         title: res.data[0].title //"Some title"
        //                     }
        //                 ]
        //             };
        //         }
        //     })
        //     .catch(err => console.log(err));
        //}
        let history = useHistory();

        if (history.location !== null && history.location.state !== null &&
            history.location.state.detail !== null && history.location.state.detail.fromLogin === true) {
            fromhist = true;
            //convert to date();
            //THIS CHANGES DATEARRAY!!!
            goodary = history.location.state.detail.datearray.map(x => {
                //figure out type
                if (!x.start.includes("Z")) {
                    var parts = x.start.split('-');
                    let parts2 = x.end.split('-');
                    // Please pay attention to the month (parts[1]); JavaScript counts months from 0:
                    // January - 0, February - 1, etc.
                    x.start = new Date(parts[0], parts[1] - 1, parts[2]);
                    x.end = new Date(parts2[0], parts2[1] - 1, parts2[2]);

                    //x.end.toDate();
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

                    //x.end.toDate();
                    x.title;
                    return x;
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

        // const dateGetter = () => {
        //     // none of the following matters because API.getDates is async
        //     API.getDates()
        //         .then(res => {
        //             console.log(res);
        //             if (res.data[0].CalendarModels) {

        //                 stater.events = [];

        //                 res.data[0].CalendarModels.forEach(element => {

        //                     //let stater2 = [];
        //                     let obj2 = {
        //                         start: element.dateStart,         //moment().toDate(),
        //                         end: element.dateEnd,
        //                         title: element.title //"Some title"

        //                     };

        //                     stater.events.push(obj2);

        //                 });

        //             }


        //             else {




        //                 stater = {
        //                     events: [
        //                         {
        //                             start: res.data[0].dateStart,         //moment().toDate(),
        //                             end: res.data[0].dateEnd,
        //                             // end: moment()
        //                             //     .add(1, "days")
        //                             //     .toDate(),
        //                             title: res.data[0].title //"Some title"
        //                         }
        //                     ]
        //                 };
        //             }
        //         })
        //         .catch(err => console.log(err));
        // }

        const { id } = useParams(); // not currently being used, but good to keep in mind
        //console.log(history.location.state.detail);



        useEffect(() => {
            //console.log(history.location.state.detail);
            if (fromhist === true)
                return;

            API.getDates()
                .then(res => {
                    console.log(res);
                    if (res.data[0].CalendarModels) {

                        stater.events = [];
                        //sendarray {}
                        let sendarray = {
                            fromLogin: true,
                            datearray: []
                        };

                        res.data[0].CalendarModels.forEach(element => {

                            //let stater2 = [];
                            let obj2 = {
                                start: element.dateStart.toDate(),         //moment().toDate(),
                                end: element.dateEnd.toDate(),
                                title: element.title //"Some title"

                            };

                            sendarray.datearray.push(obj2);
                            //stater.events.push(obj2);

                        });

                        //setFormObject(true);
                        history.push({ pathname: "/CalendarAvailability", state: { detail: sendarray /*stater datearray*/ /*res.data[0].CalendarModels*/ } });

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
        }, []);


        // function handleInputChange(event) {
        //     const { name, value } = event.target;
        //     setFormObject({ ...formObject, [name]: value })
        // };

        // if (!history.location.state) {
        //     dateGetter();

        //}


        return (
            <div>
                <form>


                    {
                        fromhist
                            // history.location !== undefined &&
                            // history.location.state !== undefined && history.location.state.detail !== undefined
                            //&& history.location.state.detail.events !== undefined 
                            //&& history.location.state.detail.events[0] !== undefined 
                            // && history.location.state.detail.events[0].start !== undefined
                            ?

                            <Calendar
                                localizer={localizer}
                                defaultDate={new Date()}
                                defaultView="month"
                                events={history.location.state.detail.datearray}
                                style={{ height: "100vh" }}
                            />

                            //     <CalendarComponent
                            //     events={history.location.state}
                            //     height="100vh"
                            // >
                            // </CalendarComponent>
                            :



                            // setFormObject(true)

                            <Calendar
                                localizer={localizer}
                                defaultDate={new Date()}
                                defaultView="month"
                                //events={stater.events[0]}
                                events={[]}
                                style={{ height: "100vh" }}
                            />

                        //     <CalendarComponent
                        //     events={stater.events[0]}
                        //     height="100vh"
                        // >
                        // </CalendarComponent>
                    }

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