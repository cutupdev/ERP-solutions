'use client';
import './Navbar.css'
import {
    Button,
    Collapse,
    Drawer,
    IconButton,
    Menu,
    MenuHandler,
    MenuList,
    Typography,
} from '@material-tailwind/react';
import React, { Fragment, useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import navbarData from '@/textContent/navbar/data.json';
import logo from '../../public/images/favicon.png';

function Nav({ data, title }) {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <Menu open={openMenu} handler={setOpenMenu} allowHover={false}>
            <MenuHandler>
                <Button
                    variant="text"
                    className="flex items-center text-base font-bold capitalize bg-sky-blue hover:bg-light-purple transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500"
                >
                    {title}
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3.5 w-3.5 transition-transform bg-sky-blue hover:bg-light-purple duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500 ${openMenu ? 'rotate-180' : '/'
                            }`}
                    />
                </Button>
            </MenuHandler>
            <MenuList
                key="menuList"
                className="hidden bg-white w-auto grid grid-cols-2"
            >
                {data.map((item) => (
                    <NavItem key={data.heading} {...item} />
                ))}
            </MenuList>
        </Menu>
    );
}

function NavItem({ caption, color, heading, icon, link, isHidden }) {
    if (isHidden) {
        return null;
    }

    return (
        <Link
            key={heading}
            href={link}
            className={`border-none px-2.5 py-4 w-2/3 hover:bg-${color}-50 rounded-2xl transition duration-200`}
        >
            <div className="flex">
                <div className="mr-2">
                    <i
                        className={`${icon} mr-[0.3vw] text-${color}-400 text-left text-xl`}
                    ></i>
                </div>
                <div className="">
                    <p className="font-semibold text-md">{heading}</p>
                    <p className="mt-2 font-medium text-xs opacity-75">
                        {caption}
                    </p>
                </div>
            </div>
        </Link>
    );
}

function MobileNav({ title, data, closeDrawer }) {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen((val) => !val);

    return (
        <>
            <div
                onClick={toggleOpen}

                className="w-full flex justify-between py-3"
            >
                <Typography variant="h5" className="text-gray-900">
                    {title}
                </Typography>
                {open ? (
                    <i className="ri-arrow-up-s-line text-xl"></i>
                ) : (
                    <i className="ri-arrow-down-s-line text-xl"></i>
                )}
            </div>
            <Collapse open={open}>
                {data.map((elm) =>
                    elm.isHidden ? null : (
                        <Link
                            key={elm.heading}
                            href={elm.link}
                            onClick={closeDrawer}
                        >
                            <div className="ml-4 flex items-center">
                                <div
                                    className={`px-2 my-2 bg-${elm.color}-50 rounded-lg mr-2`}
                                >
                                    <i
                                        className={`${elm.icon} text-${elm.color}-400 text-lg`}
                                    ></i>
                                </div>
                                <span className="font-medium">
                                    {elm.heading}
                                </span>
                            </div>
                        </Link>
                    ),
                )}
            </Collapse>
        </>
    );
}

function MobileNavbar() {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const navbarKeys = Object.keys(navbarData);

    const openDrawer = () => setDrawerOpen(true);
    const closeDrawer = () => setDrawerOpen(false);

    return (
        <div className="md:hidden" id='mobile-menu'>
            <i
                className="ri-menu-3-line text-gray-700 text-3xl"
                onClick={openDrawer}
            ></i>
            <Drawer
                placement="left"
                open={isDrawerOpen}
                onClose={closeDrawer}
                className="p-4 w-screen h-full"
            >
                <div className="mb-6 flex items-center justify-between">
                    <IconButton
                        variant="text"
                        color="blue-gray"
                        className="ms-auto"
                        onClick={closeDrawer}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </IconButton>
                </div>

                <Link href="/" onClick={closeDrawer}>
                    <Typography variant="h5" className="text-gray-900">
                        Home
                    </Typography>
                </Link>

                {navbarKeys.map((key) => (
                    <MobileNav
                        key={key}
                        title={key}
                        data={navbarData[key].items}
                        closeDrawer={closeDrawer}
                    />
                ))}

                <Link href="/careers" onClick={closeDrawer}>
                    <Typography variant="h5" className="text-gray-900">
                        Careers
                    </Typography>
                </Link>

                <div id="button">
                    <div className="w-full mt-8">
                        <Link
                            href="/"
                            target="_blank"
                            onClick={closeDrawer}
                        >
                            <Button

                                className="w-full  bg-gradient-to-r from-cyan-400 to-blue-500 "
                            >
                                Free Demo
                            </Button>
                        </Link>
                    </div>

                    <div className="w-full mt-4">
                        <Link href="/contact-sales" onClick={closeDrawer}>
                            <Button
                                variant="outlined"
                                color="blue"
                                className="w-full"
                            >
                                Contact Sales
                            </Button>
                        </Link>
                    </div>
                </div>
            </Drawer>
        </div>
    );
}

function Navbar() {
    const navbarDataKeys = Object.keys(navbarData);

    return (
        <Fragment>
            <div id='navbar' className="px-6 md:px-10 flex items-center justify-between  py-6">
                <div id='navbar-part-1'>
                    <Link href="/">
                        <Image
                            src={logo}
                            style={{ width: '100px' }}
                            id="logo"
                            alt="wahni it solutions logo"
                        />
                    </Link>
                </div>
                

                <div className="hidden md:flex items-center justify-center gap-7 font-bold text-[#20262e]   px-10 " id='navbar-part-2'>
                    <Link
                        href="/"
                        className="mt-0.5 font-extrabold bg-sky-blue hover:bg-light-purple transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500"
                    >
                        Home
                    </Link>

                    {navbarDataKeys.map((key) => (
                        <Nav
                            key={key}
                            title={key}
                            data={navbarData[key].items}
                        />
                    ))}

                    <Link
                        href="/careers"
                        className="mt-0.5 font-extrabold bg-sky-blue hover:bg-light-purple transition duration-300 ease-in-out transform hover:scale-105 hover:text-blue-500"
                    >
                        Careers
                    </Link>
                </div>
                <div className='flex items-center justify-between gap-6'>
                    <div className="hidden md:flex items-center justify-between gap-2" id='navbar-part-3'>
                        <Link
                            href="/"
                        >
                            <button className="py-2 px-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg font-bold text-white bg-opacity-90 transition hover:bg-blue-500 hover:text-white hover:scale-[0.99999] hover:mt-[0.1vw] duration-300 ">
                                Free Demo
                            </button>
                        </Link>
                        <Link href="/contact-sales">
                            <Button variant="outlined" color="blue">
                                Contact Sales
                            </Button>
                        </Link>
                    </div>
                    <MobileNavbar />
                </div>
            </div>
        </Fragment>
    );
}
export default Navbar;
