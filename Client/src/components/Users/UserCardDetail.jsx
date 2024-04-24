import React from 'react';

export function UserCardDetail({ user }) {
  return (
    <div className="bg-gray-300 border-solid border-blue-900 border-4 max-w-md w-full mt-0 p-10 rounded-lg">
      <div className="mt-0">
        <header className="flex justify-between">
          <div className="flex justify-items-start mb-1">
            <h4 className="text-slate-800 font-semibold italic text-lg mb-2">
              {user.name} {user.lastName}
            </h4>
          </div>
        </header>

        <div className="pl-3 text-slate-700">
          <p className="mb-1">
            Edad: <b>{user.age}</b>
          </p>
          <p className="mb-1">
            Email: <b>{user.email}</b>
          </p>
          <p className="mb-1">
            Usuario: <b>{user.userName}</b>
          </p>
          <p className="mb-1">
            Teléfono: <b>{user.phoneNumber}</b>
          </p>
          <p className="mb-1">
            Registrado:{' '}
            <b>
              {new Date(
                user.createdAt,
              ).toLocaleDateString()}
            </b>
          </p>
          <p className="mb-1">
            Rol: <b>{user.rol}</b>
          </p>
          <p className="mb-1">
            Activo:{' '}
            <b>{(user.active = true ? 'Sí' : 'No')}</b>
          </p>
        </div>
      </div>
    </div>
  );
}
