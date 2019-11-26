import React from 'react';
import { Dropdown, Avatar } from 'antd';

import UserCard from 'src/components/UserCard';

import './style.less';

class UserMenu extends React.Component {
  render() {
    return (
      <div className="UserMenu">
        <Dropdown overlay={<UserCard />}>
          <Avatar className="UserMenu--avatar" shape="square" size="large" icon="user" />
        </Dropdown>
      </div>
    );
  }
}

export default UserMenu;
