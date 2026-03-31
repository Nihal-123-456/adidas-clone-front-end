'use client';

import Image from "next/image"

const RadioButtons = ({name, labelName}:{name:string, labelName:string}) => {
    return (
        <div className="flex items-center gap-2.5">
            <input type="radio" id={labelName.toLowerCase().replace(/ /g, "-")} name={name} />
            <label htmlFor={labelName.toLowerCase().replace(/ /g, "-")}>{labelName}</label>
        </div>
    )
}

const FilterSort = () => {
  return (
    <div className="drawer drawer-end w-fit">
        <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            <label htmlFor="my-drawer-5" className="drawer-button lg:flex lg:items-center lg:justify-center lg:gap-2.5 py-2.5 px-3.75 text-[16px] font-extrabold lg:border lg:border-gray-500 cursor-pointer">
                <span className="hidden lg:inline">Filter & Sort</span> <Image src='/icons/Filter and Sort.png' alt="filter & sort" width={24} height={24}/>
            </label>
        </div>
        <div className="drawer-side">
            <label htmlFor="my-drawer-5" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu relative bg-base-200 min-h-full w-80 p-4 overflow-y-auto">
                <div className='flex items-center justify-between mb-3'>
                    <span className="uppercase font-bold text-[18px]">filter & sort</span>
                    <label htmlFor="my-drawer-5" aria-label="close sidebar" className="drawer-overlay text-2xl cursor-pointer">X</label>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border-base-300 border">
                    <input type="checkbox" />
                    <div className="collapse-title font-semibold text-[15px]">Sort by</div>
                    <div className="collapse-content text-sm flex flex-col gap-3">
                        <RadioButtons labelName='Price Low to High' name="sort"/>
                        <RadioButtons labelName='Price High to Low' name="sort"/>
                        <RadioButtons labelName='Best Sellers' name="sort"/>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border-base-300 border">
                    <input type="checkbox" />
                    <div className="collapse-title font-semibold text-[15px]">Gender</div>
                    <div className="collapse-content text-sm flex flex-col gap-3">
                        <RadioButtons labelName='Men' name="gender"/>
                        <RadioButtons labelName='Women' name="gender"/>
                        <RadioButtons labelName='Unisex' name="gender"/>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border-base-300 border">
                    <input type="checkbox" />
                    <div className="collapse-title font-semibold text-[15px]">Age</div>
                    <div className="collapse-content text-sm flex flex-col gap-3">
                        <RadioButtons labelName='Adult' name="age"/>
                        <RadioButtons labelName='Children' name="age"/>
                        <RadioButtons labelName='Babies' name="age"/>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border-base-300 border">
                    <input type="checkbox" />
                    <div className="collapse-title font-semibold text-[15px]">Category</div>
                    <div className="collapse-content text-sm flex flex-col gap-3">
                        <RadioButtons labelName='Clothing' name="category"/>
                        <RadioButtons labelName='Shoes' name="category"/>
                        <RadioButtons labelName='Accessories' name="category"/>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-100 border-base-300 border">
                    <input type="checkbox" />
                    <div className="collapse-title font-semibold text-[15px]">Product type</div>
                    <div className="collapse-content text-sm flex flex-col gap-3">
                        <RadioButtons labelName='Jerseys' name="type"/>
                        <RadioButtons labelName='Pants' name="type"/>
                        <RadioButtons labelName='Shorts' name="type"/>
                        <RadioButtons labelName='Sneakers' name="type"/>
                    </div>
                </div>

                <button className='uppercase font-extrabold text-[16px] px-2.5 py-1.25 bg-black border-b-[5px] border-r-[5px] border-white gap-2.5 flex justify-between items-center cursor-pointer text-white w-full mt-3 shadow-[0_4px_10px_rgba(0,0,0,0.3)] hover:-translate-y-1 active:translate-y-0.75 active:border-b-2 active:border-r-2 transition-transform duration-100 ease-out'>
                    <span>Apply</span> 
                    <img src='/icons/Right Arrow white.png' alt='arrow' className='w-10.5 h-8'/>
                </button>
            </ul>
        </div>
    </div>
)}

export default FilterSort