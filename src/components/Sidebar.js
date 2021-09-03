import React from 'react';
import CreateRoomBtnModal from './CreateRoomBtnModal';
import DashboardToggle from './dashboard/DashboardToggle';

const Sidebar = () => {
  return (
    <div>
      <div className="h-100 pt-2">
        <DashboardToggle />
        <CreateRoomBtnModal />
      </div>
      bottom
    </div>
  );
};

export default Sidebar;
