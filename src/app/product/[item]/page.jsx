// app/items/[item].js
import img from './WhatsApp.svg'
import ProductItem from "@/components/Product/Product";
async function fetchData(itemid) {
  const res = await fetch(`https://localhost.pythonanywhere.com/api/items/${itemid}`);
  const data = await res.json();
  return data;
}

export default async function ProductPage({ params }) {
  const db = await fetchData(params.item);
  return <ProductItem img = {img} db={db} />;
}

// 'use client'
// import Image from "next/image"
// import img from './WhatsApp.svg'
// import { useEffect , useState } from "react"

// export default async function Productitems({ params }){



// const [whatsappUrl, setWhatsappUrl] = useState('');
// const number = '1234567890';
// const message = 'Hello, how are you?';
// useEffect(() => {
//     const formattedMessage = encodeURIComponent(message);
//     const url = `https://wa.me/${number}?text=${formattedMessage}`;
//     setWhatsappUrl(url);
//   }, [number, message]);
//   const handleClick = () => {
//     window.open(whatsappUrl, '_blank');
//   };    

//   const itemid = params.item
//   const res = await fetch(`https://localhost.pythonanywhere.com/api/items/${itemid}`)
//   const db  = await res.json()
  



//   return(
//         <div className="bg-gray-100 dark:bg-gray-800 py-8">
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex flex-col md:flex-row -mx-4">
//                 <div className="md:flex-1 px-4">
//                     <div className="h-[600px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4" >
//                         <Image className="w-full h-full object-cover" src={db.filename} alt="Product Image" width={500} height={700} />
//                     </div>
//                     <div className="flex -mx-2 mb-4 item-center justify-center">
//                         <button className="bg-[#00FF40] rounded-full px-4 py-1" onClick={handleClick} >
//                          <Image src={img} width={50} height={40} />
//                         </button>
//                         {/* <div className="w-1/2 px-2">
//                             <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
//                         </div>
//                         <div className="w-1/2 px-2">
//                             <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
//                         </div> */}
//                     </div>
//                 </div>
//                 <div className="md:flex-1 px-4">
//                     <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{db.title}</h2>
//                     {/* <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
//                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
//                         ante justo. Integer euismod libero id mauris malesuada tincidunt.
//                     </p> */}
//                     <div className="flex mb-4">
//                         <div className="mr-4">
//                             <span className="font-bold text-gray-700 dark:text-gray-300">Prix:</span>
//                             <span className="text-gray-600 dark:text-gray-300">{db.prix}</span>
//                         </div>
//                         <div>
//                             <span className="font-bold text-gray-700 dark:text-gray-300">Availability:</span>
//                             <span className="text-gray-600 dark:text-gray-300">In Stock</span>
//                         </div>
//                     </div>
//                     <div className="mb-4">
//                         <span className="font-bold text-gray-700 dark:text-gray-300">Select Color:</span>
//                         <div className="flex items-center mt-2">
//                             <button className="w-6 h-6 rounded-full bg-gray-800 dark:bg-gray-200 mr-2"></button>
//                             <button className="w-6 h-6 rounded-full bg-red-500 dark:bg-red-700 mr-2"></button>
//                             <button className="w-6 h-6 rounded-full bg-blue-500 dark:bg-blue-700 mr-2"></button>
//                             <button className="w-6 h-6 rounded-full bg-yellow-500 dark:bg-yellow-700 mr-2"></button>
//                         </div>
//                     </div>
//                     <div className="mb-4">
//                         <span className="font-bold text-gray-700 dark:text-gray-300">Select Size:</span>
//                         <div className="flex items-center mt-2">
//                             <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">S</button>
//                             <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">M</button>
//                             <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">L</button>
//                             <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XL</button>
//                             <button className="bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 dark:hover:bg-gray-600">XXL</button>
//                         </div>
//                     </div>
//                     <div>
//                         <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
//                         <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
//                             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
//                             sed ante justo. Integer euismod libero id mauris malesuada tincidunt. Vivamus commodo nulla ut
//                             lorem rhoncus aliquet. Duis dapibus augue vel ipsum pretium, et venenatis sem blandit. Quisque
//                             ut erat vitae nisi ultrices placerat non eget velit. Integer ornare mi sed ipsum lacinia, non
//                             sagittis mauris blandit. Morbi fermentum libero vel nisl suscipit, nec tincidunt mi consectetur.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </div>

//   )
// }
