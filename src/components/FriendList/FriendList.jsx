import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export default function FriendList({friends}) {
    return (<ul className={`${s.friendList}`}>
       {friends.map(friend=>(<li className={`${s.friendItem}`} key={friend.id}>
           <span className="status">{friend.isOnline}</span>
  <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
           <p className="name">{friend.name}</p>
</li>))} 
    </ul>)
};

FriendList.propTypes = {
    friends: PropTypes.array.isRequired,

}