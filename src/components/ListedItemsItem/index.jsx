import { NavLink } from "react-router-dom";

function ListedItemsItem({imgBig , imgSm , title , price , bid}){
  return(
    <div className="col-lg-3 col-sm-6 col-xs-12">
        <div className="pricing-item ">
            <div className="wraper">
                <NavLink to="/itemdetails"><img src={imgBig} alt="" /></NavLink>
                <NavLink to="/itemdetails"><h4>Scarecrow in daylight</h4></NavLink>
                <div className="owner-info">
                    <img src={imgSm} width="40" alt="" />
                    <NavLink to="profile.html"><h3>{title}</h3></NavLink>
                </div>
                <span><span className="g-text">Price</span> {price} ETH <span className="g-text ml-15">1 of 10</span></span> 
                <div className="pricing">Highest Bid : <span className="ml-15">{bid} ETH</span> </div> 
                <div className="admire">
                    <div className="adm"><i className="fa fa-clock-o"></i> 6 Hours Ago</div>
                    <div className="adm"><i className="fa fa-heart-o"></i>134 Like</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListedItemsItem