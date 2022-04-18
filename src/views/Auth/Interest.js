import React, { memo } from 'react';
import { useState } from 'react';
import './Index.css'

const Interest = memo((props) => {
    const options = ["Stock Market", "Web Development", "Arts & Music", "UI/UX Design", "Cryptocurrency", "Health", "Business", "Photography", "Backend Development", "Metaverse", "NFT’s", "Blockchain"];
    const [arr, setArr] = useState(["Stock Market"])

    return (
        <div className="flex bg-lightgray h-screen">
            <div className="w-full flex flex-col  justify-center items-center px-4 ">
                <div className='flex flex-col '>
                    <div className='intrest_container mt-10' >
                        <h4 className="font-bold mb-4 text-xl page-name">Choose your interest</h4>
                        <div className='mb-5'>
                            <span className='subtitle '>Choose which you have more interest to give you best experience. </span>
                        </div>
                        <div className='grid grid-cols-4 gap-4'>
                            {(
                                options.map((option) =>
                                    <div className={` custom_button hover:shadow-xl ${arr.includes(option) ? 'custom_button2' : ''}`} key={option} onClick={() => {
                                        if (arr.includes(option)) {
                                            const newArr = [...arr];
                                            newArr.splice(newArr.findIndex(item => item === option), 1)
                                            setArr(newArr);
                                            console.log(arr)
                                        } else {
                                            setArr(prevValues => [...prevValues, option])
                                            console.log(arr)
                                        }





                                    }} >
                                        <div className='button_text' >
                                            {option}
                                        </div>
                                    </div>
                                )
                            )}

                        </div>
                    </div>
                    <div className='flex justify-end mt-8 mb-5 '>
                        <button class="bg-blue-500 hover:bg-blue-700 text-white custom_text  h-10 px-15 rounded-lg w-40 order-1" onClick={() => props.history.push('/login')} >
                            Login
                        </button>


                    </div>

                </div>





            </div>


        </div>
    )
})

export default (Interest)