import React from 'react';

import NotificationsReporter from 'src/components/NotificationsReporter';
import QuickLinksNavigator from 'src/components/QuickLinksNavigator';
import UserDropdownMenu from 'src/components/UserMenu';
import SearchBar from 'src/components/SearchBar';

import './style.less';

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <p>ReactMobX Template</p>
        <div className="Header--action-bar">
          <SearchBar />
          <NotificationsReporter />
          <QuickLinksNavigator />
          <UserDropdownMenu />
        </div>
      </div>
    );
  }
}

export default Header;
