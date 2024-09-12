import React from "react";
import main from "./assets/main.webp";
import { Button } from "./components/ui/button";
import shopify from "./assets/shopify.svg";
import star from "./assets/star.svg";
import apple from "./assets/apple.svg";
import play from "./assets/playstore.svg";

import girl from "./assets/Girl.png";
import anim from "./assets/animated.gif";
import anim2 from "./assets/phoneanim.gif";
import printing from "./assets/printing.webp";
import logo from "./assets/whitelogo.svg";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";

export default function Page() {
  return (
    <div className="Page-container flex flex-col items-center justify-center">
      <div className="1st-content mt-3 py-4  w-[77rem] grid grid-cols-2">
        <div className=" pt-10 pl-10">
          <h1 className="font-sans font-medium mb-5  text-6xl">
            Print on demand for your ecommerce business
          </h1>
          <p className="font-sans font-semibold mb-2 text-2xl">
            Sign up for free and only pay for what you sell
          </p>
          <p className="font-sans text-lg ">
            Turn your passion into profit with the world's largest{" "}
            <span
              className="
            underline"
            >
              print on demand
            </span>{" "}
            network
          </p>
          <div className=" flex gap-4 mt-5">
            <Button className="rounded-full">Get started for free</Button>
            <Button className="rounded-full text-black bg-white border border-black">
              See our products
            </Button>
          </div>
          <div className="py-5">
            <img src={shopify} width={150} />
            <div className="flex gap-1 pt-1">
              <img src={star} width={20} />
              <img src={star} width={20} />
              <img src={star} width={20} />
              <img src={star} width={20} />
              <img src={star} width={20} />

              <p className="font-sans text-[16px]">4.8/5</p>
            </div>
            <p className="font-sans text-[16px]">based on 887 reviews</p>
          </div>
        </div>
        <div className="">
          <img src={main} width={700} />
        </div>
      </div>
      <div className="bg-[#faf6ef] mb-5 py-10 flex items-center justify-center  w-screen">
        <div className="flex justify-between gap-28 ">
          <div className=" flex justify-center items-center  flex-col w-[300px]">
            <h1 className="text-[32px] font-semibold">90%</h1>
            <p className="text-[24px] font-medium text-center">
              {" "}
              of all orders are produced locally
            </p>
          </div>

          <div className="flex justify-center items-center flex-col w-[320px]">
            <h1 className="text-[32px] font-semibold">90%</h1>
            <p className="text-[24px] font-medium text-center">
              of orders arrive within 5 days of ordering
            </p>
          </div>

          <div className="flex justify-center items-center  flex-col w-[300px]">
            <h1 className="text-[32px] font-semibold">140+</h1>
            <p className="text-[24px] font-medium text-center">
              print providers across 32 countries
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center flex-col">
        <h1 className="text-[60px] font-semibold">Why choose Gelato</h1>
        <div className="flex flex-row w-[77rem]  ">
          <div className="w-[50%] h-auto">
            <img className="" width={800} src={girl} />
          </div>
          <div className=" py-9">
            <h1 className="text-2xl mb-2 font-medium ">
              ▻World's largest print-on-demand network
            </h1>
            <p className="text-base font-light mb-4">
              140+ print partners in 32 contries.Gelato is truely global
              service.
            </p>

            <h1 className="text-2xl font-medium mb-2">
              ▻Sell globally, produce locally
            </h1>
            <p className="text-base font-light mb-4">
              Your products are produced close to your customers, where they
              are.
            </p>

            <h1 className="text-2xl font-medium mb-2">
              ▻100% free editing tools
            </h1>
            <p className="text-base font-light mb-4">
              Create your custom products using our suite of{" "}
              <span className="underline">free tools</span>
            </p>

            <h1 className="text-2xl font-medium mb-2">
              ▻60+logistics partners
            </h1>
            <p className="text-base font-light mb-4">
              Our global network of logistics partners ensures your products are
              delivered fast.
            </p>

            <h1 className="text-2xl font-medium mb-2">
              ▻ High-quality products
            </h1>
            <p className="text-base font-light mb-4">
              We partner with the world's leading brands to ensure the best
              quality products.
            </p>

            <h1 className="text-2xl font-medium mb-2">
              ▻ Endless creativity with Shutterstock Images
            </h1>
            <p className="text-base font-light mb-4">
              Access millions of images and graphics to create unique products
              you can sell in your store.
            </p>

            <h1 className="text-2xl font-medium mb-2">
              ▻ 1-click integration to the leading ecommerce platforms
            </h1>
            <p className="text-base font-light mb-4">
              Connect your store to Gelato using our integrations with Shopify,
              Etsy and more.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#faf6ef] my-5 py-5 w-full flex items-center justify-center">
        <div className="flex w-[77rem] gap-10 ">
          <div className="flex flex-col w-[55%]  font-sans justify-center">
            <p className="text-lg mb-2 font-medium">
              For print on demand sellers
            </p>
            <h1 className="text-6xl font-semibold flex mb-4 flex-col ">
              Accelerate business growth with innovative design tools and apps
            </h1>
            <p className="text-2xl mb-2 font-medium">
              See how our cutting-edge solutions can help you reach new
              customers and maximize your profits.
            </p>
            <div className="mt-3">
              <Button className="rounded-full">Get started</Button>
            </div>
          </div>
          <div>
            <img src={anim} width={800} />
          </div>
        </div>
      </div>

      <div className="my-5 py-5 w-full flex items-center justify-center">
        <div className="flex w-[77rem] gap-10">
          <div className="flex  justify-center items-center">
            <div className="flex ">
              <img src={anim2} width={700} />
            </div>
            <div className="flex flex-col w-[55%] pt-6 pr-5 font-sans justify-center">
              <p className="text-xl mb-2 ">For print producers</p>
              <h1 className="text-6xl mb-4 pt-4 font-semibold ">
                GelatoConnect
              </h1>
              <p className="text-[26px] mt-2 ">
                Elevate efficiency, cut costs, and seamlessly automate with our
                all-in-one software solution for the print industry
              </p>
              <div className="mt-3 pt-3">
                <Button className="rounded-full">Learn more</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#faf6ef] mt-5 py-5 w-full flex items-center justify-center">
        <div className="flex w-[77rem] gap-10 ">
          <div className="flex flex-col w-[60%]  font-sans justify-center">
            <h1 className="text-6xl font-semibold flex mb-4 flex-col ">
              Meet GelatoConnect at Printing United
            </h1>
            <p className="text-[16px] mb-2 font-extralight">
              Meet us at Printing United from September 10-12 in Las Vegas. Book
              your meeting slot to discover the innovative ways GelatoConnect is
              transforming the landscape and driving success for businesses like
              yours.
            </p>
            <div className="mt-3">
              <Button className="rounded-full">Book a meeting</Button>
            </div>
          </div>
          <div>
            <img src={printing} width={800} />
          </div>
        </div>
      </div>

      <div className="bg-black w-screen">
        <div className="w-[77rem] mx-auto">
          <div className="flex py-5 justify-between">
            <div>
              <img src={logo} className="w-[130px]" />
            </div>
            <div className=" flex gap-8  items-center mr-10  ">
              <h1 className="text-white text-[16px]">Find Gelato on:</h1>
              <GrInstagram className="text-white size-5 " />
              <FaFacebook className="text-white size-5" />
              <FaTiktok className="text-white size-5" />
              <FaLinkedinIn className="text-white size-5" />
              <RiYoutubeLine className="text-white size-5" />
            </div>
          </div>
          <div className="flex">
            <div className="flex  gap-4 flex-col mr-[48px]">
              <span className="text-white w-[360px] text-[12px]">
                Gelato has created the world's largest network for local
                production and distribution of customized products. Together we
                bring creativity to life - and into business.
              </span>
              <div>
                <Button className="rounded-full bg-white text-black">
                  Get started
                </Button>
              </div>
              <p>Get the app</p>
              <div className="flex gap-3">
                <img src={apple} />
                <img src={play} />
              </div>
            </div>

            <div className="text-white mr-[48px]">
              <h1 className="text-[16px] mb-4">Print on demand</h1>
              <div className="text-white space-y-1 text-[12px]">
                <p>What is print on demand? </p>
                <p>Product catalog</p>
                <p>Shipping and delivery</p>
                <p>Dropshipping products</p>
                <p>Pro sellers</p>
                <p>White label products</p>
                <p>Returns policy</p>
                <p>Global, yet local</p>
                <p>Susstainablity</p>
                <p>Support</p>
              </div>
            </div>

            <div className="text-white mr-[48px]">
              <h1 className="text-[16px] mb-4">Integrations</h1>
              <div className="text-white space-y-1 text-[12px]">
                <p>Shopify</p>
                <p>Etsy</p>
                <p>WooCommerce</p>
                <p>Wix</p>
                <p>Squarespace</p>
                <p>BigCommerce</p>
                <p>API</p>
              </div>
            </div>

            <div className="text-white mr-[48px]">
              <h1 className="text-[16px] mb-4">Start selling </h1>
              <div className="text-white space-y-1 text-[12px]">
                <p>Embroidery</p>
                <p>Print on demand t-shirts</p>
                <p>Print on demand hoodies</p>
                <p>Print on demand posters</p>
                <p>Print on demand calendars</p>
                <p>Print on demand mugs</p>
                <p>Custom merchandise</p>
                <p>Custom phone cases</p>
                <p>Print on demand Europe</p>
                <p>Print on demand UK</p>
                <p>Print on demand France</p>
                <p>Print on demand Canada</p>
                <p>Merch maker</p>
              </div>
            </div>

            <div className="text-white">
              <h1 className="text-[16px] mb-4">Company </h1>
              <div className="text-white space-y-1 text-[12px]">
                <p>GelatoConnect</p>
                <p>About Gelato</p>
                <p>Leadership team</p>
                <p>Board & investors</p>
                <p>Newsroom</p>
                <p>Blog</p>
                <p>Customer Stories</p>
                <p>Partners</p>
                <p>Careers</p>
                <p>Affiliates program</p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center  pb-10">
            <div className="flex">
              <div className="text-white text-[12px] flex gap-2">
                <p className="::after">Contact us </p> | <p>Legal</p>|{" "}
                <p>Privacy policy</p>|<p>Cookie policy</p>|<p>API terms</p>|{" "}
                <p>Sitemap</p>
              </div>
            </div>
            <div className="border-white border-2 ">
              <select className=" text-white px-2 py-1 border-none border-white border-2  bg-black">
                <option className="border-none ">Hindi</option>
                <option>English</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
