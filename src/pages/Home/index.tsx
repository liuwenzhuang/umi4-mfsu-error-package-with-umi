import { PageContainer } from '@ant-design/pro-components';
import styles from './index.less';
import { Componentwithumi } from 'lwz-component-with-umi';

const HomePage: React.FC = () => {
  return (
    <PageContainer ghost>
      <div className={styles.container}>hello umi</div>
      <Componentwithumi />
    </PageContainer>
  );
};

export default HomePage;
