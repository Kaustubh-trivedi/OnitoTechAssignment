import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
const PersonalDetailsForm = () => {
    let [disable, setDisable] = useState(true);

    const navigate = useNavigate();
    let initialValues = {
        name: "",
        age: "",
        sex: "",
        mobile: "",
        govt_id_type: "",
        govt_id: "",
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object({
            name: Yup.string().required("Name is required").min(3, 'Name must be at least 3 characters'),
            age: Yup.string().required("This field is required").matches(/^(0?[1-9]|[1-9][0-9]+)$/, "Enter a valid age"),
            sex: Yup.string().required("This field is required"),
            mobile: Yup.string().required("This field is required").matches(/^[6-9]\d{9}$/, "Enter a valid mobile number"),
            govt_id_type: Yup.string().required("This field is required"),
            govt_id: Yup.string().required("This field is required"),

        }),
        onSubmit: values => {
            console.log(values);
            navigate("/address-details", { state: { values } })
        }
    });

    const handleGovtId = (e) => {
        if (e.target.value === "Aadhar") {
            setDisable(false);
        } else if (e.target.value === "Pan") {
            setDisable(false);
        } else {
            formik.setFieldValue("govt_id","")
            setDisable(true);
        }
    }

    return (
        <>
            <div className="container my-1">
                <div className="row">
                    <h3><i>Perosnal Details</i></h3>
                </div>
                <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="name"><b>Name:</b></label>
                            <input type="text" className="form-control" name='name' placeholder='Enter your name'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.name}
                            />
                            <div className="help-block-with-errors">
                                {formik.touched.name && formik.errors.name ? (<div className="text-danger">{formik.errors.name}</div>) : null}
                            </div>
                        </div>
                        <div className="col-md-6">

                            <label htmlFor="age"><b>Age:</b></label>
                            <input type="text" className="form-control" name='age' placeholder='Enter your Age'
                                onInput={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')}
                                maxLength={3}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.age} />

                            <div className="help-block-with-errors">
                                {formik.touched.age && formik.errors.age ? (<div className="text-danger">{formik.errors.age}</div>) : null}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="sex"><b>Sex:</b></label>
                            <select name="sex" id="sex" className='form-control'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.sex}
                            >
                                <option value="">-Select Your Gender-</option>
                                <option value="M">Male</option>
                                <option value="F">Female</option>
                            </select>
                            <div className="help-block-with-errors">
                                {formik.touched.sex && formik.errors.sex ? (<div className="text-danger">{formik.errors.sex}</div>) : null}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="mobile"><b>Mobile:</b></label>
                            <input type="text" className="form-control" name='mobile' placeholder='Enter 10 digit mobile number' maxLength={10}
                                onInput={(e) => e.target.value = e.target.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1')}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.mobile} />
                            <div className="help-block-with-errors">
                                {formik.touched.mobile && formik.errors.mobile ? (<div className="text-danger">{formik.errors.mobile}</div>) : null}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="govt_id_type"><b>Govt Issued ID Type</b></label>
                            <select name="govt_id_type" id="govt_id_type" className='form-control'
                                onChange={
                                    (e) => {

                                        formik.handleChange(e);
                                        handleGovtId(e);
                                    }
                                }
                                onBlur={formik.handleBlur}
                                value={formik.values.govt_id_type}
                            >
                                <option value="">-ID Type-</option>
                                <option value="Aadhar">Aadhar</option>
                                <option value="Pan">Pan</option>
                            </select>
                            <div className="help-block-with-errors">
                                {formik.touched.govt_id_type && formik.errors.govt_id_type ? (<div className="text-danger">{formik.errors.govt_id_type}</div>) : null}
                            </div>
                        </div>
                        <div className="col-md-6">
                            {/* <label htmlFor="govt_id"></label> */}
                            <input type="text" className='form-control' name="govt_id"
                                disabled={disable}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.govt_id}
                                placeholder='Enter your Govt ID number'
                            />
                            <div className="help-block-with-errors">
                                {formik.touched.govt_id && formik.errors.govt_id ? (<div className="text-danger">{formik.errors.govt_id}</div>) : null}
                            </div>
                        </div>
                    </div>

                    <button type='submit' className="btn btn-primary btn-sm">Next</button>
                </form>
            </div>
        </>
    )
}

export default PersonalDetailsForm