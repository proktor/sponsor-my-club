/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import {Layout, Content} from 'react-mdl';

import styles from './styles.css';
import 'static/styles/core.less';

export default class App extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <Layout>
        <Content>
          <Header />
          { this.props.children }
          <Footer />
        </Content>
      </Layout>
    );
  }
}
