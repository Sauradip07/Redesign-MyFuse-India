import React from 'react';
import CountUp from 'react-countup';

// Import the missing 'Counter' component
import Counter from '../../components/ui/autoincrase'; 

const BlogCard = () => {
    return (
        <div className="w-full">
            <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src="/docs/images/blog/image-4.jpg" alt="jqfljabjbv" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <div className="numbers">
                        <Counter number={2500} title="Active Students" />
                        <Counter number={3000} title="Jobs" />
                        <Counter number={5500} title="Active Applications" />
                    </div>
                </div>
            </a>
        </div>
    );
}

export default BlogCard;