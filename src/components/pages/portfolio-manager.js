import React, { Component } from 'react';

export default class PortfolioManager extends Component {
    render() {
        return (
            <div className="portfolio-manager-wrapper">
                <div className="left-side">
                <form>



                    <div className="dataUpload">


                        <div className="half-width row1">
                    <input type="text" placeholder="Portfolio Item Name" />
                    <input type="text" placeholder="URL"  />
                    </div>

                    <div className="half-width row2">
                    <input type="text" placeholder="Position" />
                    <input type="" />
                    </div>



                    <div className="full-width row3">
                    <input type="text" placeholder="Description" />
                    </div>

                    </div>




                    <div className="imageUpload">
                        <input/>
                        <input/>
                        <input/>
                    </div>


                    <input type="submit" placeholder="Save"/>


                </form>


                </div>

                <div className="right-side">
                    <h2> Sidebar</h2>
                </div>
            </div>
        );
    }
}