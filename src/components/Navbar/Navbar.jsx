"use client"; // This is a client component
import Link from "next/link"
import { useState } from "react"


// function Tolger({list}){
//     return(
//         <div className={list? 'absolute top-20 left-0 -mt-1 w-full' : ''}>
//             <ul className="text-start bg-white/20 backdrop-blur-md flex flex-col space-y-8 py-4 pl-10">
//                     <Link className="hover:text-slate-400" href="/">Home</Link>
//                     <Link className="hover:text-slate-400" href="/clothing">Clothing</Link>
//                     <Link className="hover:text-slate-400" href="/collections">Collections</Link>
//                     <Link className="hover:text-slate-400" href="/serigraphie">Serigraphie</Link>
//                     <Link className="hover:text-slate-400" href="/code">Code</Link>
//             </ul>
//         </div>
//     )
// }
export default function Navbar(){
    const [list,Setlist] = useState(true);
    return(
        <div className="bg-[#272727]">
            <nav className="container mx-auto flex justify-between items-center py-4 text-white px-2">
                <div className="flex justify-center items-center space-x-3">
                    <button onClick={()=>Setlist(!list)} className="transition duration-[9000ms] ease-in-out bi bi-list text-[30px] md:hidden "></button>
                    <h1 className="text-2xl">hamid<span className="text-xs text-[#FACC14]">.shop</span></h1>
                </div>
                <ul className="md:flex hidden space-x-10">
                    <Link className="hover:text-slate-400" href="/">Home</Link>
                    <Link className="hover:text-slate-400" href="/clothing">Clothing</Link>
                    <Link className="hover:text-slate-400" href="/collections">Collections</Link>
                    <Link className="hover:text-slate-400" href="/serigraphie">Serigraphie</Link>
                    <Link className="hover:text-slate-400" href="/code">Code</Link>
                </ul>

                <div className={!list ? 'transition duration-700 ease-in-out absolute top-20 left-0 -mt-1 w-full':'transition duration-700 ease-in-out absolute left-0 hidden top-20 -mt-1 w-full'}>
                    <ul className="text-start bg-white/20 backdrop-blur-md flex flex-col space-y-8 py-4 pl-10">
                            <Link onClick={()=>Setlist(!list)} className="text-slate-900 hover:text-slate-400" href="/">Home</Link>
                            <Link onClick={()=>Setlist(!list)} className="text-slate-900 hover:text-slate-400" href="/clothing">Clothing</Link>
                            <Link onClick={()=>Setlist(!list)} className="text-slate-900 hover:text-slate-400" href="/collections">Collections</Link>
                            <Link onClick={()=>Setlist(!list)} className="text-slate-900 hover:text-slate-400" href="/serigraphie">Serigraphie</Link>
                            <Link onClick={()=>Setlist(!list)} className="text-slate-900 hover:text-slate-400" href="/code">Code</Link>
                    </ul>
                </div>
                <div className="flex items-center space-x-8 mr-2 md:mr-0">
                    {/* <div className="relative" data-twe-input-wrapper-init>
                        <input
                            type="text"
                            className="h border border-slate-200 peer block min-h-[auto] w-full rounded bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[twe-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:peer-focus:text-primary [&:not([data-twe-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput1"
                            placeholder="Search" />
                        <label
                            for="exampleFormControlInput1"
                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[twe-input-state-active]:-translate-y-[0.9rem] peer-data-[twe-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Search
                        </label>
                    </div> */}
                <button> <i className="text-[20px] bi bi-search"></i> </button>
                {/* <button> <Link href='/cart'><i className="text-[20px] bi bi-bag"></i></Link></button> */}
                </div>
            </nav>
        </div>
    )
}