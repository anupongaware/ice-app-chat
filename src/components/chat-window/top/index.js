import React, { memo, meno } from 'react';
import { useCurrentRoom } from '../../../context/current-room.context';

const Top = () => {
  const name = useCurrentRoom(v => v.name);

  return <div>{name}</div>;
};

export default memo(Top);
