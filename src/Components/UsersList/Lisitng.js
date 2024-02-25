import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDataList } from '../../Redux/action/ApplicationAction';
import $ from 'jquery';
import 'datatables.net';

const Lisitng = () => {
    const dispatch = useDispatch();
    const tableRef = useRef(null);

    useEffect(() => {
        dispatch(getDataList());
        $(tableRef.current).DataTable();
    }, [])

    const data = useSelector(state => state.ApplicationReducer.dataList);
    console.log(data);
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Sex</th>
                        <th>Mobile</th>
                        <th>Govt Issued ID type</th>
                        <th>Govt ID number</th>
                    </tr>
                </thead>
            </table>
        </>
    )
}

export default Lisitng