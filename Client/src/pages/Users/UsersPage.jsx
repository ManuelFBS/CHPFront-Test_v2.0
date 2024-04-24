import React, { useEffect, useState } from 'react';
import { useUsers } from '../../context/UsersContext';
import { UserCard } from '../../components/Users/UserCard';
import { Pagination } from '../../components/Others/Pagination';
import { UserCardDetail } from '../../components/Users/UserCardDetail';
import { Button } from '../../components/UI';

export function UsersPage() {
  const { getUsers, users } = useUsers();
  const [currentPage, setCurrentPage] = useState(1);

  const [selectedUser, setSelectedUser] = useState(null);

  const usersPerPage = 9;

  useEffect(() => {
    getUsers();
  }, []);

  // Lógica para obtener los usuarios de la página actual...
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(
    indexOfFirstUser,
    indexOfLastUser,
  );

  // Cálculo del total de páginas...
  const totalPages = Math.ceil(users.legth / usersPerPage);

  // Cambio de página...
  const handlePageChange = (pageNumber) =>
    setCurrentPage(pageNumber);

  // Manejar clic en una tarjeta de usuario...
  const HandleCardClick = (user) => {
    setSelectedUser(user);
  };

  const handleBackToList = () => {
    setSelectedUser(null);
  };

  return (
    <div>
      {selectedUser ? (
        <div className="flex justify-center items-center h-screen">
          <UserCardDetail user={selectedUser} />
          <button
            className="bg-transparent text-4xl ml-3 text-green-300 hover:text-green-500 mt-4"
            onClick={handleBackToList}
          >
            Volver
          </button>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-3 gap-3">
            {currentUsers.map((user) => (
              <UserCard
                user={user}
                key={user.id}
                onClick={() => HandleCardClick(user)}
              />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
    // <div>
    //   <div className="grid grid-cols-3 gap-3">
    //     {currentUsers.map((user) => (
    //       <UserCard user={user} key={user.id} />
    //     ))}
    //   </div>
    //   <Pagination
    //     currentPage={currentPage}
    //     totalPages={totalPages}
    //     onPageChange={handlePageChange}
    //   />
    // </div>
  );
}
