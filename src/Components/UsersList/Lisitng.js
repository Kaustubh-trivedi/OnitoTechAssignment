import React, { useEffect, useRef, useState } from 'react'
import $ from 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import "datatables.net-bs5/css/dataTables.bootstrap5.min.css";
import 'datatables.net-bs5'
import 'datatables.net';
import { Link } from 'react-router-dom';


const Lisitng = ({ data }) => {
    const tableRef = useRef(null);
    const [tabledata, setTableData] = useState([]);

    useEffect(() => {
        console.log(data)
        setTableData(data);
        $(tableRef.current).DataTable();
    }, [data])
    return (
        <>
            <div className="container">
                <div className="row my-2">
                    <div className="text-center">
                        <h4>Onito Tech Assignment Table</h4>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <Link className="btn btn-success btn-sm" to='/personal-details'>+Add Details</Link>
                    </div>
                </div>
                <table className='table table-bordered' ref={tableRef}>
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Sex</th>
                            <th>Mobile</th>
                            <th>Govt Issued ID type</th>
                            <th>Govt ID number</th>
                            <th>Address</th>
                            <th>State</th>
                            <th>City</th>
                            <th>Country</th>
                            <th>Pin Code</th>
                        </tr>
                    </thead>

                    {tabledata.length > 0 && (
                        <tbody>
                            {tabledata.map((data, index) => {
                                return <tr key={index + 1}>
                                    <td>{index + 1}</td>
                                    <td>{data.name}</td>
                                    <td>{data.age}</td>
                                    <td>{data.sex}</td>
                                    <td>{data.mobile ?? "-"}</td>
                                    <td>{data.govt_id_type ?? "-"}</td>
                                    <td>{data.govt_id ?? "-"}</td>
                                    <td>{data.address ?? "-"}</td>
                                    <td>{data.state ?? "-"}</td>
                                    <td>{data.city ?? "-"}</td>
                                    <td>{data.country ?? "-"}</td>
                                    <td>{data.pincode ?? "-"}</td>
                                </tr>
                            })}
                        </tbody>)
                        //  :
                        // (<tbody>
                        //     <tr>
                        //         <td colSpan={12}>No data available.</td>
                        //     </tr>
                        // </tbody>)
                    }
                    <tbody>
                        {tabledata.length > 0 && <>
                            {tabledata.map((data, index) => {
                                return <tr key={index + 1}>
                                    <td>{index + 1}</td>
                                    <td>{data.name}</td>
                                    <td>{data.age}</td>
                                    <td>{data.sex}</td>
                                    <td>{data.mobile ?? "-"}</td>
                                    <td>{data.govt_id_type ?? "-"}</td>
                                    <td>{data.govt_id ?? "-"}</td>
                                    <td>{data.address ?? "-"}</td>
                                    <td>{data.state ?? "-"}</td>
                                    <td>{data.city ?? "-"}</td>
                                    <td>{data.country ?? "-"}</td>
                                    <td>{data.pincode ?? "-"}</td>
                                </tr>
                            })}
                        </>
                            // : <>
                            //    <tr>
                            //         <td colSpan="7">No data available</td> 
                            //     </tr>
                            // </>
                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Lisitng