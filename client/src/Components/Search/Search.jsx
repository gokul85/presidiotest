import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { RxCalendar } from "react-icons/rx";



const Search = () => {
    return (
        <div className="search container section">
            <div className="sectionContainer grid">
                <div className="btns flex">
                    <div className="singleBtn"><span>Economy</span></div>
                    <div className="singleBtn"><span></span>Business Class</div>
                    <div className="singleBtn"><span>First Class</span></div>
                </div>
                <div className="searchInputs flex">
                    <div className="singleInput flex">
                        <div className="iconDiv">
                            <CiLocationOn className='icon' />
                        </div>
                        <div className="texts">
                            <h4>Location</h4>
                            <input type="text" placeholder='Destination' />
                        </div>
                    </div>
                    <div className="singleInput flex">
                        <div className="iconDiv">
                            <RiAccountPinCircleLine className='icon' />
                        </div>
                        <div className="texts">
                            <h4>Travelers</h4>
                            <input type="text" placeholder='Add guests' />
                        </div>
                    </div>
                    <div className="singleInput flex">
                        <div className="iconDiv">
                            <RxCalendar className='icon' />
                        </div>
                        <div className="texts">
                            <h4>Check In</h4>
                            <input type="text" placeholder='Add date' />
                        </div>
                    </div>
                    <div className="singleInput flex">
                        <div className="iconDiv">
                            <RxCalendar className='icon' />
                        </div>
                        <div className="texts">
                            <h4>Check Out</h4>
                            <input type="text" placeholder='Add date' />
                        </div>
                    </div>
                    <button className='btn btnBlock flex'>Search Flight</button>
                </div>
            </div>
        </div>
    )
}

export default Search