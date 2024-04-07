import React from "react";
import Form from "./Form";
import Image from "next/image";
import contact from "../images/contact-pic.svg";

const Contact = () => {
  return (
    <section className="bg-white" id="contact">
      <h1 className="text-center pt-20">Send Us a Message</h1>
      <div className="container flex flex-col px-4 py-8 mx-auto space-y-8 md:space-y-0 md:flex-row md:space-x-20">
        <div className="flex-1">
          <Form />
        </div>
        <div className="hidden md:block md:flex-1">
          <Image
            src={contact}
            alt="contact-img"
            layout="responsive"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
