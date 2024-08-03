import React from 'react';
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai';
import { TiMicrophone } from 'react-icons/ti';
import { BsCameraVideo, BsBell } from 'react-icons/bs';
import { FiSearch } from 'react-icons/fi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoAppsSharp } from 'react-icons/io5';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { changeSearchTerm, clearSearchTerm, clearVideos } from '../store';
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos';
import { Button } from './ui/button';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);
  const handleSearch = () => {
    if (location.pathname !== '/search') navigate('/search');
    else {
      dispatch(clearVideos());
      dispatch(getSearchPageVideos(false));
    }
  };

  return (
    <div className='flex justify-between items-center px-5 h-14 bg-background sticky top-0 z-50'>
      <div className='flex gap-3 items-center text-2xl'>
        <div>
          <RxHamburgerMenu />
        </div>
        <Link to='/'>
          <div className='flex gap-1 items-center justify-center'>
            <img
              src='/myTube.svg'
              alt='myTube'
              className='w-9 h-9 '
            />
            <span className='text-xl font-medium'>WeTube</span>
            <span className='text-xs font-light relative bottom-2 opacity-90'>
              IN
            </span>
          </div>
        </Link>
      </div>
      <div className='flex items-center justify-center gap-5'>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}>
          <div className='flex bg-stone-950 items-center h-10 px-4 pr-0 rounded-full border-zinc-700 border-[1px]'>
            <div className='flex gap-4 items-center pr-5'>
              <div>
                <AiOutlineSearch className='text-xl' />
              </div>
              <input
                type='text'
                placeholder='Search'
                className='w-96 bg-stone-950 focus:outline-none border-none'
                value={searchTerm}
                onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
              />

              <AiOutlineClose
                className={`text-xl cursor-pointer ${
                  !searchTerm ? 'invisible' : 'visible'
                }`}
                onClick={() => dispatch(clearSearchTerm())}
              />
            </div>
            <Button className='h-10 w-16 flex items-center justify-center bg-neutral-800 rounded-r-full border-zinc-700 border-[1px]'>
              <FiSearch className='text-xl' />
            </Button>
          </div>
        </form>
        <div className='text-xl p-3 bg-neutral-800 rounded-full'>
          <TiMicrophone />
        </div>
      </div>
      <div className='flex gap-5 items-center text-xl'>
        <BsCameraVideo />
        <IoAppsSharp />
        <div className='relative'>
          <BsBell />
          <span className='absolute bottom-2 left-2 text-xs bg-orange-600 rounded-full px-1'>
            9+
          </span>
        </div>
        <img
          src='/profile.png'
          className='w-9 h-9 rounded-full'
          alt='logo'
        />
      </div>
    </div>
  );
}
