import React from 'react';
import { IoHomeOutline } from 'react-icons/io5';

import Link from 'next/link'

type BreadCrumbsProps = {
  current: string;
};

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ current }) => {
  return (
    <div className="breadcrumbs text-sm">
      <ul>
        <li>
        <Link className="hover" href="/"> 
            <IoHomeOutline />
            Home
        </Link>
        </li>
        <li>
          <span>{current}</span>
        </li>
      </ul>
    </div>
  );
};

export default BreadCrumbs;
