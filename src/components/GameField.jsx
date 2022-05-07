import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { increment, incrementByAmount } from './../redux/features/upgradesSlice';

const GameField = () => {
  const counter = useSelector((store) => store.upgrades.sum);
  const perSecond = useSelector((store) => store.upgrades.perSecond);
  const dispatch = useDispatch();

  useEffect(() => {
    let tick;
    if (tick) {
      clearInterval(tick);
    }
    tick = setInterval(() => setTimeout(dispatch(incrementByAmount(perSecond)), 1000), 1000);
  }, [perSecond]);
  return (
    <Root>
      <MainButton onClick={() => dispatch(increment())}>Click</MainButton>
      <div>{perSecond.toFixed(2)} per second</div>
      <div>{counter.toFixed(2)}</div>
    </Root>
  );
};

export default GameField;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 5%;
`;

const MainButton = styled.button`
  width: 300px;
  height: 50px;
  display: block;
`;
