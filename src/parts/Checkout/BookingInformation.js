import React from 'react';
import { Fade } from 'react-awesome-reveal';

import { InputText } from 'elements/Form';

export default function BookingInformation(props) {
    const { data, ItemDetails, checkout } = props;
    return (
        <Fade triggerOnce>
            <div className='container' style={{ marginBottom: 30 }}>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-5 border-right py-5' style={{ paddingRight: 80 }}>
                        <Fade delay={300} triggerOnce>
                            <div className='card'>
                                <figure className='img-wrapper' style={{ height: 270 }}>
                                    <img
                                        className='image-cover'
                                        src={ItemDetails.imageUrls[0].url}
                                        alt={ItemDetails.name}
                                    />
                                </figure>
                                <div className='row align-items-center'>
                                    <div className='col'>
                                        <div className='meta-wrapper'>
                                            <h5>{ItemDetails.name}</h5>
                                            <span className='text-gray-500'>
                                                {ItemDetails.city}
                                            </span>
                                        </div>
                                    </div>
                                    <div className='col-auto'>
                                        <span>
                                            ${+checkout.duration * ItemDetails.price} USD
                                            <span className='text-gray-500'> per </span>
                                            {checkout.duration} {ItemDetails.unit}
                                            {+checkout.duration > 1 ? "s" : ""}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <div className='col-5 py-5' style={{ paddingLeft: 80 }}>
                        <Fade delay={600} triggerOnce>
                            <label htmlFor='firstName'>First Name</label>
                            <InputText 
                                id="firstName"
                                name="firstName"
                                value={data.firstName}
                                onChange={props.onChange}
                            />

                            <label htmlFor='lastName'>Last Name</label>
                            <InputText 
                                id="lastName"
                                name="lastName"
                                value={data.lastName}
                                onChange={props.onChange}
                            />

                            <label htmlFor='email'>Email Addres</label>
                            <InputText 
                                name="email"
                                id="email"
                                type="email"
                                value={data.email}
                                onChange={props.onChange}
                            />

                            <label htmlFor='phone'>Phone Number</label>
                            <InputText 
                                id="phone"
                                name="phone"
                                type="tel"
                                value={data.phone}
                                onChange={props.onChange}
                            />
                        </Fade>
                    </div>
                </div>
            </div>
        </Fade>
    )
}
