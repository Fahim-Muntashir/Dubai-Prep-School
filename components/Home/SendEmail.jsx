import React from "react";
import Container from "../Shared/Container";

const SendEmail = () => {
  return (
    <Container>
      <div class="container mx-autopx-4 ">
        <div class="w-full p-8 my-4 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl">
          <div class="flex">
            <h1 class="font-bold uppercase text-5xl">
              Send us a <br /> message
            </h1>
          </div>
          <div class="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
            <input
              class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="First Name*"
            />
            <input
              class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Last Name*"
            />
            <input
              class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email*"
            />
            <input
              class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Phone*"
            />
          </div>
          <div class="my-4">
            <textarea
              placeholder="Message*"
              class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div class="my-2 w-1/2 lg:w-1/4">
            <button
              class="uppercase text-sm font-bold tracking-wide bg-blue-400 hover:bg-blue-500 text-white p-3 rounded-lg w-full 
              focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </div>

        <div class="w-full lg:-mt-96 lg:w-2/6 px-2 py-2 ml-auto bg-blue-700 rounded-xl">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1581726707445-75cbe4efc586?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </Container>
  );
};

export default SendEmail;
