'use client';

import useScroll from '@/lib/hooks/useScroll';
import { ScrollButton } from '@/components/Home/Collections';
import { AdidasProduct } from '@/db/adidasProduct';

const Sizes = () => {
  return (
    <div className='flex flex-col gap-4'>
      <p className='text-[16px] font-bold'>Sizes</p>
      <div className='flex flex-wrap gap-2'>
          <span className='text-[16px] px-6 py-3 bg-[#E0E0E0] cursor-pointer'>S</span>
          <span className='text-[16px] px-6 py-3 bg-[#E0E0E0] cursor-pointer'>M</span>
          <span className='text-[16px] px-6 py-3 bg-[#E0E0E0] cursor-pointer'>L</span>
          <span className='text-[16px] px-6 py-3 bg-[#E0E0E0] cursor-pointer'>XL</span>
          <span className='text-[16px] px-6 py-3 bg-[#E0E0E0] cursor-pointer'>2XL</span>
      </div>
    </div>
  )
}

const BagBtn = () => {
  return (
    <button className='font-bold text-[16px] px-2.5 py-1.25 bg-black border-b-[5px] border-r-[5px] border-white gap-2.5 flex items-center cursor-pointer text-white w-fit shadow-[0_4px_10px_rgba(0,0,0,0.3)] hover:-translate-y-1 active:translate-y-0.75 active:border-b-2 active:border-r-2 transition-transform duration-100 ease-out'>
        <span>Add to bag</span> 
        <img src='/icons/Right Arrow white.png' alt='arrow' className='w-10.5 h-8'/>
    </button>
  )
}

const Benefits = () => {
  return (
    <div className='flex flex-col gap-5'>
        <p className='text-[16px] font-bold'>Members earn</p>
        <div className='flex flex-col gap-4 text-[16px]'>
            <div className='flex gap-2'>
              <img src="/icons/Rating Circled.png" alt="rating" className='w-5 h-5'/>
              <p>1500 adiClub points</p>
            </div>
            <div className='flex gap-2'>
              <img src="/icons/Free Shipping.png" alt="rating" className='w-5 h-5'/>
              <p>Free standard shipping</p>
            </div>
            <div className='flex gap-2'>
              <img src="/icons/Return.png" alt="rating" className='w-5 h-5'/>
              <p>Free 30 days return</p>
            </div>
        </div>
    </div>
  )
}

const ProductDescription = ({image, name, price, status, type, colorsAvailable, rating }:AdidasProduct) => {
  const {scrollRef, scrollLeft, scrollRight, canScrollLeft, canScrollRight, updateScrollButtons} = useScroll();

  return (
    <div className='flex flex-col lg:flex-row gap-10 items-start lg:pr-2'>
        <section className='relative w-full lg:w-[60%]'>
          {canScrollLeft && <ScrollButton rotateClass="rotate-180" onClick={scrollLeft} position="left-5" hiddenClass="lg:hidden"/>}
          {canScrollRight && <ScrollButton rotateClass="rotate-0" onClick={scrollRight} position="right-5" hiddenClass="lg:hidden"/>}

          <div ref={scrollRef} className='flex overflow-x-auto lg:grid lg:grid-cols-2 gap-1 snap-x snap-mandatory scrollbar-hide' onScroll={updateScrollButtons}>
            <img src={image} alt="product-img" className='snap-start'/><img src={image} alt="product-img" className='snap-start'/><img src={image} alt="product-img" className='snap-start'/><img src={image} alt="product-img" className='snap-start'/>
          </div>
        </section>

        <div className='flex flex-col gap-6 lg:gap-7 px-4 lg:px-0 lg:mt-6'>
          <p className='text-[18px]'>{type}</p>
          <span className='text-[14px] p-2 bg-[#E0E0E0] w-fit'>{status.label}</span>

          <div className='flex flex-col gap-3'>
            <div className='flex gap-1 items-center'>
              <p className='text-[14px]'>{rating}</p>
              {Array.from({ length: rating }).map((_, i) => (
                    <img key={i} src='/icons/Star.png' alt='star' className='w-3 h-3' />
                ))}
            </div>
            <p className='text-2xl font-bold'>{name}</p>
            <p className='text-[16px] font-bold'>${price}</p>
          </div>

          <p className='text-[16px] font-bold'>{colorsAvailable} Colors available</p>
          <Sizes />

          <div className='flex flex-col gap-5 text-[14px]'>
            <p className='font-bold underline cursor-pointer'>Size guide</p>
            <span className='border border-black py-4 px-6'>True to size.We recommend ordering your usual size.</span>
          </div>

          <BagBtn />
          <Benefits />
        </div>
      </div>
  )
}

export default ProductDescription