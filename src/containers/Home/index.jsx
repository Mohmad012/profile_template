import HeroContainer from './Hero'
import TopSellers from '../../components/TopSellers'
import TopCollections from '../../components/TopCollections'
import ListedItems from '../../components/ListedItems'
import LiveAuctions from '../../components/LiveAuctions'

import '../../assets/css/home.css'

const HomeContainer = () => {

  return (
  	<>
	    <HeroContainer />
		<TopSellers />
		<TopCollections />
		<ListedItems />
		<LiveAuctions />

    </>
  );
}

export default HomeContainer;