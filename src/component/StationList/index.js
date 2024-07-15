import React, { useEffect, useRef, useState } from 'react';
import StationItem from '../../views/StationItem';
import data from './resource/RailwayStationInfo.json';
import settingIcon from './resource/settings.svg';
import FilterDialog from '../../dialog/filterStation'
import DisLike from '../../views/DisLikeItem';
import './index.css';

export default function StationList() {
  const [isDialogOpen, setIsDialogOpen] = useState(false); // 狀態管理對話框顯示
  const resizeObserver = useRef(null);
  const gridRef = useRef(null);

  useEffect(() => {
    let resizeTimeout;

    const handleResize = () => {
      if (gridRef.current) {
        const gridWidth = gridRef.current.offsetWidth;
        const columnCount = Math.floor(gridWidth / 300);

        clearTimeout(resizeTimeout);

        resizeTimeout = setTimeout(() => {
          document.documentElement.style.setProperty('--column-count', columnCount);
        }, 1);
      }
    };

    resizeObserver.current = new ResizeObserver(handleResize);

    if (gridRef.current) {
      resizeObserver.current.observe(gridRef.current);
    }

    return () => {
      if (resizeObserver.current && gridRef.current) {
        resizeObserver.current.unobserve(gridRef.current);
      }
    };
  }, []);

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
              <li>
                <StationItem key={item.StationID} {...item} />
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
