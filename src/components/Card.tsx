import { HomePageVideos } from '@/Types';
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ data }: { data: HomePageVideos }) => {
  return (
    <div className='w-72 h-60 flex gap-3 flex-col'>
      <div className='relative '>
        <span className='absolute bottom-2 right-2 text-sm bg-zinc-900 opacity-80 px-2 py-0.5 z-10 rounded-xl'>
          {data.videoDuration}
        </span>
        <Link to={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            alt={data.videoTitle}
            className='h-42 w-72 rounded-sm'
          />
        </Link>
      </div>
      <div className='flex gap-2'>
        <div className='min-w-fit'>
          <a href='#'>
            <img
              src={data.channelInfo.image}
              alt='channel_logo'
              className='h-9 w-9 rounded-full'
            />
          </a>
        </div>
        <div>
          <h3>
            <a
              href='#'
              className='line-clamp-2'>
              {data.videoTitle}
            </a>
          </h3>
          <div className='text-sm text-gray-400'>
            <div>
              <a
                href='#'
                className='hover:text-white'>
                {data.channelInfo.name}
              </a>
            </div>
            <div>
              <span className='after:content-["•"] after:mx-1'>
                {data.videoViews} views
              </span>
              <span>{data.videoAge}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
