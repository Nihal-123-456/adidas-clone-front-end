
import { adidasProducts, AdidasProduct } from '@/db/adidasProduct'
import ProductCard from '@/components/Products/ProductCard'
import { AdiClubBanner } from '@/components/Home/CalltoAction'
import ProductDescription from '@/components/Details/ProductDescription'
import Link from 'next/link'

const page = async ({params}:{params:Promise<{id:string}>}) => {
  const {id} = await params;
  const product = adidasProducts.find((element: AdidasProduct) => element.id.toString() === id);

  if (!product) {
    return <div className='font-bold text-4xl text-center w-full h-full m-auto'>Item not found</div>;
  }

  return (
    <div className='flex flex-col gap-8 lg:gap-12'>
      <ProductDescription {...product}/>

      <div className='flex flex-col gap-3 px-2 md:px-4 lg:px-8'>
        <p className='font-bold text-[32px]'>You may also like</p>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {adidasProducts.filter(item => item.id !== product.id).slice(0,4).map((item:AdidasProduct) => (
                <Link key={item.id} href={`/details/${item.id}`}><ProductCard {...item}/></Link>
            ))}
        </div>
      </div>
      
      <AdiClubBanner />
    </div>
  )
}

export default page