import React from 'react';
import {
  Page,
  Block,
  Navbar,
  Swiper,
  Toolbar,
  SwiperSlide,
} from 'framework7-react';

import {
  CarbCountAddRatio,
  CarbCountTotal,
  CarbCountList,
  CarbCountAdd,
} from '../components/carb-count';

const CarbCalculator = () => (
  <Page>
    <Navbar title="Carbulator" />
    <Toolbar bottom>
      <CarbCountTotal />
    </Toolbar>
    <Swiper scrollbar>
      <SwiperSlide>
        <Block>
          <CarbCountAdd />
        </Block>
      </SwiperSlide>
      <SwiperSlide>
        <Block>
          <CarbCountAddRatio />
        </Block>
      </SwiperSlide>
    </Swiper>
    <CarbCountList />
  </Page>
);

export default CarbCalculator;
