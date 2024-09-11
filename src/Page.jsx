import React from "react";
import main from "./assets/main.webp";
import { Button } from "./components/ui/button";
import shopify from "./assets/shopify.svg";
import star from "./assets/star.svg";
import girl from "./assets/Girl.png";
import anim from "./assets/animated.gif";
import anim2 from "./assets/phoneanim.gif";
import printing from "./assets/printing.webp";

export default function Page() {
  return (
    <div className="Page-container flex flex-col items-center justify-center">
      <div className="1st-content mt-3 py-4  w-[80%] grid grid-cols-2">
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
      <div className="bg-[#faf6ef] mb-5 py-10 flex items-center justify-center  w-full">
        <div className="flex justify-between gap-32 ">
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
        <div className="flex flex-row w-[90%]  ">
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
        <div className="flex w-[80%] gap-10 ">
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
        <div className="flex w-[80%] gap-10">
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

      <div className="bg-[#faf6ef] my-5 py-5 w-full flex items-center justify-center">
        <div className="flex w-[80%] gap-10 ">
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
    </div>
  );
}
