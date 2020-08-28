import React, { useState } from 'react';
import fakeData from '../../fakeData/fakeData';
import SingleCourse from '../SingleCourse/SingleCourse';
import './CourseShop.css'
import Cart from '../Cart/Cart';
const CourseShop = () => {
    const first12 = fakeData.slice(0,12);
    const [courses,setCourses] = useState(first12);
    const [cart,setCart] = useState([]);
    const handleAddCourse = (course) =>{
        const newCart = [...cart,course];
        setCart(newCart);
    }
    return (
        <div className="shop-container container mt-5">
            <div className="row">
                <div className="course-container col-md-8">
                    <h4>Buy Your Course</h4>
                    {
                        courses.map(crc => <SingleCourse handleAddCourse={handleAddCourse} course={crc}></SingleCourse>)
                    }
                     
                </div>
                <div className="cart-container col-md-4">
                    <h4 className="mb-4 ml-4">Cart :</h4>
                    <div className="cart-value ml-4">
                        <Cart cart={cart}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseShop;