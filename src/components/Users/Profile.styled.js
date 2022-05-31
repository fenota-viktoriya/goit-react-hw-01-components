import styled from '@emotion/styled';
import { theme } from 'styles-file';

export const CardProfile = styled.div`
  width: 250px;
  border: solid 1px ${theme.colors.gray};
  box-shadow: 5px 5px 11px -1px ${theme.colors.shadow};
  border-radius: 3px;
  padding-top: 20px;
  margin-bottom: 20px;
`;

export const WrapperDescription = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border: solid 1px ${theme.colors.gray};
  border-radius: 50px;
  box-shadow: 5px 5px 11px -1px ${theme.colors.shadow};
  padding: 3px;
  margin-bottom: 25px;
`;

export const Name = styled.p`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 700;
`;

export const Tag = styled.p`
  margin-bottom: 10px;
  color: ${theme.colors.gray};
`;

export const Location = styled.p`
  color: ${theme.colors.gray};
`;

export const StatsList = styled.ul`
  display: flex;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: solid 1px ${theme.colors.gray};
  box-shadow: 5px 5px 11px -1px ${theme.colors.shadow};
  width: 80px;
  padding: 8px;
  background-color: ${theme.colors.shadow};
`;

export const Quantity = styled.span`
  font-style: normal;
  font-size: 18px;
  font-weight: 700;
`;

export const Label = styled.span`
  color: ${theme.colors.gray};
`;
