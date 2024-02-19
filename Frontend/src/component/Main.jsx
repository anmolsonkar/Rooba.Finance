import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { Add, Agriculture, Call, Fence, FlashOn, GridViewSharp, Handyman, LocationOn, ZoomOutMap } from '@mui/icons-material';
import Chart from './Chart';

const FirstComponent = () => <div data-aos="fade">

    <div>
        <div className='absolute lg:p-5 md:p-5 p-5 pl-5 pt-3'>
            <p className='playfair-display text-[32px]'>Greensteps I</p>
            <span className='flex space-x-1 mt-1 items-center'>
                <LocationOn sx={{ fontSize: 16 }} />
                <p>Alwar, Rajasthan</p>
            </span>
        </div>
        <img className='' src="https://i.imgur.com/esXooc5.png" alt="First" />

    </div>
    <div className='bg-[#f2f2f2] lg:p-6  md:p-6  p-5 pl-5 lg:space-y-6 md:space-y-6 space-y-4 lg:text-[16px] md:text-[16px] text-sm'>
        <div>
            <p className='text-[#B5B5B5]'>Tags</p>
            <div className='text-[#121212] lg:flex md:flex lg:space-x-3 md:space-x-3 space-y-3 lg:space-y-0 md:space-y-0 w-fit mt-2'>
                <div className='rounded bg-[#dcdcdc] border border-black pl-2 pr-2 space-x-2'>
                    <GridViewSharp sx={{ fontSize: 20 }} />
                    <span>
                        Regular plot
                    </span>
                </div>
                <div className='rounded bg-[#dcdcdc] border border-black pl-2 pr-2'>
                    <ZoomOutMap sx={{ fontSize: 20 }} />
                    <span> 2,970 Sq ft*</span>
                </div>
                <div className='rounded bg-[#0F1640] text-white border border-[#464EC7] lg:pl-4 md:pl-4 pl-2 pr-4 p-[2px]'>
                    <span>  Fractional Ownership</span>
                </div>
            </div>
        </div>
        <div className='bg-[#f2f2f2] text-[#B5B5B5] space-y-3'>
            <p>Other Tags</p>
            <div className='flex space-x-5 mt-2'>
                <div className='rounded border pl-2 pr-2 space-x-1'>
                    <FlashOn sx={{ fontSize: 22 }} />
                    <span>  Electricity</span>
                </div>
                <div className='rounded border pl-2 pr-2 space-x-1'>
                    <Agriculture sx={{ fontSize: 22 }} />
                    <span>  Agricultural Land</span>
                </div>

            </div>
            <div className='flex space-x-5 mt-2'>
                <div className='rounded border pl-2 pr-2 space-x-1'>
                    <Handyman sx={{ fontSize: 22 }} />
                    <span> Maintenance Inclusive</span>
                </div>
                <div className='rounded border pl-2 pr-2 space-x-1'>
                    <Fence sx={{ fontSize: 22 }} />
                    <span> Fence</span>
                </div>

            </div>


        </div>
        <div className='bg-[#f2f2f2] text-[#121212]'>
            <p className='text-[#B5B5B5]'>Price</p>
            <div className='flex space-x-5 mt-2 font-semibold'>
                <div className=' w-full rounded border flex items-end lg:pb-2 lg:pt-10 lg:pl-4 md:pb-2 md:pt-10 md:pl-4 pt-7 pl-3 pb-2'>
                    INR<br />
                    1.75 Cr
                </div>
                <div className=' w-full rounded border flex items-end lg:pb-2 lg:pt-10 lg:pl-4 md:pb-2 md:pt-10 md:pl-4 pt-7 pl-3 pb-2 '>
                    2900/ Sq yd
                </div>
                <div className='w-full rounded border flex items-end lg:pb-2 lg:pt-10 lg:pl-4 md:pb-2 md:pt-10 md:pl-4 pt-7 pl-3 pb-2 text-indigo-600 bg-[#E0E5F3] border-indigo-600'>
                    INR<br />
                    5,00,000
                </div>

            </div>

        </div>
        <div className='space-x-4'>
            <button className='bg-[#191819] lg:p-2 md:p-2 p-1 lg:pl-3 md:pl-3 lg:pr-6 md:pr-6 pl-2 pr-5 space-x-2'>  <Add sx={{ fontSize: 22 }} /> <span>
                Invest Now</span></button>
            <button className='border lg:p-2 md:p-2 p-1 lg:pl-3 md:pl-3 lg:pr-6 md:pr-6 pl-2 pr-5 space-x-2 border-black text-[#121212] '>  <Call sx={{ fontSize: 22 }} />
                <span>Contact Us</span>
            </button>
        </div>
    </div>


