// import axios from "axios"

async function GetDb(){
    try {
        const res = await fetch('https://localhost.pythonanywhere.com/api/items')
        const db = await res.json()
        return db
    } catch (error) {
        
    }
}
export default async function Serigraphie(){
    const db = await GetDb()
    return(
        <div className="container mx-auto">
            map
            {db.filter(i => i.category === 'tshirt').map((dbs,index) => {
                return(
                    <div className="">
                      <h1 key={index}>{dbs.title}</h1>  
                      <h1 key={index}>{dbs.id}</h1>  
                    </div>
                    
                ) 
            })}
        </div>
    )
}
