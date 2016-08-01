/**
*
* Header
*
*/

import React from 'react';
import { IndexLink, Link } from 'react-router';
import CSSModules from 'react-css-modules';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import config from 'config';
import Img from 'components/Img';
import {Header as _Header, HeaderRow, Badge, Spacer, Navigation} from 'react-mdl';

import styles from './styles.less';

import LOGO_SRC from 'static/images/logo.png';
import CART_SRC from 'static/images/cart.png';

function Header() {
  return (
    <_Header transparent styleName='header'>
        <HeaderRow>
          <Navigation styleName='header__nav'>

                <IndexLink
                           to={ config.home }
                           styleName='logo__wrapper'
                           activeClassName={ styles.activeRoute }>
                  <Img
                       alt='Sponsor My Club'
                       src={ LOGO_SRC } />
                </IndexLink>
                <Link
                      to={ config.createProject }
                      activeClassName={ styles.activeRoute }>
                <FormattedMessage {...messages.start} />
                </Link>
                <Link
                      to={ config.supportProject }
                      activeClassName={ styles.activeRoute }>
                <FormattedMessage {...messages.support} />
                </Link>
                <Link
                      to={ config.about }
                      activeClassName={ styles.activeRoute }>
                    <FormattedMessage {...messages.about} />
                </Link>
          </Navigation>
          { /*Add spacer, to align navigation to the right*/ }
          <Spacer />
          <Navigation styleName='header__nav'>
                <Link
                      to={ config.cart }
                      styleName='cart__wrapper'
                      activeClassName={ styles.activeRoute }>
                      <Badge overlap text="1"><span>
                            <Img
                                   alt='cart'
                                   src={ CART_SRC } />
                      </span></Badge>
                </Link>
                <Link
                            to={ config.cart }
                            activeClassName={ styles.activeRoute }>
                    <Badge text="1"><span>
                  <FormattedMessage {...messages.sign} />
                  </span></Badge>
                  </Link>
          </Navigation>
        </HeaderRow>
      </_Header>
  );
}

export default CSSModules(Header, styles);
