import React from "react";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { FaGem, FaUsersCog, FaTicketAlt } from "react-icons/fa";
import { FcNeutralTrading } from "react-icons/fc";
import { CgEditBlackPoint } from "react-icons/cg";
import { RiLuggageDepositLine } from "react-icons/ri";
import { BsCashStack } from "react-icons/bs";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { AiOutlineGateway } from "react-icons/ai";
import { FiMail } from "react-icons/fi";
import "./Sidenav.css";
import { Link } from "react-router-dom";

const Sidenav = () => {
  // const [side, setSide] = useState(false);
  // const showSideNav = () => {
  //   setSide(Prof);
  // };
  return (
    <ProSidebar>
      <Menu iconShape="square" className="side-nav">
        <MenuItem className="menu-item" icon={<FaGem />}>
          <Link to="/dashboard"> Dashboard</Link>
        </MenuItem>
        <SubMenu
          className="sub-menu"
          title="Manage Users"
          icon={<FaUsersCog />}
        >
          <MenuItem className="menu-item" icon={<CgEditBlackPoint />}>
            <Link to="/users/all">All Users</Link>
          </MenuItem>
          <MenuItem className="menu-item" icon={<CgEditBlackPoint />}>
            <Link to="/users/active"> Active Users</Link>
          </MenuItem>
          <MenuItem className="menu-item" icon={<CgEditBlackPoint />}>
            <Link to="/users/banned">Banned Users</Link>
          </MenuItem>
          <MenuItem className="menu-item" icon={<CgEditBlackPoint />}>
            <Link to="/users/eunverified">Email Unverified</Link>
          </MenuItem>
          <MenuItem className="menu-item" icon={<CgEditBlackPoint />}>
            <Link to="/users/sunverified">SMS Unverified</Link>
          </MenuItem>
          <MenuItem className="menu-item" icon={<CgEditBlackPoint />}>
            <Link to="/users/mail">Send Email</Link>
          </MenuItem>
        </SubMenu>
        <SubMenu
          className="sub-menu"
          title="Trade Log"
          icon={<FcNeutralTrading />}
        >
          <MenuItem className="menu-item" icon={<CgEditBlackPoint />}>
            <Link to="/trade/all"> All</Link>
          </MenuItem>
          <MenuItem className="menu-item" icon={<CgEditBlackPoint />}>
            <Link to="/trade/wining"> Wining</Link>
          </MenuItem>
          <MenuItem className="menu-item" icon={<CgEditBlackPoint />}>
            <Link to="/trade/losing">Losing</Link>
          </MenuItem>
          <MenuItem className="menu-item" icon={<CgEditBlackPoint />}>
            <Link to="/trade/draw"> Draw</Link>
          </MenuItem>
        </SubMenu>
        <SubMenu
          className="sub-menu"
          title="Payment Gateways"
          icon={<AiOutlineGateway />}
        >
          <MenuItem className="menu-item" icon={<CgEditBlackPoint />}>
            <Link to="/gateways/auto">Automatic Gateways</Link>
          </MenuItem>
          <MenuItem className="menu-item" icon={<CgEditBlackPoint />}>
            <Link to="/gateways/manual"> Manual Gateways</Link>
          </MenuItem>
        </SubMenu>
        <SubMenu
          className="sub-menu"
          title="Deposits"
          icon={<RiLuggageDepositLine />}
        >
          <MenuItem className="menu-item" icon={<CgEditBlackPoint />}>
            <Link to="/deposits/pending">Pending Deposits</Link>
          </MenuItem>
          <MenuItem className="menu-item" icon={<CgEditBlackPoint />}>
            <Link to="/deposits/approved">Approved Deposits</Link>
          </MenuItem>
          <MenuItem className="menu-item" icon={<CgEditBlackPoint />}>
            <Link to="/deposits/successful">Successful Deposits</Link>
          </MenuItem>
          <MenuItem className="menu-item" icon={<CgEditBlackPoint />}>
            <Link to="/deposits/rejected">Reject Deposits</Link>
          </MenuItem>
          <MenuItem className="menu-item" icon={<CgEditBlackPoint />}>
            <Link to="/deposits/all">All Deposits</Link>
          </MenuItem>
        </SubMenu>
        <SubMenu
          className="sub-menu"
          title="Withdrawals"
          icon={<BsCashStack />}
        >
          <MenuItem className="menu-item" icon={<CgEditBlackPoint />}>
            <Link to="/withdrawals/method"> Withdrawals Methods</Link>
          </MenuItem>
          <MenuItem className="menu-item" icon={<CgEditBlackPoint />}>
            <Link to="/withdrawals/approved">Approved Withdrawals</Link>
          </MenuItem>
          <MenuItem className="menu-item" icon={<CgEditBlackPoint />}>
            <Link to="/withdrawals/pending">Pending Withdrawals</Link>
          </MenuItem>
          <MenuItem className="menu-item" icon={<CgEditBlackPoint />}>
            <Link to="/withdrawals/rejected">Reject Withdrawals</Link>
          </MenuItem>
          <MenuItem className="menu-item" icon={<CgEditBlackPoint />}>
            <Link to="/withdrawals/log"> Withdrawals Log</Link>
          </MenuItem>
        </SubMenu>
        <SubMenu
          className="sub-menu"
          title="Support Tickets"
          icon={<FaTicketAlt />}
        >
          <MenuItem className="menu-item" icon={<CgEditBlackPoint />}>
            <Link to="/tickets/all">All Tickets</Link>
          </MenuItem>
          <MenuItem icon={<CgEditBlackPoint />}>
            <Link to="/tickets/pending">Pending Tickets</Link>
          </MenuItem>
          <MenuItem className="menu-item" icon={<CgEditBlackPoint />}>
            <Link to="/tickets/closed">Closed Tickets</Link>
          </MenuItem>
          <MenuItem className="menu-item" icon={<CgEditBlackPoint />}>
            <Link to="/tickets/answered">Answered Tickets</Link>
          </MenuItem>
        </SubMenu>
        <SubMenu
          className="sub-menu"
          title="Reports"
          icon={<HiOutlineDocumentReport />}
        >
          <MenuItem className="menu-item" icon={<CgEditBlackPoint />}>
            <Link to="/logs/transaction"> Transaction Log</Link>
          </MenuItem>
          <MenuItem className="menu-item" icon={<CgEditBlackPoint />}>
            <Link to="/logs/commission">Commission Log</Link>
          </MenuItem>
          <MenuItem className="menu-item" icon={<CgEditBlackPoint />}>
            <Link to="/logs/history">Login History</Link>
          </MenuItem>
        </SubMenu>
        <h3 style={{ padding: "0px 0px 0px 20px" }}>Settings</h3>
        <SubMenu className="sub-menu" title="Email Manager" icon={<FiMail />}>
          <MenuItem className="menu-item" icon={<CgEditBlackPoint />}>
            <Link to="/email/global">Global Templete</Link>
          </MenuItem>
          <MenuItem className="menu-item" icon={<CgEditBlackPoint />}>
            <Link to="/email/template">Email Templete</Link>
          </MenuItem>
          <MenuItem className="menu-item" icon={<CgEditBlackPoint />}>
            <Link to="/email/configure">Email Configure</Link>
          </MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
};

export default Sidenav;
