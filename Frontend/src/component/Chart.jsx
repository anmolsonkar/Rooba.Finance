import React from "react";
import 'chart.js/auto';
import { Line } from "react-chartjs-2";
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';

const data = {

    labels: ["2001", "'04", "'07", "'10", "'13", "'16", "2007", "'19'20'"],
    datasets: [
        {
            label: " Private Equity Index ",
            data: [0.2, 1.2, 1.1, 1.5, 1.3, 2, 1.6, 2.5],
            borderColor: "#4375FB",
            backgroundColor: "#4375FB",
            tension: 0,
            pointRadius: 0,
        },
        {
            label: " S&P 500 Index",
            data: [0.3, 0.1, 0.2, 0.3, 0.2, 0.1, 0, 0.1],
            borderColor: "#464EC7",
            backgroundColor: "#464EC7",
            tension: 0,
            pointRadius: 0,
        },
    ],
};

const options = {
    scales: {
        y: {
            beginAtZero: false,
        },
    },
    plugins: {
        legend: {
            position: 'bottom',
        },

    },
};

const Chart = () => {
    return (
        <div className="lg:flex md:flex w-11/12 items-center gap-16 lg:pt-[10%] md:pt-[10%] pt-[15%]">
            <div className="lg:w-10/12 md:w-10/12" data-aos="fade-up">
                <p className="text-sm mb-16">Private Equity Index vs S&P 500 Index -- Historical Performance</p>
                <Line data={data} options={options} />
            </div>
            <div className="lg:p-10 lg:pt-0 md:pt-0 pt-16 w-full lg:ml-10 md:ml-10" data-aos="fade-up">
                <div>
                    <p className="playfair-display text-[50px] lg:text-[60px] md:text-[60px]">Access</p>
                    <p className="playfair-display text-[50px] lg:text-[60px] md:text-[60px] italic lg:ml-[2rem] md:ml-[2rem]">Alternative </p>
                    <p className="playfair-display text-[50px] lg:text-[60px] md:text-[60px] lg:ml-[9rem] md:ml-[9rem]">Investments</p>
                </div>
                <div className="lg:pb-[21vh] md:pb-[21vh] pb-20 lg:mt-0 md:mt-0 mt-10">
                    <img className="opacity-10 absolute w-[47vw] hidden lg:flex md:flex" src="https://i.imgur.com/0gRS7yw.png" alt="background-img" />

                    <div>
                        <p data-aos="fade" >
                            Unleashing the untapped potential of the alternative  markets through Rooba.Finance - Your gateway to superior returns and exclusive opportunities
                            <br /><br />
                            Discover the advantages of alternative market investments, unlock new horizons, and embark on a journey towards financial prosperity with our platform as your trusted partner.
                        </p>
                        <img className="opacity-10 w-[95%] absolute -mt-10 lg:hidden md:hidden " src="https://i.imgur.com/0gRS7yw.png" alt="background-img" />

                        <div className="lg:pt-[10vh] md:pt-[10vh] pt-[7vh] lg:space-x-3 md:space-x-3 space-y-7 lg:space-y-0">
                            <button data-aos="fade" data-aos-delay="200" className="border p-2 pl-6 pr-6 rounded">Private Equity </button><br className="lg:hidden md:hidden" />
                            <button data-aos="fade" data-aos-delay="300" className="border p-2 pl-6 pr-6 rounded">Private Debt </button>
                            <button data-aos="fade" data-aos-delay="400" className="border p-2 pl-6 pr-6 rounded">Investment Management Firms </button>
                        </div>

                        <button data-aos="fade" data-aos-delay="500" className="border p-2 lg:pl-20 md:pl-20 pl-6 pr-20 rounded mt-10 lg: text-xl">
                            <span className='text-white font-semibold'>Learn More <TrendingFlatIcon fontSize='large' /></span>
                        </button>

                    </div>
                </div>
            </div>

        </div>

    )
};

export default Chart;