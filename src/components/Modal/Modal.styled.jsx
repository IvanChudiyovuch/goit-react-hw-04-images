import styled from '@emotion/styled';

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),
    visibility 250ms cubic-bezier(0.4, 0, 0.2, 1);
  width: 100vw;
  height: 100vh;
  padding: ${p => p.theme.space[4]}px;
  background: ${p => p.theme.backgroundOverlay};
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  min-height: 300px;
  max-width: 500px;
  transform: translate(-50%, -50%) rotate(0) scale(1);
  background: ${p => p.theme.colors.colorcell};
`;

export const ModalImg = styled.img`
  width: 100%;
`;
