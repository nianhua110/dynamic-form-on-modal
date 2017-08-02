import React from 'react';
import { connect } from 'dva';
import { Button,  } from 'antd';
import styles from './IP.css';
import Modal from '../components/ip/modal'
import List from '../components/ip/list'
function IP({dispatch, ip }) {
  const ModalProps={
    visible: ip.modalVisible,
  }

  const ListProps={
    dataSource: ip.table,
  }
  return (
    <div className={styles.normal}>
      <Button type="primary"
        onClick={()=>{
          dispatch({
            type: 'ip/save',
            payload:{ modalVisible: true }
          })
        }}
      >添加</Button>
      <br/><br/>
      <List {...ListProps}/>
      <Modal {...ModalProps}/>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    ip:state.ip
  };
}

export default connect(mapStateToProps)(IP);
