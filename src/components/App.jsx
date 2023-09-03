import Profile from './Profile/Profile';
import Statistics from './Statistics/Statistics';
import Friends from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import user from 'components/Profile/user.json';
import data from 'components/Statistics/data.json';
import friends from 'components/FriendList/friends.json';
import Transactions from 'components/TransactionHistory/transactions.json';

const rootStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: '40px',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 40,
  color: '#010101',
};

export const App = () => {
  return (
    <div style={rootStyles}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title="Upload stats" stats={data} />
      <Friends friends={friends} />
      <TransactionHistory data={Transactions} />
    </div>
  );
};
