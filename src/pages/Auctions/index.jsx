import Head from '../../layouts/Head';
import AuctionsContainer from '../../containers/Auctions';
import Footer from '../../layouts/Footer';
function Auctions(){

  return(
    <>
      <Head Title='Auctions' />
      <AuctionsContainer />
      <Footer />
    </>
  )
}

export default Auctions