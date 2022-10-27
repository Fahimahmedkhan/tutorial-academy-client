import React, { createRef } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FaRegFilePdf } from 'react-icons/fa';
import Pdf from "react-to-pdf";

const CourseDetail = () => {
    const courseDetails = useLoaderData();
    const ref = createRef();

    return (
        <div>
            <Pdf targetRef={ref} filename="code-example.pdf">
                {({ toPdf }) => <button onClick={toPdf}><FaRegFilePdf className='pl-4 text-4xl hover:text-orange-600' /></button>}
            </Pdf>
            <div className='flex justify-start items-start m-10 p-10 border-2'>
                <div ref={ref} >
                    <div className='flex justify-start items-start space-x-4 mb-4'>
                        <h1 className='text-3xl'>{courseDetails.title}</h1>
                    </div>
                    <div >
                        <div className='flex justify-start items-start'>
                            <img src={courseDetails.thumbnail_url} alt="" className='w-56 h-56' />
                        </div>
                        <div className='mt-4 p-10'>
                            <p className='text-2xl'>{courseDetails.details}</p>
                        </div>
                        <div className='flex justify-end items-end'>
                            <button className='px-4 py-2 text-2xl font-semibold border-2 rounded-lg bg-orange-200 hover:bg-orange-500 hover:text-white'>Get Premium Access</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;