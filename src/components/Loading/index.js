import React from 'react';
import { Spin, Icon } from 'antd';

import './style.less';

const Loading = (props) => {
  const antIcon = <Icon type="loading-3-quarters" xtheme="outlined" spin />;
  return (
    <div className="Loading">
      <Spin tip="Loading..." indicator={antIcon} size="large" />
    </div>
  );
};

export default Loading;
