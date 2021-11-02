import MainPage from '../main-page/main-page';

type AppScreenProps = {
  cardsToRender: number;
}

function App({cardsToRender}: AppScreenProps): JSX.Element {
  return (
    <MainPage cardsToRender={cardsToRender} />
  );
}

export default App;
