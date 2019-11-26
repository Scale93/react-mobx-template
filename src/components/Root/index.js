import React from 'react';

class Root extends React.Component {
  static renderDevTool() {
    if (process.env.NODE_ENV !== 'production') {
      const DevTools = require('mobx-react-devtools').default;
      return <DevTools />;
    }
    return undefined;
  }

  render() {
    return (
      <div className="Root">
        {this.props.children}
        {Root.renderDevTool()}
      </div>
    );
  }
}

export default Root;
