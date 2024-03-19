import React, { useState } from 'react';
import CountUp from 'react-countup';
import Counter from '../../components/ui/autoincrase'; 

const BlogCard = () => {
    const [counted, setCounted] = useState(false);

    const handleHover = () => {
        if (!counted) {
            setCounted(true);
        }
    };

    return (
        <div 
            className="w-auto flex justify-center py-4 px-2" 
            onMouseEnter={handleHover}
        >
            <a href="#" className="flex flex-col items-center rounded-lg shadow md:flex-row md:max-w-xl  dark:bg-black ">
                <img className="object-cover min-w-80 w-auto rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="" alt="jqfljabjbv" />
                <div className="flex flex-col justify-start p-4 w-auto leading-normal  items-center text-start md:align-middle">
                    <div className="numbers">
                        <Counter number={counted ? 2500 : 0} title="Active Students" />
                        <Counter number={counted ? 3000 : 0} title="Jobs" />
                        <Counter number={counted ? 5500 : 0} title="Active Applications" />
                    </div>
                </div>
            </a>
        </div>
    );
}

export default BlogCard;
