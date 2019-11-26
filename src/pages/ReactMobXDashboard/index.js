import React from 'react';
import { hot } from 'react-hot-loader';
import { Row, Col, Divider, Table, Button } from 'antd';
import { inject, observer } from 'mobx-react';
import { REACT_MOBX_DASHBOARD_STORE } from 'src/constants';
import Breadcrumb from 'src/components/Breadcrumb';
import ReportCard from 'src/components/ReportCard';
import LineMeter from 'src/components/LineMeter';
import './style.less';

@inject(REACT_MOBX_DASHBOARD_STORE)
@observer
class ReactMobXDashboard extends React.Component {
  componentDidMount() {
    // this.props[REACT_MOBX_DASHBOARD_STORE].getDashboardTable();
  }

  buttonClick = () => {
    this.props[REACT_MOBX_DASHBOARD_STORE].getDashboardTable();
  };

  render() {
    const dataSource = this.props[REACT_MOBX_DASHBOARD_STORE].dashboardTableData.slice();

    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
      },
    ];

    return (
      <div>
        <Breadcrumb />
        <Divider orientation="center" style={{ margin: '0 0 16px 0' }} />
        <Row>
          <Col lg={{ span: 6 }} className="card-container--small">
            <ReportCard title="ReactMobX">
              <h1>ReactMobX</h1>
            </ReportCard>
          </Col>
          <Col lg={{ span: 18 }} className="card-container--small">
            <ReportCard title="ReactMobX Lorem Ipsum">
              <h3>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                with desktop publishing software like Aldus PageMaker including versions of Lorem
                Ipsum.
              </h3>
            </ReportCard>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 12 }} className="card-container--large">
            <ReportCard title="Line Meter">
              <LineMeter />
            </ReportCard>
          </Col>
          <Col lg={{ span: 12 }} className="card-container--large">
            <ReportCard title="ReactMobX Table">
              <Button className="load-btn" onClick={this.buttonClick}>
                Load data
              </Button>
              <Table dataSource={dataSource} pagination={{ pageSize: 5 }} columns={columns} />;
            </ReportCard>
          </Col>
        </Row>
      </div>
    );
  }
}

export default hot(module)(ReactMobXDashboard);
