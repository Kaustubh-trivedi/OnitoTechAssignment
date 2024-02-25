import React from 'react'
import Navbar from '../Common/Navbar'
import Lisitng from './Lisitng'
import { connect } from 'react-redux';
const UsersList = ({dataList}) => {
    console.log(dataList)
    return (
        <>
            <Navbar />
            <Lisitng />
        </>
    )
}

const mapStateToProps = (state) => ({
    dataList: state.dataList
  });

export default connect(mapStateToProps)(UsersList);