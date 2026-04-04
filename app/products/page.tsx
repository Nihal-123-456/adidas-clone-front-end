import { AdiClubBanner } from "@/components/Home/CalltoAction"
import { adidasProducts, AdidasProduct } from "@/db/adidasProduct"
import ProductCard from "@/components/Products/ProductCard"
import FilterSort from "@/components/Products/FilterSort"
import { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products List",
  description: "Products List page",
};

const page = () => {
  return (
    <section>
        <div className="px-4.5 lg:px-12 py-6 flex justify-between items-start w-full">
            <div className="w-4/5">
                <p className="text-[28px] font-extrabold">Men's Sneakers and Activewear</p>
                <p className="leading-6.25 text-[15px]">Kickstart your fitness routine with the latest men's sneakers and activewear to help you realize your goals. From running shoes that energize your stride to workout clothes that keep you cool, dry and focused on your effort. Strength, cardio or skill focus, explore the best training gear for your workout at adidas.</p>
            </div>
            <FilterSort />
        </div>

        <div className="px-0 lg:px-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {adidasProducts.map((item:AdidasProduct) => (
                <Link href={`/details/${item.id}`} key={item.id}><ProductCard {...item}/></Link>
            ))}
        </div>
        <p className="text-center text-[15px] py-3 lg:py-6">Page 1 of 100</p>
        
        <div className="flex justify-center lg:justify-end border lg:border-0">
            <button className="flex gap-1.25 py-3 px-12 items-center cursor-pointer border border-transparent hover:border-black transition duration-300 ease-in-out">
                <p className="text-[15px]">Next</p>
                <img src="/icons/Right Arrow.png" alt="arrow" className="w-5.5 h-4.5"/>
            </button>
        </div>

        <div className="px-4.5 lg:px-12 py-6 flex flex-col gap-3.75">
            <h1 className="text-[28px] font-extrabold">Adidas Men's Sneakers and Activewear</h1>
            <p className="text-[15px] lg:w-4/5">It's one-stop shopping for men's sneakers and activewear at adidas. Runners will find shoes for road, trail and track that energize every stride with adidas Boost. Lace up fresh sneakers for a new personal best today. Dedicated gym users will appreciate the cool, dry comfort of tees, tank tops and shorts featuring adidas AEROREADY technology to manage sweat and promote breathability. When you feel great, you perform great. Explore men's shoes and clothes for soccer players, including training jackets and warm puffies for time on the sidelines. Add a gym bag to pack a change of clothes and carry your sports gear to and from practice.
            Dial in your effort with the latest men's workout clothes to support your fitness routine. From weight lifting to running and soccer to basketball, we have athletic shorts, shoes and jerseys to match your workout. A classic track jacket and pants are considered required equipment for most athletes. Explore our tracksuit sets for all ages. Red, black or blue. Name your color. We have iconic Trefoil warm-ups to keep you looking and feeling your best. When it's time to relax after a workout, slip into classic adidas slides to give your feet a break and a comfy fleece hoodie to seal in the post-workout glow. Stay focused on your fitness with the latest men's sneakers and activewear from adidas.</p>
        </div>

        <AdiClubBanner />
    </section>
  )
}

export default page