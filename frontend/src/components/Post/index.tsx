import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Clear';
import EditIcon from '@mui/icons-material/Edit';
import CommentIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import EyeIcon from '@mui/icons-material/RemoveRedEyeOutlined';

import styles from './Post.module.scss';
import { PostSkeleton } from './Skeleton';
import { UserInfo } from '../UserInfo';

export type PostProps = {
  _id: number;
  title: string;
  text: string;
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

export const Post = ({
  _id,
  title,
  imageUrl,
  viewsCount,
  commentsCount,
  isEditable,
  isFullPost,
  isLoading,
  children,
  user,
  createdAt,
}: PostProps) => {
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
      <div className={styles.wrapper}>
        <UserInfo {...user} additionalText={createdAt} />
        <div className={styles.indention}>
          <h2 className={clsx(styles.title, { [styles.titleFull]: isFullPost })}>
            {isFullPost ? title : <Link to={`/posts/${_id}`}>{title}</Link>}
          </h2>

          {children && <div className={styles.content}>{children}</div>}

          <ul className={styles.postDetails}>
            <li>
              <EyeIcon />
              <span>{viewsCount}</span>
            </li>
            <li>
              <CommentIcon />
              <span>{commentsCount}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
