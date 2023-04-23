import PropTypes from 'prop-types';
import css from './Transaction.module.css';


export const TransactionHistory = ({ items }) => {
  return <table className={css.table}>
    <thead className={css.table_head}>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, type, amount, currency }) => {
        return <tr key={id} className={css.table_row}>
          <td className={css.table_sell}>{type}</td>
          <td className={css.table_sell}>{amount}</td>
          <td className={css.table_sell}>{currency}</td>
        </tr>
      })}
    </tbody>
  </table>
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  }))
}