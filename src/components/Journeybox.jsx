import React from "react";

const Journeybox = () => {
    return (
        <>
            <div className="box-content">
                <div className="box">
                    <div className="location-text">
                        <div className="input">
                            <input
                                type="text"
                                className="from-input"
                                placeholder="From"
                            />
                            <i class="uil uil-exchange-alt exchange"></i>
                            <input
                                type="text"
                                className="to-input"
                                placeholder="To"
                            />
                        </div>
                    </div>
                    <div className="time-text">
                        <div className="input">
                            <div className="depart">
                                <label htmlFor="Depart">Departure</label>
                                <input type="date" placeholder="Depart" />
                            </div>
                            <div className="return">
                                <label htmlFor="Return Date">Arrival</label>
                                <input type="date" placeholder="Return" />
                            </div>
                        </div>
                    </div>
                    <div className="pass-text">
                        <select>
                            <option value="First Class">First Class</option>
                            <option value="Business">Business</option>
                            <option value="Economy">Economy</option>
                        </select>
                    </div>
                    <button className="search-btn">Search</button>
                </div>
            </div>
        </>
    );
};

export default Journeybox;
