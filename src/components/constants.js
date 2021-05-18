import Housemate from './images/housemate.jpg';
import Kermit from './images/kermit.jpg';
import Tweeter from './images/tweeter.jpg';
import Schedule from './images/schedule.jpg'

export default [
  {
    title:'Housemate',
    description:'Expense splitting application built from scratch with two team members Able to create group, add friend, split expense between them Front-end: React, Axios, HTML, CSS Back-end: Ruby on Rails, postgreSQL',
    imgUrl: `${Housemate}`,
    gitLink:'https://github.com/csjohn1/HouseMate',
  },
  {
    title:'Kermit',
    description:'Pinterest like application built from scratch with two team members. Application allows you to post pictures, and populates Into landing page where you can like, rate, save pins. Front-end: JavaScript, HTML, CSS Back-end: NodeJS, Express',
    imgUrl: `${Kermit}`,
    gitLink:'https://github.com/JacquelineJG/midterm',
  },
  {
    title:'Tweeter',
    description:'Single page application where users can write collaborative stories. Registered users can start a story or continue existing open stories. Users not registered can vote on suggested addendums to existing stories.\
    Front-end: jQuery, Ajax, HTML, CSS, SASS\
    Back-end: Node, Express, postgreSQL',
    imgUrl: `${Tweeter}`,
    gitLink:'https://github.com/skimmilk1172/tweeter',
  },
  {
    title:'Interview Scheduler',
    description:'Single Page Application where a user can edit, delete, create appointments with an Interviewer. Worked on with React and test stack Front-end: React, Axios, HTML, CSS\
    Back-end: Node, Express, postgreSQL\
    Test: Jest, Storybook, Cypress',
    imgUrl: `${Schedule}`,
    gitLink:'https://github.com/skimmilk1172/scheduler',
  }
]