import { useSelector } from 'react-redux';
import { Tabs, Tab, Grid } from '@mui/material';
import { Post } from '../components';
import { useEffect } from 'react';
import { fetchPosts } from '../redux/features/post/slice';
import { useAppDispatch } from '../redux/store';
import { selectorPosts } from '../redux/features/post/selectors';
import { selectorTags } from '../redux/features/tags/selectors';
import { fetchTags } from '../redux/features/tags/slice';
import { TagsBlock } from '../components/TagsBlock';

export const Home = () => {
  const dispatch = useAppDispatch();
  const { items, status } = useSelector(selectorPosts);
  const { items: tags, status: tagsStatus } = useSelector(selectorTags);
  const isPostsLoading = status === 'pending';
  const isTagsLoading = tagsStatus === 'pending';
  useEffect(() => {
    dispatch(fetchPosts());
    dispatch(fetchTags());
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
          {(isPostsLoading ? [...Array(5)] : items).map((el, ind) =>
            isPostsLoading ? (
              // @ts-ignore
              <Post key={ind} isLoading={true} />
            ) : (
              <Post
                key={ind}
                _id={el._id}
                title={el.title}
                imageUrl={el.imageUrl ? `http://localhost:4444${el.imageUrl}` : ''}
                user={el.user}
                createdAt={el.createdAt}
                viewsCount={el.viewsCount}
                commentsCount={3}
                tags={el.tags}
                isEditable={true}
                isFullPost={false}
                isLoading={false}
              />
            ),
          )}
        </Grid>
        <Grid xs={4} item>
          <TagsBlock items={tags} isLoading={isTagsLoading} />
        </Grid>
      </Grid>
    </>
  );
};
