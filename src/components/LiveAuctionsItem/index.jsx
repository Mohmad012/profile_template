import { NavLink } from "react-router-dom";


function LiveAuctionsItem({imgBig , imgSm , title , text}){
  return(
    <div className="col-lg-3 col-sm-6 col-xs-12">
        <div className="pricing-item ">
            <div className="wraper">
                <NavLink to="/itemdetails"><img src={imgBig} alt="" /></NavLink>
                <NavLink to="/itemdetails"><h4>{text}</h4></NavLink>
                <div className="owner-info">
                    <img src={imgSm} width="40" alt="" />
                    <NavLink to="/profile"><h3>{title}</h3></NavLink>
                </div>
                <span><span className="g-text">Price</span> 0.081 ETH <span className="g-text ml-15">1 of 10</span></span> 
                <div className="count-down titled circled text-center">
                    <div className="simple_timer"></div>
                    <div className="admire">
                      <NavLink className="btn more-btn w-100 text-center my-0 mx-auto " to="/itemdetails">Place Bid</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LiveAuctionsItem