import React, { useState, useEffect, useRef } from "react";
import logo from "./assets/logo.svg";
import contact from "./assets/contact.svg";
import person from "./assets/person.svg";
import globe from "./assets/globe.svg";
import cart from "./assets/cart.svg";
import { Button } from "@/components/ui/button";
import { FaAngleDown } from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function useHover() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleMouseEnter = () => setIsOpen(true);
    const handleMouseLeave = (e) => {
      if (!contentRef.current?.contains(e.relatedTarget)) {
        setIsOpen(false);
      }
    };

    const triggerElement = triggerRef.current;
    const contentElement = contentRef.current;

    triggerElement?.addEventListener("mouseenter", handleMouseEnter);
    triggerElement?.addEventListener("mouseleave", handleMouseLeave);
    contentElement?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      triggerElement?.removeEventListener("mouseenter", handleMouseEnter);
      triggerElement?.removeEventListener("mouseleave", handleMouseLeave);
      contentElement?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return { isOpen, setIsOpen, triggerRef, contentRef };
}

export default function Header() {
  const productsHover = useHover();
  const startSellingHover = useHover();
  const toolsAppsHover = useHover();
  const pricingHover = useHover();
  const resourcesHover = useHover();
  const gelatoConnectHover = useHover();
  return (
    <div className="Header sticky w-screen justify-center mx-auto top-0 font-sans font-semibold flex flex-col items-center">
      <div className="border-b-2 w-screen justify-between   flex  border-gray-300 ">
        <div className="Top-Header py-2  mx-auto flex items-center justify-between  w-[76rem]  text-[14px] ">
          <div className="logo flex - items-start  ">
            <img className="h-auto" alt="Logo" width={130} src={logo} />
          </div>
          <div className="menu flex gap-1 items-center">
            <div className="hover:bg-slate-200 py-1 rounded-full">
              <button className="contact-Us   flex px-3 gap-1">
                <img src={contact} height={24} width={24} />
                <h4>Contact us</h4>
              </button>
            </div>
            <div className="hover:bg-slate-200 py-1 rounded-full">
              <button className="IN/INR flex gap-1 px-3 py-1">
                <img src={globe} height={24} width={24} />
                <h4>IN/INR</h4>
              </button>
            </div>
            <div className="hover:bg-slate-200 py-1 rounded-full">
              <button className="Cart flex gap-1 px-3 py-1">
                <img src={cart} height={24} width={24} />
                <h4>Cart</h4>
              </button>
            </div>
            <div className="hover:bg-slate-200 py-1 rounded-full">
              <button className="Sign-In flex gap-1 px-3 py-1">
                <img src={person} height={24} width={24} />
                <h4>Sign in</h4>
              </button>
            </div>

            <button className="text-white px-3 py-2 bg-black rounded-full">
              Sign up for free
            </button>
          </div>
        </div>
      </div>
      <div className="nev-bar  border-b-2 w-full flex  border-gray-200">
        <div className="w-[78rem] mx-auto">
          <div className="flex gap-2  items-center">
            {/* Products dropdown */}
            <div className="Products ">
              <DropdownMenu
                open={productsHover.isOpen}
                onOpenChange={productsHover.setIsOpen}
              >
                <DropdownMenuTrigger asChild className="">
                  <Button
                    className="flex border-none py-5 rounded-none items-center gap-1"
                    variant="outline"
                    ref={productsHover.triggerRef}
                  >
                    <span>Products</span>
                    <FaAngleDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56 absolute left-[-55px] border-none shadow-none rounded-none bg-gray-200"
                  ref={productsHover.contentRef}
                >
                  <DropdownMenuGroup>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger className="py-5 font-sans font-semibold px-4">
                        <span>Best Sellers</span>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem>
                            <span className="mr-2">👕</span>
                            <span>Shirts</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span className="mr-2">👖</span>
                            <span>Pants</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span className="mr-2">👞</span>
                            <span>Shoes</span>
                          </DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>

                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger className="pb-5 font-sans font-semibold px-4">
                        <span>Men's Clothing</span>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem>
                            <span className="mr-2">👕</span>
                            <span>Shirts</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span className="mr-2">👖</span>
                            <span>Pants</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span className="mr-2">👞</span>
                            <span>Shoes</span>
                          </DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger className="pb-5 font-sans font-semibold px-4">
                        <span>Women's Clothing</span>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem>
                            <span className="mr-2">👗</span>
                            <span>Dresses</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span className="mr-2">👖</span>
                            <span>Pants</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span className="mr-2">👠</span>
                            <span>Shoes</span>
                          </DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>

                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger className="pb-5 font-sans font-semibold px-4">
                        <span>Kid's & baby Clothing</span>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem>
                            <span className="mr-2">👗</span>
                            <span>Dresses</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span className="mr-2">👖</span>
                            <span>Pants</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span className="mr-2">👠</span>
                            <span>Shoes</span>
                          </DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>

                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger className="pb-5 font-sans font-semibold px-4">
                        <span>Wall arts</span>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem>
                            <span className="mr-2">👗</span>
                            <span>Dresses</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span className="mr-2">👖</span>
                            <span>Pants</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span className="mr-2">👠</span>
                            <span>Shoes</span>
                          </DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>

                    <DropdownMenuItem className="pb-5 font-sans font-semibold px-4">
                      <span>Calender</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="pb-5 font-sans font-semibold px-4">
                      <span>Card</span>
                    </DropdownMenuItem>

                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger className="pb-5 font-sans font-semibold px-4">
                        <span>Photo books</span>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem>
                            <span className="mr-2">👗</span>
                            <span>Dresses</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span className="mr-2">👖</span>
                            <span>Pants</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span className="mr-2">👠</span>
                            <span>Shoes</span>
                          </DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>

                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger className="pb-5 font-sans font-semibold px-4">
                        <span>Hats</span>
                      </DropdownMenuSubTrigger>
                      <DropdownMenuPortal>
                        <DropdownMenuSubContent>
                          <DropdownMenuItem>
                            <span className="mr-2">👗</span>
                            <span>Dresses</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span className="mr-2">👖</span>
                            <span>Pants</span>
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <span className="mr-2">👠</span>
                            <span>Shoes</span>
                          </DropdownMenuItem>
                        </DropdownMenuSubContent>
                      </DropdownMenuPortal>
                    </DropdownMenuSub>

                    <DropdownMenuItem className="pb-5 font-sans font-semibold px-4">
                      <span>Phone case</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="pb-5 font-sans font-semibold px-4">
                      <span>Mugs</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Start Selling */}
            <div className="Start Selling relative">
              <DropdownMenu
                open={startSellingHover.isOpen}
                onOpenChange={startSellingHover.setIsOpen}
              >
                <DropdownMenuTrigger asChild>
                  <Button
                    className="flex border-none py-5 rounded-none items-center gap-2"
                    variant="outline"
                    ref={startSellingHover.triggerRef}
                  >
                    <span>Start Selling</span>
                    <FaAngleDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56 absolute left-[-55px] border-none shadow-none rounded-none bg-gray-200"
                  ref={startSellingHover.contentRef}
                >
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="font-sans font-semibold px-4 pb-5">
                      <span>Paint on demand</span>
                    </DropdownMenuItem>

                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger className="pb-5 font-sans font-semibold px-4">
                        <span>Setup your business</span>
                      </DropdownMenuSubTrigger>
                    </DropdownMenuSub>
                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger className="pb-5 font-sans font-semibold px-4">
                        <span>Sell custom products</span>
                      </DropdownMenuSubTrigger>
                    </DropdownMenuSub>

                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger className="pb-5 font-sans font-semibold px-4">
                        <span>Integration</span>
                      </DropdownMenuSubTrigger>
                    </DropdownMenuSub>

                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger className="pb-5 font-sans font-semibold px-4">
                        <span>Shipping and Delivery</span>
                      </DropdownMenuSubTrigger>
                    </DropdownMenuSub>

                    <DropdownMenuItem className=" pb-5 font-sans font-semibold px-4">
                      <span>Partner Services</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className=" pb-5 font-sans font-semibold px-4">
                      <span>Custom packaging</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="pb-5 font-sans font-semibold px-4">
                      <span>Move your products</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Tools and apps */}
            <div className="Start Selling relative">
              <DropdownMenu
                open={toolsAppsHover.isOpen}
                onOpenChange={toolsAppsHover.setIsOpen}
              >
                <DropdownMenuTrigger asChild>
                  <Button
                    className="flex border-none py-5 rounded-none items-center gap-2"
                    variant="outline"
                    ref={toolsAppsHover.triggerRef}
                  >
                    <span>Tools and apps</span>
                    <FaAngleDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56 absolute left-[-55px] border-none shadow-none rounded-none bg-gray-200"
                  ref={toolsAppsHover.contentRef}
                >
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="font-sans font-semibold px-4 pb-5">
                      <span>Tools and app overview</span>
                    </DropdownMenuItem>

                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger className="pb-5 font-sans font-semibold px-4">
                        <span>Persionalization Studio</span>
                      </DropdownMenuSubTrigger>
                    </DropdownMenuSub>
                    <DropdownMenuItem className=" pb-5 font-sans font-semibold px-4">
                      <span>Auto File Sync</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className=" pb-5 font-sans font-semibold px-4">
                      <span>Design maker</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className=" pb-5 font-sans font-semibold px-4">
                      <span>Product Creation tools</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className=" pb-5 font-sans font-semibold px-4">
                      <span>Mockup Studio</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className=" pb-5 font-sans font-semibold px-4">
                      <span>Price Navigator</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="pb-5 font-sans font-semibold px-4">
                      <span>Analytics</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className="pb-5 font-sans font-semibold px-4">
                      <span>Gelato App</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/*Pricing */}
            <div className="Pricing relative">
              <DropdownMenu
                open={pricingHover.isOpen}
                onOpenChange={pricingHover.setIsOpen}
              >
                <DropdownMenuTrigger asChild>
                  <Button
                    className="flex border-none py-5 rounded-none items-center gap-2"
                    variant="outline"
                    ref={pricingHover.triggerRef}
                  >
                    <span>Pricing</span>
                    <FaAngleDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56 absolute left-[-55px] border-none shadow-none rounded-none bg-gray-200"
                  ref={pricingHover.contentRef}
                >
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="font-sans font-semibold px-4 pb-5">
                      <span>Payment and Pricing</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="font-sans font-semibold px-4 pb-5">
                      <span>Subscription plans</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className=" pb-5 font-sans font-semibold px-4">
                      <span>Gelato+</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className=" pb-5 font-sans font-semibold px-4">
                      <span>Gelato+ Gold</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className=" pb-5 font-sans font-semibold px-4">
                      <span>Platinum</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className=" pb-5 font-sans font-semibold px-4">
                      <span>Offers</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/*Resources */}
            <div className="Resources relative">
              <DropdownMenu
                open={resourcesHover.isOpen}
                onOpenChange={resourcesHover.setIsOpen}
              >
                <DropdownMenuTrigger asChild>
                  <Button
                    className="flex border-none py-5 rounded-none items-center gap-2"
                    variant="outline"
                    ref={resourcesHover.triggerRef}
                  >
                    <span>Resources</span>
                    <FaAngleDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56 absolute left-[-55px] border-none shadow-none rounded-none bg-gray-200"
                  ref={resourcesHover.contentRef}
                >
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="font-sans font-semibold px-4 pb-5">
                      <span>Resource Center</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="font-sans font-semibold px-4 pb-5">
                      <span>Gelato Academy</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className=" pb-5 font-sans font-semibold px-4">
                      <span>Customer Stories</span>
                    </DropdownMenuItem>

                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger className="pb-5 font-sans font-semibold px-4">
                        <span>Blog</span>
                      </DropdownMenuSubTrigger>
                    </DropdownMenuSub>

                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger className="pb-5 font-sans font-semibold px-4">
                        <span>Whitepapers</span>
                      </DropdownMenuSubTrigger>
                    </DropdownMenuSub>

                    <DropdownMenuItem className=" pb-5 font-sans font-semibold px-4">
                      <span>Newsroom</span>
                    </DropdownMenuItem>

                    <DropdownMenuSub>
                      <DropdownMenuSubTrigger className="pb-5 font-sans font-semibold px-4">
                        <span>Sustainability</span>
                      </DropdownMenuSubTrigger>
                    </DropdownMenuSub>

                    <DropdownMenuItem className=" pb-5 font-sans font-semibold px-4">
                      <span>Help Center</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/*Pro-sellers */}
            <div className="Pro-sellers relative">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    className="flex border-none py-5 rounded-none items-center gap-2"
                    variant="outline"
                  >
                    <span>Pro sellers</span>
                  </Button>
                </DropdownMenuTrigger>
              </DropdownMenu>
            </div>

            {/*GelatoConnect */}
            <div className="Gelato-Connect relative">
              <DropdownMenu
                open={gelatoConnectHover.isOpen}
                onOpenChange={gelatoConnectHover.setIsOpen}
              >
                <DropdownMenuTrigger asChild>
                  <Button
                    className="flex border-none py-5 rounded-none items-center gap-2"
                    variant="outline"
                    ref={gelatoConnectHover.triggerRef}
                  >
                    <span>GelatoConnect</span>
                    <FaAngleDown />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56 absolute left-[-55px] border-none shadow-none rounded-none bg-gray-200"
                  ref={gelatoConnectHover.contentRef}
                >
                  <DropdownMenuGroup>
                    <DropdownMenuItem className="font-sans font-semibold px-4 pb-5">
                      <span>GelatoConnect</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className="font-sans font-semibold px-4 pb-5">
                      <span>Logistics</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem className=" pb-5 font-sans font-semibold px-4">
                      <span>Workflow</span>
                    </DropdownMenuItem>

                    <DropdownMenuItem className=" pb-5 font-sans font-semibold px-4">
                      <span>Procurement</span>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
