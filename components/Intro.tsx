import Image from "next/image";

import img from "@/lib/img.jpeg";

function Intro ( ) { 


    return ( 
        <section>
            <div className="flex items-center justify-center "> 
                <div>
                    <Image src={img} width="192" height="192" alt="Ayush Image"  priority={true} quality={100} className="rounded-full bottom-[0.35rem] object-cover border-white shadow-xl " />
                    <span className="text-4xl ">
                        👋
                    </span>
                </div>

            </div>
        </section>
    )
}


export default Intro;