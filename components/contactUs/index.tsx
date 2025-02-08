"use client";

import React, { useState, useEffect, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { fetchUrl } from "@/lib/utils";
import { userInfo } from "@/constants";
const ContactUs = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    content: "",
  });
  const [mess, setMess] = useState({ message: "", status: false });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // onSubmit(data);
    try {
      const res = await fetch(`${fetchUrl}/customers`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (res.status === 200) {
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          content: "",
        });
      }
      setMess({
        message: "successfully received your message.",
        status: true,
      });
    } catch (error) {
      setMess({ message: "Something went wrong, please try again.", status: false });
    } finally {
      setTimeout(() => {
        setMess({ message: "", status: false });
      }, 3000);
    }
  };

  return (
    <div className="absolute top-[10%] text-gray-900 flex justify-around">
      <div className="flex gap-4">
        <div className="bg-slate-300 p-8 rounded-lg opacity-80">
          <div className="">
            <p className="text-3xl">Send us a message.</p>
            <p className="text-lg pt-4">
              Got questions? Need to chat with an expert?
            </p>
          </div>
          <div className="flex flex-col gap-4 pt-8">
            <button
              className="group h-[55px] px-[25px] pl-[10px] flex justify-center gap-[10px] items-center text-[14px] tracking-[-0.5px] shadow-sm text-noovo-black rounded-[10px] bg-noovo-offwhite"
              type="button"
            >
              <svg
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.2 1H1.8C1.08203 1 0.5 1.61561 0.5 2.375V10.625C0.5 11.3844 1.08203 12 1.8 12H12.2C12.918 12 13.5 11.3844 13.5 10.625V2.375C13.5 1.61561 12.918 1 12.2 1Z"
                  stroke="#131211"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
                <path
                  d="M13.5 3.0625L7.6695 6.98125C7.46883 7.11423 7.23681 7.18476 7 7.18476C6.76319 7.18476 6.53117 7.11423 6.3305 6.98125L0.5 3.0625"
                  stroke="#131211"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>
              </svg>
              <div className="flex items-center">
                <a href={`mailto:${userInfo.email}`}>Send us a email</a>

                <div className="w-[0px] opacity-[0] overflow-hidden flex justify-end group-hover:w-[21px] group-hover:opacity-[1] transition-all duration-500">
                  <svg
                    width="16"
                    height="11"
                    viewBox="0 0 16 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0"
                  >
                    <path
                      d="M14.667 5.72222L0.500324 5.72222ZM8.59556 10.4444L14.667 5.72222ZM8.59556 1L14.667 5.72222Z"
                      fill="currentColor"
                    ></path>
                    <path
                      d="M14.667 5.72222L0.500324 5.72222M14.667 5.72222L8.59556 10.4444M14.667 5.72222L8.59556 1"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
              </div>
            </button>
            <a
              className="py-[15px] flex items-center justify-center gap-[10px] [&amp;_span]:text-black [&amp;_span]:font-[500] [&amp;_span]:underline"
              href={`tel:${userInfo.phone}`}
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-phone"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <p className="font-[400] text-[14px] lg:text-[14px] leading-[18px] lg:leading-[18px]">
                Call us on <span>{userInfo.phone}</span>
              </p>
            </a>
          </div>
        </div>

        <div className="text-gray-900 bg-slate-300 rounded-lg opacity-80 p-6">
          <p className="text-3xl pb-6">Send us your infomation.</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <Label
                htmlFor="first_name"
                className="block text-sm font-medium text-gray-700"
              >
                First Name
              </Label>
              <Input
                type="text"
                id="first_name"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                className="mt-1"
                maxLength={30}
              />
            </div>
            <div>
              <Label
                htmlFor="last_name"
                className="block text-sm font-medium text-gray-700"
              >
                Last Name
              </Label>
              <Input
                type="text"
                id="last_name"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                className="mt-1"
                maxLength={30}
              />
            </div>
            <div>
              <Label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1"
                required
              />
            </div>
            <div>
              <Label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone
              </Label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
            <div>
              <Label
                htmlFor="content"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </Label>
              <Textarea
                id="content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                className="mt-1"
              />
            </div>
            <Button type="submit" className="mt-4">
              Submit
            </Button>
            {
              mess.message && (
                <div className={ mess.status ? 'text-green-400' : 'text-red-500'}>{mess.message}</div>
              )
            }
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
