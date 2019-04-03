/**
 *
 * NavigationBar
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import NavBar from 'components/Header/NavBar';
import HeaderLink from 'components/Header/HeaderLink';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
class NavigationBar extends React.Component {
  render() {
    return (
      <div>
        <NavBar>
          <HeaderLink to="/">
            <FormattedMessage {...messages.home} />
          </HeaderLink>
          <HeaderLink to="/login">
            <FormattedMessage {...messages.login} />
          </HeaderLink>
          <HeaderLink to="/features">
            <FormattedMessage {...messages.features} />
          </HeaderLink>
        </NavBar>
      </div>
    );
  }
}

NavigationBar.propTypes = {};

export default NavigationBar;
