import React from 'react';

const PhoneMockup = () => {
    return (
        <div className='px-8 my-10'>
            <h2 className='lg:text-5xl md:text-3xl text-xl text-center font-bold my-10'>Order Easily Using App</h2>
            <div className='grid grid-cols-2 items-center justify-center gap-4'>
                <div class="mockup-phone border-primary">
                    <div class="camera"></div>
                    <div class="display">
                        <div class="artboard artboard-demo phone-1">
                            <img src="https://i.ibb.co/dtkLzHq/d-S2-Sjp-RF2-E.gif" alt="" />
                        </div>
                    </div>
                </div>

                <div class="mockup-window border hidden lg:block bg-base-300">
                    <div class="flex justify-center px-4 py-8 bg-base-200">
                        <img src="https://i.ibb.co/r5f9kp7/5-OKw-LDMtcz.gif" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhoneMockup;