import { ReactNode, Fragment } from 'react';
import { SideBlock } from '../SideBlock';
import {
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Divider,
  List,
  Skeleton,
} from '@mui/material';
import styles from './CommentsBlock.module.scss';

interface ICommentsBlock {
  user: {
    fullName: string;
    avatarUrl: string;
  };
  text: string;
}

type TCommentsBlockProps = {
  items: ICommentsBlock[];
  children?: ReactNode;
  isLoading: boolean;
};

export const CommentsBlock = ({ items, children, isLoading }: TCommentsBlockProps) => {
  return (
    <SideBlock title="Комментарии">
      <List>
        {(isLoading ? [...Array(5)] : items).map((obj, index) => (
          <Fragment key={index}>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                {isLoading ? (
                  <Skeleton variant="circular" className={styles.skeleton} />
                ) : (
                  <Avatar alt={obj.user.fullName} src={obj.user.avatarUrl} />
                )}
              </ListItemAvatar>
              {isLoading ? (
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <Skeleton variant="text" height={25} width={120} />
                  <Skeleton variant="text" height={18} width={230} />
                </div>
              ) : (
                <ListItemText primary={obj.user.fullName} secondary={obj.text} />
              )}
            </ListItem>
            <Divider variant="inset" component="li" />
          </Fragment>
        ))}
      </List>
      {children}
    </SideBlock>
  );
};
