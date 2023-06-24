/** @format */

import React,{useEffect, useState} from "react";
import axios from "axios";

 
const MainPage = () => {

//states for felds
const [date,setDate]=useState(null);
const [sourceCurrency,setsourceCurrency]=useState("");
const [targetCurrency,setTargetCurrency]=useState("");
const [amountInSourceCurrency ,setAmountInSourceCurrency]=useState(0);
const [amountInTargetCurrency,setAmountInTargetCurrency]=useState(0);
const [currencyNames, setCurrencyNames]=useState([])


useEffect( () => {
  const getCurrencyNames = async() =>{
    try {
      const responce = await axios.get(
        "http://localhost:5000/getAllCurrencies"
      );
setCurrencyNames(responce.data);
    } catch (error) {
      console.log(error)
    }
  }
  getCurrencyNames();
}, [])






const handelSubmit = (e) =>{
  e.preventDefault();
  console.log(date,sourceCurrency,targetCurrency,amountInSourceCurrency,amountInTargetCurrency)
}

  return (
    <div>
      <h1 className="lg:mx-32  text-5xl font-black flex items-center justify-normal text-green-500">Convert your currencies Today</h1>
      <p className="lg:mx-32 font-sm opacity-40 py-6">
        Welcome to "Convert Your Currencies Today"! This application allows you
        to easily convert currencies based on the latest exchange rates. Whether
        you're planning a trip, managing your finances, or simply curious about
        the value of your money in different currencies, this tool is here to
        help.
      </p>
      <div className="mt-5 flex items-center justify-center flex-col">
        <section className=" w- lg:w-1/2">
          <form onSubmit={handelSubmit}>
            <div className="mb-4">
            <label
                className="block mb-2 text-sm font-medium text-white dark:text-white"
                htmlFor={date}
              >
                Date
              </label>
              <input
              onChange={(e) => setDate(e.target.value)}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                type="date"
                name={date}
                id={date}
                placeholder="date.."
              />
            </div>
            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor={sourceCurrency}
              >
                Source Currency
              </label>

              <select
              onChange={(e) => setsourceCurrency(e.target.value)}
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                name={sourceCurrency}
                id={sourceCurrency}
                value={sourceCurrency}
              >
                <option value="">Select source currency</option>{" "}
               
              </select>
            </div>

            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor={targetCurrency}
              >
                Target Currency
              </label>
              <select
              onChange={(e) => setTargetCurrency(e.target.value)}
                className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                name={targetCurrency}
                id={targetCurrency}
                value={targetCurrency}
              >
                <option value="">Select target currency</option>{" "}
                  
              </select>
            </div>

            <div className="mb-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="amountInSourceCurrency"
              >
                Amount in source currency
              </label>
              <input
              onChange={(e) => setAmountInSourceCurrency(e.target.value)}
                required
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
                type="number"
                name={amountInSourceCurrency}
                id={amountInSourceCurrency}
                placeholder="Amount in source currency..."
              />
            </div>

            <button  className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Get the target Currency
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};  

export default MainPage;
