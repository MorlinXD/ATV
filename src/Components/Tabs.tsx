'use client';
import { FC, useState, ReactElement } from 'react';

interface TabsProps {
  children: ReactElement<TabProps>[]; // Aseguramos que cada hijo sea un Tab
}

interface TabProps {
  label: string;
  children: React.ReactNode;
}

const Tabs: FC<TabsProps> = ({ children }) => {
  const [activeTab, setActiveTab] = useState<string>(children[0].props.label);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>, newActiveTab: string) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="container mx-auto">
      <div className="flex border-b border-hcaneworange">
        {children.map((child) => (
          <button
            key={child.props.label}
            className={`${
              activeTab === child.props.label
                ? 'border-b-4 border-hcanewblue text-hcanewblue text-xl'
                : ''
            } flex-1 font-marker text-hcablack text-primary lg:text-4xl py-2`}
            onClick={(e) => handleClick(e, child.props.label)}
          >
            {child.props.label}
          </button>
        ))}
      </div>
      <div className="py-4">
        {children.map((child) => {
          if (child.props.label === activeTab) {
            return <div key={child.props.label}>{child.props.children}</div>;
          }
          return null;
        })}
      </div>
    </div>
  );
};

const Tab: FC<TabProps> = ({ label, children }) => {
  return (
    <div className="hidden">
      <h3>{label}</h3>
      {children}
    </div>
  );
};

export { Tabs, Tab };
