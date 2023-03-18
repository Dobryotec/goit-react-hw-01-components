import { CiCircleCheck } from 'react-icons/ci';
import css from './Friend.module.css';
import PropTypes from 'prop-types';
const colorOnline = {
  color: 'green',
};
const colorOffline = {
  color: 'red',
};
const Friend = ({ name, avatar, status }) => {
  const colorStyle = status ? colorOnline : colorOffline;
  return (
    <li className={css.item}>
      <span className={css.status} style={colorStyle}>
        <CiCircleCheck />
      </span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </li>
  );
};

export default Friend;

Friend.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
