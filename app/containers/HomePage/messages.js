/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage component.
 */
import { defineMessages } from 'react-intl';

export default defineMessages({
  welcome: {
    id: 'app.components.HomePage.welcome',
    defaultMessage: 'Willkommen beim ersten sozialen Marktplatz für den Amateursport',
  },
  intro: {
    id: 'app.components.HomePage.intro',
    defaultMessage: 'Sponsor My Club vereint den Amateur- und Breitensport mit den vielen Unterstützern und lokalen Unternehmen.',
  },
  start: {
    id: 'app.components.HomePage.start',
    defaultMessage: 'Projekt starten',
  },
  support: {
    id: 'app.components.HomePage.support',
    defaultMessage: 'Projekt unterstützen',
  },
  linkConditions: {
    id: 'app.components.HomePage.link.conditions',
    defaultMessage: 'Datenschutzbestimmungen',
  },
  emailCheck: {
    id: 'app.components.HomePage.email.check',
    defaultMessage: `Ja, ich möchte den Newsletter mit Neuigkeiten und Angeboten erhalten und habe die {link} gelesen und stimme diesen zu.`,
  },
});
