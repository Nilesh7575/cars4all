import React from 'react'
import FilterCars from './car filter/FilterCars'
import CarProducts from './car products/CarProducts'
import './carlisting.css'





const CarListings = () => {
    return (
        <div className="carListings-div container-fluid">
            <div className="row">
                <FilterCars/>
                <CarProducts/>
            </div>
        </div>
    )
}

export default CarListings