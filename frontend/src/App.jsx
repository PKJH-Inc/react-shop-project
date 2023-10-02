import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from '@mui/material';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container maxWidth="sm">
          <h1>Welcome to Ecommerce</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
