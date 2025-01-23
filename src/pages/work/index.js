import Navbar from '@/components/DesktopMenu'
import Footer from '@/components/Footer'
import Project from '@/components/Project'
import React from 'react'

const index = () => {
  return (
<div className="overflow-x-hidden">
      <Navbar />

      <Project/>


      <div
        style={{
          backgroundImage: "radial-gradient(circle at left center,rgb(0, 0, 0) 5%, transparent 50%)",
          backgroundColor: "#000",
          backgroundSize: "100% 100%",
        }}
      >
        <Footer />
      </div>
    </div>
  )
}

export default index
