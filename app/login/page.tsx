import LoginForm from '@/components/Login/LoginForm'
import Image from 'next/image'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Login",
  description: "Login page",
};

const page = () => {
  return (
    <section className='lg:flex py-12 px-6 lg:p-12 lg:justify-center lg:gap-18'>
        <div className='hidden lg:flex flex-col gap-5'>
            <img src="/images/adiClub.png" alt="adiClub" />
            <div className='flex flex-col gap-5 px-6'>
                <span className='text-[28px] font-bold'>JOIN ADICLUB TO UNLOCK MORE REWARDS</span>
                <div className='text-[16px] leading-7.5' style={{letterSpacing: '3%'}}>
                    Join adiClub for free and enjoy immediate access to these Level 1 rewards:
                    <ul className='px-6 list-disc'>
                        <li>Welcome Bonus Voucher for 15% off</li>
                        <li>Free Shipping and Returns</li>
                        <li>Members-Only Products</li>
                        <li>Early Access to Sales</li>
                        <li>Access to Limited Editions</li>
                    </ul>
                    Start earning adiClub points every time you shop, track a run on the adidas Running app and share a product review.
                    The more points you earn, the faster you'll level up and unlock rewards such as a Birthday Gift, Priority Customer Service, Premium Event Tickets and more.
                </div>
            </div>
        </div>

        <div className='lg:py-6 flex flex-col gap-5 lg:gap-6.25 w-full'>
            <div className='flex gap-5 items-center'>
                <img src="/images/Adidas Trefoil.jpg" alt="adidas-logo" className='w-13.75 h-11.75'/>
                <p className='text-[35px] font-extralight text-gray-400'>|</p>
                <p className='text-xl'><span className='font-extrabold'>adi</span><span className='italic font-bold'>Club</span></p>
            </div>

            <p className='font-bold text-[28px] uppercase text-start'>Log in or sign up</p>
            <p className='text-[15px] w-full'>Enjoy members-only access to exclusive products, experiences, offers and more.</p>

            <div className='flex flex-wrap gap-4.5'>
                <Image src='/icons/social-icons/Facebook_colored.png' alt='facebook-logo' width={60} height={45} className='cursor-pointer'/>
                <Image src='/icons/social-icons/Google_colored.png' alt='google-logo' width={60} height={45} className='cursor-pointer'/>
                <Image src='/icons/social-icons/Yahoo_colored.png' alt='yahoo-logo' width={60} height={45} className='cursor-pointer'/>
                <Image src='/icons/social-icons/Apple_colored.png' alt='apple-logo' width={60} height={45} className='cursor-pointer'/>
            </div>

            <div>
                <LoginForm />
            </div>
        </div>
    </section>
  )
}

export default page