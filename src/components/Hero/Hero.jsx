// import Image from "next/image"
// import img from './img.jpg'
export default function Hero(){
    return(
        <div className="bg-yellow-700 overflow-hidden h-96 w-full flex justify-center items-center">
         {/* <Image src={img} className="w-full h-screen object-cover absolute mix-blend-overlay" /> */}
         <div className="flex flex-col items-center justify-center">
         <h1 className="text-5xl">Hamid<span className="text-lg text-[#FACC14]">.shop</span></h1>
            <button className="mt-3 py-2 px-7 bg-yellow-200 text-black text-lg rounded-xl text-light">About me</button>
         </div>
        </div>
    )
}