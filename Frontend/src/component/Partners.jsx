import { ArrowCircleLeftOutlined, ArrowCircleRightOutlined } from "@mui/icons-material";

const Partners = () => {
    return (
        <div className="lg:p-10 md:p-10 flex flex-col items-center w-full lg:pt-[5%] md:pt-[5%] pt-[15%]">
            <div className="lg:w-9/12 md:9/12 w-10/12 flex flex-col items-center ">
                <p data-aos="fade" className="playfair-display text-[45px] lg:text-[60px] md:text-[60px]"><em className="playfair-display text-[45px] lg:text-[60px] md:text-[60px] font-semibold">We’re more</em> than an</p>
                <p data-aos="fade" data-aos-delay="200" className="playfair-display text-[45px] lg:text-[60px] md:text-[60px] lg:ml-[16rem] md:ml-[16rem] mb-2">investment club </p>
                <p data-aos="fade" data-aos-delay="300" className="lg:mt-10 md:mt-10 mt-7">Our state-of-the-art platform ensures provenance through an unbroken chain of custody, and rigorous independent due diligence, both legal and financial. We're not just helping you invest; we're revolutionizing how investments are made, offering a dynamic approach that transcends traditional boundaries. Connect with a community of visionaries, and embark on an exclusive journey where innovation meets your financial aspirations. </p>
                <p data-aos="zoom-in" className="mt-[10%] text-[32px] font-semibold border-b-2 w-full text-center pb-5">Our Partners</p>
                <div className="flex mt-4 items-center flex-wrap" data-aos="zoom-in" data-aos-delay="200" >

                    <span className="hidden lg:flex md:flex"> <ArrowCircleLeftOutlined fontSize="large" sx={{ color: "#D9D9D9" }} /></span>
                    <img className="lg:w-[28vw] md:w-[28vw]" src="https://i.imgur.com/SUaKhSt.png" alt="carousel1" />
                    <img className="lg:w-[28vw] md:w-[28vw]" src="https://i.imgur.com/gRcIK24.png" alt="carousel2" />
                    <span className="hidden lg:flex md:flex"><ArrowCircleRightOutlined fontSize="large" sx={{ color: "#000000" }} /></span>
                </div>
            </div>
        </div>

    );
}

export default Partners;