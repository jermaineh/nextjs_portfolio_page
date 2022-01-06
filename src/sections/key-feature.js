/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/key-feature/performance.svg';
import Partnership from 'assets/key-feature/partnership.svg';
import Subscription from 'assets/key-feature/subscription.svg';
import Support from 'assets/key-feature/support.svg';
import FeatureCardColumn from 'components/feature-card-column';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Quick Learner',
    text:
      'Ability to learn and implement new technology and implement in a production environment',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Partnership deal',
    title: 'Team Player',
    text:
      'Work and get along well with team members',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Pro Subscription',
    title: 'Winner Mindset',
    text:
      'Used to being a top performer no matter what my duties are',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Advanced Communication Skills',
    text:
      'Understand how to communicate with technical team as well as able to break down technical concepts to non technical teammates',
  },
];

export default function KeyFeature() {
  return (
    <section sx={{ variant: 'section.KeyFeature' }}>
      <Container>
        <SectionHeader
          slogan='Here is a list of my strengths'
          title="Meet the feature of our product"
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCardColumn
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>

    </section>
  );
}













const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
