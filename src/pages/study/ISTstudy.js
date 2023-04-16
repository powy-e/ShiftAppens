import React from 'react';
import StudyUniversityList from '../StudyUniversityList';
import Link from 'next/link';

function ISTstudy() {
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
            <li><Link href="/canteen" className="hover:text-black hover:font-bold">Canteens</Link></li>
            <li><Link href="/study" className="hover:text-black hover:font-bold">Study Rooms</Link></li>
            <li><Link href="/profile" className="hover:text-black hover:font-bold">My Profile</Link></li>
            <li><Link href="/contacts" className="hover:text-black hover:font-bold" >Contact</Link></li>
          </ul>
        </div>
      </nav>

       
      <section className="bg-indigo-500 py-20 px-6 text-center text-white">
  <img src="https://upload.wikimedia.org/wikipedia/pt/e/ed/IST_Logo.png"  className="mx-auto m-4 h-48 object-cover mb-4 rounded-lg" />
  <h1 className="text-4xl mb-4">You are at </h1>
  <h1 className="text-4xl font-bold mb-4">Instituto Superior Técnico</h1>
  <p className="text-lg mb-8">Alameda, Lisboa</p>
  <Link href="/canteen" className="text-black bg-indigo-300 py-3 px-6 rounded-full font-bold  hover:text-white hover:bg-gray-500 transition duration-300 ease-in-out">Change</Link>
</section>


        {/* Main content */}
         {/* Features section */}
      <section className="mt-12 mb-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Pavilhão de Mecânica III - V1.2</h2>
        <li className="flex justify-center m-5">
        <Link href="/ISTreviewStudy" className=" text-black bg-indigo-300 py-3 px-6 rounded-full font-bold  hover:text-white hover:bg-gray-500 transition duration-300 ease-in-out">Review</Link>
        </li>
        <div className="flex flex-col sm:flex-row justify-center space-y-8 sm:space-x-8 sm:space-y-0">
          <div className="bg-white p-8 rounded-lg shadow-lg flex-1">
            <i className="fas fa-code text-indigo-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-4">Ocupação</h3>
            <p className=" font-bold text-gray-600">10/50 lugares ocupados</p>

            <p className="text-gray-600">Maior ocupação do que a média a uma segunda-feira</p>
            <p className="text-gray-600 mb-4">:(</p>
            <h3 className="text-xl font-bold mb-4">Horário</h3>
            <p className=" font-bold text-gray-600">Segunda a Sexta</p>
            <p className="text-gray-600">06h00 - 20h00</p>

            <h3 className="text-xl font-bold mt-4 ">Entrada:</h3>
            <p className="text-gray-600">Apenas para estudantes de LEmec</p>

          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg flex-1">
            <i className="fas fa-mobile-alt text-indigo-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-4">Fun Stats</h3>
            <p className=" font-bold text-gray-600">Hoje já estudaram aqui:</p>
            <p className="text-gray-600">69 pessoas</p>

            

            <p className=" font-bold text-gray-600">Fichas Disponíveis:</p>
            <p className="text-gray-600">4/6</p>

            <p className=" font-bold text-gray-600">Reviews da sala:</p>
            <p className="text-gray-600">9.0/10</p>

            <p className=" font-bold text-gray-600">Average tempo de estudo:</p>
            <p className="text-gray-600">35 minutos</p>
          </div>
          
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-6">
        <div className="flex justify-between items-center mb-8">
          <div>
            <Link href="/" className="text-3xl font-bold text-indigo-500">QWatch</Link>
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

export default ISTstudy;
