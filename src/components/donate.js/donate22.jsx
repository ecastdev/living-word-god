import { Button, Checkbox, TextInput, Label, Select } from "flowbite-react";
import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function Donate22(){
    // payment form handling
        const [amount, setAmount] = useState("");
        const [currency, setCurrency] = useState("KES"); // Example: KES for Kenya
        const [phoneNumber, setPhoneNumber] = useState("");
        const [country, setCountry] = useState("KE"); // Example: KE for Kenya
        const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        // Send payment data to the backend server
        const response = await axios.post("http://localhost:3001/api/payment", {
            amount,
            currency,
            phoneNumber,
            country,
        });

        setMessage(`Payment Successful: ${response.data.data.transaction_id}`);
        } catch (error) {
        setMessage(`Payment Failed: ${error.response?.data?.error || 'Unknown error'}`);
        }
      };
    return(
       
        
        <div className="grid place-content-center">
            <ul className="grid gap-6">
                <p className="text-center text-3xl font-bold lg:text-2xl">Donation amount</p>
                <li>
                  <Checkbox id="$10/mk12,000" />
                  <Label htmlFor="remember" className=''>$10/mk12,000</Label>
                </li>
                <li>
                  <Checkbox id="$10/mk12,000" />
                  <Label htmlFor="remember" className=''>$10/mk12,000</Label>
                </li>
                <li>
                  <Checkbox id="$10/mk12,000" />
                  <Label htmlFor="remember" className=''>$10/mk12,000</Label>
                </li>
                <li>
                  <Checkbox id="$10/mk12,000" />
                  <Label htmlFor="remember" className=''>$10/mk12,000</Label>
                </li>
               
                <li>
                    <Checkbox id="my Amount" />
                    <Label htmlFor="remember" className=''>Any amount</Label>
                    <TextInput id="text" type="text" required  />
                </li>
                
            </ul>
            {/* person details */}
            <div className="grid mt-20">
            <h1 className="text-center font-extrabold text-3xl =">Donor information</h1>
                        <form onSubmit={handleSubmit} className="grid gap-10">
                            <div>
                                <label>Donor full name</label>
                                <input
                                    type="text"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    required
                                    className='rounded-lg'
                                />
                                </div>
                                <div>
                                <label>Amount:</label>
                                <input
                                    type="text"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    required
                                    className='rounded-lg'
                                />
                                </div>
                                <div>
                                <label>Currency:</label>
                                <select
                                    value={currency}
                                    onChange={(e) => setCurrency(e.target.value)}
                                    required
                                    className='rounded-lg'
                                >
                                    <option value="KES">KES</option>
                                    <option value="UGX">UGX</option>
                                    <option value="TZS">TZS</option>
                                    <option value="ZMW">ZMW</option>
                                    <option value="ZMW">Mk</option>
                                </select>
                                </div>
                                <div>
                                <label>Phone Number:</label>
                                <input
                                    type="tel"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    required
                                    className='rounded-lg'
                                />
                                </div>
                                <div>
                                <label>Country:</label>
                                <select
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    required
                                    className='rounded-lg'
                                >
                                    <option value="KE">Kenya</option>
                                    <option value="UG">Uganda</option>
                                    <option value="TZ">Tanzania</option>
                                    <option value="ZM">Zambia</option>
                                    <option value="ZM">Malawi</option>
                                </select>
                            </div>
                      <button type="submit" className="bg-rose-700 text-white rounded-lg p-3">Donate Now</button>
                </form>
                {message && <p>{message}</p>}


            </div>
         
        </div>
    )

}