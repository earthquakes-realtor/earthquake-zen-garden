import React from 'react';

import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Layout, Nav } from './components';
import { DataProvider } from './context';
import { Details, Home, Profile } from './pages';
import { theme } from './theme';

export const App = () => (
  <ThemeProvider theme={theme}>
    <DataProvider>
      <Router>
        <Layout>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/earthquake/:id" element={<Details />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
      </Router>
    </DataProvider>
  </ThemeProvider>
);
