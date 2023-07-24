import { useEffect, useRef, useState } from "react";
import Aside from "./Aside";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleButton = useRef()
    const asideBar = useRef()

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        const checkIfClickedOutside = e => {
            if (isOpen && !toggleButton.current.contains(e.target) && !asideBar.current.contains(e.target)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)

        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isOpen])

    return (
        <header className="fixed top-0 left-0 right-0 lg:hidden">
            <nav className=" flex justify-end md:max-w-3xl w-screen mx-auto px-4 py-5 lg:hidden">
                <div className="bg-slate-800 rounded-lg" onClick={handleClick} ref={toggleButton}>
                    <button
                        id="createProductButton"
                        className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-2 focus:ring-primary-300 font-medium rounded-lg text-sm px-2 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                        type="button"
                        data-drawer-target="drawer-create-product-default"
                        data-drawer-show="drawer-create-product-default"
                        aria-controls="drawer-create-product-default"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-list w-6" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                    </button>
                </div>
            </nav>
            <Aside onClick={handleClick} isOpen={isOpen} ref={asideBar} />
            {isOpen && <div drawer-backdrop="" className="bg-gray-900 bg-opacity-50 fixed inset-0 z-30"></div>}
        </header>
    );
}

export default Navbar;