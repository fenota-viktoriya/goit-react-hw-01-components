import styled from '@emotion/styled';
import { theme } from 'styles';

export const TransactionHistoryTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;
export const TableRow = styled.tr`
  height: 40px;
  width: 100px;
  border: ${theme.border.transactionBorder};
  border-radius: 3px;
`;

export const TitleTable = styled.th`
  background-color: ${theme.colors.shadow};
  color: ${theme.colors.dark};
  border: ${theme.border.transactionBorder};
`;

export const HeadTable = styled.th`
  color: ${theme.colors.gray};
  border: ${theme.border.transactionBorder};
`;
