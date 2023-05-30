import React from 'react';
import {Button} from "../../Design";
import {HeroImg} from "../../Design";

const BecomeTeacher = () => {
    return (
        <div className={`bg-[url("https://templates.envytheme.com/ketan/default/assets/img/overview-bg.jpg")] ${HeroImg.primary_img} before:opacity-0 `}>
            <div className="containte-kh py-10 md:py-14 lg:py-20">
                <div className="flex justify-center w-full items-center lg:justify-end  ">
                    <div className="flex flex-col w-full md:basis-10/12 rounded-3xl lg:basis-7/12 gap-y-5 justify-start bg-kh-white px-4 py-12 md:px-6 lg:px-12 ">
                        <h2 className='heading-kh text-[25px] md:text-[45px] mb-4 !font-extrabold'>Interested in Become Our Teacher?</h2>
                        <p className='pregrap-kh mb-4 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                        <button className={`${Button.btn_primary} capitalize w-fit `}>Become Teacher</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BecomeTeacher;