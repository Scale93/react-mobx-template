import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';

import Logo from 'src/components/Logo';

import './style.less';

const Sider = Layout.Sider;
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

class SiderNavMenu extends React.Component {
  static defaultProps = {
    __ANT_LAYOUT_SIDER: true,
  };

  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    const { siderNavEntries } = this.props;

    return (
      <div className="SiderNavMenu">
        <div className="SiderNavMenu--logo-box">
          <Logo />
        </div>
        <Sider
          width={250}
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['1-1']}
            forceSubMenuRender={true}
            mode="inline"
          >
            {siderNavEntries.map((entry, entryIndex) => (
              <SubMenu
                key={`${entryIndex}`}
                title={
                  <span>
                    <Icon type={entry.icon} />
                    <span>{entry.name}</span>
                  </span>
                }
                style={{ fontSize: 50 }}
              >
                {entry.pages.map((page, pageIndex) => (
                  <MenuItem key={`${entryIndex}-${pageIndex}`}>
                    <Icon type={page.icon} />
                    <span>{page.name}</span>
                    <Link to={page.path} />
                  </MenuItem>
                ))}
              </SubMenu>
            ))}
          </Menu>
        </Sider>
      </div>
    );
  }
}

export default SiderNavMenu;
