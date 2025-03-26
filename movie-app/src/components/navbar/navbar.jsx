import React from "react";



/*import themToggler from ''*/

const Nav = () => {

    return (
        <nav className="flex gap-5 ">
            <div className='site-logo'></div>
            <div className="flex flex-col gap-2">
                <span className="text-lg ">movies</span>
                <ul>
                    <li className="text-lg font-semibold text-black"><a href="#">Now Playing</a></li>
                    <li className="text-lg font-semibold text-black" ><a href="#">Popular</a></li>
                    <li className="text-lg font-semibold text-black" ><a href="#">Top Rated</a></li>
                    <li className="text-lg font-semibold text-black" ><a href="#">Upcoming</a></li>

                </ul>
            </div>
            <div>
                <span className="text-lg group ">tv shows</span>
                <ul className="group-hover:underline">
                    <li className="text-lg font-semibold text-black" ><a href="#"> Airing Today</a></li>
                    <li className="text-lg font-semibold text-black" ><a href="#"> On TV </a></li>
                    <li className="text-lg font-semibold text-black" ><a href="#"> Popular</a></li>
                    <li className="text-lg font-semibold text-black" ><a href="#"> Top Rated </a></li>


                </ul>

            </div>
        </nav>
    )
}

export default Nav