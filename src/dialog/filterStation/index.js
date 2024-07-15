import React from 'react';
import './index.css'; // 確保包含必要的 CSS 樣式
import CloseIcon from './resource/close.svg'

export default function FilterStation(props) {
  return (
    <div className='FitlerStation-overlay'>
      <div className='FitlerStation'>
        <div className='FitlerStation-header'>
            <h3>搜尋車站</h3>
            <img className='FitlerStation-header-close ' src={CloseIcon} onClick={props.onClose}></img>
        </div>
      </div>
    </div>
  );
}