</div>;

const SecondComponent = () => <div data-aos="fade">

    <div>
        <div className='absolute lg:p-5 md:p-5 p-5 pl-5 pt-3'>
            <p className='playfair-display text-[32px]'>Greensteps II</p>
            <span className='flex space-x-1 mt-1 items-center'>
                <LocationOn sx={{ fontSize: 16 }} />
                <p>Guwahati, Assam</p>
            </span>
        </div>
        <img className='' src="https://i.imgur.com/wcesNVQl.jpg" alt="Second" />

    </div>
    <div className='bg-[#f2f2f2] lg:p-6  md:p-6  p-5 pl-5 lg:space-y-6 md:space-y-6 space-y-4 lg:text-[16px] md:text-[16px] text-sm'>
        <div>
            <p className='text-[#B5B5B5]'>Tags</p>
            <div className='text-[#121212] lg:flex md:flex lg:space-x-3 md:space-x-3 space-y-3 lg:space-y-0 md:space-y-0 w-fit mt-2'>
                <div className='rounded bg-[#dcdcdc] border border-black pl-2 pr-2 space-x-2'>
                    <GridViewSharp sx={{ fontSize: 20 }} />
                    <span>
                        Regular plot
                    </span>
                </div>
                <div className='rounded bg-[#dcdcdc] border border-black pl-2 pr-2'>
                    <ZoomOutMap sx={{ fontSize: 20 }} />
                    <span> 2,770 Sq ft*</span>
                </div>
                <div className='rounded bg-[#0F1640] text-white border border-[#464EC7] lg:pl-4 md:pl-4 pl-2 pr-4 p-[2px]'>
                    <span>  Fractional Ownership</span>
                </div>
            </div>
        </div>
        <div className='bg-[#f2f2f2] text-[#B5B5B5] space-y-3'>
            <p>Other Tags</p>
            <div className='flex space-x-5 mt-2'>
                <div className='rounded border pl-2 pr-2 space-x-1'>
                    <FlashOn sx={{ fontSize: 22 }} />
                    <span>  Electricity</span>
                </div>
                <div className='rounded border pl-2 pr-2 space-x-1'>
                    <Agriculture sx={{ fontSize: 22 }} />
                    <span>  Agricultural Land</span>
                </div>

            </div>
            <div className='flex space-x-5 mt-2'>
                <div className='rounded border pl-2 pr-2 space-x-1'>
                    <Handyman sx={{ fontSize: 22 }} />
                    <span> Maintenance Inclusive</span>
                </div>
                <div className='rounded border pl-2 pr-2 space-x-1'>
                    <Fence sx={{ fontSize: 22 }} />
                    <span> Fence</span>
                </div>

            </div>


        </div>
        <div className='bg-[#f2f2f2] text-[#121212]'>
            <p className='text-[#B5B5B5]'>Price</p>
            <div className='flex space-x-5 mt-2 font-semibold'>
                <div className=' w-full rounded border flex items-end lg:pb-2 lg:pt-10 lg:pl-4 md:pb-2 md:pt-10 md:pl-4 pt-7 pl-3 pb-2'>
                    INR<br />
                    1.95 Cr
                </div>
                <div className=' w-full rounded border flex items-end lg:pb-2 lg:pt-10 lg:pl-4 md:pb-2 md:pt-10 md:pl-4 pt-7 pl-3 pb-2 '>
                    2700/ Sq yd
                </div>
                <div className='w-full rounded border flex items-end lg:pb-2 lg:pt-10 lg:pl-4 md:pb-2 md:pt-10 md:pl-4 pt-7 pl-3 pb-2 text-indigo-600 bg-[#E0E5F3] border-indigo-600'>
                    INR<br />
                    5,76,000
                </div>

            </div>

        </div>
        <div className='space-x-4'>
            <button className='bg-[#191819] lg:p-2 md:p-2 p-1 lg:pl-3 md:pl-3 lg:pr-6 md:pr-6 pl-2 pr-5 space-x-2'>  <Add sx={{ fontSize: 22 }} /> <span>
                Invest Now</span></button>
            <button className='border lg:p-2 md:p-2 p-1 lg:pl-3 md:pl-3 lg:pr-6 md:pr-6 pl-2 pr-5 space-x-2 border-black text-[#121212] '>  <Call sx={{ fontSize: 22 }} />
                <span>Contact Us</span>
            </button>
        </div>
    </div>


