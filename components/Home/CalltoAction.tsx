'use client';

import Link from "next/link";

const UtilitySectionBigScreen = () => {
    return (
        <div className='px-8.5 py-6 justify-between items-center hidden lg:flex'>
            <div className='p-2.5 flex flex-col gap-7'>
                <p className='uppercase text-[18px] font-extrabold'>FRESH LOOKS FOR SPRING</p>
                <ul className='text-[16px] flex flex-col gap-7'>
                    <li>Spring Clothes</li>
                    <li>Floral Shoes</li>
                    <li>Skirts</li>
                    <li>Denim jacket</li>
                    <li>Sandals</li>
                </ul>
            </div>
            <div className='p-2.5 flex flex-col gap-7'>
                <p className='uppercase text-[18px] font-extrabold'>SOCCER MUST HAVES</p>
                <ul className='text-[16px] flex flex-col gap-7'>
                    <li>Spring Clothes</li>
                    <li>Floral Shoes</li>
                    <li>Skirts</li>
                    <li>Denim jacket</li>
                    <li>Sandals</li>
                </ul>
            </div>
            <div className='p-2.5 flex flex-col gap-7'>
                <p className='uppercase text-[18px] font-extrabold'>WARM WEATHER TRAINING</p>
                <ul className='text-[16px] flex flex-col gap-7'>
                    <li>Spring Clothes</li>
                    <li>Floral Shoes</li>
                    <li>Skirts</li>
                    <li>Denim jacket</li>
                    <li>Sandals</li>
                </ul>
            </div>
            <div className='p-2.5 flex flex-col gap-7'>
                <p className='uppercase text-[18px] font-extrabold'>STAND-OUT STYLES</p>
                <ul className='text-[16px] flex flex-col gap-7'>
                    <li>Spring Clothes</li>
                    <li>Floral Shoes</li>
                    <li>Skirts</li>
                    <li>Denim jacket</li>
                    <li>Sandals</li>
                </ul>
            </div>
        </div>
    )
}

const UtilitySectionSmallScreen = () => {
    return (
        <div className='px-8.5 py-6 lg:hidden'>
            <div className='p-2.5 flex flex-col gap-7'>
                <div className="collapse bg-base-100 border-base-300">
                    <input type="checkbox" />
                    <div className="collapse-title font-extrabold text-[18px] uppercase flex items-center justify-between">
                        <span>FRESH LOOKS FOR SPRING</span> 
                        <img src="/icons/Expand Arrow.png" alt="expand-arrow" className='w-7.5 h-7.5'/>
                    </div>
                    <div className="collapse-content text-sm">
                        <ul className='text-[16px] flex flex-col gap-7'>
                            <li>Spring Clothes</li>
                            <li>Floral Shoes</li>
                            <li>Skirts</li>
                            <li>Denim jacket</li>
                            <li>Sandals</li>
                        </ul>
                    </div>
                </div>
                <div className="collapse bg-base-100 border-base-300">
                    <input type="checkbox" />
                    <div className="collapse-title font-extrabold text-[18px] uppercase flex gap-2.5 items-center justify-between">
                        <span>WARM-WEATHER TRAINING</span> 
                        <img src="/icons/Expand Arrow.png" alt="expand-arrow" className='w-7.5 h-7.5'/>
                    </div>
                    <div className="collapse-content text-sm">
                        <ul className='text-[16px] flex flex-col gap-7'>
                            <li>Spring Clothes</li>
                            <li>Floral Shoes</li>
                            <li>Skirts</li>
                            <li>Denim jacket</li>
                            <li>Sandals</li>
                        </ul>
                    </div>
                </div>
                <div className="collapse border-base-300">
                    <input type="checkbox" />
                    <div className="collapse-title font-extrabold text-[18px] uppercase flex gap-2.5 items-center justify-between">
                        <span>SOCCER MUST HAVES</span> 
                        <img src="/icons/Expand Arrow.png" alt="expand-arrow" className='w-7.5 h-7.5'/>
                    </div>
                    <div className="collapse-content text-sm">
                        <ul className='text-[16px] flex flex-col gap-7'>
                            <li>Spring Clothes</li>
                            <li>Floral Shoes</li>
                            <li>Skirts</li>
                            <li>Denim jacket</li>
                            <li>Sandals</li>
                        </ul>
                    </div>
                </div>
                <div className="collapse bg-base-100 border-base-300">
                    <input type="checkbox" />
                    <div className="collapse-title font-extrabold text-[18px] uppercase flex gap-2.5 items-center justify-between">
                        <span>STAND-OUT STYLES</span> 
                        <img src="/icons/Expand Arrow.png" alt="expand-arrow" className='w-7.5 h-7.5'/>
                    </div>
                    <div className="collapse-content text-sm">
                        <ul className='text-[16px] flex flex-col gap-7'>
                            <li>Spring Clothes</li>
                            <li>Floral Shoes</li>
                            <li>Skirts</li>
                            <li>Denim jacket</li>
                            <li>Sandals</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const AdiClubBanner = () => {
    return (
        <div className='py-8.75 px-2.5 bg-[#59A27A] flex flex-col lg:flex-row items-center justify-center gap-7.5'>
            <p className='font-extrabold text-xl text-white uppercase'>JOIN OUR ADICLUB & GET 15% OFF</p>
            <Link href={'/login'}>
                <button className='uppercase font-extrabold text-[20px] p-2.5 bg-white border-b-[5px] border-r-[5px] flex items-center cursor-pointer hover:-translate-y-1 active:translate-y-0.75 active:border-b-2 active:border-r-2 transition-transform duration-100 ease-out'>
                    <span>SIGN UP FOR FREE</span> <img src='/icons/Right Arrow.png' alt='arrow'/>
                </button>
            </Link>
        </div>
    )
}

const CalltoAction = () => {
  return (
    <section>
        <div className='flex flex-col items-center justify-center pt-5 pb-12 bg-[#34A3FE]'>
            <img src="/images/Amazon Prime.png" alt="amazon" />
            <div className='flex flex-col gap-5 items-center justify-center'>
                <p className='uppercase text-[16px] font-bold text-white'>FAST, FREE DELIVERY</p>
                <Link href={'/products'}>
                    <button className='uppercase font-extrabold text-[20px] p-2.5 bg-white border-b-[5px] border-r-[5px] flex items-center cursor-pointer hover:-translate-y-1 active:translate-y-0.75 active:border-b-2 active:border-r-2 transition-transform duration-100 ease-out'>
                        <span>shop now</span> <img src='/icons/Right Arrow.png' alt='arrow'/>
                    </button>
                </Link>
            </div>
        </div>

        <UtilitySectionBigScreen />
        <UtilitySectionSmallScreen />
        <AdiClubBanner />
        
    </section>
  )
}

export default CalltoAction