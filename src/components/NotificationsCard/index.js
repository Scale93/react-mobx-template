import React from 'react';
import { Row, Col, Card } from 'antd';

import './style.less';

const notificationMessages = [
  {
    text: 'Lorem Ipsum Notification',
    date: 'Just now',
  },
];

const NotificationsCard = () => (
  <div className="NotificationsCard">
    <Card
      title="Notifications"
      extra={
        <div className="NotificationsCard--extra">
          <p>1</p>
        </div>
      }
    >
      <div className="NotificationsCard--body">
        {notificationMessages.map((message, index) => (
          <Row key={index}>
            <Col span={14}>
              <h3>{message.text}</h3>
            </Col>
            <Col span={10}>
              <p>{message.date}</p>
            </Col>
          </Row>
        ))}
      </div>
    </Card>
  </div>
);

export default NotificationsCard;
