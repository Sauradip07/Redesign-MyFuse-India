import React from 'react';
import CountUp from 'react-countup';

const Counter = ({ number, title }) => {
    return (
        <div className="number mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            <h2 className="counter mb-3 font-normal text-gray-700 dark:text-gray-400">{title}</h2>
            <CountUp duration={3} end={number} />
        </div>
    );
}

export default Counter;
