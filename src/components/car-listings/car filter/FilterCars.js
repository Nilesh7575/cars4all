import { Divider } from '@material-ui/core'
import React from 'react'
import './filtercar.css'




const FilterCars = () => {
    return (
        <div className="col-lg-3 d-none d-lg-block">
            <div className="CarListings_filter mb-5">
                <div className="text-left px-3 py-2">
                    <div className="Filter_title">
                        <span>Search by Make or Model</span>
                    </div>
                    <div className="d-block">
                        <div className="undefined Filter_search__2CSw7">
                            <input type="text" className="form-control mb-3 mt-2" placeholder="Type to Search ..." />
                        </div>
                        <div style={{ maxHeight: "100px", overflowY: "scroll" }}>
                            <label className="Filter_containers">
                                Maruti Suzuki Swift
                                <input type="checkbox" /><span className="Filter_checkmark"></span>
                            </label>
                            <label className="Filter_containers">
                                Maruti Suzuki Swift
                                <input type="checkbox" /><span className="Filter_checkmark"></span>
                            </label>
                            <label className="Filter_containers">
                                Maruti Suzuki Swift
                                <input type="checkbox" /><span className="Filter_checkmark"></span>
                            </label>
                            <label className="Filter_containers">
                                Maruti Suzuki Swift
                                <input type="checkbox" /><span className="Filter_checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <div className="Filter_title mt-3">
                        <span>Search by fuel type</span>
                    </div>
                    <div className="d-block">

                        <div style={{ maxHeight: "100px", overflowY: "scroll" }}>
                            <label className="Filter_containers">
                                Diesel
                                <input type="checkbox" /><span className="Filter_checkmark"></span>
                            </label>
                            <label className="Filter_containers">
                                Petrol
                                <input type="checkbox" /><span className="Filter_checkmark"></span>
                            </label>
                            <label className="Filter_containers">
                                CNG
                                <input type="checkbox" /><span className="Filter_checkmark"></span>
                            </label>
                            <label className="Filter_containers">
                                LPG
                                <input type="checkbox" /><span className="Filter_checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <div className="Filter_title mt-3">
                        <span>Search by price range</span>
                    </div>
                    <div className="d-block">
                        <div style={{ maxHeight: "100px", overflowY: "scroll" }}>
                            <label className="Filter_containers">
                                Rs0 - Rs1,50,000
                                <input type="checkbox" /><span className="Filter_checkmark"></span>
                            </label>
                            <label className="Filter_containers">
                            Rs1,50,001 - Rs3,00,000
                                <input type="checkbox" /><span className="Filter_checkmark"></span>
                            </label>
                            <label className="Filter_containers">
                            Rs3,00,001 - Rs5,00,000
                                <input type="checkbox" /><span className="Filter_checkmark"></span>
                            </label>
                            <label className="Filter_containers">
                            Rs5,00,001 - Rs7,00,000
                                <input type="checkbox" /><span className="Filter_checkmark"></span>
                            </label>
                        </div>
                    </div>
                    <div className="Filter_title mt-3">
                        <span>Search by number of owners</span>
                    </div>
                    <div className="d-block">
                        <div style={{ maxHeight: "100px", overflowY: "scroll" }}>
                            <label className="Filter_containers">
                                1
                                <input type="checkbox" /><span className="Filter_checkmark"></span>
                            </label>
                            <label className="Filter_containers">
                                2
                                <input type="checkbox" /><span className="Filter_checkmark"></span>
                            </label>
                            <label className="Filter_containers">
                                3
                                <input type="checkbox" /><span className="Filter_checkmark"></span>
                            </label>
                            <label className="Filter_containers">
                                4 and above
                                <input type="checkbox" /><span className="Filter_checkmark"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterCars