// import React from "react";
import React, { useState, useEffect, useRef, useCallback, Fragment } from "react";
import { Link, useHistory } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import React, {
//     useState,
//     useEffect,
//     useCallback,
//     useRef,
//     Fragment,
//   } from "react";
import moment from "moment";
import API from "../../utils/API";
// import { useAuth } from '../../../../server/routes/api/authCheckLogOn.js';



const SessionTimeout = () => {
    const [events, setEvents] = useState(["click", "load", "scroll"]);
    const [second, setSecond] = useState(0);
    const [isOpen, setOpen] = useState(false);
    // const [isAuthenticated, setIsAuthenticated] = useState("bad logon");

    // useState(API.checkAuth().then( (res) => {

    // const user1 = awa res.json(req.data);
    // console.log(user1);
    // return JSON.stringify(res.data) ;
    //     console.log(res.data.login);
    //     setIsAuthenticated(res.data.login);
    // }));
    // const [isAuthenticatedBool, setIsAuthenticatedBool] = useState(false);
    let isAuthenticated = false;
    //  API.checkAuth()
    //  .then( (res) => {
    //     console.log(res.data.login);

    //  })
    //  .catch(err => {
    //     console.log(err);
    //  });

    // setIsAuthenticatedBool(isAuthenticated === "good logon" ? true : false);
    // const {
    //     authState: { isAuthenticated },
    //     logout,
    //   } = useAuth();

    // let retlogon = API.checkAuth();
    // const tmp2 = isAuthenticated.resolve();
    // const temp5 = isAuthenticated.Prototype;
    // const temp6 = isAuthenticated.PromiseResult;
    // const temp1 = isAuthenticated["PromiseResult"];
    // let {login : value} = [isAuthenticated];
    // const tmp7 = Object.getPromiseresultOf(isAuthenticated);
    // let [PromiseResult] = isAuthenticated;
    // setIsAuthenticatedBool(isAuthenticated === "good logon");

    let timeStamp;
    let warningInactiveInterval = useRef();
    let startTimerInterval = useRef();
    let history = useHistory();

    let timeChecker = () => {
        startTimerInterval.current = setTimeout(() => {


///////////////////////
        API.checkAuth()
            .then((res) => {
                console.log(res.data);
                if (res.data === "good logon") {
                    isAuthenticated = true;
                    setOpen(true);
                    clearInterval(warningInactiveInterval.current);
                    sessionStorage.removeItem('lastTimeStamp');

                    timeStamp = moment();
                    sessionStorage.setItem('lastTimeStamp', timeStamp);
                    // setIsAuthenticatedBool(true);
                }

            })
            .catch(err => {
                console.log(err);
            });
//////////////////////////////




            let storedTimeStamp = sessionStorage.getItem('lastTimeStamp');
            warningInactive(storedTimeStamp);
        }, 60000);
    };


    // warning timer
    let warningInactive = (timeString) => {
        clearTimeout(startTimerInterval.current);

        API.checkAuth()
            .then((res) => {
                console.log(res.data);
                if (res.data === "good logon") {
                    isAuthenticated = true;
                    setOpen(true);
                    clearInterval(warningInactiveInterval.current);
                    sessionStorage.removeItem('lastTimeStamp');

                    timeStamp = moment();
                    sessionStorage.setItem('lastTimeStamp', timeStamp);
                    // setIsAuthenticatedBool(true);
                }





                warningInactiveInterval.current = setInterval(() => {
                    const maxTime = 2;
                    const popTime = 1;

const momtemp = moment(timeStamp);
const difftemp = moment().diff(momtemp);
                    const diff = moment.duration(moment().diff(moment(timeString)));
                    const minPast = diff.minutes();
                    const leftSecond = 60 - diff.seconds();

                    

                    if (minPast >= maxTime && isOpen === true) {
                        clearInterval(warningInactiveInterval.current);
                        setOpen(false);
                        sessionStorage.removeItem('lastTimeStamp');
                        isAuthenticated = false;
                        API.logOff();
                        alert('logged off');
                        history.push({ pathname: "/Login", state: { detail: {} } });
                    }
                }, 1000);

            })
            .catch(err => {
                console.log(err);
            });

    };



    



    // reset interval timer
    let resetTimer = useCallback(() => {
        clearTimeout(startTimerInterval.current);
        clearInterval(warningInactiveInterval.current);

        API.checkAuth()
            .then((res) => {
                console.log(res.data);

                if (res.data === "good logon") {
                    isAuthenticated = true;
                }

                if (isAuthenticated === true) {
                    timeStamp = moment();
                    sessionStorage.setItem('lastTimeStamp', timeStamp);
                } else {
                    clearInterval(warningInactiveInterval.current);
                    sessionStorage.removeItem('lastTimeStamp');
                }
                timeChecker();
                setOpen(false);
            })
            .catch(err => {
                console.log(err);
            });

    }, [isAuthenticated]);

    // handle close popup
    const handleClose = () => {
        setOpen(false);

        resetTimer();
    };


    useEffect(() => {
        events.forEach((event) => {
            window.addEventListener(event, resetTimer);
        });

        timeChecker();

        return () => {
            clearTimeout(startTimerInterval.current);
            
        };
    }, [resetTimer, events, timeChecker]);

    console.log(second);

    if (!isOpen) {
        return null;
    }

    return <Fragment />;

};




export default SessionTimeout;