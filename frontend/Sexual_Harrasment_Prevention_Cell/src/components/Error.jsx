import React from 'react'
import notFound from '/404-page-animation-example.gif';

const Error = () => {
  return (
    <React.Fragment>
      <main className="min-h-[70vh] my-[32px] grid justify-center">
          <img className='rounded-xl h-[400px] mx-auto my-auto' src={notFound} alt="404" />
        <div className="text-center">
          <h1 className="mt-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="p-3 bg-[#D70000] text-white rounded-lg hover:bg-white hover:text-[#D70000] text-sm font-semibold shadow-sm border-[1px] hover:border-[#D70000]"
            >
              Go back home
            </a>
            <a href="#" className="p-3 bg-[#136F63] text-white rounded-lg hover:bg-white hover:text-[#136F63] text-sm font-semibold shadow-sm border-[1px] hover:border-[#136F63]">
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </React.Fragment>
  )
}

export default Error