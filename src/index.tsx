import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styles from './styles/index.scss';

const Index = () => {
  return (
    <div className={styles.app}>
      <App />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById('root'));
