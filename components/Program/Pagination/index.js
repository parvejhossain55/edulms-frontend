import React from 'react';
import {GrFormNext, GrFormPrevious} from "react-icons/gr";

const Pagination = () => {

    return (
        <div>
            {/*--------------->>>>>>>>pagination section here<<<<<<------------*/}
            <div className="flex justify-between items-center gap-x-4 ">
                <a className='bg-white w-9 h-9 shadow-[0_2px_10px_0_#d8dde6] rounded-[18px] flex justify-center items-center p-2 font-bold text-lg hover:bg-yellow-kh delay-200 transition-all  '
                   href="#">
                    <GrFormPrevious/>
                </a>
                <a className='bg-white w-9 h-9 shadow-[0_2px_10px_0_#d8dde6] rounded-[18px] flex justify-center items-center p-2 font-bold text-lg hover:bg-yellow-kh delay-200 transition-all  '
                   href="#">
                    1
                </a>

                <a className='bg-white w-9 h-9 shadow-[0_2px_10px_0_#d8dde6] rounded-[18px] flex justify-center items-center p-2 font-bold text-lg hover:bg-yellow-kh delay-200 transition-all  '
                   href="#">
                    2
                </a>

                <a className='bg-white w-9 h-9 shadow-[0_2px_10px_0_#d8dde6] rounded-[18px] flex justify-center items-center p-2 font-bold text-lg hover:bg-yellow-kh delay-200 transition-all  '
                   href="#">
                    3
                </a>

                <a className='bg-white w-9 h-9 shadow-[0_2px_10px_0_#d8dde6] rounded-[18px] flex justify-center items-center p-2 font-bold text-lg hover:bg-yellow-kh delay-200 transition-all  '
                   href="#">
                    4
                </a>

                <a className='bg-white w-9 h-9 shadow-[0_2px_10px_0_#d8dde6] rounded-[18px] flex justify-center items-center p-2 font-bold text-lg hover:bg-yellow-kh delay-200 transition-all  '
                   href="#">
                    5
                </a>
                <a className='bg-white w-9 h-9 shadow-[0_2px_10px_0_#d8dde6] rounded-[18px] flex justify-center items-center p-2 !font-bold text-lg hover:bg-yellow-kh delay-200 transition-all  '
                   href="#">
                    <GrFormNext/>
                </a>
            </div>

        </div>
    );
};

export default Pagination;