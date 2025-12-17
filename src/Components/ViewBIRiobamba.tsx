import SectionLayout from '@/src/layouts/SectionLayout';
import React from 'react';
import { Tab, Tabs } from '../../src/Components/Tabs';
import NewButtonOne from '../../src/Components/NewButtonOne';
import GAEventButton from '../../src/Components/GAEventButton';

const DashboardTabs = () => {
  return (
    <SectionLayout className=" mt-20">
      <Tabs>
        <Tab label="Mi ciudad y yo">
          {/* Desktop View */}
          <div className="relative w-full hidden lg:block" style={{ height: '1110px' }}>
            <iframe
              src="https://app.powerbi.com/view?r=eyJrIjoiNDQ0ZDE0YmMtYmIwMi00ZWUzLWE1NDMtODY5M2U0NTU3ZGQ2IiwidCI6IjAwYzQ4YTUwLWY0MWItNDg2YS1iYjNmLTliNjJjOTFmOWU2NyJ9&pageName=ReportSection"
              className="absolute top-0 left-0 w-full h-full"
              allowFullScreen={true}
              name="Dashboard Riobamba"
            ></iframe>
          </div>

          {/* Mobile View */}
          <div className="relative w-full h-96 lg:hidden">
            <iframe
              src="https://app.powerbi.com/view?r=eyJrIjoiODUxMWZmNjUtYzhlNi00NjUxLTlhOGYtMDhhMWNmMjUyYjI0IiwidCI6IjAwYzQ4YTUwLWY0MWItNDg2YS1iYjNmLTliNjJjOTFmOWU2NyJ9&pageName=ReportSection"
              className="absolute top-0 left-0 w-full h-full"
              allowFullScreen={true}
              name="Dashboard Riobamba"
            ></iframe>
          </div>

          {/* Button to Download Data */}
          <div className="flex justify-center p-4">
            <NewButtonOne
              color="bg-hcanewblue"
              label="Descarga los datos"
              link="https://drive.google.com/drive/folders/1Qpb-TKFR_JNY77ums_N5Q9V5CPy6eQD1?usp=sharing"
              target="_blank"
            />
          </div>
        </Tab>

        <Tab label="Imaginando mi futuro">
          {/* Desktop View */}
          <div className="relative w-full hidden lg:block" style={{ height: '1110px' }}>
            <iframe
              src="https://app.powerbi.com/view?r=eyJrIjoiYWE1ZTE2NWMtYTAxYy00MTg0LTg3OWMtMTY0ZTViNDczYzNmIiwidCI6IjAwYzQ4YTUwLWY0MWItNDg2YS1iYjNmLTliNjJjOTFmOWU2NyJ9&pageName=ReportSection"
              className="absolute top-0 left-0 w-full h-full"
              allowFullScreen={true}
              name="Dashboard Riobamba"
            ></iframe>
          </div>

          {/* Mobile View */}
          <div className="relative w-full h-96 lg:hidden">
            <iframe
              src="https://app.powerbi.com/view?r=eyJrIjoiYWE1ZTE2NWMtYTAxYy00MTg0LTg3OWMtMTY0ZTViNDczYzNmIiwidCI6IjAwYzQ4YTUwLWY0MWItNDg2YS1iYjNmLTliNjJjOTFmOWU2NyJ9&pageName=ReportSection"
              className="absolute top-0 left-0 w-full h-full"
              allowFullScreen={true}
              name="Dashboard Riobamba"
            ></iframe>
          </div>

          {/* Button to Download Data */}
          <div className="flex justify-center p-4">
            <GAEventButton
              color="bg-hcanewblue"
              label="Descarga los datos"
              link="https://drive.google.com/drive/folders/1Ws9w8QLABnQEuxPK5JDLJ0Sw20DcL7HX?usp=sharing"
              eventName="datos Riobamba"
              target="_blank"
            />
          </div>
        </Tab>
      </Tabs>
    </SectionLayout>
  );
};

export default DashboardTabs;
