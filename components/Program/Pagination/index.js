import React from 'react';
import {GrFormNext, GrFormPrevious} from "react-icons/gr";
import Link from "next/link";

const Pagination = () => {

    return (
        <div>
            {/*--------------->>>>>>>>pagination section here<<<<<<------------*/}
            <div className="flex justify-between items-center gap-x-4 ">
                <Link className='bg-white w-9 h-9 shadow-[0_2px_10px_0_#d8dde6] rounded-[18px] flex justify-center items-center p-4 font-semibold text-lg hover:bg-yellow-kh hover:text-white duration-300 transition-all  '
                      href="#">
                    <GrFormPrevious/>
                </Link>
                <Link className='bg-white w-9 h-9 shadow-[0_2px_10px_0_#d8dde6] rounded-[18px] flex justify-center items-center p-4 font-semibold text-lg hover:bg-yellow-kh hover:text-white duration-300 transition-all  '
                      href="#">
                    1
                </Link>
                <Link className='bg-white w-9 h-9 shadow-[0_2px_10px_0_#d8dde6] rounded-[18px] flex justify-center items-center p-4 font-semibold text-lg hover:bg-yellow-kh hover:text-white duration-300 transition-all  '
                      href="#">
                    2
                </Link>
                <Link className='bg-white w-9 h-9 shadow-[0_2px_10px_0_#d8dde6] rounded-[18px] flex justify-center items-center p-4 font-semibold text-lg hover:bg-yellow-kh hover:text-white duration-300 transition-all  '
                      href="#">
                    3
                </Link>
                <Link className='bg-white w-9 h-9 shadow-[0_2px_10px_0_#d8dde6] rounded-[18px] flex justify-center items-center p-4 font-semibold text-lg hover:bg-yellow-kh hover:text-white duration-300 transition-all  '
                      href="#">
                    4
                </Link>
                <Link className='bg-white w-9 h-9 shadow-[0_2px_10px_0_#d8dde6] rounded-[18px] flex justify-center items-center p-4 font-semibold text-lg hover:bg-yellow-kh hover:text-white duration-300 transition-all  '
                      href="#">
                    5
                </Link>
                <Link className='bg-white w-9 h-9 shadow-[0_2px_10px_0_#d8dde6] rounded-[18px] flex justify-center items-center p-2 !font-bold text-lg hover:bg-yellow-kh duration-200 transition  '
                      href="#">
                    <GrFormNext/>
                </Link>
            </div>

        </div>
    );
};

export default Pagination;