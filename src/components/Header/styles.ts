import styled from 'styled-components';

export const Container = styled.header`
  z-index: 1;
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 auto;
  padding: 2rem 1rem 12rem;

  button {
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--blue-light);
    border-radius: 0.25rem;
    color: #fff;
    font-size: 1rem;
    font-weight: 600;
    padding: 0 2rem;
    height: 3rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
