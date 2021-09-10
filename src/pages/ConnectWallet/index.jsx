import Head from '../../layouts/Head';
import ConnectWalletContainer from '../../containers/ConnectWallet';
import Footer from '../../layouts/Footer';

const ConnectWallet = () => {

  return (
    <>
      	<Head Title='Wallet Connect' />
      	<ConnectWalletContainer />
    	<Footer />
    </>
  );
}

export default ConnectWallet;

