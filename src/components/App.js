import user from './Profile/user.json';
import Profile from './Profile/Profile';
import css from './App.module.css';
import data from './Statistics/data.json';
import Statistics from './Statistics/Statistics';
import friends from './FriendList/friends.json';
import Friends from './FriendList/Friendlist';
import transactions from './TransactionHistory/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div className={css.container}>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <Friends friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
