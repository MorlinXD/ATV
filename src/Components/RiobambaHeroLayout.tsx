import Image from 'next/image';
import React from 'react';

// const BackgroundLayout = ({ children }: {
//   children: React.ReactNode
// }) => {
//   return (
//     <div className="flex justify-between items-center">
//         <div className="left-0 bg-cover" style={{ backgroundImage: 'url(/layouts/riohero-l-layout.png)', width: 350, height: 400 }}></div>
//           <div className='z-1 text-center p-4'>
//             {children}
//           </div>
//         <div className=" right-0 bg-cover" style={{ backgroundImage: 'url(/layouts/riohero-r-layout.png)', width: 450, height: 350 }}></div>
//     </div>
//   )
// }

// export default BackgroundLayout

const BackgroundLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex-none bg-cover w-1/4 bg-no-repeat">
        <Image src="/layouts/riohero-l-layout.png" alt="Tren" width={350} height={400} />
      </div>
      <div className="flex-1 z-10 text-center p-4">{children}</div>
      <div className="flex-none bg-cover w-1/4 bg-no-repeat">
        <Image src="/layouts/riohero-r-layout.png" alt="Tren" width={450} height={350} />
      </div>
    </div>
  );
};

export default BackgroundLayout;
