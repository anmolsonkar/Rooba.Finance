import React, { useState } from "react";

const Footer = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        query: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, phone, query } = formData;
        console.log(name, email, phone, query);
    };

    return (
        <div className="lg:flex md:flex w-full lg:pt-[10%] md:pt-[10%] pt-[15%]" data-aos="fade" >
            <div className="bg-[#121212] pt-[20%] pb-10 lg:pl-20 md:pl-20 pl-9 w-full text-white ">
                <p className="playfair-display text-[55px] lg:text-[60px] md:text-[60px]">Ready to</p>
                <p className="playfair-display text-[55px] lg:text-[60px] md:text-[60px] italic font-semibold">transcend</p>
                <p className="playfair-display text-[55px] lg:text-[60px] md:text-[60px]">the ordinary?</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-[#f2f2f2] lg:p-20 md:p-20 p-7 pt-14 w-full lg:pl-28 md:pl-28 lg:pt-28 md:pt-28">
                <p className="font-semibold">Click here to start your journey into the future of private market investments.<br /> For more information, connect with us directly through the contact form below.</p>
                <div className="mt-10 space-y-10">
                    <div>
                        <label className="absolute" htmlFor="name">Name</label>
                        <input
                            className="bg-[#F2F2F2] border-b-black border-b-2 outline-none w-full pl-16"
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label className="absolute" htmlFor="email">Email ID</label>
                        <input
                            className="bg-[#F2F2F2] border-b-black border-b-2 outline-none w-full pl-20"
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label className="absolute" htmlFor="phone">Phone no.</label>
                        <input
                            className="bg-[#F2F2F2] border-b-black border-b-2 outline-none w-full pl-24"
                            type="number"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label className="absolute" htmlFor="query">Your Query <span className="text-[#B6B6B6]">(if any)</span></label>
                        <input
                            className="bg-[#F2F2F2] border-b-black border-b-2 outline-none w-full pl-36"
                            id="query"
                            name="query"
                            value={formData.query}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="border border-[#121212] p-1 pl-10 pr-10 text-[#121212]">
                        <span className='font-semibold cursor-pointer'>Submit</span>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Footer;
