import React from "react";
import { Link } from "react-router-dom"

const Logo = () => {
    return <>
        <Link to="/" > <div className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 40" width="60" height="40">
                <text x="50%" y="60%" text-anchor="middle" alignment-baseline="middle" fontFamily="Gabarito,sans-serif" fontSize="50" fill="#FF6517" font-weight="bold">SH</text>
            </svg>
        </div>
        </Link>
    </>
}
export default Logo