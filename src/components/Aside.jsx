import { forwardRef } from "react";

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

    return (
        <>
            <aside
                id="drawer-create-product-default"
                className={`fixed top-0 right-0 z-40 w-full h-screen max-w-xs p-4 overflow-y-auto transition-transform  bg-gradient-to-tl from-slate-950 from-50% to-slate-900 lg:sticky lg:translate-x-0 lg:flex lg:flex-col lg:justify-center lg:p-6 lg:w-fit lg:h-auto lg:bg-none
            ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                tabIndex="-1"
                aria-labelledby="drawer-label"
                aria-hidden="true"
                ref={ref}
            >
                <button
                    type="button"
                    data-drawer-dismiss="drawer-create-product-default"
                    aria-controls="drawer-create-product-default"
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 mb-6 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white lg:hidden"
                    onClick={onClick}
                >
                    <svg
                        aria-hidden="true"
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
                <div>
                    <div className="space-y-6">
                        {navData.map(nav => <a href={nav.url} key={nav.pageTitle} className="block text-sm font-medium text-slate-100 lg:text-xl">{nav.pageTitle}</a>)}
                    </div>
                </div>
            </aside>
        </>
    );
})

export default Aside;