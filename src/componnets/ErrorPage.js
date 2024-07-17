import React from 'react'

const ErrorPage = () => {
  return (
    <div class="bg-gray-100 px-2 text-center">
    <div class="h-screen flex flex-col justify-center items-center">
        <h1 class="text-8xl font-extrabold text-red-500">500</h1>
        <p class="text-4xl font-medium text-gray-800">Internal Server Error</p>
        <p class="text-xl text-gray-800 mt-4">Page Not Found.</p>
    </div>
</div>
  )
}

export default ErrorPage
