import React from "react";
import { useState } from "react";
function Contact() {
    const [name, setName] = useState();
    const [number, setNumber] = useState();
    const [date, setDate] = useState();
    const [message, setMessage] = useState();
    const [clear, setClear] = useState();


    // name is a constant here and setName is a function 
    let nameArr = "Manpreet";
    const handleChange = (e) => {
        setName(e.target.value);
        // console.log(e.target.value, 'value');
    }
    const handleNumberChange = (e) => {
        setNumber(e.target.value);
    }
    const handleDateChange = (e) => {
        setDate(e.target.value);
    }
    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    }
    const handleClear = (e) => {
        e.preventDefault();
        setName('');
        setNumber('');
        setDate('');
        setMessage('');
    }
    const handleClick = async(e) => {
        e.preventDefault();
        // console.log(name, number,date,message);
        const data = {
            name: name,
            number: number,
            date: date,
            message: message
        };
        try {
            const response = await fetch('https://dummy.restapiexample.com/api/v1/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        }
        catch (error) {
            console.error('Error:', error);
        }
    }
    console.log(name, 'name');
    console.log(number);
    console.log(date);
    console.log(message);

    return (

        <div className="containerContact contact">
            {nameArr}
            {name}
            <h1>Contact</h1>
            <p>We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste. Do not hesitate to contact us.</p>
            <h3>Catering Service, 42nd Living St, 43043 New York, NY</h3>
            <p className="catering_test">You can also contact us by phone 00553123-2323 or email catering@catering.com, or you can send us a message here:</p>
            <div>
                <form>
                    <input onChange={handleChange} value={name} placeholder="Name" type="test" />
                    {name}
                    <br />
                    <input onChange={handleNumberChange} value={number} placeholder="How many people?" />
                    {number}
                    <br />
                    <input onChange={handleDateChange} value={date} placeholder="Date" type="datetime-local" />
                    {date}
                    <br />
                    <input onChange={handleMessageChange} value={message} placeholder="Message \ Special requirements" type="test" />
                    {/* {message} */}
                    <button onClick={handleClick}>SEND MESSAGE</button>
                    <button onClick={handleClear} className="clear" type="reset">CLEAR MESSAGE</button>
                </form>
            </div>
        </div>
    );
}
export default Contact;