import { Skeleton } from './ui/skeleton';

const SkeletonCard = () => {
  return (
    <div className='flex flex-col space-y-3'>
      <Skeleton className='h-40 w-72 rounded-xl bg-zinc-800' />
      <div className='flex'>
        <Skeleton className='h-10 w-10 rounded-full  bg-zinc-800' />
        <div className='space-y-2 pl-2'>
          <Skeleton className='h-4 w-56  bg-zinc-800' />
          <Skeleton className='h-4 w-44  bg-zinc-800' />
        </div>
      </div>
    </div>
  );
};

export default SkeletonCard;
