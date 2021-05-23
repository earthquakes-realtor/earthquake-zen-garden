import React from 'react';

import dayjs from 'dayjs';
import { useParams } from 'react-router-dom';

import { DetailsList } from '../../components';
import { useDataContext } from '../../context';
import { DATE_FORMAT } from '../../utils';

import { Header, Wrapper } from './Details.styled';

const detailsSchema = [
  { description: 'Title', key: 'title' },
  { description: 'Magnitude', key: 'mag' },
  { description: 'Time', key: 'time', formatter: (data: number) => dayjs(data).format(DATE_FORMAT) },
  { description: 'Status', key: 'status' },
  { description: 'Tsunami', key: 'tsunami' },
  { description: 'Type', key: 'type' },
];

const Details = () => {
  const { id } = useParams();

  const { earthquakeMap, loading } = useDataContext();

  if (!earthquakeMap || loading) return null;

  const details = earthquakeMap[id];

  return (
    <Wrapper>
      <Header>{details.title}</Header>
      <DetailsList schema={detailsSchema} data={details} />
    </Wrapper>
  );
};

export default Details;
