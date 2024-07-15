import React, { useEffect, useRef, useState } from 'react';
import StationItem from '../../views/StationItem';
import data from './resource/RailwayStationInfo.json';
import settingIcon from './resource/settings.svg';
import FilterDialog from '../../dialog/filterStation'
import './index.css';

export default function StationList() {
  const [isDialogOpen, setIsDialogOpen] = useState(false); // 狀態管理對話框顯示

  const handleIconClick = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <div className='StationList'>
      <div className='StationList-header'>
        <h5>列表</h5>
        <img src={settingIcon} onClick={handleIconClick} alt="Settings Icon" />
      </div>
      <div>
        <ul className='StationList-items'>
          {data.Stations.map((item) => (
            <li key={item.StationID}>
              <StationItem {...item} />
            </li>
          ))}
        </ul>
      </div>
      {isDialogOpen && (
        <FilterDialog onClose={handleCloseDialog}></FilterDialog>
      )}
    </div>
  );
};
