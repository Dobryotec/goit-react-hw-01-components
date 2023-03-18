import css from './Statistic.module.css';
import { getRandomColor } from '../utils/FunctionRandomColor';
import PropTypes from 'prop-types';

const randomColor = {
  backgroundColor: getRandomColor(),
};

const Statistic = ({ label, percentage }) => {
  return (
    <li className={css.item} style={randomColor}>
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage + '%'} </span>
    </li>
  );
};

export default Statistic;

Statistic.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
