// app/clothing/page.js

import { Clothing } from '@/index'; // Update the path as necessary

const fetchItems = async () => {
  const res = await fetch('https://localhost.pythonanywhere.com/api/items');
  const data = await res.json();
  return data;
};

export default async function ClothingPage() {
  const items = await fetchItems();
  
  return <Clothing items={items} />;
}







// "use client"
// import { Card } from "@/index"
// import { useEffect, useState } from "react"

// const Api = async () =>{
//     const res = await fetch('https://localhost.pythonanywhere.com/api/items')
//     const db = await res.json()
//     return db

// }

// export default async function Clothing(){
//     const [d,setd] = useState([])
//     const [category,setcategory] = useState('hoodie')
//     useEffect(()=>{
//         const load = async ()  => {
//             const data = await Api()
//             setd(data)
//         };load()
//     },[])


//     // const db = await Api()
//     const filter = db.filter( items => category === items.category)
//     return(
//         <div className="container mx-auto py-7 px-3 md:px-0">
//             <h1 className="text-2xl font-light">
//             Clothing
//             </h1>
//             <div className="flex flex-row gap-4 mt-5 overflow-auto">
//                 <button className="py-2 px-7 border border-slate-300 rounded-xl hover:bg-gray-200 focus:bg-sky-200" onClick={()=>setcategory('tshirt')} >Tshirt</button>
//                 <button className="py-2 px-7 border border-slate-300 rounded-xl hover:bg-gray-200 focus:bg-sky-200" onClick={()=>setcategory('seatshirt')} >Seatshirt</button>
//                 <button className="py-2 px-7 border border-slate-300 rounded-xl hover:bg-gray-200 focus:bg-sky-200" onClick={()=>setcategory('hoodies')} >Hoodies</button>
//             </div>
//             <Card db={filter} />
//         </div>
//     )
// }