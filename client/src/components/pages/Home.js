import React from 'react';
import { Card, Carousel } from 'antd';

const { Meta } = Card;

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default function Home({ handleChange, handleSearch, cityName }) {
  return (
    <div>
      <h1>Travel Bug</h1>
      <input value={cityName} name="cityName" onChange={handleChange} />
      <button onClick={handleSearch}>Search</button>
      <p>
        Going on a group trip? Need a planning spot to brainstorm your trip? Look no further. Travel Bug is for you.
      </p>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
      >
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
}
