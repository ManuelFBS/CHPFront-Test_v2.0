import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { UsersProvider } from './context/UsersContext';
import { ArticlesProvider } from './context/ArticlesContext';
import {
  ArticlesPage,
  DashboardPage,
  HomePage,
  LoginPage,
  ProtectedRoutes,
  RegisterPage,
  SchedulesPage,
  UsersPage,
} from './pages';
import { NavBarMain } from './components/Navs/NavBarMain';

function App() {
  return (
    <AuthProvider>
      <UsersProvider>
        <BrowserRouter>
          <NavBarMain />
          <main className="container mx-auto px-10 pt-4">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/login"
                element={<LoginPage />}
              />
              <Route
                path="/register"
                element={<RegisterPage />}
              />
              {/* // ============ Rutas protegidas ===========
              // // ============ (desde el Front)
              ============ //
              <Route element={<ProtectedRoutes />}>
                <Route
                  path="/dashboard"
                  element={<DashboardPage />}
                />
                <Route
                  path="/owner/schedules"
                  element={<SchedulesPage />}
                />
                <Route
                  path="/owner/users"
                  element={<UsersPage />}
                />
                <Route
                  path="/owner/articles"
                  element={<ArticlesPage />}
                ></Route>
                <Route
                  path="/users/articles"
                  element={<ArticlesPage />}
                />
              </Route>
              // ======================================== // */}
            </Routes>
            <ArticlesProvider>
              <Routes>
                // ============ Rutas protegidas ===========
                // // ============ (desde el Front)
                ============ //
                <Route element={<ProtectedRoutes />}>
                  <Route
                    path="/dashboard"
                    element={<DashboardPage />}
                  />
                  <Route
                    path="/owner/schedules"
                    element={<SchedulesPage />}
                  />
                  <Route
                    path="/owner/users"
                    element={<UsersPage />}
                  />
                  <Route
                    path="/owner/articles"
                    element={<ArticlesPage />}
                  ></Route>
                  <Route
                    path="/users/articles"
                    element={<ArticlesPage />}
                  />
                </Route>
                // ========================================
                //
              </Routes>
            </ArticlesProvider>
          </main>
        </BrowserRouter>
      </UsersProvider>
    </AuthProvider>
  );
}

export default App;
