import React from 'react';
import {
  MdHomeFilled,
  MdOutlineSlowMotionVideo,
  MdSubscriptions,
  MdHistory,
  MdOutlineSmartDisplay,
  MdOutlineWatchLater,
  MdThumbUpOffAlt,
  MdSettings,
  MdOutlinedFlag,
  MdOutlineHelpOutline,
  MdOutlineFeedback,
  MdPlaylistPlay,
  MdOutlinePodcasts,
} from 'react-icons/md';
import { TbMusic, TbDeviceGamepad2 } from 'react-icons/tb';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { RiProfileLine } from 'react-icons/ri';
import { PiDress, PiFire, PiLightbulb } from 'react-icons/pi';
import { HiOutlineNewspaper, HiOutlineShoppingBag } from 'react-icons/hi';
import { LuClapperboard } from 'react-icons/lu';
import { IoRadioOutline } from 'react-icons/io5';
import { GoTrophy } from 'react-icons/go';

interface SidebarProps {
  activePage: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activePage }) => {
  const mainLinks = [
    {
      icon: <MdHomeFilled className='text-xl' />,
      name: 'Home',
      path: '/',
    },
    {
      icon: <MdOutlineSlowMotionVideo className='text-xl' />,
      name: 'Shorts',
      path: '/shorts',
    },
    {
      icon: <MdSubscriptions className='text-xl' />,
      name: 'Subscriptions',
      path: '/subscriptions',
    },
  ];

  const secondaryLinks = [
    {
      icon: 'You',
      name: <MdKeyboardArrowRight className='text-xl relative right-4' />,
      path: '/zzz',
    },

    {
      icon: <RiProfileLine className='text-xl' />,
      name: 'Your Channel',
      path: '/zzz',
    },
    {
      icon: <MdHistory className='text-xl' />,
      name: 'History',
      path: '/zzz',
    },
    {
      icon: <MdPlaylistPlay className='text-xl' />,
      name: 'Playlists',
      path: '/zzz',
    },
    {
      icon: <MdOutlineSmartDisplay className='text-xl' />,
      name: 'Your Videos',
      path: '/zzz',
    },
    {
      icon: <MdOutlineWatchLater className='text-xl' />,
      name: 'Watch Later',
      path: '/zzz',
    },
    {
      icon: <MdThumbUpOffAlt className='text-xl' />,
      name: 'Liked Videos',
      path: '/zzz',
    },
  ];

  const subscriptionLinks = [
    {
      icon: (
        <img
          src='/Sb.jpg'
          alt='sblock'
          className='rounded-full h-7 w-7 object-cover'
        />
      ),
      name: 'SBlockGamer',
      path: '/zzz',
    },
    {
      icon: (
        <img
          src='/Aron.jpg'
          alt='ARONTEX GAMING'
          className='rounded-full h-7 w-7 object-cover'
        />
      ),
      name: 'ARONTEX GAMING',
      path: '/zzz',
    },
    {
      icon: (
        <img
          src='/Darky.jpg'
          alt='Dark Radian'
          className='rounded-full h-7 w-7 object-cover'
        />
      ),
      name: 'Dark Radian',
      path: '/zzz',
    },
  ];
  const exploreLinks = [
    {
      icon: <PiFire className='text-xl' />,
      name: 'Trending',
      path: '/zzz',
    },
    {
      icon: <TbDeviceGamepad2 className='text-xl' />,
      name: 'Gaming',
      path: '/zzz',
    },
    {
      icon: <HiOutlineShoppingBag className='text-xl' />,
      name: 'Shopping',
      path: '/zzz',
    },
    {
      icon: <TbMusic className='text-xl' />,
      name: 'Music',
      path: '/zzz',
    },
    {
      icon: <LuClapperboard className='text-xl' />,
      name: 'Movies',
      path: '/zzz',
    },
    {
      icon: <IoRadioOutline className='text-xl' />,
      name: 'Lives',
      path: '/zzz',
    },
    {
      icon: <HiOutlineNewspaper className='text-xl' />,
      name: 'News',
      path: '/zzz',
    },
    {
      icon: <GoTrophy className='text-xl' />,
      name: 'Sport',
      path: '/zzz',
    },
    {
      icon: <PiLightbulb className='text-xl' />,
      name: 'Courses',
      path: '/zzz',
    },
    {
      icon: <PiDress className='text-xl' />,
      name: 'Fashion & Beauty',
      path: '/zzz',
    },
    {
      icon: <MdOutlinePodcasts className='text-xl' />,
      name: 'Podcasts',
      path: '/zzz',
    },
  ];

  const helpLinks = [
    {
      icon: <MdSettings className='text-xl' />,
      name: 'Settings',
      path: '/zzz',
    },
    {
      icon: <MdOutlinedFlag className='text-xl' />,
      name: 'Report history',
      path: '/zzz',
    },
    {
      icon: <MdOutlineHelpOutline className='text-xl' />,
      name: 'Help',
      path: '/zzz',
    },
    {
      icon: <MdOutlineFeedback className='text-xl' />,
      name: 'Send feedback',
      path: '/zzz',
    },
  ];

  const textLinks = [
    [
      'About',
      'Press',
      'Copyright',
      'Contact us',
      'Creator',
      'Advertise',
      'Developers',
    ],
    [
      'Terms',
      'Privacy',
      'Policy & Safety',
      'How YouTube works',
      'Test new features',
    ],
  ];

  return (
    <div className='w-60 bg-background pr-2 overflow-auto pb-12 sidebar'>
      <ul className='flex flex-col px-2 py-2'>
        {mainLinks.map(({ icon, name, path }) => {
          return (
            <li
              key={name}
              className={`pl-4 py-2 hover:bg-neutral-800 rounded-lg ${
                name === activePage ? 'bg-zinc-800 font-semibold' : ''
              }`}>
              <a
                href={path}
                className='flex items-center gap-5 pb-1'>
                <span
                  className={`${
                    name === activePage
                      ? 'pb-0.5 border-2 border-b-blue-1 border-x-0 border-t-0 rounded-[3px] '
                      : ''
                  } `}>
                  {icon}
                </span>
                <span className='text-sm tracking-wider'>{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <hr className='border-t-1 border-zinc-700 mx-4 ' />
      <ul className='flex flex-col px-2 py-2'>
        {secondaryLinks.map(({ icon, name, path }) => {
          return (
            <li
              key={name}
              className={`pl-4 py-2 hover:bg-neutral-800 rounded-lg ${
                name === activePage ? 'bg-zinc-800 font-semibold' : ''
              }`}>
              <a
                href={path}
                className='flex items-center gap-5 pb-1'>
                <span
                  className={`font-semibold ${
                    name === activePage
                      ? 'pb-0.5 border-2 border-b-blue-1 border-x-0 border-t-0 rounded-[3px] '
                      : ''
                  } `}>
                  {icon}
                </span>
                <span className='text-sm tracking-wider'>{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <hr className='border-t-1 border-zinc-700 mx-4' />

      <ul className='flex flex-col px-2 py-2'>
        <span className='pl-4 py-2 font-medium'>Subscriptions</span>
        {subscriptionLinks.map(({ icon, name, path }) => {
          return (
            <li
              key={name}
              className={`pl-4 py-1 hover:bg-neutral-800 rounded-lg ${
                name === activePage ? 'bg-zinc-800 font-semibold' : ''
              }`}>
              <a
                href={path}
                className='flex items-center gap-5 pb-1'>
                <span
                  className={`${
                    name === activePage
                      ? 'pb-0.5 border-2 border-b-blue-1 border-x-0 border-t-0 rounded-[3px] '
                      : ''
                  } `}>
                  {icon}
                </span>
                <span className='text-sm tracking-wider'>{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <hr className='border-t-1 border-zinc-700 mx-4' />

      <ul className='flex flex-col px-2 py-2'>
        <span className='pl-4 py-2 font-medium'>Explore</span>
        {exploreLinks.map(({ icon, name, path }) => {
          return (
            <li
              key={name}
              className={`pl-4 py-2 hover:bg-neutral-800 rounded-lg ${
                name === activePage ? 'bg-zinc-800 font-semibold' : ''
              }`}>
              <a
                href={path}
                className='flex items-center gap-5 pb-1'>
                <span
                  className={`${
                    name === activePage
                      ? 'pb-0.5 border-2 border-b-blue-1 border-x-0 border-t-0 rounded-[3px] '
                      : ''
                  } `}>
                  {icon}
                </span>
                <span className='text-sm tracking-wider'>{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <hr className='border-t-1 border-zinc-700 mx-4' />

      <ul className='flex flex-col px-2 py-2'>
        {helpLinks.map(({ icon, name, path }) => {
          return (
            <li
              key={name}
              className={`pl-4 py-2 hover:bg-zinc-900 rounded-lg ${
                name === activePage ? 'bg-zinc-800 font-semibold' : ''
              }`}>
              <a
                href={path}
                className='flex items-center gap-5 pb-1'>
                <span
                  className={`${
                    name === activePage
                      ? 'pb-0.5 border-2 border-b-blue-1 border-x-0 border-t-0 rounded-[3px] '
                      : ''
                  } `}>
                  {icon}
                </span>
                <span className='text-sm tracking-wider'>{name}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <hr className='border-t-1 border-zinc-700 mx-4' />

      <ul className='flex gap-2 flex-wrap text-sm p-4 text-zinc-400'>
        {textLinks[0].map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
      <ul className='flex gap-2 flex-wrap text-sm p-4 text-zinc-400'>
        {textLinks[1].map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
      <span className='px-4 text-sm text-zinc-400'>&copy; 2024 WeTube</span>
      <br />
      <p className='px-4 pt-3 text-sm text-zinc-400'>
        This Clone is Only For Education & Learning Purpose !
      </p>
    </div>
  );
};

export default Sidebar;
