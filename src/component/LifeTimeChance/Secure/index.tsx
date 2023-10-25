import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { ReactComponent as ChevronLeftArrow } from "../../../assets/icons/chevron-left.svg";
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
  program: Yup.string(),
  time: Yup.string(),
  course: Yup.string(),
});

const initialValues = {
  name: "",
  email: "",
  phone: "",
  program: "",
  time: "",
  course: "",
};

const optionOne = ["Remote programme for fresher graduates"];

const optionTwo = ["Morning batch", "Evening batch"];

const optionThree = ["Cluster 1", "Cluster 2"];

const Secure: React.FC<ISecure> = ({ count, setCount }) => {
  const [selectedOptionOne, setSelectedOptionOne] = useState<string>("");
  const [selectedOptionTwo, setSelectedOptionTwo] = useState<string>("");
  const [selectedOptionThree, setSelectedOptionThree] = useState<string>("");
  const [isOpenOne, setIsOpenOne] = useState(false);
  const [isOpenTwo, setIsOpenTwo] = useState(false);
  const [isOpenThree, setIsOpenThree] = useState(false);

  const toggleDropdown = (dropdown: number) => {
    if (dropdown === 1) {
      setIsOpenOne(!isOpenOne);
      setIsOpenTwo(false);
      setIsOpenThree(false);
    } else if (dropdown === 2) {
      setIsOpenTwo(!isOpenTwo);
      setIsOpenOne(false);
      setIsOpenThree(false);
    } else if (dropdown === 3) {
      setIsOpenThree(!isOpenThree);
      setIsOpenOne(false);
      setIsOpenTwo(false);
    }
  };

  const handleOptionClick = (option: string, dropdown: number) => {
    if (dropdown === 1) {
      setSelectedOptionOne(option);
      setIsOpenOne(false);
    } else if (dropdown === 2) {
      setSelectedOptionTwo(option);
      setIsOpenTwo(false);
    } else if (dropdown === 3) {
      setSelectedOptionThree(option);
      setIsOpenThree(false);
    }
  };

  const handleSubmit = async (values: typeof initialValues) => {
    try {
      setCount(3);
      const emailParams = {
        to_email: "subaap86@gmail.com",
        subject: "details",
        message: `username:${values.name}, 
          userMail:${values.email},
           userPhoneNumber:${values.phone},
           program:${selectedOptionOne},
           batch:${selectedOptionTwo},
           cluster:${selectedOptionThree}`,
        from_name: values.name,
        to_name: "dehustle",
      };

      const response = await emailjs.send(
        "service_ye4n5dl",
        "template_agvcl0k",
        emailParams,
        "85jl960Zew5smr0XV"
      );
      console.log("Email sent", response);

      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="secure-container">
      <Formik
        initialValues={initialValues}
        validationSchema={count === 1 ? Step1Schema : Step2Schema}
        onSubmit={handleSubmit}
      >
        {({ errors }) => (
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
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="error"
                    />
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
                  <button>Next</button>
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

                    <div className="drop-down-wrapper">
                      <div
                        className="drop-down-select-content"
                        onClick={() => toggleDropdown(1)}
                      >
                        <p>{selectedOptionOne || "Select an option"}</p>
                        <ChevronLeftArrow />
                      </div>
                      {isOpenOne && (
                        <div className="drop-down-options">
                          {optionOne.map((option, index) => (
                            <div
                              key={index}
                              onClick={() => handleOptionClick(option, 1)}
                            >
                              <p>{option}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="input-wrapper">
                    <div className="title">
                      Which time frame suits you best for your classes, AM or
                      PM?
                    </div>
                    <div className="drop-down-wrapper">
                      <div
                        className="drop-down-select-content"
                        onClick={() => toggleDropdown(2)}
                      >
                        <p>{selectedOptionTwo || "Select a batch"}</p>
                        <ChevronLeftArrow />
                      </div>
                      {isOpenTwo && (
                        <div className="drop-down-options">
                          {optionTwo.map((option, index) => (
                            <div
                              key={index}
                              onClick={() => handleOptionClick(option, 2)}
                            >
                              <p>{option}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="input-wrapper">
                    <div className="title">
                      Make your choice among the available courses.
                    </div>
                    <div className="drop-down-wrapper">
                      <div
                        className="drop-down-select-content"
                        onClick={() => toggleDropdown(3)}
                      >
                        <p>{selectedOptionThree || "Select a Cluster"}</p>
                        <ChevronLeftArrow />
                      </div>
                      {isOpenThree && (
                        <div className="drop-down-options">
                          {optionThree.map((option, index) => (
                            <div
                              key={index}
                              onClick={() => handleOptionClick(option, 3)}
                            >
                              <p>{option}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="btn">
                  <button type="submit">Next</button>
                </div>

                <div className="router">
                  <div className="image">
                    <Tick width={18} height={18} />
                  </div>
                  <div className="border"></div>
                  <h1>02</h1>
                </div>
              </div>
            )}
          </Form>
        )}
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
