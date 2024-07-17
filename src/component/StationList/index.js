import React, { useEffect, useRef, useState } from 'react';
import StationItem from '../../views/StationItem';
import data from './resource/RailwayStationInfo.json';
import settingIcon from './resource/settings.svg';
import FilterDialog from '../../dialog/filterStation'
import SearchBar from '../SearchBar'
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
        <ul className='StationList-items'>
          {data.Stations.map((item) => (
            <li key={item.StationID}>
              <StationItem {...item} />
            </li>
          ))}
        </ul>
      {isDialogOpen && (
        <FilterDialog onClose={handleCloseDialog}></FilterDialog>
      )}
    </div>
  );
};
