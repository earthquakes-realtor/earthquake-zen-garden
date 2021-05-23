import React, { FC, useState } from 'react';

import { Body, Cell, CellLink, Header, HeaderContainer, Row, Table } from './Grid.styled';
import { Direction, IGridProps } from './types';
import { isNumeric, numericSort, recursiveStringSort } from './utils';

const Grid: FC<IGridProps> = ({ columnDefs, rowData }) => {
  const [appliedSort, setAppliedSort] = useState({ direction: Direction.Asc, key: '' });
  if (!rowData?.length || !columnDefs?.length) return null;

  const handleSort = (key: string) => () => {
    const getNextDirection = (direction: Direction) => (direction === Direction.Asc ? Direction.Desc : Direction.Asc);
    setAppliedSort(({ direction }) => ({ key, direction: getNextDirection(direction) }));
  };

  const sortRowsByKey = () =>
    rowData.sort((a, b) => {
      const [aData, bData] = [a[appliedSort.key], b[appliedSort.key]];
      const sortDirection = appliedSort.direction;

      const isStringSort = typeof aData === 'string' && typeof bData === 'string';
      const isNumericSort = isNumeric(aData) && isNumeric(bData);

      if (isStringSort) return recursiveStringSort(aData, bData, sortDirection);
      if (isNumericSort) return numericSort(aData, bData, sortDirection);
      // If data is not number or string, keep in place
      return 0;
    });

  const rows = appliedSort.key ? sortRowsByKey() : rowData;

  // For a more complex Grid I would most likely break
  // header / body / cell into separate components
  return (
    <Table>
      <HeaderContainer>
        <Row>
          {columnDefs.map(({ title, sortable, key }) => (
            <Header key={key} $sortable={sortable} onClick={sortable ? handleSort(key) : undefined}>
              {title}
            </Header>
          ))}
        </Row>
      </HeaderContainer>
      <Body>
        {rows.map((row) => (
          <Row key={row.id}>
            {columnDefs.map(({ key, align, link, formatter }) => {
              const cellData = formatter instanceof Function ? formatter(row[key]) : row[key];
              return (
                <Cell key={key} $align={align}>
                  {link ? <CellLink to={`${link.path}/${row[link.paramKey]}`}>{cellData}</CellLink> : cellData}
                </Cell>
              );
            })}
          </Row>
        ))}
      </Body>
    </Table>
  );
};

export default Grid;
