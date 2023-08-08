import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#93c47d',
};
const contentStyleTwo: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#e3cc88',
  };
  const contentStyleThree: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#6d9eeb',
  };
  const contentStyleFour: React.CSSProperties = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#c27ba0',
  };

const BannerAG: React.FC = () => (
  <Carousel effect="fade" autoplay={true}>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyleTwo}>2</h3>
    </div>
    <div>
      <h3 style={contentStyleThree}>3</h3>
    </div>
    <div>
      <h3 style={contentStyleFour}>4</h3>
    </div>
  </Carousel>
);

export default BannerAG;