import Friend from './Friend';
import css from './FriendList.module.css';
import PropTypes from 'prop-types';

const Friends = ({ friends }) => {
  return (
    <ul className={css['friend-list']}>
      {friends.map(({ avatar, name, id, isOnline }) => {
        return (
          <Friend key={id} name={name} avatar={avatar} status={isOnline} />
        );
      })}
    </ul>
  );
};

export default Friends;

Friends.propTypes = {
  id: PropTypes.number.isRequired,
};
