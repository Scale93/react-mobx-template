import React from 'react';
import { Dropdown, Icon } from 'antd';

import QuickLinksCard from 'src/components/QuickLinksCard';

import './style.less';

class QuickLinksNavigator extends React.Component {
  render() {
    return (
      <div className="QuickLinksNavigator">
        <Dropdown overlay={<QuickLinksCard />}>
          <span>
            <Icon className="QuickLinksNavigator--icon" type="appstore-o" />
          </span>
        </Dropdown>
      </div>
    );
  }
}

export default QuickLinksNavigator;
