import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Post, PostProps } from '../components/Post';
import axios from '../services/axios';
import ReactMarkdown from 'react-markdown';

export const FullPost = () => {
  const [data, setData] = useState<PostProps>();
  const [isLoading, setLoading] = useState(false);
  const { id } = useParams();
  //
  useEffect(() => {
    axios
      .get(`/posts/${id}`)
      .then((res: any) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err: any) => {
        console.warn(err);
        alert('Ошибка при получении статьи');
      });
  }, []);

  return (
    <>
      {data && (
        <Post
          _id={data._id}
          title={data.title}
          imageUrl={data.imageUrl ? `${location.protocol}//${location.hostname}:4444${data.imageUrl}` : ''}
          user={data.user}
          createdAt={data.createdAt}
          viewsCount={data.viewsCount}
          commentsCount={data.commentsCount}
          tags={data.tags}
          isEditable={false}
          isFullPost={true}
          isLoading={isLoading}
          text={data.text}>
          <ReactMarkdown children={data.text} />
        </Post>
      )}
    </>
  );
};
