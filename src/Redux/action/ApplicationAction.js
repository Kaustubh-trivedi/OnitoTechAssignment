import axios from "axios";

let host = "https://localhost:4600";


export const getSeekerAllData = (token) => {
    return async function (dispatch) {
        await fetch(`${host}/mobile/get-seeker-all-details`, { method: "GET", headers: { "auth-token": token } })
            .then((res) => {
                res.json().then((seekerData) => {
                    dispatch(setSeekerAllData(seekerData?.data?.[0]));
                    // console.log("In seeker data in action:", seekerData?.data[0]);
                })
            }).catch((err) => {
                console.log("ERROR in getSeekerData function(redux):", err.message, err);
            })
    }
}

const setSeekerAllData = (seekerData) => {
    if (seekerData) {
        return {
            type: "SET_SEEKER_ALL_DATA",
            payload: seekerData,
        }
    }
}

export const setWholeDetails = (data) => {
    return function (dispatch) {
        dispatch(setDataRedux(data));
    }
}

const setDataRedux = (data) => {
    if (data) {
        return {
            type: "SET_DATA",
            payload: data
        }
    }
}

export const getDataList = () => {
    return function (dispatch) {
        dispatch(getDataRedux())
    }
}

const getDataRedux = () => {
    return{
        type:"GET_DATA",
        payload:"",
    }
}