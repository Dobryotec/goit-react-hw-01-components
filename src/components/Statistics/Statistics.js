import Statistic from './Statistic';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <section className={css.section}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css['stat-list']}>
        {stats.map(({ id, label, percentage }) => {
          return <Statistic key={id} label={label} percentage={percentage} />;
        })}
      </ul>
    </section>
  );
};

export default Statistics;

Statistics.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
};
