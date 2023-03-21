import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
`;

export const Item = styled.li`
  transition: transform 500ms;
  will-change: transform;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;

export const Thumb = styled.div`
  border-radius: 5px;
  overflow: hidden;
  width: 300px;
  height: 450px;
`;
