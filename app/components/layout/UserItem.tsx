import React from 'react';
import Link from 'next/link';
import { useUser } from '@auth0/nextjs-auth0/client';
import { getSession } from '@auth0/nextjs-auth0';

const UserItem = () => {
  const style =
    'border-2 border-gray-600 p-2 rounded-md hover:bg-gray-300 text-md text-gray-800';
  // const { error, isLoading } = useUser();

  // if (isLoading) return <div>Loading...</div>;
  // if (error) return <div>{error.message}</div>;
  return (
    <div>
      <ul className="text-sm flex items-center">
        <li className="opacity-0">| | |</li>
        <li className={style}>
          <Link href="/history">
            <p>履歴</p>
          </Link>
        </li>
        <li className="opacity-0">| | |</li>
        <>
          <li className="opacity-0">| | |</li>
          <li>
            <a href="/api/auth/logout" className={style}>
              ログアウト
            </a>
          </li>
        </>
        <>
          <a href="/api/auth/login" className={style}>
            ログイン
          </a>
          <li className="opacity-0">| | |</li>
        </>
      </ul>
    </div>
  );
};

export default UserItem;
