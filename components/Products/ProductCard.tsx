import { AdidasProduct } from "@/db/adidasProduct"

const ProductCard = ({image, name, price, status, type, colorsAvailable }:AdidasProduct) => {
    return (
        <div className='relative flex flex-col gap-3.75 py-3 lg:py-6 cursor-pointer transition-transform duration-300 ease-out hover:-translate-y-2'>
            <img src={image} alt={name} className='w-full min-h-62.5'/>
            <div className='text-[16px] flex flex-col gap-3 px-2.5'>
                <p className='font-bold'>${price}</p>
                <p>{name}</p>
                <p className='font-extralight'>{type}</p>
                <p className='font-extralight'>{colorsAvailable} colors</p>
                <p>{status.label}</p>
            </div>
        </div>
    )
}

export default ProductCard