import React, { FC, Fragment } from 'react';

import { Data, Description, GridWrapper } from './DetailsList.styled';
import { IDetailsListProps } from './types';

const DetailsList: FC<IDetailsListProps> = ({ schema, data }) => (
  <GridWrapper>
    {schema.map(({ description, key, formatter }) => {
      const displayData = formatter ? formatter(data[key]) : data[key];
      return (
        // Using long form <Fragment /> to pass in "key"
        <Fragment key={key}>
          <Description>{description}</Description>
          <Data>{displayData}</Data>
        </Fragment>
      );
    })}
  </GridWrapper>
);

export default DetailsList;
