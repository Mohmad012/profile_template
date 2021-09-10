import Breadcumb from '../../components/Breadcumb'
import TimelineBox from './TimelineBox'
import SidebarAreaContainer from './SidebarArea'
import '../../assets/css/activity.css'

const ActivityContainer = () => {

  return (
    <>
      <Breadcumb  
                  namePage='Activity'
                  title='Activity'
      />
      <section className="blog-area section-padding-100">
          <div className="container">
  		      <div className="row">
  		          <TimelineBox />
  		          <SidebarAreaContainer />
  		      </div>
          </div>
      </section>
    </>
  );
}

export default ActivityContainer;