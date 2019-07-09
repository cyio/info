import React from 'react';
import { Row, Col } from 'antd';
import TradingViewWidget, { Themes } from 'react-tradingview-widget';
import TechnicalAnalysisWidget from '../../components/tradingview/TechnicalAnalysisWidget';
import { createMainCard } from '../common';
import { browsers, tools } from '../../data/btc';

const BtcPage = () => (
  <Row gutter={24}>
    <Col xl={17} lg={24} md={24} sm={24} xs={24}>
      <div style={{marginBottom: 24}}>
        <TradingViewWidget symbol='BINANCE:BTCUSDT' locale='zh_CN' width='100%' interval='120' theme={Themes.DARK}/>    
      </div>
      {createMainCard('区块浏览器', browsers)}
      {createMainCard('工具', tools)}
    </Col>

    <Col xl={7} lg={24} md={24} sm={24} xs={24}>
      <TechnicalAnalysisWidget symbol='BINANCE:BTCUSDT' isTransparent={true} />
    </Col>
  </Row>
)

export default BtcPage;