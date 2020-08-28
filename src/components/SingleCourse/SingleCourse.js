import React from 'react';
import './SingleCourse.css'
const SingleCourse = (props) => {
    return (
        <div>
            <div className="single-course p-5 my-4">
                <h5 className="mb-3">Course Name : {props.course.name}</h5>
                <h5 className="mb-4">Price : {props.course.price}</h5>
                <button onClick={()=> props.handleAddCourse(props.course)} className="btn btn-primary">Add Course</button>
            </div>

        </div>
    );
};

export default SingleCourse;