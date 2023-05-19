import React from 'react';

const Btn = ({value="button"}) => {
    return (
        <div>
            <div className='relative'>
                <button className="text-center font-medium w-fit text-lg rounded-[10px] py-2 px-6 bg-rad-kh text-white capitalize ">
                    {value}
                </button>
                <span className="text-center !w-0 font-medium w-fit text-lg rounded-[10px] py-2 px-6 py-2.5 bg-rad-kh text-white capitalize ">
                    {value}
                </span>
            </div>









        </div>
    );
};

export default Btn;