import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export function NavBarMain() {
  const { isAuthenticated, isOwner, logOut, user } =
    useAuth();

  return (
    <nav className="bg-zinc-700 my-2 mr-4 ml-4 mb-0 flex justify-between py-3 px-8 rounded-lg">
      {isAuthenticated ? (
        isOwner ? (
          <Link to={'/users/main'}>
            <h1 className="text-2xl font-bold">
              Dashboard Owner
            </h1>
          </Link>
        ) : (
          <Link to={'/articles'}>
            <h1 className="text-2xl font-bold">CHP App</h1>
          </Link>
        )
      ) : (
        <Link to={'/'}>
          <h1 className="text-2xl font-bold">CHP App</h1>
        </Link>
      )}

      <ul className="flex gap-x-6 mt-1 mb-0">
        {isAuthenticated ? (
          <>
            <li className="text-gray-100 mr-3 pt-0">
              Welcome:{' '}
              {user.name && user.lastName
                ? `${user.name} ${user.lastName}`
                : ''}
            </li>
            {isOwner ? (
              <>
                <li>
                  <Link
                    to="/owner/appointments"
                    className="bg-indigo-500 px-4 py-1 rounded-sm"
                  >
                    Citas
                  </Link>
                </li>
                <li>
                  <Link
                    to="/owner/articles"
                    className="bg-indigo-500 px-4 py-1 rounded-sm"
                  >
                    Artículos
                  </Link>
                </li>
                <li>
                  <Link
                    to="/owner/users"
                    className="bg-indigo-500 px-4 py-1 rounded-sm"
                  >
                    Usuarios
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      logOut();
                    }}
                    className="bg-indigo-500 px-4 py-1 rounded-sm"
                  >
                    Finalizar Sesión
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link
                    to="/users/appointment/booker"
                    className="bg-indigo-500 px-4 py-1 rounded-sm"
                  >
                    Citas
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      logOut();
                    }}
                    className="bg-indigo-500 px-4 py-1 rounded-sm"
                  >
                    Finalizar Sesión
                  </Link>
                </li>
              </>
            )}
            {/* <li>
              <Link
                to="users/schedules"
                className="bg-indigo-500 px-4 py-1 rounded-sm"
              >
                Citas
              </Link>
            </li>
            <li>
              <Link
                to="/"
                onClick={() => {
                  logOut();
                }}
                className="bg-indigo-500 px-4 py-1 rounded-sm"
              >
                Finalizar Sesión
              </Link>
            </li> */}
          </>
        ) : (
          <>
            <li>
              <Link
                to="/login"
                className="bg-indigo-500 px-4 py-1 rounded-sm"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                className="bg-indigo-500 px-4 py-1 rounded-sm"
              >
                Registrarse
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
