import PrimarySearchAppBar from '../../../components/common/navBar';
import Footer from '../../../components/common/footer';

export const Home = () => {
  return (
    <>
      <header>
        <PrimarySearchAppBar />
      </header>
      <main>
        <div class="exemplo">hello world</div>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};
