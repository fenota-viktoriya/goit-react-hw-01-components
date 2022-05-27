import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
    return (<table className={`${s.transactionHistory}`}><thead>
   <tr>
          <th className={`${s.titleTable}`}> TYPE</th>
          <th className={`${s.titleTable}`}>AMOUNT</th>
          <th className={`${s.titleTable}`}>CURRENCY</th>
    </tr>
  {items.map(item=>
    <tr key={item.id}>
          <th> {item.type}</th>
          <th>{item.amount}</th>
          <th>{item.currency}</th>
    </tr>
  )}

</thead>
</table>)
};

TransactionHistory.propTypes = {
    items:PropTypes.array.isRequired,
}