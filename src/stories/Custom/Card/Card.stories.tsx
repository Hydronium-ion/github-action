import React from 'react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';

import Card from '@/components/Custom/Card/Card.component';
import { CARD_DATA } from '@/components/Custom/Card/Card.data';

export default {
  title: 'custom|Card',
  component: Card,
  decorators: [withKnobs]
};

export const card = () => {
  return <Card {...CARD_DATA} />;
};
