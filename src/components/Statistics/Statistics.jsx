import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { getColor } from 'js/color-generator';

export const Statistics = ({ title, stats }) => {
  return <section className={css.statistics}>
    {title && (<h2 className={css.title}>{title}</h2>)}
    <ul className={css.statlist}>
      {stats.map(item => {
        return <li key={item.id} className={css.item} style={{backgroundColor : getColor()}}>
          <span className={css.label}>{item.label}</span>
          <span className={css.percentage}>{item.percentage + '%'}</span>
        </li>
      })}
    </ul>
  </section>
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  })),
}