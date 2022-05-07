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
        <Title>
          {name} ({owned})
        </Title>
        <Description>{description}</Description>
      </div>
      <Inner>
        <Button onClick={buyBuilding}>
          Buy 1 <br /> {price.toFixed(2)}
        </Button>
        <Button>Info</Button>
      </Inner>
    </Root>
  );
};

export default Item;

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
  margin-bottom: 15px;
  color: #753916;
`;

const Inner = styled.div`
  display: flex;
  gap: 10px;
`;

const Title = styled.div`
  font-weight: 700;
  font-family: 'Organic Relief';
  text-transform: uppercase;
  font-size: 16px;
`;
const Description = styled.div`
  margin-top: 10px;
`;
const Button = styled.button`
  padding: 10px 20px;
  margin-bottom: 10px;
  display: block;
  font-family: inherit;
  background-color: #984b1f;
  color: #ffc384;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  border: none;
  &:hover {
    transform: scale(1.1);
    border: 2px solid #04b41b;
  }
`;
