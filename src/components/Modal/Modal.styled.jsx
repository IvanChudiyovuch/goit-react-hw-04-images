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
  background: rgba(0, 0, 0, 0.2);
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  //   width: 100%;
  min-height: 300px;
  min-width: 600px;
  transform: translate(-50%, -50%) rotate(0) scale(1);
  background: ${p => p.theme.colors.colorcell};
`;

export const ModalBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  padding: 0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${p => p.theme.colors.white};
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  cursor: pointer;

  &:hover,
  &:focus {
    fill: var(--accent-color);
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;
