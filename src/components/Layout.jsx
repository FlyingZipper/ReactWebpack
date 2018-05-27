import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Container, Divider, Icon } from 'semantic-ui-react';

const Layout = ({ children }) => (
  <Container>
    <Link to='/'>
      <Header as='h2' className='title'>
        webpack-for-react
      </Header>
    </Link>
    {children}
    <Divider />
    <p>
      Made with <Icon name='heart' color='red' /> by Esau Silva
    </p>
  </Container>
);

export default Layout;
