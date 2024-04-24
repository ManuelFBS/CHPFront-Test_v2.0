import React from 'react';
import { Button } from '../UI';
import { UserCardDetail } from './UserCardDetail';

export function UserCard({ user, onClick }) {
  return (
    <div
      className="bg-gray-300 border-solid border-blue-900 border-4 max-w-md w-full mt-0 p-10 rounded-lg"
      onClick={() => onClick(user)}
    >
      <div className="mt-0">
        <header className="flex justify-between">
          <div className="flex justify-items-start mb-1">
            <h4 className="text-slate-800 font-semibold italic text-lg mb-2">
              {user.name}
            </h4>
            <h4 className="text-slate-800 font-semibold italic text-lg ml-2 mb-2">
              {user.lastName}
            </h4>
          </div>
          <div>
            <Button className="bg-red-600 text-slate-200 pt-1 pb-1 hover:bg-red-400">
              Delete
            </Button>
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
        </div>
      </div>
    </div>
  );
}
