'use client'

import React, { useState } from "react"
const AppointmentLetterForm = ({...props})=>{

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        props.setIsSubmitted(true);
      };

    return (
        <div className="flex justify-center">
            <div className="w-full max-w-2xl bg-white shadow-lg border rounded-md text-gray-900">
                <div className="relative p-6 bg-white border-b flex items-center justify-between">
                    <form className="mt-4 space-y-2">
                        <input type="text" name="name" placeholder="Recipient Name" value={props.formData.name} onChange={props.handleChange} className="w-full border p-2 rounded-md" />
                        <input type="text" name="street" placeholder="Street Address" value={props.formData.street} onChange={props.handleChange} className="w-full border p-2 rounded-md" />
                        <input type="text" name="city" placeholder="City" value={props.formData.city} onChange={props.handleChange} className="w-full border p-2 rounded-md" />
                        <input type="text" name="state" placeholder="State" value={props.formData.state} onChange={props.handleChange} className="w-full border p-2 rounded-md" />
                        <input type="text" name="zip" placeholder="ZIP Code" value={props.formData.zip} onChange={props.handleChange} className="w-full border p-2 rounded-md" />
                    

                       
                        <p className="mt-2"><input type="text" name="role" placeholder="Role" value={props.formData.role} onChange={props.handleChange} className="w-full border p-2 rounded-md" /></p>
                        <p className="mt-2">your joining date is <span className="font-semibold">
                        <input type="date" name="date_of_joining" placeholder="Date of joining" value={props.formData.date_of_joining} onChange={props.handleChange} className="w-full border p-2 rounded-md" />
                        </span>, and we look forward to welcoming you to our team.</p>
                        <p className="mt-2">Your working hours will be from <span className="font-semibold">
                        <input type="time" name="time_from" placeholder="From" value={props.formData.time_from} onChange={props.handleChange} className="w-full border p-2 rounded-md" />
                        to
                        <input type="time" name="time_to" placeholder="To" value={props.formData.time_to} onChange={props.handleChange} className="w-full border p-2 rounded-md" />
                        </span>, </p>
                        <p>Starting Day of the Week<span><input type="date" name="starting_day" placeholder="Starting Day" value={props.formData.starting_day} onChange={props.handleChange} className="w-full border p-2 rounded-md" /></span>
                        to 
                        Ending Day of the Week<span><input type="date" name="ending_day" placeholder="Last Day of the Week" value={props.formData.ending_day} onChange={props.handleChange} className="w-full border p-2 rounded-md" /></span>.</p>

                    </form>
                </div>
                <div className="flex justify-center">

                <button onClick={handleClick}>Submit</button>
                </div>
            </div>
        </div>
    )

}

export default AppointmentLetterForm;