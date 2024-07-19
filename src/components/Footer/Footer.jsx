export default function Footer(){
    return(
        <div className="">
            <div className="bg-[#272727] text-gray-100">
                <div className="container mx-auto py-12 flex flex-col space-y-10 justify-center items-center">
                    <h1 className="text-3xl">
                        Hamid<span className="text-lg text-[#FACC14]">.shop</span>
                    </h1>
                    <div className="flex flex-col md:flex-row space-x-0 md:space-x-6 space-y-6 md:space-y-0 items-center">
                        <a href="#">Support</a>
                        <a href="#">Track Order</a>
                        <a href="#">Contact US</a>
                        <a href="#">Refund Policy</a>
                    </div>
                    <div className="flex m-auto justify-center align-center space-x-6 text-2xl">
                        <i className="bi bi-instagram text-red-400"></i>
                        <i className="bi bi-facebook  text-blue-900"></i>
                        <i className="bi bi-twitter-x text-black"></i>
                        <i className="bi bi-telegram  text-blue-500"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}