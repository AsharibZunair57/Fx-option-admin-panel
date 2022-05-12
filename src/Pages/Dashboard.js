import React from "react";
import { Card, Col, Row, Button } from "antd";
import "../assets/AntdCss.css";
import MultiLineChart from "../components/charts/MultiLineChart";
const Dashboard = () => {
  const cardContent = [
    {
      title: "Total Users",
      count: 9,
    },
    {
      title: "Total Verified Users",
      count: 0,
    },
    {
      title: "Total Email Unverified Users",
      count: 2,
    },
    {
      title: "Total SMS Unverified Users",
      count: 0,
    },
    {
      title: "Total Crypto Currency",
      count: 99,
    },
    {
      title: "Total Trade Log",
      count: 5,
    },
    {
      title: "Total Wining Trade",
      count: 19,
    },
    {
      title: "Total Losing Trade",
      count: 1,
    },
  ];

  return (
    <>
      <div className="site-card-wrapper">
        <Row gutter={24}>
          {cardContent.map((item) => {
            return (
              <Col
                style={{ borderRadius: "8px" }}
                xl={6}
                lg={8}
                md={12}
                sm={24}
              >
                <Card
                  className="card-style"
                  style={{ width: "300px", maxWidth: "100%" }}
                >
                  <h2>{item.count}</h2>
                  <p>{item.title}</p>
                  <Button style={{ borderRadius: "8px" }}>View All</Button>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
      <div className="site-card-wrapper">
        <Row gutter={8}>
          <Col span={12}>
            <Card style={{ borderRadius: "8px" }}>
              <MultiLineChart />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Dashboard;
