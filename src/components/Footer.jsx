import React from 'react'
import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer className='bg-[#BCDDFE] px-2 py-4 h-[600px]'>
      <div className="flex justify-evenly items-center flex-wrap">
        {/* Logos */}
        <div className='w-[220px] text-xs'>
          <img src={logo} alt="logo" className='h-[36px]' />
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.Since the 1500s, when an unknown printer.
          </span>
        </div>

        {/* Follow */}
        <div className="w-[220px]">
          <h3 className='font-semibold'>Follow Us</h3>
          <p className='text-xs'>Since the 1500s, when an unknown printer took a galley of type and scrambled.</p>
          <span className='flex gap-4 items-center'>
            <a href="www.facebook.com" target='_blank'>
              <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.373241 8.24327H2.03013V14.533C2.03013 14.5926 2.05583 14.6497 2.10156 14.6919C2.14729 14.734 2.2093 14.7577 2.27397 14.7577H5.0841C5.14877 14.7577 5.21078 14.734 5.25651 14.6919C5.30224 14.6497 5.32794 14.5926 5.32794 14.533V8.27275H7.23366C7.29342 8.27266 7.35107 8.25235 7.39565 8.21567C7.44023 8.17899 7.46865 8.1285 7.47551 8.07378L7.76531 5.75798C7.76925 5.72653 7.76594 5.69466 7.75559 5.66447C7.74524 5.63428 7.72809 5.60644 7.70526 5.58279C7.68242 5.55913 7.65442 5.54019 7.6231 5.5272C7.59177 5.51421 7.55781 5.50747 7.52346 5.50742H5.32493V4.0566C5.32493 3.61904 5.58077 3.39704 6.08443 3.39704H7.51947C7.58414 3.39704 7.64615 3.37336 7.69188 3.33121C7.73761 3.28906 7.76331 3.23189 7.76331 3.17228V1.04716C7.76384 0.987866 7.73894 0.930777 7.69402 0.888332C7.64909 0.845888 7.58778 0.821527 7.52346 0.820557H5.5438H5.45285C4.54124 0.823522 3.66134 1.12931 2.97451 1.68184C2.65041 1.94292 2.40174 2.27412 2.25086 2.64569C2.09997 3.01727 2.0516 3.41757 2.11008 3.81065V5.50834H0.370237C0.305567 5.50834 0.243549 5.53202 0.197821 5.57418C0.152092 5.61633 0.126404 5.6735 0.126404 5.73311V8.01851C0.126401 8.04826 0.132802 8.07771 0.145243 8.10516C0.157684 8.13262 0.17592 8.15752 0.19888 8.17843C0.221841 8.19933 0.249074 8.21583 0.279004 8.22696C0.308935 8.23809 0.340968 8.24364 0.373241 8.24327Z" fill="#385C8E" />
              </svg>
            </a>
            <a href="www.twitter.com" target='_blank'>
              <svg width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.6491 1.95881C14.0992 2.18 13.5176 2.32705 12.9222 2.39544C13.5499 2.05234 14.0193 1.50892 14.2413 0.868153C13.6543 1.18906 13.0122 1.41523 12.3426 1.53692C11.9317 1.13157 11.398 0.849598 10.8108 0.727697C10.2237 0.605796 9.61034 0.649607 9.05059 0.85343C8.49083 1.05725 8.01059 1.41165 7.67234 1.87051C7.33409 2.32937 7.1535 2.87145 7.15406 3.42622C7.15187 3.63799 7.17533 3.84932 7.22402 4.05629C6.03143 4.00232 4.86464 3.71696 3.7999 3.21885C2.73516 2.72074 1.79645 2.02111 1.04514 1.16569C0.659292 1.77356 0.539786 2.49429 0.711032 3.18065C0.882278 3.867 1.33135 4.4672 1.96652 4.85862C1.49212 4.84702 1.02771 4.73044 0.612427 4.51872V4.54911C0.613069 5.18681 0.85184 5.80486 1.28861 6.29939C1.72538 6.79392 2.33352 7.13479 3.01083 7.26469C2.75426 7.32742 2.48978 7.3584 2.22435 7.35681C2.03386 7.36 1.84355 7.34425 1.65673 7.30983C1.8502 7.85789 2.2231 8.33724 2.72416 8.68199C3.22522 9.02673 3.82983 9.21995 4.45486 9.23506C3.39497 9.99842 2.0884 10.4128 0.743339 10.4123C0.503536 10.4139 0.263871 10.4012 0.0258179 10.3745C1.39607 11.1884 2.99269 11.619 4.62275 11.6144C5.74525 11.6216 6.85811 11.4232 7.89671 11.0306C8.93531 10.6381 9.87893 10.0592 10.6728 9.32761C11.4666 8.59604 12.0948 7.72636 12.521 6.7691C12.9471 5.81185 13.1626 4.78608 13.1551 3.75139C13.1551 3.62887 13.1551 3.51096 13.1441 3.39398C13.7363 3.004 14.2463 2.51764 14.6491 1.95881Z" fill="#03A9F4" />
              </svg>
            </a>
          </span>
        </div>
        <div className="w-[220px]">
          <h3 className='font-semibold'>Contact Us</h3>
          <p className='text-xs'>E-Comm , 4578 Marmora Road, Glasgow D04 89GR</p>
        </div>
      </div>
      <div className="grid grid-cols-4 w-[1200px] mx-auto text-sm">
        <div className="">
          <h3 className='font-semibold'>Information</h3>
          <ul>
            <li>About Us</li>
            <li>Infomation</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="">
          <h3 className='font-semibold'>Service</h3>
          <ul>
            <li>About Us</li>
            <li>Infomation</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="">
          <h3 className='font-semibold'>My Account</h3>
          <ul>
            <li>About Us</li>
            <li>Infomation</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div className="">
          <h3 className='font-semibold'>Our Offers</h3>
          <ul>
            <li>About Us</li>
            <li>Infomation</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>
      <hr className='text-white w-[1195px] mx-auto' />

    </footer>
  )
}
