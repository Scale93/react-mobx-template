import React from 'react';
import { inject, observer } from 'mobx-react';
import { ROUTER_STORE } from 'src/constants';
import { Breadcrumb as AntdBreadcrumb, Icon } from 'antd';
import { pages } from 'src/pages';

import './style.less';

const AntdBreadcrumbItem = AntdBreadcrumb.Item;

@inject(ROUTER_STORE)
@observer
class Breadcrumb extends React.Component {
  sayMyName = (path) => {
    const comparePath = `/${path}`;
    const page = Object.keys(pages).filter((key) => {
      return pages[key].path === comparePath;
    });
    return page;
  };
  render() {
    const router = this.props[ROUTER_STORE];
    const pathname = router.location.pathname;
    const splittedPathname = pathname.split('/');
    const pagesName = ['App'];
    for (let i = 2; i < splittedPathname.length; i++) {
      const page = this.sayMyName(splittedPathname[i]);
      pagesName.push(pages[page].name);
    }

    return (
      <div className="Breadcrumb">
        <AntdBreadcrumb separator="/">
          <AntdBreadcrumbItem>
            <Icon type="home" />
          </AntdBreadcrumbItem>
          {pagesName.map((name, index) => (
            <AntdBreadcrumbItem key={index}>{name}</AntdBreadcrumbItem>
          ))}
        </AntdBreadcrumb>
      </div>
    );
  }
}

export default Breadcrumb;
