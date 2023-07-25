import { forwardRef, useEffect, useState } from "react";

const Aside = forwardRef(({ isOpen, onClick }, ref) => {
    const navData = [
        {
            url: "/",
            pageTitle: "Home",
        },
        {
            url: "/blog",
            pageTitle: "Blog",
        },
        {
            url: "/project",
            pageTitle: "Project",
        },
    ];

    const [path, setPath] = useState('')

    useEffect(() => {
        setPath(window.location.pathname)
    }, [])

    return (
        <>
            <aside
                className={`fixed top-0 right-0 z-40 w-full h-screen max-w-xs p-6 overflow-y-auto transition-transform bg-gradient-to-tl from-slate-950 from-50% to-slate-900 lg:sticky lg:top-20 lg:translate-x-0 lg:flex lg:flex-col lg:justify-center lg:w-fit lg:bg-none
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                ref={ref}
            >
                <button
                    type="button"
                    className="bg-slate-800 focus:ring-2 focus:ring-primary-300 rounded-lg text-sm p-2 mb-11 lg:hidden"
                    onClick={onClick}
                >
                    <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    ><path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"></path></svg
                    >
                    <span className="sr-only">Close menu</span>
                </button>
                <div className="lg:border-l-2 lg:border-slate-700">
                    <div className="space-y-6">
                        {navData.map(nav => <a href={nav.url} key={nav.pageTitle} id="nav-link" className={`${path == nav.url ? 'border-l-4 border-slate-700 pl-6 lg:pl-3' : 'pl-7'} block text-lg font-medium text-slate-100 lg:transition-all lg:text-xl`}>{nav.pageTitle}</a>)}
                    </div>
                </div>
            </aside>
        </>
    );
})

export default Aside;