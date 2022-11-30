import React from "react";
import Link from "next/link";
export default function ButtonBack() {
    return (
        
        <Link href="/">
            <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Back
        </button>
        </div>
        </Link>
       
    );
    }