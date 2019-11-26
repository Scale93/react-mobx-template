import React from 'react';
import { Row, Col, Card, Icon, Divider } from 'antd';

import './style.less';

class UserCard extends React.Component {
  static defaultProps = {
    iconSpan: 6,
    textSpan: 18,
  };

  render() {
    const { iconSpan, textSpan } = this.props;

    return (
      <div className="UserCard">
        <Card
          title={
            <div className="UserCard--title">
              <h2>User ReactMobX User</h2>
              <p>react@mobx.com</p>
            </div>
          }
        >
          <div className="UserCard--body">
            <Row>
              <Col span={iconSpan}>
                <Icon type="sync" style={{ color: 'grey' }} />
              </Col>
              <Col span={textSpan}>
                <h3>Activity</h3>
              </Col>
            </Row>
            <Row>
              <Col span={iconSpan}>
                <Icon type="mail" style={{ color: 'green' }} />
              </Col>
              <Col span={textSpan}>
                <h3>Messages</h3>
              </Col>
            </Row>
            <Row>
              <Col span={iconSpan}>
                <Icon type="user" style={{ color: 'orange' }} />
              </Col>
              <Col span={textSpan}>
                <h3>Profile</h3>
              </Col>
            </Row>
            <Divider />
            <Row>
              <Col span={iconSpan}>
                <Icon type="setting" style={{ color: 'cyan' }} />
              </Col>
              <Col span={textSpan}>
                <h3>Settings</h3>
              </Col>
            </Row>
            <Row>
              <Col span={iconSpan}>
                <Icon type="unlock" style={{ color: 'red' }} />
              </Col>
              <Col span={textSpan}>
                <h3>Logout</h3>
              </Col>
            </Row>
          </div>
        </Card>
      </div>
    );
  }
}

export default UserCard;
