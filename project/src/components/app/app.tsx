import MainPage from '../main-page/main-page';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import Error404 from '../error-404/error-404';
import LoginPage from '../login/login';
import RoomPage from '../room/room';
import FavoritesPage from '../favorites/favorites';
import PrivateRoute from '../private-route/private-route';

type AppScreenProps = {
  cardsToRender: number;
}

function App({cardsToRender}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Root}>
          <MainPage
            cardsToRender={cardsToRender}
          />
        </Route>
        <Route exact path={AppRoute.Login}>
          <LoginPage />
        </Route>
        <Route exact path={AppRoute.Room}>
          <RoomPage />
        </Route>
        <PrivateRoute
          exact path={AppRoute.Favorites}
          render={() => <FavoritesPage />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        <Route>
          <Error404 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
