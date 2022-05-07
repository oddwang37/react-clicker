import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { buyUpgrade } from '../../redux/features/upgradesSlice';

const Item = ({ name, description, price, owned, id }) => {
  const dispatch = useDispatch();
  const buyBuilding = () => {
    dispatch(buyUpgrade(id));
  };
  return (
    <Root>
      <div>
        <Title>{name}</Title>
        <div>{owned}</div>
        <Description>{description}</Description>
      </div>
      <div>
        <Button onClick={buyBuilding}>
          Buy 1 <br /> {price.toFixed(2)}
        </Button>
        <Button>Info</Button>
      </div>
    </Root>
  );
};

export default Item;

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Title = styled.div`
  font-weight: 700;
`;
const Description = styled.div`
  margin-top: 5px;
`;
const Button = styled.button`
  width: 80px;
  height: 35px;
  margin-bottom: 10px;
  display: block;
`;
