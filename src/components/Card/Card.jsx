import Image from "next/image"
import Link from "next/link"
// import img from './img1.jpg'
export default function Card({db}){
    return(
        <div className="container mx-auto mt-5">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mx-4 md:mx-0">
                {db.map((i,index) => (
                    
                        <div className="rounded-xl shadow-lg m-1">
                            <Link key={index.id} href={'/product/'+ i.id}>
                                <Image src={i.filename} className="w-full object-cover object-center rounded-xl" width={500} height={500} quality={100} />
                            </Link>
                                <div className="p-3">
                                    <h1 className="text-slate-500 text-sm underline decoration-yellow-400">{i.category}</h1>
                                    <h1 className="text-xl text-gray-900">{i.title}</h1>
                                </div>
                                <div className="-mt-3 p-3 flex justify-between items-center m-auto">
                                    <h1 className="text-gray-900 text-md">Prix: {i.prix} dh</h1>
                                    <button className="bi bi-heart-fill text-xl text-red-600"></button>
                                </div>
                                {/* <div className="flex justify-center mb-5">
                                    <button className="rounded-xl py-2 px-7 bg-pink-400">Add to Cart</button>
                                </div> */}
                        </div>
                ))}
            </div>
        </div>
    )
}