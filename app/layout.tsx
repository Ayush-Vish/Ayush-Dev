import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/header';
import ActiveSectionContextProvider from '@/context/active-section-context';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({weight: "400" , subsets: ['devanagari']})

export const metadata: Metadata = {
  title: 'Ayush | Portfolio',
  description: 'Ayush is a full-stack developer based in India.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`text-gray-950    pt-28 sm:pt-36 relative bg-inherit bg-gray-50   `} >
        <div className='bg-[#fbe2e3] absolute top-[-6rem] right-[11rem] h-[31.25rem] -z-10 w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] '>
        </div>
        <div className='bg-[#dbd7fb] absolute top-[-1rem] left-[-35rem] h-[31.25rem] -z-10 w-[50.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]  md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] '>
        </div>
          <ActiveSectionContextProvider  >

          <Header/> 
          {children }
          <Footer/>
          <Toaster position='bottom-right' />
          </ActiveSectionContextProvider>

      </body>
    </html>
  );
}
