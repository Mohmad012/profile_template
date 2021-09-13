import Head from '../../layouts/Head';
import ProfileContainer from '../../containers/Profile';
import Footer from '../../layouts/Footer';

// import '../../assets/css/profile.css'

const Profile = () => {

  return (
    <>
		<Head Title='Author Profile' />
		<ProfileContainer />
		<Footer />
    </>
  );
}

export default Profile;