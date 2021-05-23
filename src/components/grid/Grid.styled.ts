import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

export const Table = styled.table``;

export const HeaderContainer = styled.thead``;

export const Row = styled.tr``;

export const Header = styled.th<{ $sortable?: boolean }>`
  padding: 0.75rem;
  font-weight: unset;
  cursor: ${(p) => (p.$sortable ? 'pointer' : 'default')};
`;

export const Body = styled.tbody``;

export const Cell = styled.td<{ $align?: string }>`
  ${(p) =>
    p.$align &&
    css`
      text-align: ${p.$align};
    `}
  padding: 0.2rem;
`;

export const CellLink = styled(Link)`
  &:visited {
    color: ${(p) => p.theme.secondary};
  }
  color: color: ${(p) => p.theme.primary};
`;
