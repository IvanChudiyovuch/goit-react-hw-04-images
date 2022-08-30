import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  justify-content: center;
  align-items: centr;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style-type: none;
  gap: ${p => p.theme.space[3]}px;
`;

export const ListItem = styled.li`
  flex-basis: calc((100% - 120px) / 4);
  padding: ${p => p.theme.space[2]}px;
  flex-wrap: wrap;
  object-fit: cover;
`;

export const ListImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Button = styled.button`
  margin-top: ${p => p.theme.space[3]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
  padding: ${p => p.theme.space[1]}px;
  border: 1px solid ${p => p.theme.colors.secondary};
  border-radius: ${p => p.theme.radii.normal};
  text-align: center;
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.bold};
  background: ${p => p.theme.colors.accent};
  border: 1px solid rgba(0, 0, 0, 0.1);
  cursor: pointer;
`;
