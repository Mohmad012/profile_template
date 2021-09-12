import Head from '../../layouts/Head';
import ItemDetailsContainer from '../../containers/ItemDetails';
import Footer from '../../layouts/Footer';

// import '../../assets/css/itemDetails.css'

const ItemDetails = () => {

  return (
    <>
      <Head Title='Item Details' />
      <ItemDetailsContainer />
      <Footer />
    </>
  );
}

export default ItemDetails;

