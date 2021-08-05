import { Formik } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";
import ErrorMessage from "./ErrorMessage";

const validationSchema = Yup.object().shape({
  fullName: Yup.string().required().max(150).label("Full Name"),
  mobile1: Yup.number().required().label("Mobile 1").max(999999999),
  mobile2: Yup.number().max(999999999).required().label("Mobile 2"),
  addressLine1: Yup.string().max(150).required().label("Address Line 1"),
  addressLine2: Yup.string().max(150).required().label("Address Line 2"),
  city: Yup.string().required().max(150).label("City"),
  email: Yup.string().max(150).email().label("Email"),
});

const FormComponent = () => {
  useEffect(() => {}, []);
  return (
    <div className="billing_ditailes">
      <div className="form_header">BILLING DETAILS</div>
      <Formik
        initialValues={{
          fullName: "",
          mobile1: "",
          mobile2: "",
          addressLine1: "",
          addressLine2: "",
          city: "",
          email: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(value) => console.log(value)}
      >
        {({ handleChange, handleSubmit, errors,touched, setFieldTouched }) => (
          <form className="billing_form" onSubmit={handleSubmit}>
            <div className="input_group">
              <label htmlFor="name">Full name*</label>
              <input
                onChange={handleChange("fullName")}
                id="name"
                type="text"
                onBlur={()=>setFieldTouched('fullName')}
              />
              <ErrorMessage
                error={errors.fullName}
                errorVisible={touched.fullName}
              />
            </div>
            <div className="input_group">
              <label htmlFor="mobile1">Mobile 1*</label>
              <input
                id="mobile1"
                type="text"
                onChange={handleChange("mobile1")}
                onBlur={()=>setFieldTouched("mobile1")}
              />
              <ErrorMessage
                error={errors.mobile1}
                errorVisible={touched.mobile1}
                message={"This Number Use for varification"}
              />
            </div>
            <div className="input_group">
              <label htmlFor="mobile2">Mobile 2*</label>
              <input
                id="mobile2"
                type="text"
                onChange={handleChange("mobile2")}
                onBlur={()=>setFieldTouched("mobile2")}
              />
              <ErrorMessage
                error={errors.mobile2}
                errorVisible={touched.mobile2}
                message={"Phone Number Type:071XXXXXXX"}
              />
            </div>
            <div className="input_group">
              <label htmlFor="address1">Address Line 1*</label>
              <input
                id="address1"
                type="text"
                onChange={handleChange("addressLine1")}
                onBlur={()=>setFieldTouched("addressLine1")}
              />
              <ErrorMessage
                error={errors.addressLine1}
                errorVisible={touched.addressLine1}
              />
            </div>
            <div className="input_group">
              <label htmlFor="address2">Address Line 2*</label>
              <input
                id="address2"
                type="text"
                onChange={handleChange("addressLine2")}
                onBlur={()=>setFieldTouched("addressLine2")}
              />
              <ErrorMessage
                error={errors.addressLine2}
                errorVisible={touched.addressLine2}
              />
            </div>
            <div className="input_group">
              <label htmlFor="city">City*</label>
              <input
                id="city"
                type="select"
                onChange={handleChange("city")}
                onBlur={()=>setFieldTouched("city")}
              />
              <ErrorMessage error={errors.city} errorVisible={touched.city} />
            </div>
            <div className="input_group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                onChange={handleChange("email")}
                onBlur={()=>setFieldTouched("email")}
              />
              <ErrorMessage error={errors.email} errorVisible={touched.email} />
            </div>
            <button type="submit" className="btn btn--block order_btn">
              Place Order
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormComponent;
