import styled from 'styled-components';

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  grid-row-gap: 0.3rem;
  grid-column-gap: 2.5rem;
`;

export const Description = styled.p`
  font-weight: 600;
`;

export const Data = styled.p`
  line-height: 1.35;
`;