</div>;

const ThirdComponent = () => <div data-aos="fade">

    <div>
        <div className='absolute lg:p-5 md:p-5 p-5 pl-5 pt-3'>
            <p className='playfair-display text-[32px]'>Greensteps III</p>
            <span className='flex space-x-1 mt-1 items-center'>
                <LocationOn sx={{ fontSize: 16 }} />
                <p>Alwar, Rajasthan</p>
            </span>
        </div>
        <img className='' src="https://i.imgur.com/5rnNFgGl.jpg" alt="Third" />

    </div>
    <div className='bg-[#f2f2f2] lg:p-6  md:p-6  p-5 pl-5 lg:space-y-6 md:space-y-6 space-y-4 lg:text-[16px] md:text-[16px] text-sm'>
        <div>
            <p className='text-[#B5B5B5]'>Tags</p>
            <div className='text-[#121212] lg:flex md:flex lg:space-x-3 md:space-x-3 space-y-3 lg:space-y-0 md:space-y-0 w-fit mt-2'>
                <div className='rounded bg-[#dcdcdc] border border-black pl-2 pr-2 space-x-2'>
                    <GridViewSharp sx={{ fontSize: 20 }} />
                    <span>
                        Regular plot
                    </span>
                </div>
                <div className='rounded bg-[#dcdcdc] border border-black pl-2 pr-2'>
                    <ZoomOutMap sx={{ fontSize: 20 }} />
                    <span> 2,370 Sq ft*</span>
                </div>
                <div className='rounded bg-[#0F1640] text-white border border-[#464EC7] lg:pl-4 md:pl-4 pl-2 pr-4 p-[2px]'>
                    <span>  Fractional Ownership</span>
                </div>
            </div>
        </div>
        <div className='bg-[#f2f2f2] text-[#B5B5B5] space-y-3'>
            <p>Other Tags</p>
            <div className='flex space-x-5 mt-2'>
                <div className='rounded border pl-2 pr-2 space-x-1'>
                    <FlashOn sx={{ fontSize: 22 }} />
                    <span>  Electricity</span>
                </div>
                <div className='rounded border pl-2 pr-2 space-x-1'>
                    <Agriculture sx={{ fontSize: 22 }} />
                    <span>  Agricultural Land</span>
                </div>

            </div>
            <div className='flex space-x-5 mt-2'>
                <div className='rounded border pl-2 pr-2 space-x-1'>
                    <Handyman sx={{ fontSize: 22 }} />
                    <span> Maintenance Inclusive</span>
                </div>
                <div className='rounded border pl-2 pr-2 space-x-1'>
                    <Fence sx={{ fontSize: 22 }} />
                    <span> Fence</span>
                </div>

            </div>


        </div>
        <div className='bg-[#f2f2f2] text-[#121212]'>
            <p className='text-[#B5B5B5]'>Price</p>
            <div className='flex space-x-5 mt-2 font-semibold'>
                <div className=' w-full rounded border flex items-end lg:pb-2 lg:pt-10 lg:pl-4 md:pb-2 md:pt-10 md:pl-4 pt-7 pl-3 pb-2'>
                    INR<br />
                    2.04 Cr
                </div>
                <div className=' w-full rounded border flex items-end lg:pb-2 lg:pt-10 lg:pl-4 md:pb-2 md:pt-10 md:pl-4 pt-7 pl-3 pb-2 '>
                    2300/ Sq yd
                </div>
                <div className='w-full rounded border flex items-end lg:pb-2 lg:pt-10 lg:pl-4 md:pb-2 md:pt-10 md:pl-4 pt-7 pl-3 pb-2 text-indigo-600 bg-[#E0E5F3] border-indigo-600'>
                    INR<br />
                    6,04,000
                </div>

            </div>

        </div>
        <div className='space-x-4'>
            <button className='bg-[#191819] lg:p-2 md:p-2 p-1 lg:pl-3 md:pl-3 lg:pr-6 md:pr-6 pl-2 pr-5 space-x-2'>  <Add sx={{ fontSize: 22 }} /> <span>
                Invest Now</span></button>
            <button className='border lg:p-2 md:p-2 p-1 lg:pl-3 md:pl-3 lg:pr-6 md:pr-6 pl-2 pr-5 space-x-2 border-black text-[#121212] '>  <Call sx={{ fontSize: 22 }} />
                <span>Contact Us</span>
            </button>
        </div>
    </div>


