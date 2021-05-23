import React from 'react';

import dayjs from 'dayjs';

import { Grid } from '../../components';
import { useDataContext } from '../../context';
import { DATE_FORMAT, routes } from '../../utils';

import { Header, Wrapper } from './Home.styled';

const columnDefs = [
  {
    title: 'Title',
    key: 'title',
    link: {
      paramKey: 'id',
      path: routes.earthquake,
    },
    sortable: true,
  },
  { title: 'Magnitude', key: 'mag', align: 'center', sortable: true },
  {
    title: 'Time',
    key: 'time',
    // considered using native Date.getFullYear() etc... but dayjs is just 2.8kb :)
    formatter: (data: number) => dayjs(data).format(DATE_FORMAT),
    sortable: true,
  },
];

const Home = () => {
  const { geoEventTitle, earthquakes } = useDataContext();

  return (
    <Wrapper>
      <Header>{geoEventTitle}</Header>
      <Grid columnDefs={columnDefs} rowData={earthquakes} />
    </Wrapper>
  );
};

export default Home;
