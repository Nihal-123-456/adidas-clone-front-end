'use client';

import Link from "next/link"
import useScroll from "@/lib/hooks/useScroll";

const Card = ({title, text, img} : {title:string, text:string, img:string}) => {
    return (
        <div className="flex flex-col gap-5 min-w-82.75 lg:min-w-0">
            <img src={img} alt={title} />
            <p className="text-xl font-extrabold uppercase">{title}</p>
            <p className="text-[16px]">{text}</p>
            <Link href={'/products'} className="text-[16px] font-bold underline">Shop Now</Link>
        </div>
    )
}

export const ScrollButton = ({rotateClass, position, hiddenClass, onClick} : {rotateClass:string, position:string, hiddenClass?:string, onClick:()=>void}) => {
    return (
        <button onClick={onClick} className={`absolute ${position} top-1/2 -translate-y-1/2 z-10 bg-white shadow p-1 ${hiddenClass} w-14 h-10.5 border-2 cursor-pointer`}>
            <img src="/icons/Right Arrow.png" alt="arrow" className={rotateClass}/>
        </button>
    )  
}

const Collections = () => {
  const {scrollRef, scrollLeft, scrollRight, canScrollLeft, canScrollRight, updateScrollButtons} = useScroll();

  return (
    <section className="relative">
        {canScrollLeft && <ScrollButton rotateClass="rotate-180" onClick={scrollLeft} position="left-5" hiddenClass="lg:hidden"/>}
        {canScrollRight && <ScrollButton rotateClass="rotate-0" onClick={scrollRight} position="right-5" hiddenClass="lg:hidden"/>}
      
        <div ref={scrollRef} onScroll={updateScrollButtons} className="flex items-stretch px-6 lg:px-8.5 py-12 gap-2.5 overflow-x-auto scrollbar-hide scroll-pl-6">
            <Card title="win & advance" text="Celebrate your favorite team with clothes and shoes. Team jerseys, ball caps and footwear let you show off your school spirit in style." img="/images/scroll-img-1.png"/>
            <Card title="CLIMACOOL" text="Celebrate your favorite team with clothes and shoes. Team jerseys, ball caps and footwear let you show off your school spirit in style." img="/images/scroll-img-2.png"/>
            <Card title="ADIDAS XLG 2.0" text="Celebrate your favorite team with clothes and shoes. Team jerseys, ball caps and footwear let you show off your school spirit in style." img="/images/scroll-img-3.png"/>
            <Card title="CHOOSE ONE" text="Celebrate your favorite team with clothes and shoes. Team jerseys, ball caps and footwear let you show off your school spirit in style." img="/images/scroll-img-4.png"/>
        </div>
    </section>
  )
}

export default Collections