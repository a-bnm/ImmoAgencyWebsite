import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import { Link} from '@inertiajs/inertia-react';

export default function MyDropDownMenu(props) {
  return (
    <Dropdown>
        <Dropdown.Toggle variant="sucess" className='text-white fw-bold' id="dropdown-basic">Menu</Dropdown.Toggle>
        <Dropdown.Menu className='menu'>
            <Dropdown.Item className="text-white fw-bold pt-3">Welcome {props.user.username}</Dropdown.Item>
            <Dropdown.Item className="fw-bold pt-3">
                <Link href={route('dashboard')} className="text-decoration-none text-white ">
                  Dashboard
                </Link>
            </Dropdown.Item>
            <Dropdown.Item >
                <Link href={route('logout')} method="post" as="button" className="text-decoration-none text-white fw-bold ">
                  Log Out
                </Link>
            </Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
  )
}