</div>;


const FirstText = () => (
    <p data-aos="fade">
        In a world where the hustle and bustle of a metropolitan city can wear you
        down, everyone deserves a place to escape to —{" "}
        <span className="font-semibold">
            a real 'home away from home.'
        </span>
        <br />
        <br />
        That's precisely what we're here to offer you. Our carefully curated real
        estate opportunities provide you with the <span className="font-semibold">
            perfect retreat from the urban chaos
        </span>, all while potentially securing a solid investment in your future.
        <br />
        <br />
        <span className='text-white font-semibold cursor-pointer'>Learn More <TrendingFlatIcon fontSize='large' /></span>
    </p>
);

const SecondText = () => (
    <p data-aos="fade">
        Amidst the <span className="font-semibold">
            bustling energy and constant clamor of urban existence
        </span>, everyone deserves a sanctuary, a haven where they can find respite
        from the hustle and bustle. This is precisely what we provide.
        <br />
        <br />
        Our meticulously selected real estate offerings serve as your retreat from
        the urban frenzy while potentially securing a sound investment for your
        future.
        <br />
        <br />
        <span className='text-white font-semibold cursor-pointer'>Learn More <TrendingFlatIcon fontSize='large' /></span>
    </p>
);

const ThirdText = () => (
    <p data-aos="fade">
        In a world dominated by the <span className="font-semibold">
            relentless pace and frenetic rhythm of city life
        </span>, finding a tranquil escape is paramount. That's where we
        step in. With our carefully chosen real estate options, we offer more than
        just a physical space;
        <br />
        <br />
        we provide a refuge from the <span className="font-semibold">
            perpetual chaos and constant commotion
        </span> of everyday life while also presenting an opportunity for a wise investment in
        your future.
        <br />
        <br />
        <span className='text-white font-semibold cursor-pointer'>Learn More <TrendingFlatIcon fontSize='large' /></span>
    </p>
);



const Main = () => {
    const location = useLocation();
    const [selectedComponent, setSelectedComponent] = useState('first');

    const getLinkClass = (path) => {
        const isActive =
            location.pathname === path ||
            location.pathname.startsWith(path + '/');

        return `
    ${isActive ?
                'text-[#4375FB] pb-2 border-b-[#4375FB] border-b-4' :
                'text-[#717171]'}
    hover:text-[#BABABA]
    `;
    };

    const handleComponentClick = (component) => {
        setSelectedComponent(component);
    };

    return (
        <div className="flex flex-col items-center justify-center text-white bg-[#121212] pt-[10%]">
            <div className="lg:block xl:flex lg:w-9/12 md:w-11/12 items-center gap-10" >
                <div className="lg:p-10 md:p-10 p-5 w-full" data-aos="fade">
                    <p className="lg:text-[36px] md:text-[36px] text-[32px]">Discover</p>
                    <p className="font-semibold lg:text-[36px] md:text-[36px] text-[32px]">Prime Opportunities</p>
                    <div className="lg:block md:block flex lg:space-x-14 md:space-x-14 space-x-4 lg:mt-12 md:mt-12 mt-8">
                        <Link className={getLinkClass('/')} onClick={() => handleComponentClick('first')} to="/">
                            Greensteps I
                        </Link>
                        <Link className={getLinkClass('/Greensteps2')} onClick={() => handleComponentClick('second')} to="/Greensteps2">
                            Greensteps II
                        </Link>
                        <Link className={getLinkClass('/Greensteps3')} onClick={() => handleComponentClick('third')} to="/Greensteps3">
                            Greensteps III
                        </Link>
                    </div>
                    <div className="lg:mt-10 md:mt-10 mt-8 w-full text-[#BABABA]" >
                        {selectedComponent === 'first' && <FirstText />}
                        {selectedComponent === 'second' && <SecondText />}
                        {selectedComponent === 'third' && <ThirdText />}
                    </div>
                </div>
                <div className="lg:mt-10 md:mt-10 w-full">
                    {selectedComponent === 'first' && <FirstComponent />}
                    {selectedComponent === 'second' && <SecondComponent />}
                    {selectedComponent === 'third' && <ThirdComponent />}
                </div>

            </div >
            <Chart />
        </div >
    );
};

export default Main;
