import Link from 'next/link';

function MainPage() {
  return (
    <div className="bg-gray-100">
      {/* Navigation */}
      <nav className="flex justify-between items-center bg-white py-4 px-6 shadow-md">
        <div>
          <Link href="/" className="text-3xl font-bold text-indigo-500">QWatch</Link>
        </div>
        <div>
          <ul className="flex space-x-6 text-gray-600 ">
            <li><Link href="/" className="hover:text-black hover:font-bold">Home</Link></li>
            <li><Link href="/study" className="hover:text-black hover:font-bold">Study Rooms</Link></li>
            <li><Link href="/canteen" className="hover:text-black hover:font-bold">Canteens</Link></li>
            <li><Link href="/profile" className="hover:text-black hover:font-bold">My Profile</Link></li>
            <li><Link href="/contacts" className="hover:text-black hover:font-bold" >Contact</Link></li>
          </ul>
        </div>
      </nav>

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
    <Link href="#"               className="text-black bg-indigo-300 py-3 px-6 rounded-full font-bold  hover:text-white hover:bg-gray-500 transition duration-300 ease-in-out">Join the Q</Link>
  </section>

  {/* Footer */}
  <footer className="bg-gray-900 text-white py-10 px-6">
    <div className="flex justify-between items-center mb-8">
      <div>
        <Link href="#" className="text-3xl font-bold text-indigo-500">QWatch</Link>
        <p className="text-gray-600">Made with ❤️ by Roadtrip To Coimbra</p>
      </div>
      <div>
        <ul className="flex space-x-6">
          <li><Link href="#"><i className="fab fa-facebook fa-lg"></i></Link></li>
          <li><Link href="#"><i className="fab fa-twitter fa-lg"></i></Link></li>
          <li><Link href="#"><i className="fab fa-instagram fa-lg"></i></Link></li>
        </ul>
      </div>
    </div>
    <p className="text-gray-600 text-center">© 2023 QWatch. All rights reserved.</p>
  </footer>
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
