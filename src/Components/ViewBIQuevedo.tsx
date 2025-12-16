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
              src="https://app.powerbi.com/view?r=eyJrIjoiNDU1NmY4MzUtZDg4ZS00NGY5LWEyZDAtMWMwMWE0NzM3MjM2IiwidCI6IjAwYzQ4YTUwLWY0MWItNDg2YS1iYjNmLTliNjJjOTFmOWU2NyJ9&pageName=ReportSection"
              className="absolute top-0 left-0 w-full h-full"
              allowFullScreen={true}
              name="Dashboard Quevedo"
            ></iframe>
          </div>

          {/* Mobile View */}
          <div className="relative w-full h-96 lg:hidden">
            <iframe
              src="https://app.powerbi.com/view?r=eyJrIjoiZDc5NmEyMmYtMDQ5MC00MjY3LThjNzMtYmNjNjY1MDkwNjUyIiwidCI6IjAwYzQ4YTUwLWY0MWItNDg2YS1iYjNmLTliNjJjOTFmOWU2NyJ9&pageName=ReportSection"
              className="absolute top-0 left-0 w-full h-full"
              allowFullScreen={true}
              name="Dashboard Quevedo"
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
              src="https://app.powerbi.com/view?r=eyJrIjoiYmY3N2U0ZTUtMTZkOC00NDZjLTkxNjUtODc3YzRjZTVhMDk3IiwidCI6IjAwYzQ4YTUwLWY0MWItNDg2YS1iYjNmLTliNjJjOTFmOWU2NyJ9&pageName=ReportSection"
              className="absolute top-0 left-0 w-full h-full"
              allowFullScreen={true}
              name="Dashboard Quevedo"
            ></iframe>
          </div>

          {/* Mobile View */}
          <div className="relative w-full h-96 lg:hidden">
            <iframe
              src="https://app.powerbi.com/view?r=eyJrIjoiMzBkYzY4ZTYtNmIyYS00MWE5LWI0NzUtZDA3YTE4ZTNjMDc3IiwidCI6IjAwYzQ4YTUwLWY0MWItNDg2YS1iYjNmLTliNjJjOTFmOWU2NyJ9&pageName=ReportSection"
              className="absolute top-0 left-0 w-full h-full"
              allowFullScreen={true}
              name="Dashboard Quevedo"
            ></iframe>
          </div>

          {/* Button to Download Data */}
          <div className="flex justify-center p-4">
            <GAEventButton
              color="bg-hcanewblue"
              label="Descarga los datos"
              link="https://drive.google.com/drive/folders/1Ws9w8QLABnQEuxPK5JDLJ0Sw20DcL7HX?usp=sharing"
              eventName="datosQuevedo"
              target="_blank"
            />
          </div>
        </Tab>
      </Tabs>
    </SectionLayout>
  );
};

export default DashboardTabs;
