import { ModeToggle } from '@/components/ModeToggle';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import UnderConstruction from '@/components/UnderConstruction';

const Shorts = () => {
  return (
    <div className='max-h-screen overflow-hidden'>
      <div style={{ height: '7.5vh ' }}>
        <Navbar />
      </div>
      <div
        className='flex'
        style={{ height: '92.5vh' }}>
        <Sidebar activePage='Shorts' />

        <UnderConstruction />
      </div>
      {/* ModeToggle For Light/Dark Theme */}
      <div className='fixed bottom-4 right-4'>
        <ModeToggle />
      </div>
    </div>
  );
};

export default Shorts;
