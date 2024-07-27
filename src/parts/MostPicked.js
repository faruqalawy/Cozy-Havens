import React from 'react'
import { Fade } from 'react-awesome-reveal';

import Button from 'elements/Button';

import mostPicked from 'assets/images/mostpicked-main.jpg'
import mostPicked1 from 'assets/images/mostpicked-1.jpg'
import mostPicked2 from 'assets/images/mostpicked-2.jpg'
import mostPicked3 from 'assets/images/mostpicked-3.jpg'
import mostPicked4 from 'assets/images/mostpicked-4.jpg'

export default function MostPicked(props) {
    const mostPickedImage = [mostPicked, mostPicked1, mostPicked2, mostPicked3, mostPicked4]
    return (
        <section className='container' ref={props.refMostPicked}>
            <Fade direction='up' triggerOnce>
            <h4 className='mb-3'>Most Picked</h4>
            <div className='container-grid'>
                {props.data.map((item, index) => {
                    return (
                        <div
                            key={`mostpicked-${index}`}
                            className={`item column-4${index === 0 ? " row-2" : " row-1"}`}
                        >
                            <div className='card card-featured'>
                                <div className='tag'>
                                    ${item.price}
                                    <span className='font-weight-light'> per {item.unit}</span>
                                </div>
                                <figure className='img-wrapper'>
                                    <img
                                        src={mostPickedImage[index]}
                                        alt={item.name}
                                        className='image-cover'
                                    />
                                </figure>
                                <div className='meta-wrapper'>
                                    <Button 
                                        type='link' 
                                        className='stretched-link d-block text-white' 
                                        href={`/properties/${item._id}`}>
                                            <h5>{item.name}</h5>
                                    </Button>
                                    <span>
                                        {item.city}
                                    </span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            </Fade>
        </section>
    );
}