import React from 'react'
import { BsMoon, BsSun, BsSunset } from 'react-icons/bs'
import { MdSettingsInputComponent } from 'react-icons/md'

const Home = () => {
  return (
        <div className="bg-background p-6">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="flex items-center" />
        <div className="flex items-center mt-4 md:mt-0">
          <input type="search" placeholder="Search city..." className="mr-2 p-2 bg-muted text-muted-foreground border-gray-500 border-2 rounded" />
          < button className="text-primary-foreground bg-red-500 px-4 py-2 rounded ">Search</button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="text-muted-foreground">
          <p>New York City</p>
          <p>June 15, 2023</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {/* <img src="" alt="Mosque" className="w-full h-auto rounded-lg" /> */}
          <img className='rounded-lg' src="/pic/image.png" alt="" />
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center bg-card p-4 rounded-md">
            <div className="flex items-center">
              <BsSunset className="w-6 h-6 mr-2 text-primary" />
              <p className="font-bold text-primary">Fajr</p>
            </div>
            <p className="text-right text-primary">4:20 AM</p>
          </div>
          <div className="flex justify-between items-center bg-card p-4 rounded-md">
            <div className="flex items-center">
              <BsSun className="w-6 h-6 mr-2 text-primary" />
              <p className="font-bold text-primary">Dhuhr</p>
            </div>
            <p className="text-right text-primary">12:06 PM</p>
          </div>
          <div className="flex justify-between items-center bg-card p-4 rounded-md">
            <div className="flex items-center">
              <BsSunset className="w-6 h-6 mr-2 text-primary" />
              <p className="font-bold text-primary">Asr</p>
            </div>
            <p className="text-right text-primary">3:38 PM</p>
          </div>
          <div className="flex justify-between items-center bg-card p-4 rounded-md">
            <div className="flex items-center">
              <BsSunset className="w-6 h-6 mr-2 text-primary" />
              <p className="font-bold text-primary">Maghrib</p>
            </div>
            <p className="text-right text-primary">6:23 PM</p>
          </div>
          <div className="flex justify-between items-center bg-card p-4 rounded-md">
            <div className="flex items-center">
              <BsMoon className="w-6 h-6 mr-2 text-primary" />
              <p className="font-bold text-primary">Isha</p>
            </div>
            <p className="text-right text-primary">7:45 PM</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home