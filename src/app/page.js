// import Image from "next/image";
import Card from "@/components/Card/Card";
import Hero from "@/components/Hero/Hero";

async function Getapi(){
  const res = await fetch('https://localhost.pythonanywhere.com/api/items')
  const db =  await res.json()
  return db
}

export default async function Home() {
  const db = await Getapi()
  return (
    <>
    <Hero />
    <div className="container mx-auto py-7">
      <h1 className="text-2xl">Featured Products</h1>
      <Card db={db} />
    </div>
    </>
  );
}
