import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

const GetInTouch = () => {
  return (
    <>
      <div className="pt-10 pb-10">
        <div className="px-4 sm:px-100">
          <div>
            <h1 className="text-center text-4xl text-cyan-900 font-semibold mb-2">Get <span className="text-ownColor">In Touch</span></h1>
            <p className="text-center text-2xl text-cyan-800 mb-9 font-semibold">Our Friendly team would love to hear from you</p>
          </div>
          <div className="border border-gray-300 rounded-xl shadow-2xl shadow-gray-300 p-6 lg:flex">
            <div className="rounded-xl shadow-2xl shadow-gray-300 py-5 px-8 bg-formBackCol text-white lg:w-4/12">
              <div className="mb-3">
                <div className="flex items-center">
                  <IoLocationSharp className="text-lg" />
                  <h1 className="ml-2 font-semibold">Our Address</h1>
                </div>
              </div>
              <div className="mb-6">
                <p className="italic w-72">
                  New Baneshwor, Kathmandu, Bagmati, Nepal,
                </p>
              </div>
              <div className="mb-4">
                <div className="flex items-center">
                  <FaPhoneAlt className="text-md" />
                  <h1 className="ml-2 font-semibold">Our Contacts</h1>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex">
                  <div>
                    <h1>Mobile</h1>
                    <p>
                      980<span>5659789</span>
                    </p>
                    <p>
                      9841<span>275897</span>
                    </p>
                  </div>
                  <div className="ml-10">
                    <h1>Landline</h1>
                    <p>01-4783972</p>
                  </div>
                </div>
              </div>
              <div className="mb-4">
                <div>
                  <div className="flex items-center">
                    <FaClock className="text-lg" />
                    <h1 className="ml-2 font-semibold">Our service Time</h1>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <div className="flex">
                  <div>
                    <h1>MON-FRI</h1>
                    <p>10 am - 8 pm</p>
                  </div>
                  <div className="ml-10">
                    <h1>SAT-SUN</h1>
                    <p>Closed</p>
                  </div>
                </div>
              </div>

              <div>
                <p>Get in touch in social networks</p>
              </div>
              <div className="mt-5 mb-5">
                <div>
                  <div className="flex items-center">
                    <div className="mycontainer">
                      <Link to="" className="icon">
                        <FaFacebookF className="samei" />
                      </Link>

                      <Link to="" className="icon">
                        <FaTiktok className="samei" />
                      </Link>

                      <Link to="" className="icon">
                        <FaInstagram className="samei" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" py-5 px-8 lg:w-8/12">
              <div>

                <form class="w-full  ">
                  <div class="flex flex-wrap -mx-3 mb-3">
                    <div class="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                      <label
                        class="block capitalize tracking-wide text-gray-700 text-md mb-2"
                        for="grid-first-name"
                      >
                        First Name
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder=""
                      />
                    </div>
                    <div class="w-full md:w-1/2 px-3 mb-3 md:mb-0">
                      <label
                        class="block capitalize tracking-wide text-gray-700 text-md mb-2"
                        for="grid-first-name"
                      >
                        Last Name
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder=""
                      />
                    </div>
                  </div>
                    
                    {/* email */}
                    <div className="mb-6">
                    <div class="w-full mb-4 md:mb-0">
                      <label
                        class="block capitalize tracking-wide text-gray-700 text-md mb-2"
                        for="grid-first-name"
                      >
                     email
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder=""
                      />
                    </div>
                    </div>

                    {/* which Language? */}

                    <div className="mb-6">
                    <div class="w-full mb-3 md:mb-0">
                      <label
                        class="block  tracking-wide text-gray-700 text-md mb-2"
                        for="grid-state"
                      >
                        What can we do for you
                      </label>
                      <div class="relative">
                        <select
                          class="block appearance-none w-full bg-gray-50 border border-gray-300 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-state"
                        >
                          <option></option>
                          <option>sfsdfs</option>
                          <option>dfss</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg
                            class="fill-current h-4 w-4"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    </div>

                     {/* phonenumber */}
                      <div>
                      <div className="mb-6">
                    <div class="w-full mb-4 md:mb-0">
                      <label
                        class="block capitalize tracking-wide text-gray-700 text-md mb-2"
                        for="grid-first-name"
                      >
                     Phone Number
                      </label>
                      <input
                        class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="Number"
                        placeholder=""
                      />
                    </div>
                    </div>
                      </div>

                      {/* message */}
                      <div className="mb-6">
                    <div class="w-full mb-4 md:mb-0">
                      <label
                        class="block capitalize tracking-wide text-gray-700 text-md mb-2"
                        for="grid-first-name"
                      >
                     Message
                      </label>
                      <textarea
                        class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-300 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="Write your thoughts..."
                        rows={6}
                      />
                    </div>
                    </div>
                      
                       {/* button? */}
                       <div>
                       <div>
                          <button className='border-2 px-5 py-4 text-md rounded-xl text-white  capitalize linClass' type='button'>Send Message</button>
                        </div>
                       </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetInTouch;
