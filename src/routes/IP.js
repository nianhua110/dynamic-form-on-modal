import React from 'react';
import { connect } from 'dva';
import { Button,  } from 'antd';
import styles from './IP.css';
import Modal from '../components/ip/modal'
function IP() {
  return (
    <div className={styles.normal}>
      <Button></Button>
      <Modal visible={true}/>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    state
  };
}

export default connect(mapStateToProps)(IP);
