import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <section>
        <div style={{ backgroundImage: "url('/images/hero-1-img.png')" }}
        className="hero-section">
            <div className='collection-name'><p>badbo collection</p></div>
            <div className='collection-text'><p>A new chapter begins. Badbo.</p></div>

            <Link href={'/login'}><button className='hover:-translate-y-1 active:translate-y-0.75 active:border-b-2 active:border-r-2 transition-transform duration-100 ease-out'><span>Sign up</span><Image src='/icons/Right Arrow.png' alt='arrow' width={60} height={42}/></button></Link>
        </div>
        
        <div className='flex'>
            <div style={{ backgroundImage: "url('/images/hero-2-img-1.png')" }}
            className="hero-section flex-1">
                <div className='collection-name'><p>FIFA WORLD CUP 26 JERSEYS</p></div>
                <div className='collection-text'><p>Where soccer becomes expression.</p></div>

                <Link href={'/products'}>
                    <button className='w-82.5 hover:-translate-y-1 active:translate-y-0.75 active:border-b-2 active:border-r-2 transition-transform duration-100 ease-out'><span>EXPLORE THE COLLECTION</span><Image src='/icons/Right Arrow.png' alt='arrow' width={60} height={42}/></button>
                </Link>
            </div>
            <div style={{ backgroundImage: "url('/images/hero-2-img-2.png')" }}
            className="hero-section flex-1 hidden lg:block"></div>
            <div style={{ backgroundImage: "url('/images/hero-2-img-3.png')" }}
            className="hero-section flex-1 hidden lg:block"></div>
        </div>
    </section>
  )
}

export default Hero