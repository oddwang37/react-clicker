import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { increment, incrementByAmount } from './../redux/features/upgradesSlice';
import cookie from '../assets/icons/cookie.svg';

const GameField = () => {
  const counter = useSelector((store) => store.upgrades.sum);
  const perSecond = useSelector((store) => store.upgrades.perSecond);
  const dispatch = useDispatch();

  useEffect(() => {
    let tick;
    if (tick) {
      clearInterval(tick);
    }
    tick = setInterval(() => {
      dispatch(incrementByAmount(perSecond));
    }, 1000);
  }, [perSecond]);
  return (
    <Root>
      <Cookies>{counter.toFixed(2)} cookies</Cookies>
      <PerSecond>{perSecond.toFixed(2)} per second</PerSecond>
      <Icon>
        <img src={cookie} onClick={() => dispatch(increment())} alt="cookie" />
      </Icon>
    </Root>
  );
};

export default GameField;

const Root = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 3%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const PerSecond = styled.div`
  font-size: 20px;
  text-transform: uppercase;
  color: #fff;
  margin-top: 3%;
  font-size: 20px;
`;
const Cookies = styled.div`
  font-family: 'Organic Relief';
  text-transform: uppercase;
  color: #2c1e11;
  font-size: 18px;
  background-color: #ffc384;
  border: 3px solid #984b1f;
  padding: 20px;
  border-radius: 50px;
`;

const Icon = styled.div`
  width: 35%;
  margin-top: 4%;
  cursor: pointer;
`;
