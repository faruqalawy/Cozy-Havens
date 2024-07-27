import React from 'react'
import { Fade } from 'react-awesome-reveal'

import img1 from 'assets/images/img-categories-1.jpg';
import img2 from 'assets/images/img-categories-2.png';
import img3 from 'assets/images/img-categories-3.png';
import img4 from 'assets/images/img-categories-4.png';
import img5 from 'assets/images/img-categories-5.png';
import img6 from 'assets/images/img-categories-6.png';
import img7 from 'assets/images/img-categories-7.png';
import img8 from 'assets/images/img-categories-8.png';
import img9 from 'assets/images/img-categories-9.png';
import img10 from 'assets/images/img-categories-10.png';
import img11 from 'assets/images/img-categories-11.png';
import img12 from 'assets/images/img-categories-12.png';

import Button from 'elements/Button'

export default function Categories( { data } ) {

    const imgCategories = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

    return data.map((category, index1) => {
        return (
            <section className="container" key={`category-${index1}`}>
                <Fade direction='up' triggerOnce>
                <h4 className='mb-3 font-weight-medium'>{category.name}</h4>
                <div className='container-grid'>
                    {category.items.length === 0 ? (
                        <div className='row'>
                            <div className='col-auto align-items-center'>
                                There is no property in this category
                            </div>
                        </div>
                    ) : (
                        category.items.map((item,index2) => {
                            return (
                                <div className='item column-3 row-1' key={`category-${index1}-item-${index2}`}>
                                    <Fade direction='up' triggerOnce delay={300 * index2}>
                                        <div className='card'>
                                            {item.isPopular && (
                                                <div className='tag'>
                                                    Popular {" "}
                                                    <span className='font-weight-light'>Choice</span>
                                                </div>
                                            )}
                                            <figure className='img-wrapper' style={{height: 180}}>
                                                <img src={imgCategories[index2]} alt={item.name} className='image-cover' />
                                            </figure>
                                            <div className='meta-wrapper'>
                                                <Button type='link' href={`/properties/${item._id}`} className='stretched-link d-block text-gray-800'>
                                                    <h5 className='h4'>{item.name}</h5>
                                                </Button>
                                                <span className='text-gray-500'>
                                                    {item.city}
                                                </span>
                                            </div>
                                        </div>
                                    </Fade>
                                </div>
                            )
                        })
                    )}
                </div>
                </Fade>
            </section>
        )
    })
}
