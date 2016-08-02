/**
*
* ProjectCard
*
*/

import React from 'react';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import {Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';

import styles from './styles.css';

function ProjectCard({item}) {
  return (
    <Card className={styles.projectCard} shadow={0}>
      <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}></CardTitle>
      <CardText>
        <p className="font-12">{item.sportName}</p>
        <p className="font-10">{item.name}</p>
        <p className="font-16">{item.shortDescription}</p>
        <p className="font-20">{item.sponsoredSumMax}</p>
        <p className="font-16">{item.sponsoredSumNow}</p>
        <p className="font-12">{item.projectInterval}</p>
        <p className="font-12">{new Date(item.startDate).toString()}</p>
      </CardText>
      <CardActions border>
        <Button colored>Goto Project</Button>
      </CardActions>
    </Card>
  );
}

ProjectCard.protoTypes = {
  // item : React.protoTypes.object
};

export default ProjectCard;
