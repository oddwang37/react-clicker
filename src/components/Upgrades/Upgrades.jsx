import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import Item from './Item';

const Upgrades = () => {
  const buildings = useSelector((store) => store.upgrades.buildings);
  return (
    <Root>
      <Title>Upgrades</Title>
      <UpgradesList>
        {buildings.map((item) => {
          return (
            <Item
              name={item.name}
              owned={item.owned}
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
  width: 35%;
  padding: 3%;
`;
const Title = styled.div`
  font-weight: 700;
  text-align: center;
  margin-bottom: 20px;
`;

const UpgradesList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
