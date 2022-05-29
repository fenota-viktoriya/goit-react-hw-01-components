import PropTypes from 'prop-types';
import {
  TransactionHistoryTable,
  TableRow,
  TitleTable,
  HeadTable,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <TransactionHistoryTable>
      <thead>
        <TableRow>
          <TitleTable> TYPE</TitleTable>
          <TitleTable>AMOUNT</TitleTable>
          <TitleTable>CURRENCY</TitleTable>
        </TableRow>
        {items.map(({ id, type, amount, currency }) => (
          <TableRow key={id}>
            <HeadTable> {type}</HeadTable>
            <HeadTable>{amount}</HeadTable>
            <HeadTable>{currency}</HeadTable>
          </TableRow>
        ))}
      </thead>
    </TransactionHistoryTable>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
