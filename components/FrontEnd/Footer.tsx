import Link from 'next/link';
import { useState } from 'react';

export default function Footer() {
    const [cookieConsent, setCookieConsent] = useState(false);

    const footerNavs = [
        {
            label: "Company",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'Partners'
                },
                {
                    href: 'javascript:void()',
                    name: 'Blog'
                },
                {
                    href: 'javascript:void()',
                    name: 'Team'
                },
                {
                    href: 'javascript:void()',
                    name: 'Careers'
                },
            ],
        },
        {
            label: "Resources",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'contact'
                },
                {
                    href: 'javascript:void()',
                    name: 'Support'
                },
                {
                    href: 'javascript:void()',
                    name: 'Docs'
                },
                {
                    href: 'javascript:void()',
                    name: 'Pricing'
                },
            ],
        },
        {
            label: "About",
            items: [
                {
                    href: 'javascript:void()',
                    name: 'Terms'
                },
                {
                    href: 'javascript:void()',
                    name: 'License'
                },
                {
                    href: 'javascript:void()',
                    name: 'Privacy'
                },
                {
                    href: 'javascript:void()',
                    name: 'About US'
                },
            ]
        }
    ];

    const acceptCookies = () => {
        setCookieConsent(true);
        // You can also add logic here to store the user's consent in local storage or cookies
    };

    return (
        <footer className="text-gray-500 bg-white px-4 max-w-screen-xl mx-auto md:px-8">
            <div className="gap-6 justify-between md:flex">
                <div className="flex-1">
                    <div className="max-w-xs">
                        <img src="/logo.png" className="w-20" />
                        <p className="leading-relaxed mt-2 text-[15px]">
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                    </div>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <label className="block pt-4 pb-2">
                            Stay up to date
                        </label>
                        <div className="max-w-sm flex items-center border rounded-md p-1">
                            <input 
                                type="email"
                                placeholder="Enter your email"
                                className="w-full p-2.5 outline-none"
                            />
                            <button
                                className="p-2.5 rounded-md text-white bg-indigo-600 outline-none shadow-md focus:shadow-none sm:px-5"
                            >
                                Subscribe
                            </button>
                        </div>
                    </form>
                </div>
                <div className="flex-1 mt-10 space-y-6 items-center justify-between sm:flex md:space-y-0 md:mt-0">
                    {footerNavs.map((item, idx) => (
                        <ul className="space-y-4" key={idx}>
                            <h4 className="text-gray-800 font-medium">
                                {item.label}
                            </h4>
                            {item.items.map((el, idx) => (
                                <li key={idx}>
                                    <a 
                                        href={el.href}
                                        className="hover:underline hover:text-indigo-600"
                                    >
                                        {el.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
            <div className="mt-8 py-6 border-t items-center justify-between sm:flex">
                <div className="mt-4 sm:mt-0">
                    &copy; 2022 Float UI All rights reserved.
                </div>
                <div className="mt-6 sm:mt-0">
                    <ul className="flex items-center space-x-4">
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="javascript:void()">
                                <svg className="svg-icon w-6 h-6 text-blue-400" viewBox="0 0 20 20">
                                    <path fill="none" d="M18.258,3.266c-0.693,0.405-1.46,0.698-2.277,0.857c-0.653-0.686-1.586-1.115-2.618-1.115c-1.98,0-3.586,1.581-3.586,3.53c0,0.276,0.031,0.545,0.092,0.805C6.888,7.195,4.245,5.79,2.476,3.654C2.167,4.176,1.99,4.781,1.99,5.429c0,1.224,0.633,2.305,1.596,2.938C2.999,8.349,2.445,8.19,1.961,7.925C1.96,7.94,1.96,7.954,1.96,7.97c0,1.71,1.237,3.138,2.877,3.462c-0.301,0.08-0.617,0.123-0.945,0.123c-0.23,0-0.456-0.021-0.674-0.062c0.456,1.402,1.781,2.422,3.35,2.451c-1.228,0.947-2.773,1.512-4.454,1.512c-0.291,0-0.575-0.016-0.855-0.049c1.588,1,3.473,1.586,5.498,1.586c6.598,0,10.205-5.379,10.205-10.045c0-0.153-0.003-0.305-0.01-0.456c0.7-0.499,1.308-1.12,1.789-1.827c-0.644,0.28-1.334,0.469-2.06,0.555C17.422,4.782,17.99,4.091,18.258,3.266"></path>
                                </svg>
                            </a>
                        </li>
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="javascript:void()">
                                <svg className="svg-icon w-6 h-6 text-blue-700" viewBox="0 0 20 20">
                                    <path fill="none" d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"></path>
                                </svg>
                            </a>
                        </li>
                        <li className="w-10 h-10 border rounded-full flex items-center justify-center">
                            <a href="javascript:void()">
                                <svg className="svg-icon w-6 h-6 text-blue-500" viewBox="0 0 20 20">
                                    <path fill="none" d="M10,2.531c-4.125,0-7.469,3.344-7.469,7.469c0,4.125,3.344,7.469,7.469,7.469c4.125,0,7.469-3.344,7.469-7.469C17.469,5.875,14.125,2.531,10,2.531 M10,3.776c1.48,0,2.84,0.519,3.908,1.384c-1.009,0.811-2.111,1.512-3.298,2.066C9.914,6.072,9.077,5.017,8.14,4.059C8.728,3.876,9.352,3.776,10,3.776 M6.903,4.606c0.962,0.93,1.82,1.969,2.53,3.112C7.707,8.364,5.849,8.734,3.902,8.75C4.264,6.976,5.382,5.481,6.903,4.606 M3.776,10c2.219,0,4.338-0.418,6.284-1.181c0.43,0.917,0.767,1.876,1.002,2.868C10.142,13.199,8.623,14.85,6.631,15.717C5.043,14.678,3.808,12.964,3.276,10.948C3.293,10.646,3.52,10,3.776,10 M10,16.224c-1.599,0-3.055-0.498-4.256-1.342c1.479-0.625,3.048-1.811,4.299-3.585C10.307,13.527,10.652,15.353,10.67,17.303C11.566,17.239,12.426,16.92,13.194,16.38C12.197,16.132,11.122,15.988,10,16.224 M13.49,15.288c0.715,0.452,1.5,0.81,2.347,1.059C15.59,14.57,14.184,12.735,12.33,11.337C12.564,12.725,13.041,14.063,13.49,15.288z"></path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {!cookieConsent && (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4">
       <p>
    We use cookies to ensure you get the best experience on our website. By continuing to use this site, you accept our use of cookies. For more details, please review our <br></br>
    <Link href="/Privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>.
</p>

        <button 
            onClick={acceptCookies}
            className="mt-2 p-2 bg-indigo-600 rounded"
        >
            Accept
        </button>
    </div>
)}
        </footer>
    );
}
