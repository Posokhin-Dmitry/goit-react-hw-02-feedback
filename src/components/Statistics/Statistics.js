import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div>
    <p className={s.label}>
      Good:
      <span className={s.value}>{good}</span>
    </p>

    <p className={s.label}>
      Neutral:
      <span className={s.value}>{neutral}</span>
    </p>

    <p className={s.label}>
      Bad:
      <span className={s.value}>{bad}</span>
    </p>

    <p className={s.label}>
      Total:
      <span className={s.value}>{total}</span>
    </p>

    <p className={s.label}>
      Positive feedback:
      <span className={s.value}>{positivePercentage}%</span>
    </p>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
