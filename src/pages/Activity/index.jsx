import Head from '../../layouts/Head';
import ActivityContainer from '../../containers/Activity';
import Footer from '../../layouts/Footer';

// import '../../assets/css/activity.css'
// import './activity.css'

const Activity = () => {

  return (
    <>
      <Head Title='Activity' />
      <ActivityContainer />
      <Footer />
    </>
  );
}

export default Activity;