import React from 'react';
import {
    Block,
    Page,
    Navbar,
    Toolbar,
} from 'framework7-react';

import { CarbCountTotal, CarbCountList, CarbCountAdd } from '../components/carb-count';

const CarbCalculator = () => (
    <Page>
        <Navbar title="Calculator" />
        <Toolbar bottom>
            <div />
            <CarbCountTotal />
        </Toolbar>
        <Block>
            <CarbCountAdd />
        </Block>
        <CarbCountList />
    </Page>
);

export default CarbCalculator;
