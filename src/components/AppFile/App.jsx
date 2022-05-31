import Profile from '../Users/Profile';
import user from 'data/user.json';
import Statistics from '../Statistics/Statistics';
import data from 'data/data.json';
import FriendList from '../FriendList/FriendList';
import friends from 'data/friends.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from 'data/transactions.json';
import getRandomColor from 'helpers/getColor';
import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} fn={getRandomColor} />
      <Statistics stats={data} fn={getRandomColor} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
