import React, { useState, useEffect } from 'react';
import './Global.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Global = () => {
    const tasks = [
        'Kitab yaz', // Write a book
        'Idman et', // Exercise
        'Dərs oxu', // Study
        'Söhbət et', // Talk
        'Şəkil çək', // Take a picture
        'Video çək', // Take a video
        'Kitab yaz', // Write a book (cycle repeats)
    ];

    const [index, setIndex] = useState(0);
    const [text, setText] = useState(tasks[index]);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % tasks.length);
        }, 2000); // Advance to the next task every 4 seconds
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        setText(tasks[index]);
    }, [index]);

    return (
        <div className='global'>
            <div className='backedglobal'>Backed by <span className='fifteen'>500</span> 5 brand Global</div>
            <div className='changeglobal'>
                <span className='task'>{text}</span>, sevdiyin işlə məşğul ol, izləyicilərindən dəstək qazan!
            </div>
            <div className='input-container'>
  <div className='input' contentEditable='true'>
 <div className='buttoninput buttonin'>
 <FaArrowLeft className='lefticon' />Yarat <FaArrowRight className='right' />

  </div></div>
  <div className='buttoninput buttonbelloinput'>
 <FaArrowLeft className='lefticon' />Yarat <FaArrowRight className='right' />

  </div>

</div>

            <div className='globallogo'>Yarat 🎉 Paylaş 🚀 Qazan ☕</div>
        </div>
    );
};

export default Global;
