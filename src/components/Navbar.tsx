import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import LoginBtn from './LoginBtn';

interface Props {
  authData:  {
    user: {
      name: string,
    };
  };
  authStatus: string
}

const navigation = [
  { name: 'Search', href: '#', current: false }, 
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Navbar: React.FC<Props> = ({ authData, authStatus }) =>  {
  
  return (
    <Disclosure as="nav" className="bg-[#abd9e1]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:text-white  ">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                <a className="GlobalHeaderBrandingArea-module__title___25k8F navigate" href="https://rihla.mn.co/about" data-id="mighty-link"><div className="mighty-avatar-user-small GlobalHeaderBrandingArea-module__mighty-avatar-user-small___3gBLB">
                  <img alt="Journey الرحلة logo" src="https://media1-production-mightynetworks.imgix.net/asset/56053552/JOURNEYUNCROPPED2-28.png?ixlib=rails-4.2.0&amp;auto=format&amp;w=196&amp;h=196&amp;fit=crop&amp;impolicy=Avatar&amp;crop=faces" width="80" />
                  </div>
                </a>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="relative rounded-full p-1 text-gray-400 hover:text-white"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon className="block h-6 w-6 " aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      {authStatus === "authenticated" ? 
                         <img
                         className="h-10 w-10 rounded-full"
                         src="https://media1-production-mightynetworks.imgix.net/asset/56159004/IMG_6521_2.heic?ixlib=rails-4.2.0&fm=jpg&q=100&auto=format&w=2004&h=2004&fit=crop&crop=faces&impolicy=Avatar&mask=ellipse" 
                         alt=""
                       />
                       : 
                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray"  className="h-10 w-10 rounded-full bg-white">
                       <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                     </svg>
                     
                      }
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    { (authStatus === "authenticated") &&
                     <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                           Hi {authData?.user?.name}
                          </a>
                        )}
                      </Menu.Item>
                      } 
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                            <LoginBtn />
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          {/* We will update this when update the othe sections of the navba */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1  pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}  
                  className={classNames(
                    item.current ? 'text-white' : 'text-black hover:bg-gray-200 active:bg-gray-200',
                    'block  px-5 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel> 
        </>
      )}  
    </Disclosure>
  )
}


export default Navbar;