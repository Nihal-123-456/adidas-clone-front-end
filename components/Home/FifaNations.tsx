'use client';

import { ScrollButton } from './Collections'
import { nationJerseyData, NationJersey } from '@/db/jerseyData'
import { JerseyProduct, jerseyProducts } from '@/db/jerseyProduct';
import useScroll from '@/lib/hooks/useScroll';

const JerseyCard = ({image, name}:{image:string, name:string}) => {
    return (
        <div className='relative min-w-50 transition-transform duration-300 ease-out hover:-translate-y-2 cursor-pointer'>
            <img src={image} alt={name} className='w-full h-full'/>
            <span className='absolute bottom-8.75 left-8.75 text-[14px] font-bold bg-white py-1 px-3.5'>{name}</span>
        </div>
    )
}

const JerseyProductCard = ({image, productName, price, nation, type }:JerseyProduct) => {
    return (
        <div className='relative min-w-82.75 flex flex-col gap-3.75 transition-transform duration-300 ease-out hover:-translate-y-2 cursor-pointer'>
            <img src={image} alt={productName} className='w-full h-full'/>
            <div className='text-[16px] flex flex-col gap-3'>
                <p className='font-bold'>${price}</p>
                <p>{productName}</p>
                <p className='font-light'>{type}</p>
            </div>
        </div>
    )
}

const FifaNations = () => {
  const {scrollRef:scrollRefOne, scrollLeft:scrollLeftOne, scrollRight:scrollRightOne, canScrollLeft:canScrollLeftOne, canScrollRight:canScrollRightOne, updateScrollButtons:updateScrollButtonsOne} = useScroll();
  const {scrollRef:scrollRefTwo, scrollLeft:scrollLeftTwo, scrollRight:scrollRightTwo, canScrollLeft:canScrollLeftTwo, canScrollRight:canScrollRightTwo, updateScrollButtons:updateScrollButtonsTwo} = useScroll();

  return (
    <section className='px-6 lg:px-8.5'>
        <div className='py-2.5'>
            <p className='text-[32px] font-bold uppercase mb-8.75'>SHOP FIFA WORLD CUP 2026</p>
            <div className='relative'>
                {canScrollLeftOne && <ScrollButton rotateClass="rotate-180" onClick={scrollLeftOne} position="left-5"/>}
                {canScrollRightOne && <ScrollButton rotateClass="rotate-0" onClick={scrollRightOne} position="right-5"/>}

                <div ref={scrollRefOne} onScroll={updateScrollButtonsOne} className='flex items-stretch overflow-x-auto gap-3.75 scrollbar-hide'>
                    {nationJerseyData.map((item:NationJersey) => (
                            <JerseyCard image={item.flagImage} name={item.name} key={item.id}/>
                        ))
                    }
                </div>
            </div>
        </div>
        
        <div className='py-7.5 flex flex-col gap-8.75'>
            <div className='flex flex-col gap-2.5'>
                <p className='text-[32px] font-bold uppercase'>SHOP LATEST DROPS</p>
                <p className='text-[18px]'>From the FIFA World Cup to your rotation</p>
            </div>
            <div className='relative'>
                {canScrollLeftTwo && <ScrollButton rotateClass="rotate-180" onClick={scrollLeftTwo} position="left-5"/>}
                {canScrollRightTwo && <ScrollButton rotateClass="rotate-0" onClick={scrollRightTwo} position="right-5"/>}

                <div ref={scrollRefTwo} onScroll={updateScrollButtonsTwo} className='flex overflow-x-auto gap-2.5 items-stretch scrollbar-hide'>   
                    {jerseyProducts.map((item:JerseyProduct) => (
                            <JerseyProductCard image={item.image} productName={item.productName} price={item.price} nation={item.nation} type={item.type} key={item.id}/>
                        ))
                    }
                </div>
            </div>
        </div>
    </section>
  )
}

export default FifaNations