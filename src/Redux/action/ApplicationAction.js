
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