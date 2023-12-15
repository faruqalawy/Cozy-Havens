import React from 'react'
import { Fade } from 'react-awesome-reveal'

import TestimonyAccent from 'assets/images/testimonial-image-frame.jpg'

import Star from 'elements/Star'
import Button from 'elements/Button'

export default function Testimony({data}) {
    return (
        <section className='container'>
            <Fade direction='up' triggerOnce>
            <div className='row align-items-center'>
                <div className='col-auto' style={{marginRight: 30}}>
                    <div 
                        className='testimonial-hero'
                        style={{margin: `30px 0 0 30px`}}
                    >
                        <img src={data.imageUrl} alt="Testimonial" className='position-absolute' style={{zIndex: 1}} />
                        <img src={TestimonyAccent} alt='Testimonial frame' className='position-absolute' style={{margin: `-30px 0 0 -30px`}} />
                    </div>
                </div>
                <div className='col'>
                    <h4 style={{marginBottom: 30}}>
                        {data.name}
                    </h4>
                    <Star value={data.rate} width={48} height={48} spacing={4} />
                    <h5 className='font-weight-light line-height-2 my-3' style={{fontSize: 28}}>
                        {data.content}
                    </h5>
                    <span className='text-gray-500'>
                        {data.travelerName}, {data.travelerOccupation}
                    </span>
                    <div>
                        <Button className='btn px-5' style={{marginTop: 65}} hasShadow isPrimary type='link' href={`/testimonial/${data._id}`}>
                            Read His Story
                        </Button>
                    </div>
                </div>
            </div>
            </Fade>
        </section>
    )
}
