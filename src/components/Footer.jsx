import React from 'react'

const Footer = () => {
  return (
    <div className="text-white p-6">
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ml-40 text-left">
    <div>
      <h3 className="text-3xl font-semibold mb-4">Company</h3>
      <ul className="list-none">
        <li className="mb-2"><a href="#" className="hover:text-black transition-colors duration-200 text-xl">About Us</a></li>
        <li className="mb-2"><a href="#" className="hover:text-black transition-colors duration-200 text-xl">Testimonials</a></li>
        <li className="mb-2"><a href="#" className="hover:text-black transition-colors duration-200 text-xl">Process</a></li>
        <li className="mb-2"><a href="#" className="hover:text-black transition-colors duration-200 text-xl">Contact</a></li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold mb-4 text-3xl">Resources</h3>
      <ul className="list-none">
        <li className="mb-2"><a href="#" className="hover:text-black transition-colors duration-200 text-xl">Blog</a></li>
        <li className="mb-2"><a href="#" className="hover:text-black transition-colors duration-200 text-xl">Events</a></li>
        <li className="mb-2"><a href="#" className="hover:text-black transition-colors duration-200 text-xl">Press Release</a></li>
        <li className="mb-2"><a href="#" className="hover:text-black transition-colors duration-200 text-xl">Work</a></li>
      </ul>
    </div>

    <div>
      <h3 className="font-semibold mb-4 text-3xl">Services</h3>
      <ul className="list-none">
        <li className="mb-2"><a href="/mobile" className="hover:text-black transition-colors duration-200 text-xl">Mobile App</a></li>
        <li className="mb-2"><a href="/website" className="hover:text-black transition-colors duration-200 text-xl">Website Development</a></li>
        <li className="mb-2"><a href="/logo" className="hover:text-black transition-colors duration-200 text-xl">Logo</a></li>
        <li className="mb-2"><a href="/SMM" className="hover:text-black transition-colors duration-200 text-xl">SMM</a></li>
      </ul>
    </div>

    <div>
      <h3 className="text-3xl font-semibold mb-4">AKC</h3>
      <ul className="list-none">
        <li className="mb-2"><a href="#" className="hover:text-black transition-colors duration-200 text-xl">University</a></li>
        <li className="mb-2"><a href="#" className="hover:text-black transition-colors duration-200 text-xl">Careers</a></li>
        <li className="mb-2"><a href="#" className="hover:text-black transition-colors duration-200 text-xl">Manifesto</a></li>
        <li className="mb-2"><a href="#" className="hover:text-black transition-colors duration-200 text-xl">Culture Book</a></li>
      </ul>
    </div>
  </div>

  <div className="mt-6 border-t border-gray-700 pt-6 px-24 flex justify-between">
  <div>
    <h3 className="text-3xl font-semibold">Contact</h3>
    <p className='text-xl'>866-978-2220</p>
    <p className='text-xl'>info@akclinktech.com</p>
  </div>
  <div>
    <p className='text-gray-700 '>&copy; 2025 AKC Link Tech. All Rights Reserved.</p>
    <p className='text-gray-700 '>Content protected by DMCA.com</p>
  </div>
</div>

</div>
  )
}

export default Footer
