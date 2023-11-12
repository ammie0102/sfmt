import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import heroBG from "../assets/img/hero-bg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import chickenImg from "../assets/img/chickenmenu.png";
import porkImg from "../assets/img/porkimenu.png";
import { Link } from "react-router-dom";

const Home = () => {
  const cards = [
    {
      title: "Chicken Deal",
      //  description:
      //    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      img: chickenImg,
    },
    {
      title: "Pork Deal",
      //   description:
      //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      img: porkImg,
    },
  ];
  return (
    <>
      <Navbar />
      <section
        className="hero-section h-[80vh]"
        style={{
          backgroundImage: `url(${heroBG})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col justify-center items-center h-full">
            <h1 className="sm:text-6xl text-white font-bold text-stroke text-5xl">
              Welcome to
            </h1>
            <h1 className="sm:text-6xl text-5xl text-yellow-500 font-black text-stroke text-center mb-3">
              Santa Fe Taguktukan
            </h1>
            <p className="text-gray-900 sm:text-2xl text-lg font-medium mb-3 text-start">
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
            </p>
            <div className="flex space-x-2">
              <button className="bg-red-600 text-white rounded-md px-3 py-2 text-base font-medium border border-red-600">
                About Us
              </button>
              <Link
                to="/menu"
                className="hover:bg-red-600 text-red-600 hover:text-white rounded-md px-4 py-2 text-base font-medium border border-red-600 transition duration-100 ease-in-out"
              >
                Our Menu <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="offer-section py-5">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center items-start">
            <h1
              className="text-3xl font-black text-yellow-500 tracking-wide mb-3 uppercase"
              style={{
                WebkitTextStroke: "1px black",
              }}
            >
              Our Offers
            </h1>
            <hr className="w-32 border-2 border-red-500 mb-5" />
            <p className="text-gray-900 font-medium">
              Indulge in our exquisite selection of top-selling chicken and pork
              delicacies.
            </p>
            <div className="grid grid-cols-2 gap-1 mt-5">
              {cards.map((card, index) => (
                <div
                  className="offer-card sm:h-[50vh] relative overflow-hidden shadow-md h-[15rem] w-full"
                  key={index}
                >
                  <div className="rounded-md shadow-md p-5 relative h-full">
                    <img
                      src={card.img}
                      alt=""
                      className="w-full absolute top-0 left-0"
                      style={{
                        height: "100%",
                        objectFit: "cover",
                        zIndex: -1,
                      }}
                    />
                    <div className="content">
                      <h1 className="sm:text-5xl font-black text-white mb-3 text-4xl">
                        {card.title}
                      </h1>
                      <p className="text-white">{card.description}</p>
                      <button className="hover:bg-white bg-none text-white rounded-md px-3 py-2 text-base font-medium border border-white mt-3 transition duration-100 ease-in-out hover:text-black">
                        Order Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-red-400">
            <h1 className="font-semibold text-3xl text-center mb-5 mt-5">
              About
            </h1>
          </div>
          <div class="flex container gap-5 justify-center">
            <a
              href="#"
              class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 border-6 border-yellow-500 bg-orange-300"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex flex-col items-center">
                Our History
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Santa Fe Taguktukan is a small food business with 5 branch over
                Batangas City. Founded in June 2020, our company has grown from
                a small local business to a thriving company with over 10
                employees. We started out offering just a few products but have
                expanded our catalog over the years to serve customers.
              </p>
            </a>
            <a
              href="#"
              class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 border-6 border-yellow-500 bg-orange-300"
            >
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex justify-center ">
                Our Team
              </h5>
              <p class="font-normal text-gray-700 dark:text-gray-400">
                Our dedicated team of 10 employees brings years of combined
                experience in customer service, marketing, and product
                development. Led by our founder Mrs. Elena Gonda who has over 3
                years in the industry, our close-knit staff works together like
                a family to offer specialized products and attentive service.
                With diverse backgrounds and skills, our small but mighty team
                strives to help customers in our local community.
              </p>
            </a>
          </div>
        </div>
        <div className="bg-red-400">
          <h1 className="font-semibold text-3xl text-center mb-5  mt-5">
            Our Values
          </h1>
        </div>
        <div class="flex gap-5 justify-center">
          <a
            href="#"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 border-6 border-yellow-500 bg-orange-300"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex flex-col items-center">
              Mission
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              To Become the prominent "Lechonan" Business that provides quality
              products such as Lechon Manok, Liempo and its unique Chicken Sisig
              and Liempo Sisig
            </p>
          </a>
          <a
            href="#"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 border-6 border-yellow-500 bg-orange-300"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex flex-col items-center">
              Vision
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Taguktukan Lechon Manok and Liempo is committed in giving and
              maintaining customer's satisfaction by providing quality products.
              The company aims well to undertake fir new development and product
              innovation to respond customer's needs and wants.
            </p>
          </a>
          <a
            href="#"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 border-6 border-yellow-500 bg-orange-300"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white flex flex-col items-center">
              Goals
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              To have a strong relationship with the consumers. ​ To build up
              new partnership for the future expansion. ​ To provide employment
              opportunities.
            </p>
          </a>
        </div>
      </section>
      <section class="bg-gray-100 p-8">
        <div class="max-w-screen-xl mx-auto">
          <h2 class="text-3xl font-bold text-gray-800 mb-6 text-red-500">
            Contact Us
          </h2>

          <div class="flex flex-col md:flex-row md:space-x-6">
            <div class="flex-1">
              <h3 class="text-1 font-semibold mb-4">Contact Details</h3>
              <p class="mb-2">
                For any inquiries, questions or commendations, please call:
                <br />
                <span class="font-medium">
                  Phone:
                  <br />
                </span>
                Globe +63 916 288 5939
                <br />
                Smart +63 961 419 5214
              </p>
              <p class="mb-2">
                <span class="font-medium">
                  Email: <br />
                </span>
                santafetaguktukan@gmail.com
              </p>
              <p class="mb-2">
                <span class="font-medium">
                  Address:
                  <br />
                </span>
                Tomas Dalangin St., Bolo, Bauan, Batangas
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
