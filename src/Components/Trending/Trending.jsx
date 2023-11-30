import React from 'react'
import './Trending.css'
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";

import car1 from '../../Assets/car1.png'
import car2 from '../../Assets/car2.png'
import car3 from '../../Assets/car3.png'
const Trending = () => {
  return (
    <div className="trending section">

      <div className="secContainer container">

        <div className="secHeading flex">

          <h3 className="secTitle">
            Trending Near You
          </h3>

          <div className="navBtns flex">
            <BsArrowLeftShort className='icon leftIcon'/>
            <BsArrowRightShort className='icon rightIcon'/>
          </div>

        </div>

        <div className="carContainer grid">
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={car1} alt="" className="Car Image" />
            </div>
            <h5 className="carTitle">
              Used 2019 Audi S4 Premium Plus
            </h5>
            <span className="miles">
              11457 Miles
            </span>
            <span className="AWD">
              AWD 4- Cylinder Turbo
            </span>

            <div className="price_seller flex">
              <span className="price">
                $41,200
              </span>
              <span className="seller">
                Best Seller
              </span>
            </div>
          </div>
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={car3} alt="" className="Car Image" />
            </div>
            <h5 className="carTitle">
              Used 2019 Audi S4 Premium Plus
            </h5>
            <span className="miles">
              11457 Miles
            </span>
            <span className="AWD">
              AWD 4- Cylinder Turbo
            </span>

            <div className="price_seller flex">
              <span className="price">
                $41,200
              </span>
              <span className="seller">
                Best Seller
              </span>
            </div>
          </div>
          <div className="singleCar grid">
            <div className="imgDiv">
              <img src={car2} alt="" className="Car Image" />
            </div>
            <h5 className="carTitle">
              Used 2019 Audi S4 Premium Plus
            </h5>
            <span className="miles">
              11457 Miles
            </span>
            <span className="AWD">
              AWD 4- Cylinder Turbo
            </span>

            <div className="price_seller flex">
              <span className="price">
                $41,200
              </span>
              <span className="seller">
                Best Seller
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trending