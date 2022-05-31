import styled from '@emotion/styled';
import { theme } from 'styles-file';

export const FriendsList = styled.ul`
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0;
  margin-bottom: 20px;
`;
export const FriendItem = styled.li`
  gap: 10px;
  width: 150px;
  height: 50px;
  display: flex;
  border: solid 1px ${theme.colors.grey};
  border-radius: 5px;
  box-shadow: 5px 5px 11px -1px ${theme.colors.shadow};
  padding: 5px;
`;
export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ status }) => {
    switch (status) {
      case true:
        return `${theme.colors.green}`;
      case false:
        return `${theme.colors.red}`;
      default:
        return `${theme.colors.dark}`;
    }
  }};
`;
