import React from "react";
import { Card, Col, Row } from "antd";
import "../assets/AntdCss.css";
const Dashboard = () => {
  return (
    <div className="site-card-wrapper">
      <Row gutter={24}>
        <Col span={6}>
          <Card
            className="card-style"
            style={{ width: 300, background: "lightgreen" }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            className="card-style"
            style={{ width: 300, background: "lightblue" }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            className="card-style"
            style={{ width: 300, background: "lightgrey" }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            className="card-style"
            style={{ width: 300, background: "lightyellow" }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={6}>
          <Card
            className="card-style"
            style={{ width: 300, background: "lightgreen" }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            className="card-style"
            style={{ width: 300, background: "lightblue" }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            className="card-style"
            style={{ width: 300, background: "lightgrey" }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
        <Col span={6}>
          <Card
            className="card-style"
            style={{ width: 300, background: "lightyellow" }}
          >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Dashboard;
