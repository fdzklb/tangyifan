import React from 'react';
import Image from "next/image";
import img from "@/public/imgs/deskop.jpg";
import ContactUs from '@/components/contactUs';


const ContactPage: React.FC = () => {
    return (
        <div className="relative flex justify-center w-full">
        <Image
          src={img}
          alt={"img"}
          className="min-h-[calc(100vh-64px)] w-full"
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.3)", // 蒙层颜色和透明度
          }}
        />
        <ContactUs />
      </div>
    );
};

export default ContactPage;