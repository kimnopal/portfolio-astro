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
        <header className="fixed z-40 top-0 left-0 right-0 backdrop:blur-sm lg:hidden">
            <nav className=" flex justify-end md:max-w-3xl w-auto mx-auto px-4 py-5 lg:hidden">
                <div className="bg-slate-800 rounded-lg" onClick={handleClick} ref={toggleButton}>
                    <button
                        className="focus:ring-2 focus:ring-primary-300 font-medium rounded-lg text-sm p-2 focus:outline-none"
                        type="button"
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