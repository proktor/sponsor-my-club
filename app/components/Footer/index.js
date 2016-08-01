import React from 'react';
import { IndexLink, Link } from 'react-router'

import config from 'config';
import messages from './messages';
import A from 'components/A';
import styles from './styles.css';
import { FormattedMessage } from 'react-intl';
import LocaleToggle from 'containers/LocaleToggle';

const l = (a) => (a);
import LOGO_SRC from 'static/images/footer_logo.png';

function Footer() {
  return (
    <footer
              className='mdl-mega-footer'
            id="footer">
      <div className='mdl-grid'>
        <div className='mdl-cell mdl-cell--12-col'>
          <div className='mdl-mega-footer__middle-section'>
            <div className='mdl-mega-footer__drop-down-section'>
              <input
                     className='mdl-mega-footer__heading-checkbox'
                     type='checkbox'
                     defaultChecked />
              <h1 className='mdl-mega-footer__heading'>{ l('Für Vereine und Sportler/innen') }</h1>
              <ul className='mdl-mega-footer__link-list'>
                <li>
                  <Link to={ config.footer }>
                  <FormattedMessage {...messages.startProject} />
                  </Link>
                </li>
                <li>
                  <Link to={ config.footer }>
                  { l('Hilfe-Leitfaden') }
                  </Link>
                </li>
                <li>
                  <Link to={ config.footer }>
                  { l('Erfolgreiche Projekte') }
                  </Link>
                </li>
                <li>
                  <Link to={ config.footer }>
                  { l('Kosten und Auszahlung von Geldern') }
                  </Link>
                </li>
              </ul>
            </div>
            <div className='mdl-mega-footer__drop-down-section'>
              <input
                     className='mdl-mega-footer__heading-checkbox'
                     type='checkbox'
                     defaultChecked />
              <h1 className='mdl-mega-footer__heading'>{ l('Für lokale Händler und Unternehmen') }</h1>
              <ul className='mdl-mega-footer__link-list'>
                <li>
                  <Link to={ config.footer }>
                  { l('Verkaufen auf Sponsor My Club') }
                  </Link>
                </li>
                <li>
                  <Link to={ config.footer }>
                  { l('Werben auf Sponsor My Club') }
                  </Link>
                </li>
                <li>
                  <Link to={ config.footer }>
                  { l('Alles über die Mitgliedschaft') }
                  </Link>
                </li>
                <li>
                  <Link to={ config.footer }>
                  { l('Hilfe / Downloads und Anleitungen') }
                  </Link>
                </li>
              </ul>
            </div>
            <div className='mdl-mega-footer__drop-down-section'>
              <input
                     className='mdl-mega-footer__heading-checkbox'
                     type='checkbox'
                     defaultChecked />
              <h1 className='mdl-mega-footer__heading'>{ l('Sponsor My Club') }</h1>
              <ul className='mdl-mega-footer__link-list'>
                <li>
                  <Link to={ config.footer }>
                  { l('Über Sponsor My Club') }
                  </Link>
                </li>
                <li>
                  <Link to={ config.footer }>
                  { l('Team') }
                  </Link>
                </li>
                <li>
                  <Link to={ config.footer }>
                  { l('Blog') }
                  </Link>
                </li>
                <li>
                  <Link to={ config.footer }>
                  { l('Jobs und Karriere') }
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='mdl-mega-footer__middle-section'>
            <div className='mdl-mega-footer__drop-down-section'>
              <input
                     className='mdl-mega-footer__heading-checkbox'
                     type='checkbox'
                     defaultChecked />
              <h1 className='mdl-mega-footer__heading'>{ l('Projekte unterstützen') }</h1>
              <ul className='mdl-mega-footer__link-list'>
                <li>
                  <Link to={ config.footer }>
                  { l('Entdecke großartige Projekt') }
                  </Link>
                </li>
                <li>
                  <Link to={ config.footer }>
                  { l('Wie du den Sport unterstützt') }
                  </Link>
                </li>
                <li>
                  <Link to={ config.footer }>
                  { l('So funktioniert es') }
                  </Link>
                </li>
                <li>
                  <Link to={ config.footer }>
                  { l('Schutz und Sicherheit') }
                  </Link>
                </li>
              </ul>
            </div>
            <div className='mdl-mega-footer__drop-down-section'>
              <input
                     className='mdl-mega-footer__heading-checkbox'
                     type='checkbox'
                     defaultChecked />
              <h1 className='mdl-mega-footer__heading'>{ l('Hilfecenter') }</h1>
              <ul className='mdl-mega-footer__link-list'>
                <li>
                  <Link to={ config.footer }>
                  { l('So funktioniert Sponsor My Club') }
                  </Link>
                </li>
                <li>
                  <Link to={ config.footer }>
                  { l('Häufig gestellte Fragen (FAQ)') }
                  </Link>
                </li>
                <li>
                  <Link to={ config.footer }>
                  { l('Kundenservice und -kontakt') }
                  </Link>
                </li>
                <li>
                  <Link to={ config.footer }>
                  { l('Das ultimative Sponsor My Club Handbuch') }
                  </Link>
                </li>
              </ul>
            </div>
            <div className='mdl-mega-footer__drop-down-section'>
              <input
                     className='mdl-mega-footer__heading-checkbox'
                     type='checkbox'
                     defaultChecked />
              <h1 className='mdl-mega-footer__heading'>{ l('Lass uns in Kontakt bleiben') }</h1>
              <ul className='mdl-mega-footer__link-list'>
                <li>
                  <Link to={ config.footer }>
                  { l('facebook') }
                  </Link>
                </li>
                <li>
                  <Link to={ config.footer }>
                  { l('twitter') }
                  </Link>
                </li>
                <li>
                  <Link to={ config.footer }>
                  { l('youtube') }
                  </Link>
                </li>
                <li>
                  <Link to={ config.footer }>
                  { l('google-plus') }
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className='underline' />
          <div className='mdl-mega-footer__bottom-section align-center'>
            <ul className='mdl-mega-footer__link-list'>
              <li>
                <Link to={ config.footer }>
                { l('Nutzungsbedingungen') }
                </Link>
              </li>
              <li>
                <Link to={ config.footer }>
                { l('Datenschutzrichtlinie') }
                </Link>
              </li>
              <li>
                <Link to={ config.footer }>
                { l('Impressum') }
                </Link>
              </li>
              <li>
                <Link to={ config.footer }>
                { l('AGB für Partner / Unternehmen') }
                </Link>
              </li>
              <li>
                <Link to={ config.footer }>
                { l('Cookie-Richtlinie') }
                </Link>
              </li>
            </ul>
            <div className='mdl-footer-logo'>
              <img
                   alt='Sponsor My Club'
                   src={ LOGO_SRC } />
            </div>
            <div>
              <LocaleToggle />
            </div>
            <div>
              2016, Sponsor My Club
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
