import React from 'react';
import Link from 'next/link';

const Page = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <div className="space-x-4">
                <Link href="/page1">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Button 1
                    </button>
                </Link>
                <Link href="/page2">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Button 2
                </button>
            </Link>
            <Link href="/page3">
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Button 3
                </button>
            </Link>
        </div>
        </div >
    );
};

export default Page;