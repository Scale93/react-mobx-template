import React from 'react';
import { Row, Col, Card, Icon } from 'antd';

import './style.less';

const QuickLinksCard = () => (
  <div className="QuickLinksCard">
    <Card title="Quick Links">
      <div className="QuickLinksCard--body">
        <Row>
          <Col span={12}>
            <Icon type="file-text" style={{ color: 'blue' }} />
            <p>ReactMobX1_1</p>
          </Col>
          <Col span={12}>
            <Icon type="laptop" style={{ color: 'green' }} />
            <p>ReactMobX1_2</p>
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <Icon type="team" style={{ color: 'orange' }} />
            <p>ReactMobX1_3</p>
          </Col>
          <Col span={12}>
            <Icon type="exception" style={{ color: 'red' }} />
            <p>ReactMobX1_4</p>
          </Col>
        </Row>
      </div>
    </Card>
  </div>
);

export default QuickLinksCard;
