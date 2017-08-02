/**
 * Created by kyle on 17-7-9.
 */
import React, {PropTypes} from "react";
import Multi from "./DynamicItems";
import {Row, Col, Select, Form, Input} from "antd";
const FormItem = Form.Item
const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 24,
  },
}
const ip = ({
  form, values = {},
  type = 'create',
  visible = true,
  ipList=[],
}) => {
  const {
    getFieldDecorator,
    validateFields,
    getFieldsValue,
    getFieldValue,
  } =form;
  let initKeys = []
  let valuesMap = {};
  if (values && values.ips) {
    initKeys = values.ips.map((val, key) => {
      const valUuid = JSON.stringify(val);
      valuesMap[valUuid] = val;
      return valUuid;
    })
  }


  const MultiProps = {
    initialValue: initKeys.length > 0 ? initKeys : [1],
    formItemLayout,
    form,
    render: (k, id) => (<div key={k}>
      <Row type="flex" justify="start" gutter={12}>
        <Col span={3}>
          <span className="ant-form-item-required">IP:</span>
        </Col>
        <Col span={7}
        >
          <FormItem
          >
            {getFieldDecorator('attributeCode' + k, {
              initialValue: valuesMap[k] ? `${valuesMap[k]}` : undefined,
              rules: [
                {
                  required: true,
                  message: '不能为空',
                },
              ],
            })(<Select>
              {ipList.map((v,k)=><Select.Option key={v}>{v}</Select.Option>)}
            </Select>)}
          </FormItem>
        </Col>
      </Row>

    </div>)
  }
  return (
    <div style={{marginLeft: '20%'}}>
      <Multi {...MultiProps}/>
      <br/>
    </div>
  );
};

ip.propTypes = {};
ip.defaultProps = {};

export default Form.create()(ip);
/*
 */
