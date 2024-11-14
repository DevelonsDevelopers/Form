import React, { useState } from 'react'
import toast from 'react-hot-toast';
import axios from "axios";

const Login = () => {


    const [data, setData] = useState({
        name: "",
        owner: "",
        email: "",
        address: "",
        designation: "",
        date: "",
        representative: "",
        representative_email: "",
        representative_designation: "",
        representative_address: ""
    });


    const [errors, setErrors] = useState({
        name: false,
        owner: false,
        email: false,
        address: false,
        designation: false,
        date: false,
        representative: false,
        representative_email: false,
        representative_designation: false,
        representative_address: false
    })

    const handleChange = (e) => {
        setData((d) => ({ ...d, [e.target.name]: e.target.value }));
        if (e.target.value.length > 0) {
            setErrors((prevState) => ({ ...prevState, [e.target.name]: false }));
        }
    };

    const submit = () => {
        let hasError = false;
        Object.keys(data).map((v) => {
            if (data[v]?.length === 0) {
                setErrors((prevState) => ({ ...prevState, [v]: true }));
                hasError = true;
            }
        });
        if (hasError) {
            toast.error("Please fill all the required fields");
            return true
        }

        axios.post(`https://technomentor.net/pdf-api/create`, data, { responseType: 'blob' }).then((res) => {
            const pdfBlob = new Blob([res.data], { type: 'application/pdf' });
            const fileURL = URL.createObjectURL(pdfBlob);
            window.open(fileURL);
        })
    }

    return (
        <div className=' flex  justify-center h-screen  bg-white mt-24'>

            <div>
                <div> <p className='bg-black rounded-lg text-center font-semibold  text-white p-1.5 mx-auto'>Company Information </p> </div>

                <div className="w-[100%] bg-slate-100 mx-auto border-2 border-black shadow-lg rounded-xl md:px-12 px-8  pt-10 pb-8 flex flex-col my-5">



                    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-2 mb-1">
                        <div>
                            <label className="text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4 ">
                                Company Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={data.name}
                                onChange={(e) => handleChange(e)}
                                placeholder="Enter Company name "
                                className={`pl-4 py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px]
                                 ${errors["name"]
                                        ? "border-red-600"
                                        : "border-gray-300"
                                    } 
                                 appearance-none  focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder="Enter Your Name`}
                            />
                        </div>
                        <div>
                            <label
                                className={`text-left tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4`}
                            >
                                Company Owner
                            </label>
                            <input
                                type="text"
                                name="owner"
                                value={data.owner}
                                onChange={(e) => handleChange(e)}
                                placeholder=" Enter Owner's name"
                                className={`pl-4 py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] 
                                ${errors["owner"]
                                        ? "border-red-600"
                                        : "border-gray-300"
                                    } appearance-none  focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder="Enter Source`}
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 grid-cols-1 gap-2  md:gap-5 mb-1">
                        <div className="col-span-1">
                            <label
                                className={`text-left tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4`}
                            >
                                Email
                            </label>
                            <input
                                type="text"
                                name="email"
                                value={data.email}
                                onChange={(e) => handleChange(e)}
                                placeholder="Enter Email"
                                className={`pl-4 py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px]
                                 ${errors["email"]
                                        ? "border-red-600"
                                        : "border-gray-300"
                                    } appearance-none  focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder="Enter Source`}
                            />
                        </div>
                        <div className="col-span-1">
                            <label
                                className={`text-left tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4`}
                            >
                                Designation
                            </label>
                            <input
                                type="text"
                                name="designation"
                                value={data.designation}
                                onChange={(e) => handleChange(e)}
                                placeholder="Enter Designation "
                                className={`pl-4 py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px]
                                 ${errors["designation"]
                                        ? "border-red-600"
                                        : "border-gray-300"
                                    } appearance-none  focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder="Enter Source`}
                            />
                        </div>
                    </div>


                    <div className="grid md:grid-cols-2 grid-cols-1 gap-2  md:gap-5 mb-1">
                        <div className="col-span-1">
                            <label
                                className={`text-left tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4`}
                            >
                                Date
                            </label>
                            <input
                                type="date"
                                name="date"
                                value={data.date}
                                onChange={(e) => handleChange(e)}
                                placeholder="Select Date"
                                className={`pl-4 py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px]
                                 ${errors["date"]
                                        ? "border-red-600"
                                        : "border-gray-300"
                                    } appearance-none  focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder="Enter Source`}
                            />
                        </div>
                        <div className="col-span-1">
                            <label
                                className={`text-left tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4`}
                            >
                                Address
                            </label>
                            <input
                                type="text"
                                name="address"
                                value={data.address}
                                onChange={(e) => handleChange(e)}
                                placeholder="Enter an address"
                                className={`pl-4 py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px]
                                 ${errors["address"]
                                        ? "border-red-600"
                                        : "border-gray-300"
                                    } appearance-none  focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder="Enter Source`}
                            />
                        </div>
                    </div>

                </div>
                <div> <p className='bg-black text-center rounded-lg p-1.5  text-white font-semibold'>Representative Information </p> </div>
                <div className="w-[100%] bg-slate-100 mx-auto border-2 border-black shadow-lg rounded-xl md:px-12 px-8  pt-10 pb-8 flex flex-col my-5">



                    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-2 mb-1">
                        <div>
                            <label className="text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4 ">
                                Representative Name
                            </label>
                            <input
                                type="text"
                                name="representative"
                                value={data.representative}
                                onChange={(e) => handleChange(e)}
                                placeholder="Enter Representative name "
                                className={`pl-4 py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px]
                                 ${errors["rep_name"]
                                        ? "border-red-600"
                                        : "border-gray-300"
                                    } 
                                 appearance-none  focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder="Enter Your Name`}
                            />
                        </div>
                        <div>
                            <label
                                className={`text-left tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4`}
                            >
                                Representative Email
                            </label>
                            <input
                                type="text"
                                name="representative_email"
                                value={data.representative_email}
                                onChange={(e) => handleChange(e)}
                                placeholder=" Enter Representative email"
                                className={`pl-4 py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px] 
                                ${errors["rep_email"]
                                        ? "border-red-600"
                                        : "border-gray-300"
                                    } appearance-none  focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder="Enter Source`}
                            />
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 grid-cols-1 gap-2  md:gap-5 mb-1">
                        <div className="col-span-1">
                            <label
                                className={`text-left tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4`}
                            >
                                Representative Designation
                            </label>
                            <input
                                type="text"
                                name="representative_designation"
                                value={data.representative_designation}
                                onChange={(e) => handleChange(e)}
                                placeholder="Enter Representative Designation "
                                className={`pl-4 py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px]
                                 ${errors["rep_designation"]
                                        ? "border-red-600"
                                        : "border-gray-300"
                                    } appearance-none  focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder="Enter Source`}
                            />
                        </div>
                        <div className="col-span-1">
                            <label
                                className={`text-left tracking-wide text-grey-darker text-[0.7rem] font-[600] mb-[3px] ml-4`}
                            >
                                Representative Address
                            </label>
                            <input
                                type="text"
                                name="representative_address"
                                value={data.representative_address}
                                onChange={(e) => handleChange(e)}
                                placeholder="Enter Representative Address "
                                className={`pl-4 py-[9px] px-0 w-full text-sm text-gray-900 bg-gray-50 rounded-[9px] border-[0.7px]
                                 ${errors["rep_address"]
                                        ? "border-red-600"
                                        : "border-gray-300"
                                    } appearance-none  focus:outline-none focus:ring-0 focus:border-black peer"
                            placeholder="Enter Source`}
                            />
                        </div>
                    </div>

                </div>


                <div className="flex justify-center py-5">
                    <button
                        onClick={() => submit()}
                        className="bg-black hover:font-bold text-white font-[600] py-2 px-[3rem]  rounded-lg cursor-pointer"
                    >
                        Submit
                    </button>
                </div>
           </div>
        </div>
    )
}

export default Login
