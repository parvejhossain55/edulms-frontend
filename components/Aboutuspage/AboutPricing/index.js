import React from 'react';

const AboutPricing = () => {

    return (
        <div className='bg-kh-white '>
            <div className="containte-kh py-6 md:py-8 lg:py-10">
                <p className="title-kh mb-8">Pricing</p>
                <h2 className="heading-kh mb-12 font-bold text-[28px] md:text-4xl lg:text-[45px] text-center">Pricing and Fees</h2>
                <div className='w-full'>
                    <table className="table-auto w-full text-left  ">
                        <thead >
                            <tr>
                                <th className='text-xl p-6 border border-gray-300'> Preschool </th>
                                <th className='text-xl p-6 border border-gray-300'>  Daily</th>
                                <th className='text-xl p-6 border border-gray-300'> Weekly</th>
                                <th className='text-xl p-6 border border-gray-300'> Monthly</th>
                            </tr>
                        </thead>
                        <tbody >
                        <tr className=''>
                            <td className='pregrap-kh p-6 border  border-gray-300' >Full-Day (8:00 AM - 6:00 PM)</td>
                            <td className='pregrap-kh p-6 border  border-gray-300' >$80.00</td>
                            <td className='pregrap-kh p-6 border  border-gray-300' >$180.00</td>
                            <td className='pregrap-kh p-6 border  border-gray-300' >$280.00</td>
                        </tr>
                        <tr className='border border-gray-500 '>
                            <td className='pregrap-kh p-6 border  border-gray-300' >Half Day (8:00 AM - 2:00 PM or 3:00 PM - 6:00 PM)</td>
                            <td className='pregrap-kh p-6 border  border-gray-300' >$35.00</td>
                            <td className='pregrap-kh p-6 border  border-gray-300' >$75.00</td>
                            <td className='pregrap-kh p-6 border  border-gray-300' >$275.00</td>
                        </tr>
                        <tr className='border border-gray-500 '>
                            <td className='pregrap-kh p-6 border  border-gray-300' >Food Expenses Paid Per Day</td>
                            <td className='pregrap-kh p-6 border  border-gray-300' >$30.00</td>
                            <td className='pregrap-kh p-6 border  border-gray-300' >$45.00</td>
                            <td className='pregrap-kh p-6 border  border-gray-300' >$75.00</td>
                        </tr>
                        <tr className='border border-gray-500 '>
                            <td className='pregrap-kh p-6 border  border-gray-300' >Activities</td>
                            <td className='pregrap-kh p-6 border  border-gray-300' >$30.00</td>
                            <td className='pregrap-kh p-6 border  border-gray-300' >$45.00</td>
                            <td className='pregrap-kh p-6 border  border-gray-300' >$75.00</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <p className="pregrap-kh text-center mt-5">The preschool reserves the right to increase the said fees at any time.</p>

            </div>

        </div>
    );
};

export default AboutPricing;