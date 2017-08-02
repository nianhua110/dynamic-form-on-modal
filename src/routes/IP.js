import React from 'react';
import { connect } from 'dva';
import styles from './IP.css';
import Modal from '../components/ip/modal'
function IP() {
  return (
    <div className={styles.normal}>
      <Modal visible={true}/>
    </div>
  );
}

function mapStateToProps() {
  return {

  };
}

export default connect(mapStateToProps)(IP);
