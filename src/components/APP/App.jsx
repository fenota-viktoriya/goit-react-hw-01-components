import user from 'Data/user.json';
import Profile from '../Users/Profile';
import Statistics from '../Statistics/Statistics';
import data from 'Data/data.json';
import FriendList from '../FriendList/FriendList';
import friends from 'Data/friends.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactions from 'Data/transactions.json';
import getRandomColor from 'Helpers/getColor';
import { Container } from './App.staled';

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
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Container>
  );
};
