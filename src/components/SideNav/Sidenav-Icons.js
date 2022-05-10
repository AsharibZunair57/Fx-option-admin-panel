import * as FaIcons from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
// import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import * as RiIcons from "react-icons/ri";
export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <MdDashboard style={{ color: "black" }} />,
    cName: "nav-text",
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subMenu: [
      {
        title: "Dashboard",
        path: "/dashboard/dashboard ",
        icon: <MdDashboard style={{ color: "black" }} />,
        cName: "nav-text",
      },
      {
        title: "Dashboard 2",
        path: "/dashboard/dashboard2 ",
        icon: <MdDashboard style={{ color: "black" }} />,
        cName: "nav-text",
      },
    ],
  },
  {
    title: "Users",
    path: "/users",
    icon: <FiUsers style={{ color: "black" }} />,
    cName: "nav-text",
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaIcons.FaCartPlus style={{ color: "black" }} />,
    cName: "nav-text",
  },
  {
    title: "Team",
    path: "/team",
    icon: <IoIcons.IoMdPeople style={{ color: "black" }} />,
    cName: "nav-text",
  },
  {
    title: "Messages",
    path: "/messages",
    icon: <FaIcons.FaEnvelopeOpenText style={{ color: "black" }} />,
    cName: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle style={{ color: "black" }} />,
    cName: "nav-text",
  },
];
