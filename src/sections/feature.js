/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/performance.svg';
import Partnership from 'assets/feature/partnership.svg';
import Subscription from 'assets/feature/subscription.svg';
import Support from 'assets/feature/support.svg';
import FeatureCardColumn from 'components/feature-card-column';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Fast Performance',
    text:
      'I learned from my days of playing guitar that speed is a function of accuracy. I employ those principles in my development process. Clean code makes for a faster development cycle.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Pro Subscription',
    title: 'SOPs are important',
    text:
      'Working without standard operating procedures is like trying to win a football game with no playbook. SOPs keep everyone on the same page and functioning as a unit.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Partnership deal',
    title: 'Think like a winner',
    text:
      'Competition is health if you are using it to get you and your teammates better. In everything I do my goal is to be the best at it. Winners do what is needed to get the team across the finish line.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Cumunication is a 2 way street',
    text:
      'A little communication can go a long way. A overlooked aspect of communication is being a person who is easy to communicate with. Respect all thoughts and opinions and always be willing to accept and implement positive feedback.',
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: 'section.feature' }}>
      <Container>
        <SectionHeader
          slogan='Keys to organization and efficiency'
          title='My key beliefs'
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              title={item.title}
              text={item.text}
              alt={item.altText}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
