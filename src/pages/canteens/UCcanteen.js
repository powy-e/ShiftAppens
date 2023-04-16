import React, {Component, useState, useEffect} from 'react';

import canteens_by_university from '../../database_test/canteens_by_university';
import Canteen from '../../components/canteen';
import Link from 'next/link';
import { PrismaClient } from '@prisma/client'

export async function getStaticProps() {
  const data = await canteens_by_university('Universidade de Coimbra');
  

  return {
    props: {
      canteens: data,
    },
  }
};



function UCcanteen(props) {

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
  <img src="https://times.ces.uc.pt/wp-content/uploads/UC_V_FundoClaro-negro.png"  className="mx-auto m-4 h- object-cover mb-4 rounded-lg"/>
  <h1 className="text-4xl mb-4">You are at </h1>
  <h1 className="text-4xl font-bold mb-4">University of Coimbra - UC</h1>
  <p className="text-lg mb-8">Coimbra</p>
  <Link href="/canteen" className="text-black bg-indigo-300 py-3 px-6 rounded-full font-bold  hover:text-white hover:bg-gray-500 transition duration-300 ease-in-out">Change</Link>
</section>


        {/* Main content */}
         {/* Features section */}

         {/* Canteen Section*/}

      
      {props.canteens.map((canteen) => (
        <Canteen key={canteen.id} canteen={canteen} />
      ))}

      
      

      <section className="mt-12 mb-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Cantina São Jerónimo - Edifício S. Jerónimo, Hospital Velho</h2>
        <li className="flex justify-center m-5">
        <Link href="/ISTreview" className=" text-black bg-indigo-300 py-3 px-6 rounded-full font-bold  hover:text-white hover:bg-gray-500 transition duration-300 ease-in-out">Review</Link>
        </li>
        <div className="flex flex-col sm:flex-row justify-center space-y-8 sm:space-x-8 sm:space-y-0">
          <div className="bg-white p-8 rounded-lg shadow-lg flex-1">
            <i className="fas fa-code text-indigo-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-4">Average wait time</h3>
            <p className=" font-bold text-gray-600">22 Minutos e 45 segundos</p>

            <p className="text-gray-600">Tempo de Espera 4 minutos maior que o normal segunda-feira</p>
            <p className="text-gray-600 mb-4">:(</p>
            <h3 className="text-xl font-bold mb-4">Horário</h3>
            <p className=" font-bold text-gray-600">Segunda-feira</p>
            <p className="text-gray-600">12h00 - 15h00</p>
            <p className="text-gray-600">19h00 - 20h30</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg flex-1">
            <i className="fas fa-mobile-alt text-indigo-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-4">Fun Stats</h3>
            <p className=" font-bold text-gray-600">Hoje já foram servidas:</p>
            <p className="text-gray-600">69 refeições</p>

            

            <p className=" font-bold text-gray-600">Lugares disponíveis</p>
            <p className="text-gray-600">69/216 interior</p>
            <p className="text-gray-600">69/126 exterior</p>

            <p className=" font-bold text-gray-600">Reviews da refeição de hoje:</p>
            <p className="text-gray-600">3.5/10</p>

            <p className=" font-bold text-gray-600">Average tempo de refeição:</p>
            <p className="text-gray-600">35 minutos</p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg flex-1">
            <i className="fas fa-laptop text-indigo-500 text-4xl mb-4"></i>
            <h3 className="text-xl font-bold mb-4">Today's menu</h3>
            <p className=" font-bold text-gray-600">Sopa:</p>
            <p className="text-gray-600">Miso</p>

            <p className=" font-bold text-gray-600">Prato:</p>
            <p className="text-gray-600">Sushi do Social</p>

            <p className=" font-bold text-gray-600">Sobremesa:</p>
            <p className="text-gray-600">Mochi</p>

            <p className=" font-bold text-gray-600">Custo de Refeição:</p>
            <p className="text-gray-600">$2.80 - Mediante a apresentação de cartão de estudante da Ulisboa</p>
            <p className="text-gray-600">$5.50 - Externos</p>
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

export default UCcanteen;
