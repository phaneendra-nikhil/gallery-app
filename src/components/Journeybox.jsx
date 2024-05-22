import React from "react";

const Journeybox = () => {
  return (
    <>
      <div className="box-content">
        <div className="box">
          <div className="location-text">
            {/* <h2 className="title">
                        Location
                    </h2> */}
            <div className="input">
              <input type="text" className="from-input" placeholder="From" />
              <i class="uil uil-exchange-alt exchange"></i>
              <input type="text" className="to-input" placeholder="To" />
            </div>
          </div>
          <div className="time-text">
            <div className="input">
              <input type="date" placeholder="Depart"/>
              <input type="date" placeholder="Return"/>
            </div>
          </div>
          <div className="pass-text">
            <select>
                <option value="Economy">Economy</option>
                <option value="First Class">First Class</option>
                <option value="Business">Business</option>
            </select>

          </div>
          <button className="search-btn">Serach flights <i class="uil uil-plane-departure"></i></button>
        </div>
      </div>
    </>
  );
};

export default Journeybox;
