"use client";
import Image from "next/image";
import { useForm } from "@formspree/react";
import { useState, useEffect, ChangeEvent } from "react";
import { FaCheckCircle } from "react-icons/fa";
import contact from "../images/contact-pic.jpg";
interface FormData {
  name: string;
  email: string;
  message: string;
}

function Form() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM as string);
  const [submissionSuccess, setSubmissionSuccess] = useState<boolean>(false);

  useEffect(() => {
    if (state.succeeded) {
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      setSubmissionSuccess(true);
      setTimeout(() => {
        setSubmissionSuccess(false);
      }, 3000);
    }
  }, [state.succeeded]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form className="space-y-6 max-w-[500px]" onSubmit={handleSubmit}>
      <div className="flex flex-col w-full">
        <label htmlFor="name" className="font-medium mb-2">
          Name*:
        </label>
        <input
          type="text"
          required
          name="name"
          id="name"
          className="border rounded-lg p-3 border-stone-600"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="font-medium mb-2 w-full">
          Email*:
        </label>
        <input
          type="email"
          required
          name="email"
          id="email"
          className="border rounded-lg p-3 border-stone-600"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="font-medium mb-2">
          Message*:
        </label>
        <textarea
          rows={6}
          required
          name="message"
          id="message"
          className="border rounded-lg p-3 border-stone-600"
          value={formData.message}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="bg-accent text-stone-100 rounded-xl px-5 py-3 flex bg-black items-center gap-3 hover:-translate-y-1 hover:scale-110 hover:bg-stone-800 duration-300"
      >
        Send Message
      </button>
      {submissionSuccess && (
        <p className="bg-green-600 p-3 rounded-md mb-4 flex items-center justify-between">
          Your message has been sent! Thank you.{" "}
          <FaCheckCircle className="text-black" />
        </p>
      )}
    </form>
  );
}

export default Form;
