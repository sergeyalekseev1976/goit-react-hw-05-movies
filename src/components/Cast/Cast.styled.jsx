import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Item = styled.li`
  border-radius: 5px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  text-align: center;
`;

export const Thumb = styled.div`
  border-radius: 5px;
  overflow: hidden;
  width: 150px;
  height: 150px;
`;

export const Wrapper = styled.div`
  padding: 4px;
  width: 142px;
`;

export const Title = styled.h2`
  font-size: 12px;
  margin-bottom: 4px;
`;

export const SubTitle = styled.p`
  font-size: 12px;
`;
