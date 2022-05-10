import Main from "./components/Main";
import { Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import AllDeposit from "./Pages/Deposits/AllDeposit";
import ApprovedDeposit from "./Pages/Deposits/ApprovedDeposit";
import PendingDeposit from "./Pages/Deposits/PendingDeposit";
import RejectedDeposit from "./Pages/Deposits/RejectedDeposit";
import SucessfulDeposit from "./Pages/Deposits/SucessfulDeposit";
import EmailConfigure from "./Pages/EmailManager/EmailConfigure";
import EmailTemplate from "./Pages/EmailManager/EmailTemplate";
import GlobalTemplete from "./Pages/EmailManager/GlobalTemplate";
import ActiveUsers from "./Pages/ManageUsers/ActiveUsers";
import AllUsers from "./Pages/ManageUsers/AllUsers";
import BannedUsers from "./Pages/ManageUsers/BannedUsers";
import EmailUnverified from "./Pages/ManageUsers/EmailUnverified";
import SMSUnverified from "./Pages/ManageUsers/SMSUnverified";
import SendEmail from "./Pages/ManageUsers/SendEmail";
import AutomaticGateway from "./Pages/PaymentGateways/AutomaticGateway";
import ManualGateway from "./Pages/PaymentGateways/ManualGateway";
import CommissionLog from "./Pages/Reports/CommissionLog";
import LoginHistory from "./Pages/Reports/LoginHistory";
import TransactonLog from "./Pages/Reports/TransactonLog";
import AllTickets from "./Pages/SupportTickets/AllTickets";
import ClosedTickets from "./Pages/SupportTickets/ClosedTickets";
import AnsweredTickets from "./Pages/SupportTickets/AnsweredTickets";
import PendingTickets from "./Pages/SupportTickets/PendingTickets";
import All from "./Pages/TradeLog/All";
import Draw from "./Pages/TradeLog/Draw";
import Losing from "./Pages/TradeLog/Losing";
import Wining from "./Pages/TradeLog/Wining";
import ApprovedWithdarawls from "./Pages/Withdrawals/ApprovedWithdrawals";
import PendingWithdrawals from "./Pages/Withdrawals/PendingWithdrawals";
import RejectedWithdrawals from "./Pages/Withdrawals/RejectedWithdrawals";
import WithdrawalsLog from "./Pages/Withdrawals/WithdrawalsLog";
import WithdrawalsMethods from "./Pages/Withdrawals/WithdrawalsMethods";
import { Switch } from "react-router-dom";
import "./App.css";
// import Sidenav from "./components/SideNav/Sidenav";
import Notifications from "./Pages/Notifications";
import Profile from "./Pages/Profile";
import Password from "./Pages/Password";
// import Sidenav from "./components/SideNav/Sidenav";

function App() {
  return (
    <div>
      <Switch>
        <Main>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/deposits/all" component={AllDeposit} />
          <Route exact path="/deposits/approved" component={ApprovedDeposit} />
          <Route exact path="/deposits/pending" component={PendingDeposit} />
          <Route exact path="/deposits/rejected" component={RejectedDeposit} />
          <Route
            exact
            path="/deposits/sucessful"
            component={SucessfulDeposit}
          />
          <Route exact path="/email/configure" component={EmailConfigure} />
          <Route exact path="/email/template" component={EmailTemplate} />
          <Route exact path="/email/global" component={GlobalTemplete} />
          <Route exact path="/users/active" component={ActiveUsers} />
          <Route exact path="/users/all" component={AllUsers} />
          <Route exact path="/users/banned" component={BannedUsers} />
          <Route exact path="/users/eunverified" component={EmailUnverified} />
          <Route exact path="/users/sunverified" component={SMSUnverified} />
          <Route exact path="/users/mail" component={SendEmail} />
          <Route exact path="/gateways/auto" component={AutomaticGateway} />
          <Route exact path="/gateways/manual" component={ManualGateway} />
          <Route exact path="/logs/transaction" component={TransactonLog} />
          <Route exact path="/logs/commission" component={CommissionLog} />
          <Route exact path="/logs/history" component={LoginHistory} />
          <Route exact path="/tickets/all" component={AllTickets} />
          <Route exact path="/tickets/closed" component={ClosedTickets} />
          <Route exact path="/tickets/answered" component={AnsweredTickets} />
          <Route exact path="/tickets/pending" component={PendingTickets} />
          <Route exact path="/trade/all" component={All} />
          <Route exact path="/trade/wining" component={Wining} />
          <Route exact path="/trade/losing" component={Losing} />
          <Route exact path="/trade/draw" component={Draw} />
          <Route
            exact
            path="/withdarwals/approved"
            component={ApprovedWithdarawls}
          />
          <Route
            exact
            path="/withdrawals/pending"
            component={PendingWithdrawals}
          />
          <Route
            exact
            path="/withdrawals/rejected"
            component={RejectedWithdrawals}
          />
          <Route exact path="/withdrawals/log" component={WithdrawalsLog} />
          <Route
            exact
            path="/withdrawals/method"
            component={WithdrawalsMethods}
          />
          <Route exact path="/notification" component={Notifications} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/password" component={Password} />
        </Main>
      </Switch>
    </div>
  );
}

export default App;
