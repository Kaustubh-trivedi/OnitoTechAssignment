import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import axios from "axios";
import { useDispatch } from 'react-redux';
import { setWholeDetails } from '../../Redux/action/ApplicationAction';
import { toast } from 'react-toastify';
import Stepper from 'react-stepper-horizontal';

const AddressDetailsForm = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { values } = location.state || "";
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        setCountries(response.data);
        setFilteredCountries(response.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
        toast.error("Error in fetching countries.")
      }
    };
    if (!values) {
      toast.error("Please fill personal details first.");
      navigate("/personal-details");
    }
    fetchCountries();
  }, []);




  // console.log(values)
  let initialValues = {
    name: values.name || "",
    age: values.age || "",
    sex: values.sex || "",
    mobile: values.mobile || "",
    govt_id_type: values.govt_id_type || "",
    govt_id: values.govt_id || "",
    address: "",
    state: "",
    city: "",
    country: "",
    pincode: ""
  }

  // console.log(values);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: Yup.object({
      address: Yup.string(),
      state: Yup.string(),
      city: Yup.string(),
      country: Yup.string(),
      pincode: Yup.string().matches(/^[1-9][0-9]{5}$/, "Please enter valid pin code")
      // govt_id: Yup.string().required("This field is required")

    }),
    onSubmit: (values) => {
      dispatch(setWholeDetails(values));
      navigate("/")
    }
  });

  const handleInputChange = event => {
    const inputValue = event.target.value.toLowerCase();
    formik.handleChange(event);

    if (inputValue === '' || inputValue.length === 1) {
      setFilteredCountries(countries);
    } else {
      const filtered = countries.filter(country =>
        country.name.common.toLowerCase().includes(inputValue)
      );
      setFilteredCountries(filtered);
    }
  };

  return (
    <>
      <div className="container my-1">
        <div className="row my-2">
          <div className="text-center">
            <h4>Onito Tech Assignment</h4>
          </div>
        </div>
        <Stepper steps={[{ title: 'Personal Details' }, { title: 'Address Details' }]} activeStep={2} />
        <div className="row">
          <h3><i>Address Details</i></h3>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="address"><b>Address:</b></label>
              <input type="text" className="form-control" name='address' placeholder='Enter your address'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
              />
              <div className="help-block-with-errors">
                {formik.touched.address && formik.errors.address ? (<div className="text-danger">{formik.errors.address}</div>) : null}
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="state"><b>State:</b></label>
              <input type="text" className="form-control" name='state' placeholder='Enter State'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.state} />
              <div className="help-block-with-errors">
                {formik.touched.state && formik.errors.state ? (<div className="text-danger">{formik.errors.state}</div>) : null}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="city"><b>City:</b></label>
              <input type="text" className="form-control" name='city' placeholder='Enter City'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.city} />
              <div className="help-block-with-errors">
                {formik.touched.city && formik.errors.city ? (<div className="text-danger">{formik.errors.city}</div>) : null}
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="country"><b>Country:</b></label>
              <input type="text" className="form-control" name='country' placeholder='Enter Country'
                list="countries-list"
                autoComplete='off'
                onChange={handleInputChange}
                onBlur={formik.handleBlur}
                value={formik.values.country}
              />
              <div className="help-block-with-errors">
                {formik.touched.country && formik.errors.country ? (<div className="text-danger">{formik.errors.country}</div>) : null}
              </div>
              <datalist id="countries-list">
                {filteredCountries.map(country => (
                  <option key={country.name.common} value={country.name.common} >{country.name.common}</option>
                ))}
              </datalist>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <label htmlFor="pincode"><b>Pincode:</b></label>
              <input type="text" className="form-control" name='pincode' placeholder='Enter Pincode'
                onInput={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')}
                maxLength={6}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.pincode} />
              <div className="help-block-with-errors">
                {formik.touched.pincode && formik.errors.pincode ? (<div className="text-danger">{formik.errors.pincode}</div>) : null}
              </div>
            </div>
          </div>
          <button type='submit' className="btn btn-dark btn-sm">Next</button>
        </form>
      </div>
    </>
  )
}

export default AddressDetailsForm