/**
 * Created by kyle on 17-8-2.
 */
import React, {PropTypes} from "react";
import {Form, Modal, Select} from "antd";
import IP from "./ip";
const FormItem = Form.Item

const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
}
const modal = ({
  visible,
  type,
  values = {},
  onOk,
  onCancel,
  form,
  changeService,
  servicesList = [],
  ipList=[],
}) => {
  const {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
  } =form;


  const modalOpts = {
    title: `${type === 'create' ? '新建' : '修改'}`,
    visible,
    onOk: handleOk,
    onCancel,
    wrapClassName: 'vertical-center-modal',
    width: 800,

  }

  function handleOk() {

  }

  function changeHandle(k) {
    changeService(k)
  }

  const IPProps={
    ipList: ipList,
  }

  return (

    <Modal {...modalOpts}>
      <Form horizontal>
        <FormItem {...formItemLayout}
                  label={'服务器'}
        >
          {getFieldDecorator('service', {
            initialValue: undefined,
            rules: [
              {
                required: true,
                message: '不能为空',
              },
            ],
          })(<Select
            onChange={changeHandle}
          >
            {servicesList.map((v, k) => <Select.Option key={v.id}>{v.name}</Select.Option>)}
          </Select>)}
        </FormItem>
        <IP {...IPProps}/>
      </Form>
    </Modal>

  )
}

modal.propTypes = {
  visible: PropTypes.any,
  form: PropTypes.object,
  item: PropTypes.object,
  onOk: PropTypes.func,
  onCancel: PropTypes.func,
}

export default Form.create()(modal)
/*
 <Button key="preview" type="primary" size="large" onClick={onCancel}>预览</Button>,

 */
