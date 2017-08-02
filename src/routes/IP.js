import React from "react";
import {connect} from "dva";
import {Button} from "antd";
import styles from "./IP.css";
import Modal from "../components/ip/modal";
import List from "../components/ip/list";
function IP({dispatch, ip}) {
  const ModalProps = {
    visible: ip.modalVisible,
    servicesList: ip.servicesList,
    ipList: ip.ipList,
    changeService: (data) => {
      dispatch({
        type: 'ip/fetchIpList',
        payload: data,
      })
    },
    onCancel: () => {
      dispatch({
        type: 'ip/save',
        payload: {modalVisible: false}
      })
    }
  }

  const ListProps = {
    dataSource: ip.table,
    onEdit:(item)=>{
      dispatch({
        type: 'ip/showModal',
        payload: {modalVisible: true, type: 'edit', curItem: {...item}}
      })
    }
  }
  return (
    <div className={styles.normal}>
      <Button type="primary"
              onClick={() => {
                dispatch({
                  type: 'ip/showModal',
                  payload: {modalVisible: true, type: 'create', curItem: {}}
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
    ip: state.ip
  };
}

export default connect(mapStateToProps)(IP);
