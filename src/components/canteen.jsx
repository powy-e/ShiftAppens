import React from 'react';
import Link from 'next/link';

function Canteen(props) {
    const canteen = props.canteen;


    if (!canteen) {
        return console.log("Canteen Error");
    }


    return (<section className="mt-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">{canteen.canteenName}</h2>
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
                <p className=" font-bold text-gray-600"> Hoje </p>
                <p className="text-gray-600">{canteen.monday}</p>

            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg flex-1">
                <i className="fas fa-mobile-alt text-indigo-500 text-4xl mb-4"></i>
                <h3 className="text-xl font-bold mb-4">Fun Stats</h3>
                <p className=" font-bold text-gray-600">Hoje já foram servidas:</p>
                <p className="text-gray-600">69 refeições</p>



                <p className=" font-bold text-gray-600">Lugares disponíveis</p>
                <p className="text-gray-600">69/{canteen.capacity} lugares </p>

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
    </section>);
};

export default Canteen;