import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Item from './Item';

const Upgrades = () => {
  const buildings = useSelector((store) => store.upgrades.buildings);
  return (
    <Root>
      <Title>Buildings</Title>
      <UpgradesList>
        {buildings.map((item) => {
          return (
            <Item
              name={item.name}
              owned={item.info.owned}
              description={item.description}
              price={item.price}
              id={item.id}
            />
          );
        })}
      </UpgradesList>
    </Root>
  );
};

export default Upgrades;

const Root = styled.div`
  width: 50%;
  padding: 3%;
  background-color: #ffc384;
  border: 5px solid #984b1f;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;
const Title = styled.div`
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
  font-family: 'Organic Relief';
  text-transform: uppercase;
  color: #2c1e11;
  font-size: 18px;
`;

const UpgradesList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
