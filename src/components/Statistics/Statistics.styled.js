import styled from '@emotion/styled';
import { theme } from 'Styles';

export const StatisticsSection = styled.section`
  padding-top: 35px;
  width: 350px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  border: solid 1px #afb3c0;
  border-radius: 3px;
  box-shadow: 5px 5px 11px -1px ${theme.colors.shadow};
`;

export const Title = styled.h2`
  font-size: 20px;
  text-transform: uppercase;
  color: ${theme.colors.darkGray};
`;

export const StatList = styled.ul`
  display: flex;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;
  height: 60px;
  width: 70px;
  color: ${theme.colors.light};
  justify-content: center;
  align-items: center;
`;
