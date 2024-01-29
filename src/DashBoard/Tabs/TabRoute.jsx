import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import AgentTransaction from "../Agent Home/AgentTransaction";
import UserTransection from "../User Home/UserTransection";

const TabRoute = () => {
  return (
    <Tabs>
      <TabList>
        <Tab>Outgoing Amount</Tab>
        <Tab>Incoming Amount</Tab>
      </TabList>

      <TabPanel>
        <AgentTransaction></AgentTransaction>
      </TabPanel>
      <TabPanel>
        <UserTransection></UserTransection>
      </TabPanel>
    </Tabs>
  );
};

export default TabRoute;
