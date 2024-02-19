import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { Add } from '@mui/icons-material';

const FirstComponent = () => (
    <div className="relative w-full h-full">
        <img src="https://i.imgur.com/pSl38VL.png" data-aos="zoom-in" alt="First" />
        <img src="https://i.imgur.com/eh3O0Nr.png" data-aos="fade-left" data-aos-delay="400" alt="Signup" className="absolute lg:-top-12 md:-top-12 -top-6 lg:-right-16 md:-right-16 right-0 lg:w-[20vw] md:w-[20vw] w-[55vw] border shadow-md shadow-[#c4c4c4]" />
    </div>
);


const SecondComponent = () => <div>
    <img src="https://i.imgur.com/iW5OI2O.png" data-aos="zoom-in" alt="Second" />
</div>;

const ThirdComponent = () => <div className="relative w-full h-full">
    <img src="https://i.imgur.com/fkW5oVu.png" alt="Third" data-aos="zoom-in" />
    <img src="https://i.imgur.com/0UtuEr6.png" data-aos="fade-left" data-aos-delay="400" alt="Paymentoptions" className="absolute lg:top-2 -top-4 w-[30vw] right-[2%] md:top-2 lg:-right-[16%] md:-right-[26%]  lg:w-[12vw] md:w-[12vw] border shadow-md shadow-[#c4c4c4]" />
    <img src="https://i.imgur.com/blOB4co.png" data-aos="fade-left" data-aos-delay="600" alt="Payment" className="absolute lg:top-14 md:top-14 lg:right-4 md:right-4 lg:w-[11vw] md:w-[11vw] top-7 right-20 w-[30vw] border shadow-md shadow-[#c4c4c4]" />
</div>;


const FirstText = () => (
    <div className='space-y-5' data-aos="fade">
        <p>Investing in private markets facilitates portfolio diversification, mitigating risks associated with public markets</p>
        <button className="border border-[#121212] p-1 pl-10 pr-10 text-[#121212]">
            <span className='font-semibold cursor-pointer'>Start Now<TrendingFlatIcon fontSize='large' /></span>
        </button>
    </div>
);


const SecondText = () => (
    <div className='space-y-7' data-aos="fade">
        <p>Investing in private markets facilitates portfolio diversification, mitigating risks associated with public markets</p>
        <button className="border border-[#121212] p-1 pl-10 pr-10 text-[#121212]">
            <span className='font-semibold cursor-pointer'>Start Now<TrendingFlatIcon fontSize='large' /></span>
        </button>
    </div>
);
const ThirdText = () => (
    <div className='space-y-7' data-aos="fade">
        <p>Investing in private markets facilitates portfolio diversification, mitigating risks associated with public markets</p>
        <button className="border border-[#121212] p-1 pl-10 pr-10 text-[#121212]">
            <span className='font-semibold cursor-pointer'>Start Now<TrendingFlatIcon fontSize='large' /></span>
        </button>
    </div>
);



const Invest = () => {
    const location = useLocation();
    const [selectedComponent, setSelectedComponent] = useState('first');

    const getLinkClass = (path) => {
        const isActive =
            location.pathname === path ||
            location.pathname.startsWith(path + '/');

        return `
    ${isActive ?
                'text-[#121212] pb-2 border-l-[#4375FB] border-l-4' :
                'text-[#888888]'} text-[20px] lg:pl-8 md:pl-8 pl-4
    `;
    };

    const handleComponentClick = (component) => {
        setSelectedComponent(component);
    };

    return (
        <div className="lg:flex md:flex flex-col items-center justify-center text-[#191819] lg:pt-[6%] md:pt-[6%] pt-[12%]">
            <div className="lg:flex lg:w-10/12 md:w-10/12 items-center gap-10" >
                <div className="lg:p-10 md:p-10 p-5 w-full">
                    <p className="playfair-display text-[50px] lg:text-[60px] md:text-[60px]" data-aos="fade">How to</p>
                    <span className='italic font-semibold cursor-pointer lg:ml-20 md:ml-20 playfair-display text-[50px] lg:text-[60px] md:text-[60px]' data-aos="fade">Invest<TrendingFlatIcon className='lg:ml-7 md:ml-7 ml-3' sx={{ fontSize: 80 }} /></span>
                    <Link onClick={() => handleComponentClick('first')} to="/">
                        <div className="lg:mt-20 md:mt-20 mt-14 " data-aos="fade-right">
                            <div className={getLinkClass('/')}>
                                <div className='pb-4 border-b-[#C4C4C4] border-b-2 flex items-center justify-between '>

                                    Create Account
                                    <Add sx={{ fontSize: 22 }} />
                                </div>
                                <div className="w-full text-[#BABABA] mt-5">
                                    {selectedComponent === 'first' && <FirstText />}
                                </div>
                            </div>
                        </div>
                    </Link>
                    <Link onClick={() => handleComponentClick('second')} to="/opportunities">

                        <div className="mt-10" data-aos="fade-right" data-aos-delay="200">
                            <div className={getLinkClass('/opportunities')}>
                                <div className='pb-4 border-b-[#C4C4C4] border-b-2 flex items-center justify-between'>
                                    Discover Opportunities
                                    <Add sx={{ fontSize: 22 }} />
                                </div>
                                <div className="w-full text-[#BABABA] mt-5">
                                    {selectedComponent === 'second' && <SecondText />}
                                </div>
                            </div>

                        </div>
                    </Link>

                    <Link onClick={() => handleComponentClick('third')} to="/invest">

                        <div className="mt-10" data-aos="fade-right" data-aos-delay="300">
                            <div className={getLinkClass('/invest')}>
                                <div className='pb-4 border-b-[#C4C4C4] border-b-2 flex items-center justify-between'>
                                    Invest with Flexibility
                                    <Add sx={{ fontSize: 22 }} />
                                </div>
                                <div className="w-full text-[#BABABA] mt-5">
                                    {selectedComponent === 'third' && <ThirdText />}
                                </div>
                            </div>

                        </div>
                    </Link>


                </div>
                <div className="lg:mt-[10%] md:mt-[10%] lg:p-0 p-2">
                    {selectedComponent === 'first' && <FirstComponent />}
                    {selectedComponent === 'second' && <SecondComponent />}
                    {selectedComponent === 'third' && <ThirdComponent />}
                </div>

            </div >
        </div >
    );
};

export default Invest;
