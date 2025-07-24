import Link from "next/link";

const Header : React.FC =()=>{

    return(
        <div>
            <section className="header bg-blue-200 flex items-center justify-between flex-cols p-2">
                <div className="logo">
                    <span className="font-bold w-full h-full text-3xl"><Link href="/" >Logo</Link></span>
                </div>
                <div className="search w-[50vw] p-1 ">
                    <input className="rounded-2xl px-2 py-1 w-full" type="text" placeholder="Search" />
                </div>
                <div className="actions flex justify-between items-center">
                    <button className=" bg-blue-500 py-1 rounded border border-solid border-white px-2 mx-2">Log in</button>
                    <button className=" bg-blue-500 py-1 rounded border border-solid border-white px-2">Sign in</button>
                </div>
            </section>
            <section className="navbar bg-gray-200 shadow-md flex justify-center items-center py-2">
                <nav>
                    <ul className="flex justify-center items-center">
                        <Link href="/about">
                            <li className="font-bold text-blue-400 px-3 mx-1 rounded-xl py-1 bg-white hover:text-blue-600 hover:bg-blue-100 ">About</li>
                        </Link>
                        <Link href="/home">
                            <li className="font-bold text-blue-400 px-3 mx-1 rounded-xl py-1 bg-white hover:text-blue-600 hover:bg-blue-100 ">Home</li>
                        </Link>
                    </ul>
                </nav>
            </section>
        </div>
    )
}

export default Header;