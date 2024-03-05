import React, { useState } from 'react'
import perc from '../assets/discount.png'
const Home = () => {
    const [amount,setAmount]=useState(0)
    const [discount,setDiscount]=useState(0)
    const [net,setNet]=useState(0)
    const calculate=(e)=>{
        e.preventDefault();
        const result=(amount*discount)/100;
        console.log(result);
        setNet(result);
    }
    const clear=(e)=>{
        setAmount(0);
        setDiscount(0);
        setNet(0);

    }
  return (
    <section className='home'>
        <div className='left-top'><img className='left-img' src={perc} alt="none" /></div>
        <div className='right-bottom'>
            <form className='myform' onChange={(e)=>e.preventDefault()}>
            <h2>Discount calculator</h2>
            <p>Actual Amount:₹<p className='amt'>{amount}</p></p>
            <p>Your Savings:₹<p className='net'>{net}</p></p>
            <input type="numbers" value={amount||""} placeholder='Enter Amount:' onChange={(e)=>setAmount(e.target.value)}/><br />
            <input type="numbers" value={discount||""} placeholder='Enter Discount Percentage:' onChange={(e)=>setDiscount(e.target.value)}/><br />
            <button onClick={calculate}>Calculate</button><br />
            <button onClick={clear}>Clear</button>
            <h3>Net Amount<br /><p className='net'>{amount-net}</p></h3>
            </form>
        </div>
    </section>
  )
}

export default Home