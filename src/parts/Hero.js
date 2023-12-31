import React from 'react'
import { Fade } from "react-awesome-reveal";

import ImageHero from 'assets/images/img-hero.jpg'
import ImageHero_ from 'assets/images/img-hero-frame.jpg'
import IconCities from 'assets/images/icons/icon-cities.svg'
import IconTraveler from 'assets/images/icons/icon-traveler.svg'
import IconTreasure from 'assets/images/icons/icon-treasure.svg'

import Button from 'elements/Button'

import formatNumber from 'utils/formatNumber'

export default function Hero(props) {
    
    function showMostPicked() {
        window.scrollTo({
            top: props.refMostPicked.current.offsetTop - 30,
            behavior: "smooth"
        });
    }
    
    return (
        <section className='container pt-4'>
            <Fade direction='up' triggerOnce>
            <div className='row align-items-center'>
                <div className='col-auto pr-5' style={{ width: 530 }}>
                    <h1 className='font-weight-bold line-weight-1 mb-3' style={{lineHeight: 1.4}}>
                        Leave Daily Hustle, <br />
                        Start Your Vacation
                    </h1>
                    <p className='mb-5 font-weight-light text-gray-500 w-80' style={{lineHeight: "170%"}}>
                        Do you plan to vacation in Yogyakarta? <br />
                        Break free at Cozy Havens, special curated homes, <br />
                        audacious tranquility, your real escape begins.
                    </p>
                    <Button className='btn px-5' hasShadow isPrimary onClick={showMostPicked}>
                        Show Me Now
                    </Button>

                    <div className='row' style={{marginTop: 80}}>
                        <div className='col-auto text-center' style={{marginRight: 35}}>
                            <img 
                                width='36'
                                height='36'
                                src={IconTraveler}
                                alt={`${props.data.travelers} travelers`}
                            />
                            <h6 className='mt-3'>
                                {formatNumber(props.data.travelers)}{" "}
                                <span className='text-gray-500 font-weight-light'>
                                    travelers
                                </span>
                            </h6>
                        </div>
                        <div className='col-auto text-center' style={{marginRight: 35}}>
                            <img 
                                width='36'
                                height='36'
                                src={IconTreasure}
                                alt={`${props.data.treasures} treasures`}
                            />
                            <h6 className='mt-3'>
                                {formatNumber(props.data.treasures)}{" "}
                                <span className='text-gray-500 font-weight-light'>
                                    treasures
                                </span>
                            </h6>
                        </div>
                        <div className='col-auto text-center'>
                            <img 
                                width='36'
                                height='36'
                                src={IconCities}
                                alt={`${props.data.cities} cities`}
                            />
                            <h6 className='mt-3'>
                                {formatNumber(props.data.cities)}{" "}
                                <span className='text-gray-500 font-weight-light'>
                                    cities
                                </span>
                            </h6>
                        </div>
                    </div>
                </div>

                <div className='col-6 pl-5'>
                    <div style={{ width: 520, height: 410 }}>
                        <img
                            src={ImageHero}
                            alt='Room with couches'
                            className='img-fluid position-absolute'
                            style={{margin: "-30px 0 0 -30px", zIndex: 1}}
                        />
                        <img
                            src={ImageHero_}
                            alt='Room with couches frame'
                            className='img-fluid position-absolute'
                            style={{margin: "0 -15px -15px 0"}}
                        />
                    </div>
                </div>
            </div>
            </Fade>
        </section>
    )
}
