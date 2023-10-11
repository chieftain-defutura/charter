import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ReactComponent as Tick } from "../../../assets/icons/tick.svg";
import Mail from "../../../assets/icons/mail.svg";
import User from "../../../assets/icons/user.svg";
import Phone from "../../../assets/icons/phone.svg";
import "./Secure.scss";

interface ISecure {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

const Step1Schema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
});

const Step2Schema = Yup.object().shape({
  program: Yup.string().required("Program is required"),
  time: Yup.string().required("Time is required"),
  course: Yup.string().required("Course is required"),
});

const Secure: React.FC<ISecure> = ({ count, setCount }) => {
  console.log(count);
  return (
    <div className="secure-container">
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          program: "",
          time: "",
          course: "",
        }}
        validationSchema={count === 1 ? Step1Schema : Step2Schema}
        onSubmit={(values) => {
          if (count === 1) {
            setCount(2);
          } else if (count === 2) {
            setCount(3);
          }
          console.log("values", values);
        }}
      >
        <Form>
          {count === 1 && (
            <div className="container-one">
              <div className="input-container">
                <div className="input-wrapper">
                  <div className="title">What should we call you here?</div>
                  <div className="input">
                    <img src={User} alt="" />
                    <Field type="text" name="name" placeholder="Name" />
                  </div>
                  <ErrorMessage name="name" component="div" className="error" />
                </div>
                <div className="input-wrapper">
                  <div className="title">
                    We keep it light and send only what matters!
                  </div>
                  <div className="input">
                    <img src={Mail} alt="" />
                    <Field type="text" name="email" placeholder="E-mail" />
                  </div>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="input-wrapper">
                  <div className="title">
                    Can you drop your WhatsApp number ?
                  </div>
                  <div className="input">
                    <img src={Phone} alt="" />
                    <Field type="text" name="phone" placeholder="Phone" />
                  </div>
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="error"
                  />
                </div>
              </div>

              <div className="btn" onClick={() => setCount(2)}>
                <button type="submit">Next</button>
              </div>
              <div className="router">
                <h1>01</h1>
                <div className="border"></div>
                <h1>02</h1>
              </div>
            </div>
          )}

          {count === 2 && (
            <div className="container-one">
              <div className="input-container">
                <div className="input-wrapper">
                  <div className="title">
                    Go ahead and pick the program that suits you.
                  </div>
                  <div className="input">
                    <Field
                      type="text"
                      name="program"
                      placeholder="Remote programme for fresher graduates"
                    />
                  </div>
                  <ErrorMessage
                    name="program"
                    component="div"
                    className="error"
                  />
                </div>
                <div className="input-wrapper">
                  <div className="title">
                    Which time frame suits you best for your classes, AM or PM?
                  </div>
                  <div className="input">
                    <Field
                      type="text"
                      name="time"
                      placeholder="Morning batch"
                    />
                  </div>
                  <ErrorMessage name="time" component="div" className="error" />
                </div>
                <div className="input-wrapper">
                  <div className="title">
                    Make your choice among the available courses.
                  </div>
                  <div className="input">
                    <Field type="text" name="course" placeholder="Cluster 1" />
                  </div>
                  <ErrorMessage
                    name="course"
                    component="div"
                    className="error"
                  />
                </div>
              </div>

              <div className="btn" onClick={() => setCount(3)}>
                <button type="submit">Next</button>
              </div>

              <div className="router">
                <h1>01</h1>
                <div className="border"></div>
                <h1>02</h1>
              </div>
            </div>
          )}
        </Form>
      </Formik>

      {count === 3 && (
        <div className="final-view">
          <div className="">
            <h4>Let's wrap things up.</h4>
            <h2> See you soon.</h2>
          </div>
          <div className="image">
            <Tick />
          </div>
        </div>
      )}
    </div>
  );
};

export default Secure;
