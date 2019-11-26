import React from 'react';
import { Card } from 'antd';

import './style.less';

class ReportCard extends React.Component {
  render() {
    const { title, children } = this.props;
    const cardTitle = title ? <h3>{title}</h3> : null;

    return (
      <div className="ReportCard">
        <Card title={cardTitle}>{children}</Card>
      </div>
    );
  }
}

export default ReportCard;
