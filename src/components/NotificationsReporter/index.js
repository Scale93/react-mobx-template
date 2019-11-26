import React from 'react';
import { Dropdown, Icon, Badge } from 'antd';

import NotificationsCard from 'src/components/NotificationsCard';

import './style.less';

class NotificationsReporter extends React.Component {
  render() {
    return (
      <div className="NotificationsReporter">
        <Dropdown overlay={<NotificationsCard />}>
          <Badge className="NotificationsReporter--badge" dot>
            <Icon className="NotificationsReporter--icon" type="bell" />
          </Badge>
        </Dropdown>
      </div>
    );
  }
}

export default NotificationsReporter;
