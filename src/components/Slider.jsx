import React, { useState } from 'react';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { arr } from '../data/data.js';
import ch from '../assets/cheese_clear.png';
import bch from '../assets/block_cheese_clear.png'


function Slider2(props) {
    const [curr, setState] = useState(2);
    const [deg, setDeg] = useState(0);
    const [bgColor, setBgColor] = useState('#af622d')
    const [rDeg, setRDeg] = useState(0)
    const [heading, setHeading] = useState('Margherita Pizza')
    const [desc, setDescription] = useState("Elevate your taste buds with our Margherita pizza with creamy mozzarella on a thin, heavenly crust for an Italian classic that's simply irresistible.")
    const [rbg, setRbg] = useState(ch)
    const [lbg, setLbg] = useState(bch)


    const leftSide = () => {

        if (curr > 0) {

            setState(curr - 1)
            setDeg(deg - 90)
            setBgColor(arr[curr - 1].bg)
            setRDeg(arr[curr - 1].rDeg)
            setHeading(arr[curr - 1].name)
            setDescription(arr[curr - 1].desc)
            setRbg(arr[curr - 1].rbg)
            setLbg(arr[curr - 1].lbg)

        }

    }

    const rightSide = () => {

        if (curr < arr.length - 1) {
            setState(curr + 1)
            setDeg(deg + 90)
            setBgColor(arr[curr + 1].bg)
            setRDeg(arr[curr + 1].rDeg)
            setHeading(arr[curr + 1].name)
            setDescription(arr[curr + 1].desc)
            setRbg(arr[curr + 1].rbg)
            setLbg(arr[curr + 1].lbg)
        }

    }

    const handleInput = (e) => {

        setState(e.target.value)
        if (curr < e.target.value) {

            setDeg(deg + 90)

        } else {
            setDeg(deg - 90)
        }

        setDescription(arr[e.target.value].desc)
        setHeading(arr[e.target.value].name)
        setRDeg(arr[e.target.value].rDeg)
        setBgColor(arr[e.target.value].bg)
        setState(Number(e.target.value))
        setRbg(arr[e.target.value].rbg)
        setLbg(arr[e.target.value].lbg)

    }


    return (

        <div style={{ backgroundColor: `${bgColor}` }}
            className='relative w-full h-screen flex flex-col item-center justify-center ease-in overflow-hidden pt-4 '>


            <div className='h-1/3 flex flex-col sm:flex-row items-center text-white '>
                <div style={{ backgroundImage: `url(${rbg})` }} className='w-1/2 h-3/5  bg-center bg-contain bg-no-repeat'></div>
                <div className='flex flex-col items-center justify-center '>
                    <h1 className='text-lg sm:text-3xl tracking-widest'>{heading}</h1>
                    <div className='w-4/5 sm:w-3/5 tracking-wider text-center text-slate-200 p-2 '><p className='text-base sm:text-xl text-primary '>{desc}</p>
                    </div>

                </div>
                <div style={{ backgroundImage: `url(${lbg})` }} className='w-1/2 h-3/5 bg-center bg-contain bg-no-repeat'></div>

            </div>

            <div className='relative w-full h-[31%] sm:h-2/3 flex justify-center items-center overflow-hidden text-white'>

                <button className='absolute top-[80%] left-[2%] rotate-[-78deg]  sm:top-[80%] sm:left-[15%] sm:rotate-[-85deg]  cursor-pointer sm:text-xl ' type="button" value='0' onClick={handleInput} >Jalapenos
                </button>

                <button className='absolute top-[52%] left-[15%] rotate-[-40deg]  sm:top-[30%] sm:left-[26%]  sm:rotate-[-45deg] cursor-pointer sm:text-xl' type="button" value='1' onClick={handleInput} >Shrimp</button>


                <button className='absolute cursor-pointer top-[35%]  sm:top-[5%] sm:left-[45%] sm:text-xl p-2' type="button" value='2' onClick={handleInput} >Margherita</button>


                <button className='absolute top-[52%] right-[15%] rotate-[40deg] sm:top-[30%] sm:right-[26%]  sm:rotate-[45deg] sm:text-xl cursor-pointer' type="button" value='3' onClick={handleInput} >Mushroom</button>


                <button className='absolute top-[80%] right-[2%] rotate-[78deg] sm:top-[80%] sm:right-[15%] sm:rotate-[85deg] cursor-pointer sm:text-xl p-2' type="button" value='4' onClick={handleInput} >Pepperoni</button>





                <div className="w-fit h-fit absolute -bottom-[47%] sm:-bottom-1/2  rounded-full  ">

                    <div style={{ rotate: `${rDeg}deg` }} class=" before:absolute before:w-4 before:h-4 before:bg-white before:rounded-full before:-translate-y-2 rounded-full duration-[1s] border-2 border-white">
                        <div className='rounded-full shrink-1'>
                            <img src={arr[curr].url} className='mobile-only:!h-[15rem] mobile-only:!w-[15rem] bg-cover border-2 border-white rounded-full' >
                            </img>

                        </div>
                    </div>


                </div>

            </div>
            <div className='absolute left-[5%] top-[50%] cursor-pointer text-neutral-200 border-2 border-neutral-200 rounded-full' >
                <FaAngleLeft onClick={leftSide} size={30} />
            </div>

            <div className='absolute right-[5%] top-[50%] cursor-pointer text-neutral-200 border-2 border-neutral-200 rounded-full' >
                <FaAngleRight onClick={rightSide} size={30} />
            </div>
        </div>



    );
}

export default Slider2;