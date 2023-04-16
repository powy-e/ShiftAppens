import Link from 'next/link';

function MainPage() {
  return (
    <div className="bg-gray-100">


      {/* Hero section */}
      <section className="bg-indigo-500 py-20 px-6 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to QWatch!</h1>
        <p className="text-lg mb-8">End unecessay qeues and full packed study rooms</p>
        <Link href="/study" className="text-black bg-indigo-300 py-3 px-6 rounded-full font-bold  hover:text-white hover:bg-gray-500 transition duration-300 ease-in-out">Join the Q</Link>
      </section>

      {/* Features section */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-16">What are we?</h2>
        <div className="flex flex-col sm:flex-row justify-center space-y-8 sm:space-x-8 sm:space-y-0">
          <div className="bg-white p-8 rounded-lg shadow-lg flex-1">
            <i className="fas fa-code text-indigo-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-4">Find the Perfect Study Spot</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg flex-1">
            <i className="fas fa-mobile-alt text-indigo-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-4">Don't Let Hunger Distract You</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg flex-1">
            <i className="fas fa-laptop text-indigo-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-4">Get More Done in Less Time</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-indigo-500 py-20 px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Ready to join?</h2>
        <p className="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <Link href="#" className="text-black bg-indigo-300 py-3 px-6 rounded-full font-bold  hover:text-white hover:bg-gray-500 transition duration-300 ease-in-out">Join the Q</Link>
      </section>


    </div>
  );
}

export default MainPage;

// import React from 'react';

// function MyPage() {
//   return (
//     <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
//       <h1 className="text-4xl font-bold mb-4">Welcome to My Page</h1>
//       <p className="text-gray-700 text-lg">This is a small example of a Tailwind page.</p>
//       <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
//         Click Me!
//       </button>
//     </div>
//   );
// }

// export default MyPage;
