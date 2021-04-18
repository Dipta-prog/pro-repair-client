import React, { useEffect, useState } from 'react';
import Testimonial from '../ReviewCard/ReviewCard';
import './Reviews.css';
import wilson from '../../../images/wilson.png';
import ema from '../../../images/ema.png';
import aliza from '../../../images/aliza.png';

const testimonialData = [
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Wilson Harry',
        from : 'California',
        img : wilson
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Ema Gomez',
        from : 'California',
        img : ema
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : aliza
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : aliza
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : aliza
    },
    {
        quote : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ',
        name : 'Aliza Farari',
        from : 'California',
        img : aliza
    }
]


const Reviews = () => {

    const[reviews,setReviews]=useState([]);

    useEffect(() => {
        fetch('http://localhost:5092/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    console.log(reviews);

    return (
       <section className="testimonials my-5 py-5" style={{backgroundColor:'#f4f4f4'}}>
           <div className="container">
               <div className="section-header">
                   <h5 className="text-success text-uppercase">Reviews</h5>
                   <h1>What Our Customers <br/> Say </h1>
               </div>
               <div className="mt-5 row row-cols-1 row-cols-md-3 g-4">
                    {   
                        reviews.map(review => {
                            return (
                                <div className="col-md-4">
                                    <Testimonial review={review} key={review._id}/>
                                </div>
                            )
                        })
                        // testimonialData.map(testimonial => <Testimonial testimonial={testimonial} key={testimonial.name}/>)
                    }
                </div>
                {/* <Testimonial/> */}
           </div>
       </section>
    );
};

export default Reviews;