import axios from '../services/axios';
import { Tabs, Tab, Grid } from '@mui/material';
import { Post } from '../components';
import { useEffect } from 'react';

export const Home = () => {
  useEffect(() => {
    axios.get('/posts');
  }, []);
  //
  return (
    <>
      <Tabs style={{ marginBottom: 15 }} value={0} aria-label="basic tabs example">
        <Tab label="Новые" />
        <Tab label="Популярные" />
      </Tabs>
      <Grid container spacing={4}>
        <Grid xs={8} item>
          {[...Array(5)].map((__, ind) => (
            <Post
              key={ind}
              _id={1}
              title="Roast the code #1 | Rock Paper Scissors"
              imageUrl="https://res.cloudinary.com/practicaldev/image/fetch/s--UnAfrEG8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/icohm5g0axh9wjmu4oc3.png"
              user={{
                avatarUrl:
                  'https://res.cloudinary.com/practicaldev/image/fetch/s--uigxYVRB--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/187971/a5359a24-b652-46be-8898-2c5df32aa6e0.png',
                fullName: 'Keff',
              }}
              createdAt={'12 июня 2023 г.'}
              viewsCount={150}
              commentsCount={3}
              tags={['react', 'es6', 'typescript']}
              isEditable={false}
              isFullPost={false}
              isLoading={false}
            />
          ))}
        </Grid>
      </Grid>
    </>
  );
};
