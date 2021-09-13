import { NavLink } from "react-router-dom";

function TopCollectionsItem({img , title , text , Delay}){
  return(
    <div className="col-12 col-md-6 col-lg-3">
        <NavLink to='/discover' className="service_single_content collection-item" data-aos-delay={Delay} data-aos="fade-up">
            <div className="collection_icon">
                <img src={img} alt="" />
            </div>
            <div className="collection_info">
                <h6>{title}</h6>
                <p>Owner : <span className="w-text">{text}</span></p>
            </div>
            
        </NavLink>
    </div>
  )
}

export default TopCollectionsItem