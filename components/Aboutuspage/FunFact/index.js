import React from 'react';

const Index = () => {

    return (
        <div className='bg-sky-200 ' id='fanFact'>
            <div className="containte-kh py-6 md:py-8 lg:py-10">
                <div className="flex flex-col sm:justify-between sm:flex-row sm:flex-wrap lg:flex-nowrap sm:gap-5 gap-y-8 lg:gap-x-5 py-6 md:py-10 lg:py-16   ">
                    <div className="p-9 sm:px-11 sm:py-16 bg-sky-400 rounded-xl basis-1 sm:basis-[48%] lg:basis-1/4 bg-[#5da7bd] flex justify-center items-center flex-col gap-y-3">
                        <strong className='text-kh-white text-4xl md:6xl lg:text-[40px] font-bold   '>1200</strong>
                        <p className='text-kh-white text-base font-medium'>Student</p>
                    </div>
                    <div className="p-9 sm:px-11 sm:py-16 bg-yellow-kh rounded-xl basis-1 sm:basis-[48%] lg:basis-1/4 bg-[#5da7bd] flex justify-center items-center flex-col gap-y-3">
                        <strong className='text-kh-white text-4xl md:6xl lg:text-[40px] font-bold   '>305</strong>
                        <p className='text-kh-white text-base font-medium'>Teacher</p>
                    </div>
                    <div className="p-9 sm:px-11 sm:py-16 bg-indigo-500 rounded-xl basis-1 sm:basis-[48%] lg:basis-1/4 bg-[#5da7bd] flex justify-center items-center flex-col gap-y-3">
                        <strong className='text-kh-white text-4xl md:6xl lg:text-[40px] font-bold   '>48</strong>
                        <p className='text-kh-white text-base font-medium'>Classroom</p>
                    </div>
                    <div className="p-9 sm:px-11 sm:py-16 bg-indigo-200 rounded-xl basis-1 sm:basis-[48%] lg:basis-1/4 bg-[#5da7bd] flex justify-center items-center flex-col gap-y-3">
                        <strong className='text-kh-white text-4xl md:6xl lg:text-[40px] font-bold   '>50</strong>
                        <p className='text-kh-white text-base font-medium'>bus</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Index;