import Container from '@mui/material/Container';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { Home, FullPost } from './pages';

const App = () => {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<FullPost />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
