import Statistics from '../Statistics/Statistics';
import data from 'data-files/data.json';
import FriendList from '../FriendList/FriendList';
import friends from 'data-files/friends.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from 'data-files/transactions.json';
import getRandomColor from 'helper/getColor';
import { Container } from './App.styled';
import Profile from '../Users/Profile';
import user from 'data-files/user.json';

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
