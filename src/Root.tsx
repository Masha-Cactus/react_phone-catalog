/* eslint-disable max-len */
import {
  Route,
  HashRouter as Router,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './Pages/HomePage';
import { ProductDetailsPage } from './Pages/ProductDetailsPage';
import { NotFoundPage } from './Pages/NotFoundPage';
import { ProductPage } from './Pages/ProductPage';
import { FavouritesPage } from './Pages/FavouritesPage';
import { CartPage } from './Pages/CartPage';

export const Root = (): JSX.Element => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="phones">
          <Route index element={<ProductPage product="phones" />} />
          <Route path=":productId" element={<ProductDetailsPage />} />
        </Route>

        <Route path="tablets">
          <Route index element={<ProductPage product="tablets" />} />
          <Route path=":productId" element={<ProductDetailsPage />} />
        </Route>

        <Route path="accessories">
          <Route index element={<ProductPage product="accessories" />} />
          <Route path=":productId" element={<ProductDetailsPage />} />
        </Route>

        <Route path="favourites" element={<FavouritesPage />} />

        <Route path="cart" element={<CartPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </Router>
);