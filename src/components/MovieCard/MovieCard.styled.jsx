import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  gap: 60px;
  text-align: left;
`;

export const Thumb = styled.div`
  border-radius: 5px;
  overflow: hidden;
  width: 400px;
  height: 550px;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 500px;
`;

export const Link = styled(NavLink)`
  color: black;
  font-weight: 500;
  &.active {
    color: orangered;
  }
`;

export const Score = styled.span`
  display: inline-block;
  padding: 2px;
  color: white;
  background-color: orangered;
  border-radius: 5px;
`;
