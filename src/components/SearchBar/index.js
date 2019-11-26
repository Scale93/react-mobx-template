import React from 'react';
import { Input, Icon } from 'antd';

import './style.less';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="SearchBar">
        <span>
          <Input placeholder="Find inside App" />
        </span>
        <span>
          <Icon className="SearchBar--icon" type="search" />
        </span>
      </div>
    );
  }
}

export default SearchBar;
