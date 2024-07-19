export default function Collections(){
    return(
        <div className="container mx-auto py-7 px-3 md:px-0">
            <h1 className="text-2xl font-light">
            Collections
            </h1>
            <div className="flex flex-row gap-4 mt-5 overflow-auto">
                <button className="py-2 px-7 border border-slate-300 rounded-xl hover:bg-gray-200 focus:bg-sky-200">Mugs</button>
                <button className="py-2 px-7 border border-slate-300 rounded-xl hover:bg-gray-200 focus:bg-sky-200">Posted</button>
                <button className="py-2 px-7 border border-slate-300 rounded-xl hover:bg-gray-200 focus:bg-sky-200">Sticker</button>
            </div>
        </div>
    )
}