import React from 'react';
import SkeletonCard from './SkeletonCard';
import { Button } from './ui/button';
import { RiGhostLine } from 'react-icons/ri';

const UnderConstruction = () => {
  return (
    <div className='grid gap-x-4 grid-cols-5 p-10'>
      <div className='col-span-5 grid grid-cols-5 gap-x-4'>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>

      <div className='col-span-5 flex flex-col items-center text-center '>
        <RiGhostLine className='text-3xl ' />
        <br />
        <p>This page is under construction !</p>
        <br />
        <a href='/'>
          <Button className='rounded-full bg-neutral-700 hover:bg-blue-1'>
            Back To Home!
          </Button>
        </a>
      </div>

      <div className='col-span-5 grid grid-cols-5 gap-x-4'>
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    </div>
  );
};

export default UnderConstruction;
