/**
 * Created by kyle on 17-7-8.
 */
import React, {PropTypes} from "react";
import {Form, Icon, Button, Row, Col} from "antd";
const FormItem = Form.Item;

let uuid = 1;
class DynamicFieldSet extends React.Component {
  remove = (k) => {
    const {form} = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    form.setFieldsValue({
      keys: keys.filter(key => key !== k),
    });
  }

  add = () => {
    uuid++;
    const {form} = this.props;
    // can use data-binding to get
    const keys = form.getFieldValue('keys');
    const nextKeys = keys.concat(uuid);
    // can use data-binding to set
    // important! notify form to detect changes
    form.setFieldsValue({
      keys: nextKeys,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  render() {
    const {getFieldDecorator, getFieldValue} = this.props.form;
    const formItemLayout = this.props.formItemLayout;
    const render = this.props.render;
    const label = this.props.label;
    const initialValue = this.props.initialValue;
    const formItemLayoutWithOutLabel = {
      wrapperCol: {
        xs: {span: 24, offset: 0},
        sm: {span: 20, offset: 4},
      },
    };
    getFieldDecorator('keys', {initialValue: initialValue? initialValue : [1]});
    const keys = getFieldValue('keys');
    const formItems = keys.map((k, index) => {
      return (
        <div key={k} style= {{ marginLeft: '0%'}}>
        <FormItem
          {...(index === 0 ? formItemLayout : formItemLayout)}
          label={ label + index}
          required={false}
          key={k}
        >
          <Row gutter={22}>
            <Col span={22}>
              {render(k,  index)}
            </Col>
            <Col span={2}>
              { keys.length  === 1 ? '' : <Icon
                className="dynamic-delete-button"
                type="minus-circle-o"
                disabled={keys.length === 1}
                onClick={() => this.remove(k)}
              />}
            </Col>
          </Row>

        </FormItem>
          <br/>
        </div>
      );
    });
    return (
      <div>
        {formItems}
        <FormItem >
        <a　onClick={this.add}>More</a>
        </FormItem>
      </div>
    );
  }
}

export default DynamicFieldSet;
