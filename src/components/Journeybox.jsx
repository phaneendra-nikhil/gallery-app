import React from "react";
import DropdownList from "react-widgets/DropdownList";
import "react-widgets/styles.css";

const Journeybox = () => {
    return (
        <>
            <div className="box-content">
                <div className="box">
                    <div className="location-text">
                        <div className="input">
                            <div className="from">
                                <label htmlFor="from">From</label>
                                <DropdownList
                                    defaultValue="Select"
                                    data={[
                                        "Select",
                                        "Hyderabad(HYD)",
                                        "Banglaore(BLR)",
                                        "Mumbai(BOM)",
                                        "Delhi(DEL)",
                                        "Pune(PNQ)",
                                        "Chennai(MAA)",
                                        "Ahmedabad(AMD)",
                                        "Kolkata(CCU)",
                                        "Jaipur(JAI)",
                                        "Lucknow(LKO)",
                                    ]}
                                    style={{ width: "200px" }}
                                />
                            </div>
                            <i class="uil uil-exchange-alt exchange"></i>
                            <div className="to">
                                <label htmlFor="to">To</label>
                                <DropdownList
                                    defaultValue="Select"
                                    data={[
                                        "Select",
                                        "Hyderabad(HYD)",
                                        "Banglaore(BLR)",
                                        "Mumbai(BOM)",
                                        "Delhi(DEL)",
                                        "Pune(PNQ)",
                                        "Chennai(MAA)",
                                        "Ahmedabad(AMD)",
                                        "Kolkata(CCU)",
                                        "Jaipur(JAI)",
                                        "Lucknow(LKO)",
                                    ]}
                                    style={{
                                        width: "200px",
                                    }}
                                />
                            </div>
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
                        <DropdownList
                            defaultValue="Select"
                            data={[
                                "Select",
                                "First Class",
                                "Business",
                                "Economy",
                            ]}
                            style={{
                                width: "150px",
                            }}
                        />
                    </div>
                    <button className="search-btn">Search</button>
                </div>
            </div>
        </>
    );
};

export default Journeybox;
