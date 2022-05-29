import PropTypes from 'prop-types';
import { FriendsList, FriendItem, Status } from './FriendList.styled';

export default function FriendList({ friends }) {
  return (
    <FriendsList>
      {friends.map(({ id, isOnline, avatar, name }) => (
        <FriendItem key={id}>
          <Status status={isOnline}></Status>
          <img src={avatar} alt="User avatar" width="48" />
          <p>{name}</p>
        </FriendItem>
      ))}
    </FriendsList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.array.isRequired,
};
