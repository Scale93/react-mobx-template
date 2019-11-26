import React from 'react';
import { inject, observer } from 'mobx-react';
import { Row, Col, Divider } from 'antd';
import { Button } from 'antd';
import { ROUTER_STORE } from 'src/constants';
import Breadcrumb from 'src/components/Breadcrumb';

import './style.less';

@inject(ROUTER_STORE)
@observer
class NotFound extends React.Component {
  handleClickBack = () => this.props[ROUTER_STORE].goBack();

  handleClickHome = () => this.props[ROUTER_STORE].push('/');

  render() {
    return (
      <div style={{ height: '100vh' }}>
        <Breadcrumb />
        <Divider orientation="center" style={{ margin: '0 0 16px 0' }} />
        <Row className="NotFound" type="flex" align="middle" justify="center">
          <Col span={8}>
            <h1 className="NotFound--title">404</h1>
            <h1 className="NotFound--message">Oops!!! Page not found</h1>
            <Row>
              <Col span={3} offset={6}>
                <Button onClick={this.handleClickBack}>Go back</Button>
              </Col>
              <Col span={12}>
                <Button onClick={this.handleClickHome}>Go home</Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default NotFound;
