import Link from 'next/link';
import React from 'react';

const Button = ({ href, type = 'primary', children, rest }) => {
  if (type == 'primary')
    return (
      <Link
        {...rest}
        href={href}
        className="rounded-lg bg-secondary font-medium text-black md:text-base text-xs
         py-3 px-4 md:py-4 md:px-5 hover:bg-primary hover:text-white duration-700 transition-colors"
      >
        {children}
      </Link>
    );

  if (type == 'ghost') {
    return (
      <Link
        className="rounded-lg bg-['#F6FBE9'] border-[#E5F5BD] border font-medium md:text-base
         text-xs text-black py-3 px-4 md:py-4 md:px-5 hover:bg-primary hover:text-white duration-700 transition-colors"
        {...rest}
        href={href}
      >
        {children}
      </Link>
    );
  }
};

export default Button;
