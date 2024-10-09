import React from 'react'
import notFound from '/404-page-animation-example.gif';

const Error = () => {
  return (
    <React.Fragment>
      <main className="min-h-[60vh] my-8 grid justify-center items-center sm:min-h-[70vh] sm:my-[32px]">
        <img className="rounded-xl h-[300px] mx-auto sm:h-[400px] sm:my-auto" src={notFound} alt="404" />
        <div className="text-center mt-6 sm:mt-10">
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl md:text-5xl">Page not found</h1>
          <p className="mt-4 text-base leading-6 text-gray-600 sm:text-lg sm:leading-7">Sorry, we couldn’t find the page you’re looking for.</p>
          <div className="mt-6 flex flex-col items-center gap-4 sm:mt-10 sm:flex-row sm:justify-center sm:gap-x-6">
            <a
              href="/"
              className="p-3 bg-[#D70000] text-white rounded-lg hover:bg-white hover:text-[#D70000] text-sm font-semibold shadow-sm border-[1px] hover:border-[#D70000]"
            >
              Go back home
            </a>
            <a
              href="#"
              className="p-3 bg-[#136F63] text-white rounded-lg hover:bg-white hover:text-[#136F63] text-sm font-semibold shadow-sm border-[1px] hover:border-[#136F63]"
            >
              Contact support <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </main>
    </React.Fragment>
  )
}

export default Error