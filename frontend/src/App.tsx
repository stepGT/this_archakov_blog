import { useEffect } from 'react';
import { useAppDispatch } from './redux/store';
import { fetchAuthMe } from './redux/features/auth/slice';

import Container from '@mui/material/Container';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components';
import { Home, FullPost, AddPost, Login, Registration } from './pages';

const App = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<FullPost />} />
          <Route path="/add-post" element={<AddPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
