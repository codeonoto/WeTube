import Card from '@/components/Card';
import HomeSkeletonCard from '@/components/HomeSkeletonCard';
import { ModeToggle } from '@/components/ModeToggle';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import Spinner from '@/components/Spinner';
import { clearVideos, clearSearchTerm } from '@/store';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getHomePageVideos } from '@/store/reducers/getHomePageVideos';
import { HomePageVideos } from '@/Types';
import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

const Home = () => {
  const dispatch = useAppDispatch();
  const videos = useAppSelector((state) => state.youtubeApp.videos);

  useEffect(() => {
    dispatch(clearSearchTerm());
    return () => {
      dispatch(clearVideos());
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(getHomePageVideos(false));
  }, [dispatch]);

  return (
    <div className='max-h-screen overflow-hidden'>
      <div style={{ height: '7.5vh ' }}>
        <Navbar />
      </div>
      <div
        className='flex'
        style={{ height: '92.5vh' }}>
        <Sidebar activePage='Home' />
        {videos.length ? (
          <InfiniteScroll
            dataLength={videos.length}
            next={() => dispatch(getHomePageVideos(true))}
            hasMore={videos.length < 500}
            loader={<Spinner />}
            height={860}>
            <div className='grid gap-y-24 gap-x-6 grid-cols-5 p-10 '>
              {videos.map((item: HomePageVideos) => {
                return (
                  <Card
                    data={item}
                    key={item.videoId}
                  />
                );
              })}
            </div>
          </InfiniteScroll>
        ) : (
          <HomeSkeletonCard />
        )}
      </div>

      {/* ModeToggle For Light/Dark Theme */}
      <div className='fixed bottom-4 right-4'>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Home;
