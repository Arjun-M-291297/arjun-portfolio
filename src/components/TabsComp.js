import React from "react";
import "./TabsStyles.css";
import { Tabs, TabList, TabPanels, TabPanel, Tab, Box, Flex } from "@chakra-ui/react";
const TabsComp = () => {
  const experience = {
    tcs: {
      name: "TCS (Tata Consultancy Services)",
      designation: "Assistant System Engineer",
      from_date: "01/01/2021",
      to_date: "31/08/2021",
    },
    tanla: {
      name: "Tanla Platforms",
      designation: "SDE-1(Software Development Engineer 1)",
      from_date: "01/09/2021",
      to_date: "",
    },
  };
  const openCity = () => {};
  return (
    <Flex justify="center">
      <Box w="600px" pt={10} centerContent>
        <Tabs>
          <TabList >
            <Tab>{experience.tanla.name}</Tab>
            <Tab>{experience.tcs.name}</Tab>
          </TabList>
          <TabPanels>
          <TabPanel>
            <div className="experience-card">
              <span className="from-to"><h2>{experience.tanla.from_date} - {experience.tanla.to_date ? experience.tanla.to_date : 'Present' }</h2></span>
              <h2>{experience.tanla.name}</h2>
              <h3>{experience.tanla.designation}</h3>
              <ul className="points">
                <li> Part of Platform Stabilization & Portal hygiene team for improving efficiency and cost cutting across the Application.</li>
                <li> Implemented internationalization across the Application as part of business expansion to other countries.</li>
                <li> Part of Security VAPT (Vulnerability Assessment and Penetration Testing) Dev team, where we had implemented optimized ways to remove vulnerabilities across Application</li>
                <li> Part of RBAC (Role-based access control) team for restricting network access based on the roles of individual users.</li>
                <li> Ownership of Admin Portal of Application from Vuejs end.</li>
              </ul>
              </div>
            </TabPanel>
            <TabPanel>
              <div className="experience-card">
              <span className="from-to"><h2>{experience.tcs.from_date} - {experience.tcs.to_date}</h2></span>
              <h2>{experience.tcs.name}</h2>
              <h3>{experience.tcs.designation}</h3>
              <ul className="points">
                <li> Was part of Automation team, worked on Java Programming, Selenium WebDriver, Cucumber and TestNG</li>
              </ul>
              </div>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  );
};

export default TabsComp;
