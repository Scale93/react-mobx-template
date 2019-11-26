import React from 'react';
import { Layout as AntdLayout } from 'antd';

import Header from 'src/components/Header';
import SiderNavMenu from 'src/components/SiderNavMenu';
import FooterComponent from 'src/components/FooterComponent';

import './style.less';

const AntdHeader = AntdLayout.Header;
const AntdContent = AntdLayout.Content;

class Layout extends React.Component {
  render() {
    const { siderNavEntries } = this.props;
    return (
      <div className="Layout">
        <AntdLayout>
          <SiderNavMenu classnAME="sider-nav-menu--layout" siderNavEntries={siderNavEntries} />
          <AntdLayout>
            <AntdHeader>
              <Header />
            </AntdHeader>
            <AntdContent>{this.props.children}</AntdContent>
            <FooterComponent />
          </AntdLayout>
        </AntdLayout>
      </div>
    );
  }
}

export default Layout;
