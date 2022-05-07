import styled from 'styled-components';
import Upgrades from './components/Upgrades/Upgrades';
import GameField from './components/GameField';

const App = () => {
  return (
    <Root>
      <GameField />
      <Upgrades />
    </Root>
  );
};

export default App;

const Root = styled.div`
  display: flex;
`;
