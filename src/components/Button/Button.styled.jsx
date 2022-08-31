import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const Btn = styled.button`
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
