import PrimarySearchAppBar from '../../../components/common/navBar';
import Footer from '../../../components/common/footer';
import Banner from '../../../components/common/banner';
import ProductforYou from '../../../components/common/product_for_you';
import Carousel from '../../../components/common/carousel';
import Product from '../../../components/common/product';
export const Home = () => {
  return (
    <>
      <header>
        <PrimarySearchAppBar />
      </header>
      <main>
        <div style={{ marginTop: '90px' }}>
          <Banner />
        </div>
        <div style={{ marginTop: '70px' }}>
          <ProductforYou />
        </div>
        <div style={{ marginTop: '10px', marginBottom: '50px' }}>
          <Carousel />
        </div>
        <div style={{ marginTop: '10px', marginBottom: '50px' }}>
          <Product />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};
