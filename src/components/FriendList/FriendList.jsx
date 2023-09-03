import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import css from './FriendList.module.css';

const Friends = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      <FriendListItem friends={friends} />
    </ul>
  );
};
Friends.propTypes = {
  friends: PropTypes.array,
};

export default Friends;
