import Link from 'next/link';
import React from 'react';
import Button from './Button';
import { PiUserLight } from 'react-icons/pi';

const SignUpLink = ({}) => {
  return (
    <>
      <Link href={'/signup'}>
        <Button variant="primary">
          <i className="text-xl">
            <PiUserLight />
          </i>
          <span>sign up</span>
        </Button>
      </Link>
    </>
  );
};

export default SignUpLink;
