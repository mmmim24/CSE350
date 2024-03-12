import React from 'react'
import notFound from '/404-page-animation-example.gif';

const Error = () => {
  return (
    <React.Fragment>
      <main className="grid justify-center bg-[#efefef] px-6 py-24 sm:py-32 lg:px-8">
          <img className='rounded-xl h-[80%] w-[80%] mx-auto my-auto' src={notFound} alt="404" />
        <div className="text-center">
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white hover:text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
            <a href="#" className="text-sm font-semibold text-gray-900">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </React.Fragment>
  )
}

export default Error