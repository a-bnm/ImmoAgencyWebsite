import React, { useState } from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link } from '@inertiajs/inertia-react';

export default function Authenticated({ auth, header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-vw-100 p-0 m-0">
            <nav className="row min-vw-100 p-4 text-white" style={{backgroundColor:'#3d5a80'}}>
                
                <div className="col-6 d-flex vw-50">
                    <button className='col-1 bm-burger-button '>
                        <TiThMenu color='white' size={40} />
                    </button>
                    <div className='col-1 fs-2 pl-5'>
                        <NavLink href={route('dashboard')} active={route().current('dashboard')}  >
                            Dashboard
                        </NavLink>
                    </div>
                    <div className="col-2 pt-2 ">
                        <NavLink href={route('dashboard')} active={route().current('dashboard')}  >
                            Dashboard
                        </NavLink>
                    </div>
                </div>
                
                <div className="col-6 d-flex justify-content-end">
                    <div className="w-100 pr-5 d-flex justify-content-end">
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="inline-flex rounded-md">
                                    <button
                                        type="button"
                                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                    >
                                        {auth.user.username}
                                        <svg
                                            className="ml-2 -mr-0.5 h-4 w-4"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </button>
                                </span>
                            </Dropdown.Trigger>
                            <Dropdown.Content>
                                <Dropdown.Link href={route('logout')} method="post" as="button">
                                    Log Out
                                </Dropdown.Link>
                            </Dropdown.Content>
                        </Dropdown>
                    </div>
                </div>
             
            </nav>
            {children}
        </div>
    );
}
