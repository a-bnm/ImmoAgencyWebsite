import React, { Component } from 'react';
import { Head } from '@inertiajs/inertia-react';
import './css/dashboard.css'
import {TiThMenu} from 'react-icons/ti';
import NavLink from '@/Components/NavLink';
import { Link } from '@inertiajs/inertia-react';
import PropertiesDashboard from '@/components/dashboard/PropertiesDashboard';
import UsersDashboard from '@/components/dashboard/UsersDashboard';
import MyCalendar from '@/components/dashboard/MyCalendar';
import {AiTwotoneHome} from 'react-icons/ai';
import {BiBuildingHouse} from 'react-icons/bi';
import {FiUsers} from 'react-icons/fi';
import {FaCalendar, FaCalendarAlt} from 'react-icons/fa';
import {IoAddCircle}  from 'react-icons/io5';
import {slide as Menu} from 'react-burger-menu';


class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state={
            part:'properties',
        }
    }

    setScreen(value){
        this.setState({
            part:value,
        })
    }

    render(){
        var display
        if(this.state.part === "properties"){
            display = <PropertiesDashboard />
        }else if(this.state.part === "users"){
            display = <UsersDashboard />
        }else{
            display =<MyCalendar />
        }
        return (
            <div className='min-vw-100 min-vh-100 dashboard-container'>
                <Head title="Dashboard" />
                <div className="min-vw-100 dashboard-header ">
                    <div className="row pl-5 pt-2">
                        <div className="col-6 d-flex vw-50">
                            <div className='row '>
                                <div className='col-1 mr-5'>
                                    <button className='bm-burger-button ' >
                                        
                                    </button> 
                                </div>
                                <div className='col-1 fs-2 ml-5 pl-5'>
                                    <NavLink href={route('dashboard')} active={route().current('dashboard')}  >
                                        Dashboard
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 d-flex justify-content-end">
                            <div className="w-100 pr-5 d-flex justify-content-end fw-bold fs-5 text-white">
                                <Link href={route('logout')} method="post" as="button">
                                    Log Out
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <Menu className='menu-container '>
                    <div className='border-bottom w-75 mb-3 pl-5  fw-bold fs-2'>
                        <Link href='/' className='row m-0 p-0 text-white text-decoration-none'>
                            <div className='col-1 mr-4'>
                                <AiTwotoneHome />
                            </div>
                            <div className=' col-1 '>
                                <span className='link-text '>Home</span>
                            </div>
                        </Link>
                    </div>
                    <div className='border-bottom w-75 mb-3 pl-5 text-white fw-bold fs-2 menu-item'>
                        <a className='row m-0 p-0 text-white text-decoration-none' onClick={() => this.setScreen('properties')} >
                            <div className='col-1 mr-4'>
                                <BiBuildingHouse />
                            </div>
                            <div className=' col-1'>
                                <span className='link-text h-auto pb-5'>Properties</span>
                            </div>
                        </a>
                    </div>
                    <div className='border-bottom w-75 mb-3 pl-5 text-white fw-bold fs-2 menu-item'>
                        <a className='row m-0 p-0 text-white text-decoration-none'  >
                            <div className='col-1 mr-4'>
                                <IoAddCircle />
                            </div>
                            <div className=' col-1'>
                                <a href='/addProperty' className='link-text text-white text-decoration-none h-auto pb-5'>Property</a>
                            </div>
                        </a>
                    </div>
                    <div className='border-bottom w-75 mb-3 pl-5 text-white fw-bold fs-2 menu-item'>
                        <a  className='row m-0 p-0 text-white text-decoration-none' onClick={() => this.setScreen('users')}>
                            <div className='col-1 mr-4'>
                                <FiUsers />
                            </div>
                            <div className=' col-1'>
                                <span className='link-text h-auto pb-5'>Users</span>
                            </div>
                        </a>
                    </div>
                    <div className='border-bottom w-75 mb-3 pl-5 text-white fw-bold fs-2 menu-item'>
                        <a className='row m-0 p-0 text-white text-decoration-none' onClick={() => this.setScreen('calendar')}>
                            <div className='col-1 mr-4'>
                                <FaCalendarAlt />
                            </div>
                            <div className=' col-1'>
                                <span className='link-text h-auto pb-5'>Calendar</span>
                            </div>
                        </a>
                    </div>
                </Menu>
                <div className='row text-white fs-1 m-0 min-vh-100 dashboard-content'>
                    {display}
                </div>
            </div>
        );
    }
}


export default Dashboard;