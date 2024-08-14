import React from 'react';
import { FiMenu as Icon } from 'react-icons/fi';

import Logo from '../../assets/Logo';

export default function MenuBarMobile({ setter }: { setter: any }) {
  return (
    <nav className=" left-0 right-0 top-0 z-20 flex h-[60px]  gap-2 px-2 md:hidden [&>*]:my-auto">
      <button
        className="flex text-4xl text-white"
        onClick={() => {
          setter((oldVal: any) => !oldVal);
        }}
      >
        <Icon />
      </button>
      <Logo />
    </nav>
  );
}
