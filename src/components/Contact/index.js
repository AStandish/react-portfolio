import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { validateEmail } from "../../utils/helpers";
import emailjs from "@emailjs/browser";
import "./style.css";


function Contact() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: "",
      userEmail: "",
      userMessage: "",
    },
  });
  const form = useRef();
  const SERVICE_ID = "service_9c1va2e";
  const TEMPLATE_ID = "template_txukwqq";
  const PUBLIC_KEY = "YRCBYFo-1NOgtWSq_";
  async function sendEmail() {
    await emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        () => {
          alert("Message sent, thank you!");
        },
        (error) => {
          alert(error.status, "Something went wrong", error.text);
        }
      );
  }
  const onSubmit = (e) => {
    sendEmail(e);
    setValue("userName", "");
    setValue("userEmail", "");
    setValue("userMessage", "");
  };

  return (
    <section className="sectioncontact">
      <h2 className="h2contact">Contact Me</h2>
      <form className="contactform" ref={form} onSubmit={handleSubmit(onSubmit)}>
        <h3 className="h3contact">Name:</h3>
        <input
          className="inputcontact"
          {...register("userName", {
            required: "Name is required",
            minLength: {
              value: 2,
              message: "Minimum two characters.",
            },
          })}
          type="text"
          placeholder="Your name here"
        />
        <p className="h3contact">{errors.userName?.message}</p>
        <h3 className="h3contact">Email:</h3>
        <input
          className="inputcontact"
          {...register("userEmail", {
            required: "email is required",
            validateEmail,
          })}
          type="email"
          placeholder="Your email here"
        />
        <p className="h3contact">{errors.userEmail?.message}</p>
        <h3 className="h3contact">Message:</h3>
        <textarea
          className="contacttextarea"
          {...register("userMessage", {
            required: "Please provide me with a message to reply to",
            minLength: {
              value: 2,
              message: "Provide me with a message to reply to",
            },
          })}
          placeholder="Your message here"
        />
        <p className="h3contact">{errors.userMessage?.message}</p>
        <br />
        <button className="contactbutton" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}
export default Contact;
