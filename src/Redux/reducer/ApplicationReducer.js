let recruiterInitialState = {
    applicationDataList: [],
    dataList: [],
}

const ApplicationReducer = (state = recruiterInitialState, action) => {
    switch (action.type) {
        case 'SET_CITY_DATA':
            return {
                ...state,
                applicationDataList: action.payload,
            };

        case 'SET_DATA':
            return {
                ...state,
                dataList: [...state.dataList, action.payload],
            };

        case 'GET_DATA':
            return {
                ...state,
                dataList: state.dataList,
            };

        default:
            return state;
    }
}

export default ApplicationReducer;