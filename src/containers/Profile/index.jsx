import {useEffect} from "react";
import { NavLink } from "react-router-dom";
import {SortingCard} from '../../utils'
import CollectionItem from './CollectionItem'
import Breadcumb from '../../components/Breadcumb'
import {ProfileData} from '../../data/data-containers/data-Profile.js'

import '../../assets/css/profile.css'

const ProfileContainer = () => {

    useEffect(() => {
      SortingCard()
    },[])

  return (
    <>
		<Breadcumb  
		          namePage='Author Profile'
		          title='Author Profile'
		/>
		<section className="blog-area section-padding-100">
		    <div className="container">

		        <div className="row">

	                  <CollectionItem />

		            <div className="col-12 col-md-9">
		                
		                <div className="dream-projects-menu mb-50">
		                    <div className="text-center portfolio-menu">
		                        <button className="btn active" data-filter="*">All</button>
		                        <button className="btn" data-filter=".branding">Collectable</button>
		                        <button className="btn" data-filter=".design">Created</button>
		                        <button className="btn" data-filter=".development">On Auction</button>
		                    </div>
		                </div>
		                <div className="row">
		                    
		                    <div className="container">
		                        <div className="row dream-portfolio" data-aos="fade-up">

		                        	{ProfileData && ProfileData.map((item , i) => (

			                            <div className={`col-12 col-md-6 col-lg-4 single_gallery_item ${item.ClassChange}`}>
			                                <div className="pricing-item ">
			                                    <div className="wraper">
			                                        <NavLink to="/itemDetails"><img src={item.imgBig} alt="" /></NavLink>
			                                        <NavLink to="/itemDetails"><h4>Scarecrow in daylight</h4></NavLink>
			                                        <div className="owner-info">
			                                            <img src={item.imgSm} width="40" alt="" />
			                                            <a href="/profile"><h3>{item.title}</h3></a>
			                                        </div>
			                                        <span><span className="g-text">Price</span> {item.price} ETH <span className="g-text ml-15">1 of 10</span></span> 
			                                        <div className="pricing">Highest Bid : <span className="ml-15">{item.bid} ETH</span> </div> 
			                                        <div className="admire">
			                                            <div className="adm"><i className="fa fa-clock-o"></i>6 Hours Ago</div>
			                                            <div className="adm"><i className="fa fa-heart-o"></i>134 Like</div>
			                                        </div>
			                                    </div>
			                                </div>
			                            </div>

		                        	))}

		                        </div>


		                    </div>

	                        <div className="col-12 col-lg-12 text-center">
	                            <a className="btn more-btn" href="/discover">Load More</a>
	                        </div>
		                </div>
		            </div>

		            
		        </div>
		    </div>
		</section>
    </>
  );
}

export default ProfileContainer;