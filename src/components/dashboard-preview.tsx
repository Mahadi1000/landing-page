import Image from 'next/image';
import React from 'react'

const DashboardPreview = () => {
  return (
    <div className="w-[calc(100vw-32px)] md:w-[1160px]">
      <div className="bg-primary-light/50 rounded-2xl p-2 shadow-2xl">
        <Image
          src="/images/dashboard-preview.png"
          alt="Dashboard preview"
          width={1160}
          height={700}
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}

export default DashboardPreview