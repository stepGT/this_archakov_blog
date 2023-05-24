import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';

import styles from './Post.module.scss';
import { PostSkeleton } from './Skeleton';

type PostProps = {
  _id: number;
  title: string;
  imageUrl: string;
  user: object;
  createdAt: string;
  viewsCount: number;
  commentsCount: number;
  tags: string[];
  isEditable: boolean;
  isFullPost: boolean;
  isLoading: boolean;
  children?: ReactNode;
};

export const Post = ({ _id, title, imageUrl, isEditable, isFullPost, isLoading }: PostProps) => {
  if (isLoading) return <PostSkeleton />;

  return (
    <div className={clsx(styles.root, { [styles.rootFull]: isFullPost })}>
      {isEditable && (
        <div className={styles.editButtons}>
          <Link to={`/posts/${_id}/edit`}>
            <IconButton color="primary">
              <EditIcon />
            </IconButton>
          </Link>
          <IconButton onClick={() => {}} color="secondary">
            <DeleteIcon />
          </IconButton>
        </div>
      )}
      {imageUrl && (
        <img
          className={clsx(styles.image, { [styles.imageFull]: isFullPost })}
          src={imageUrl}
          alt={title}
        />
      )}
    </div>
  );
};
