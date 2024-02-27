import React, { useEffect, useState } from 'react'
import Navbar from '../Common/Navbar'
import Lisitng from './Lisitng'
import { useDispatch, useSelector } from 'react-redux';
import { getDataList } from '../../Redux/action/ApplicationAction';

const UsersList = () => {
    let [data, setData] = useState([]);
    const dispatch = useDispatch();
    const getData = useSelector(state => state.ApplicationReducer.dataList);
    // console.log(getData);
    useEffect(() => {
        dispatch(getDataList());
        // console.log(getData);
        setData(getData);
    }, [])

    return (
        <>
            <Navbar />
            <Lisitng data={data} />
        </>
    )
}


export default UsersList;