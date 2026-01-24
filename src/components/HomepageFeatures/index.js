import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Production-Ready Tools',
    Svg: require('@site/static/img/feature1.svg').default,
    description: (
      <>
        Carefully designed systems that solve real production problems, helping developers build high-quality games faster without fighting low-level technical complexity.
      </>
    ),
  },
  {
    title: 'Quality Made Simple',
    Svg: require('@site/static/img/feature2.svg').default,
    description: (
      <>
        Achieve polished, modern results with intuitive tools and workflows—no need to master every engine detail before creating something that looks and feels professional.
      </>
    ),
  },
  {
    title: 'Unified Game Framework',
    Svg: require('@site/static/img/feature3.svg').default,
    description: (
      <>
        Modular packages designed to work together as one cohesive system, scaling cleanly from small prototypes to full production projects.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
