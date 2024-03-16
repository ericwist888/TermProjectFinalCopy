// Landing.page.jsx
import { Container } from '@mantine/core';
import styles from './Landing.page.module.css'; // Import the CSS module
import Turtle from '../../components/misc/Turtle';

const Landing = () => {
  return (
    <Container>
      <h1 className={styles.title}>make photo collections blossom in time</h1>
      <p className={styles.description}>
        This app is a platform on which we can share our nature photography.
      </p>
      <div className={styles.content}>
        <Turtle width={300} height={225} className={styles.turtle} />
        <img
          src="https://images.pexels.com/photos/16708854/pexels-photo-16708854/free-photo-of-cherry-tree-in-blossom-in-front-of-a-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Cherry tree in blossom"
          className={styles.image}
        />
      </div>
    </Container>
  );
};

export default Landing;
