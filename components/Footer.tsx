import { footerData, FooterColumn, FooterLink } from "@/lib/footerData"
import Image from "next/image"

const Footer = () => {
  return (
    <section className="bg-black text-white">
        <div className='flex flex-wrap justify-between md:justify-center items-stretch md:gap-18.75 py-6 px-18 md:px-2.5'>
            {footerData.map((item:FooterColumn) => (
                <div className='hidden md:flex md:flex-col md:gap-3.75 p-2.5' key={item.title}>
                    <p className='text-[16px] font-bold'>{item.title}</p>
                    <ul className='flex flex-col gap-3.75 text-[14px]'>
                        {item.links.map((link:FooterLink) => (
                            <li key={link.href}>{link.label}</li>
                        ))}
                    </ul>
                </div>
            ))}

            <div className="flex flex-col md:hidden gap-3.75 p-2.5">
                {footerData.map((item:FooterColumn) => (
                    <p className='text-[16px]' key={item.title}>{item.title}</p>
                ))}
            </div>
            
            <div className='flex flex-col gap-3.75 p-2.5 items-center'>
                <p className='text-[16px] md:font-bold'>Socials</p>
                <ul className='flex flex-col gap-3.75 text-[14px]'>
                    <li><Image src="/icons/social-icons/Facebook.png" alt="facebook" width={40} height={40}/></li>
                    <li><Image src="/icons/social-icons/Pinterest.png" alt="facebook" width={40} height={40}/></li>
                    <li><Image src="/icons/social-icons/Tiktok.png" alt="facebook" width={40} height={40}/></li>
                    <li><Image src="/icons/social-icons/X.png" alt="facebook" width={40} height={40}/></li>
                    <li><Image src="/icons/social-icons/Youtube.png" alt="facebook" width={40} height={40}/></li>
                </ul>
            </div>
        </div>

        <hr />

        <div className="flex flex-col gap-5 py-7.5 px-2.5 text-[16px] justify-center items-center">
            <p className="text-center">Your Privacy Choices | Privacy Policy | Terms & Conditions</p>
            <p className="font-medium text-center">© 2026 Adidas America, Inc.</p>
        </div>
    </section>
  )
}

export default Footer