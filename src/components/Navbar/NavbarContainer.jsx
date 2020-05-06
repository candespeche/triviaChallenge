import React from 'react';
import Navbar from './Navbar';
import {connect} from 'react-redux';

const NavbarContainer = ({navigation, cancel = false}) => {
  return <Navbar navigation={navigation} cancel={cancel} />;
};

export default connect(null, null)(NavbarContainer);
