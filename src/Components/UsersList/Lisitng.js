import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDataList } from '../../Redux/action/ApplicationAction';

const Lisitng = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getDataList());
    },[])

    const data = useSelector(state=> state.ApplicationReducer.dataList);
    console.log(data);
    return (
        <>

        </>
    )
}

export default Lisitng