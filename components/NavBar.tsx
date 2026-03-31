'use client';

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

const navLinks = [
    { name: "Men", href: "/products" },
    { name: "Kids", href: "/products" },
    { name: "Sale", href: "/products" },
    { name: "Women", href: "/products" },
    { name: "Trending", href: "/products" },
    { name: "Sports", href: "/products" }
];

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setIsDrawerOpen(false);
  
  useEffect(() => {
    close();
  }, [pathname]);
  
  return (
    <section>
        <div className='w-full bg-black text-white py-2.5'>
            <p className='font-bold text-[14px] text-center'>The Spring Sale : 30% off</p>
        </div>

        <div className='bg-white gap-6.5 justify-end py-2.5 px-6 text-black text-[11px] hidden lg:flex'>
            <p>store finder</p>
            <p>help</p>
            <p>orders & returns</p>
            <p>giftcards</p>
            <p>join adiclub</p>
        </div>

        <nav>
            <div className='flex gap-3.75 lg:gap-5 items-center'>
                <div className="drawer lg:hidden">
                    <input id="my-drawer-1" type="checkbox" className="drawer-toggle" checked={isDrawerOpen} onChange={(e) => setIsDrawerOpen(e.target.checked)} />

                    <div className="drawer-content">
                        <label htmlFor="my-drawer-1" className="cursor-pointer"><Image src='/icons/Menu.jpg' alt='menu' width={31} height={35}/></label>
                    </div>

                    <div className="drawer-side">
                        <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                        
                        <ul className="menu bg-base-200 min-h-full w-80 p-4">
                            <div className='drawer-header'>
                                <Link href={'/'}><Image src='/images/Adidas Trefoil.jpg' alt='logo' width={56} height={48} style={{ width: "56px", height: "48px" }}/></Link>
                                <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay drawer-close-btn">X</label>
                            </div>

                            <hr className='mb-3' />
                            <div className='font-bold text-[18px]'>
                                {navLinks.map((link) => (
                                    <li key={`${link.name}-small-screen`}>
                                        <Link href={link.href} className='group relative'>
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </div>
                            <hr className='my-4' />
                            <div>
                                <li><a>store finder</a></li>
                                <li><a>help</a></li>
                                <li><a>orders & returns</a></li>
                                <li><a>giftcards</a></li>
                                <li><a>join adiclub</a></li>
                            </div>
                        </ul>
                    </div>
                </div>

                <Image src='/icons/Search.jpg' alt='search' width={31} height={35} className='lg:hidden shrink-0'/>
                <Link href={'/'}><Image src='/images/Adidas Trefoil.jpg' alt='logo' width={78} height={72} className='hidden lg:block' style={{ width: "78px", height: "72px" }}/></Link>

                <div className='gap-7 font-bold text-[20px] hidden lg:flex'>
                    {navLinks.map((link) => (
                        <Link href={link.href} className='group relative' key={`${link.name}-large-screen`}>{link.name}
                        <span className="absolute bottom-0 left-0 h-0.75 w-full bg-black transform scale-x-0 origin-left transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                        </Link>
                    ))}
                </div>
            </div>
            <div className='flex gap-5 items-center'>
                <input type="text" placeholder='Search' className='search-bar'/>
                <Link href={'/'}><Image src='/images/Adidas Trefoil.jpg' alt='logo' width={56} height={48} className='lg:hidden' style={{ width: "56px", height: "48px" }}/></Link>
                
                <div className='flex gap-5 lg:gap-7.5'>
                    <Link href={'/login'}><Image src='/icons/Profile.png' alt='profile' width={31} height={35}/></Link>
                    <Image src='/icons/Shopping Cart.png' alt='cart' width={31} height={35}/>
                    <Image src='/icons/Favorite.jpg' alt='favorite' width={31} height={35}/>
                </div>
            </div>
        </nav>
    </section>
  )
}

export default NavBar