/*
* HomePage
*
* This is the first thing users see of our App, at the '/' route
*
* NOTE: while this component should technically be a stateless functional
* component (SFC), hot reloading does not currently support SFCs. If hot
* reloading is not a neccessity for you then you can refactor it and remove
* the linting exception.
*/

import React, { Component, PropTypes } from 'react';
import CSSModules from 'react-css-modules';
import { Link } from 'react-router';

import config from 'config';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles.less';
import Img from 'components/Img';
import {Grid, Cell, Checkbox, Button, TextField} from 'react-mdl';

const l = (a) => (a);

import CART_COIN_SRC from 'static/images/cart-coin.png';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        <section className='section-top' styleName='sectionTop'>
          <Grid className='grid-small align-center color-white align-center'>
            <Cell col={12}>
              <h1 className='h1'>
                <FormattedMessage {...messages.welcome} />
              </h1>
              <p className='font-20'>
                <FormattedMessage {...messages.intro} />
              </p>
            </Cell>
            <Cell col={6}>
              <Link
                to={ config.createProject }
                className='mdl-button mdl-js-button mdl-js-ripple-effect btn-big color-white uppercase'>
                <FormattedMessage {...messages.start } />
              </Link>
            </Cell>
            <Cell col={6}>
              <Link
                to={ config.supportProject }
                className='mdl-button mdl-js-button mdl-js-ripple-effect btn-big color-white uppercase'>
                <FormattedMessage {...messages.support } />
              </Link>
            </Cell>
          </Grid>
        </section>
        <section className='section-grey'>
          <Grid className='grid-small align-center'>
            <Cell col={12}>
              <h2 className='h2 underline'>{ l('Entdecke die neue Art der Sportförderung') }</h2>
              <p className='font-18'>
                { l('Ob du auf der Suche nach einem Hauptsponsor oder Unterstützer bist, ob Sportsponsoring oder Crowdfunding für den Sport – auf Sponsor My Club vereinen wir alles, was du als Sportverein oder Einzelsportler/in brauchst, um deine Ziele zu erreichen. Dafür haben wir eine Plattform entwickelt, die Sportvereine und Sportler/innen, private Unterstützer und die vielen tausend lokalen Unternehmen vereint und eine neue Art der Sportförderung ins Leben ruft. Für dich. Für den Sport. Für die Zukunft.') }
              </p>
            </Cell>
            <Cell col={12}>
              <Link
                to={ config.home }
                className='mdl-button mdl-js-button mdl-js-ripple-effect btn-big'>
                { l('Hier erfährst du mehr') }
              </Link>
            </Cell>
          </Grid>
        </section>
        <section>
          <Grid className='grid-small align-center'>
            <Cell col={12}>
              <h2 className='h2'>{ l('Transparenz und Vertrauen') }</h2>
              <p className='font-18'>
                { l('100% Transparenz, volle Kontrolle, Schutz und Sicherheit stehen bei uns an oberster Stelle. Nur so können wir sicherstellen, dass Sponsor My Club eine vetrauenswürdige Plattform bleibt.') }
              </p>
            </Cell>
          </Grid>
        </section>
        <section className='section-grey'>
          <Grid className='grid-small align-center'>
            <Cell col={12}>
              <h3 className='h3'>{ l('Shoppen, stöbern, unterstützen?') }<br/>{ l('Mach doch einfach alles!') }</h3>
              <p className='font-18'>
                { l('Tolle Produkte zu entdecken und zu kaufen gefällt fast jedem. Und warum solltest du auf Sponsor My Club darauf verzichten müssen? Entdecke schöne Produkte und Gutscheine lokaler Unternehmen und unterstütze dabei noch großartige Projekte aus dem Amateur- und Breitensport. Wie das geht?') }
              </p>
            </Cell>
            <Cell col={12}>
              <Link
                to={ config.home }
                className='mdl-button mdl-js-button mdl-js-ripple-effect btn-big'>
                { l('Hier erfährst du mehr') }
              </Link>
            </Cell>
          </Grid>
        </section>
        <section>
          <Grid className='grid-small align-center'>
            <Cell col={12}>
              <h2 className='h2'>{ l('Womit möchtest du starten?') }</h2>
              <p className='font-18'>
                { l('Erreiche deine Ziele gemeinsam mit vielen anderen oder entdecke und unterstütze großartige Projekte von großartigen Menschen.') }
              </p>
            </Cell>
            <Cell col={6}>
              <Link
                to={ config.supportProject }
                className='mdl-button mdl-js-button mdl-js-ripple-effect btn-big mdl-button--colored'>
                { l('Entdecke großartige Projekte') }
              </Link>
            </Cell>
            <Cell col={6}>
              <Link
                to={ config.createProject }
                className='mdl-button mdl-js-button mdl-js-ripple-effect btn-big mdl-button--raised mdl-button--colored'>
                { l('Starte dein eigenes Projekt') }
              </Link>
            </Cell>
          </Grid>
        </section>
        <section className='section-grey'>
          <Grid className='grid-small align-center'>
            <Cell col={12}>
              <h3 className='h3'>{ l('Neues im Blog') }</h3>
            </Cell>
            <Cell col={12}>
            </Cell>
          </Grid>
        </section>
        <section>
          <Grid className='grid-small align-center'>
            <Cell col={12}>
              <h3 className='h3'>{ l('Deine Neugier drängt dich, du bist immer auf der Suche nach den neuesten Nachrichten?') }</h3>
              <p className='font-18'>
                { l('Dann trag dich doch einfach kostenlos für unseren Newsletter ein. Darin erfährst du regelmäßig von neuen Projekten, die dich interessieren und tollen Angeboten lokaler Shops und Unternehmen. Und das ganz automatisch.') }
              </p>
            </Cell>
            <Cell col={12}>
              <form action=''>
                <div className='mdl-textfield mdl-js-textfield mdl-textfield--floating-label' styleName='textEmail'>
                  <input
                    className='mdl-textfield__input'
                    type='email'
                    id='input_email' />
                  <label
                    className='mdl-textfield__label'
                    htmlFor='input_email'>
                    { l('Deine Email Adresse') }
                  </label>
                  <span className='mdl-textfield__error'>{ l('Invalid Email Adresse!') }</span>
                </div>
                <Button raised ripple colored
                  type='submit'
                  styleName='btnEmail'
                  className='btn-big'>
                  { l('Kostenlos eintragen') }
                </Button>
              </form>
            </Cell>
            <Cell col={12}>
              <Checkbox className="align-left" ripple label= {
                  <FormattedMessage {...messages.emailCheck } values={{link : (
                      <a href='http://www.deutschlandfürdensport.de' target='_blank'><FormattedMessage {...messages.linkConditions } /></a>
                    )}}/>
                  }  />
                </Cell>
              </Grid>
            </section>
            <section className='section-grey'>
              <Grid className='grid-small align-center'>
                <Cell col={12}>
                  <div>
                    <Img
                      src={ CART_COIN_SRC }
                      alt='cart coin' />
                  </div>
                  <h3 className='h3'>{ l('Sie möchten als Einzelhandel oder Unternehmen Produkte auf Sponsor My Club verkaufen?') }</h3>
                  <p className='font-18'>
                    { l('Weitere Details und Konditionen finden Sie auf unserer Seite') }
                    <br/><a
                      href='http://www.deutschlandfürdensport.de'
                      target='_blank'>www.deutschlandfürdensport.de</a>
                  </p>
                </Cell>
                <Cell col={12}>
                </Cell>
              </Grid>
            </section>
          </div>
        );
      }
    }

    export default CSSModules(HomePage, styles, {
      errorWhenNotFound: false,
      allowMultiple: true
    });
