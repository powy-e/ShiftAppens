import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navigation from '../../components/Navigation';

function ISTreviewStudy() {
  return (
    <div className="bg-gray-100">
      {/* Navigation */}
      <Navigation />


      <section className="bg-indigo-500 py-20 px-6 text-center text-white">
        <img src="https://upload.wikimedia.org/wikipedia/pt/e/ed/IST_Logo.png" className="mx-auto m-4 h-48 object-cover mb-4 rounded-lg" />
        <h1 className="text-4xl mb-4">Review </h1>
        <h1 className="text-4xl font-bold mb-4">Instituto Superior Técnico</h1>
        <p className="text-lg mb-8">Study Room</p>
        <Link href="/ISTcanteen" className="text-black bg-indigo-300 py-3 px-6 rounded-full font-bold  hover:text-white hover:bg-gray-500 transition duration-300 ease-in-out">Cancel</Link>
      </section>

      <section className="my-12 px-6">
        <h2 className="text-2xl font-bold mb-4">Leave your experience</h2>
        <form className="flex flex-col space-y-4">
          <div>
            <label className="text-lg font-semibold mb-2 block">Select the Study Room *</label>
            <select className="text-white bg-indigo-500 py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-500 ease-in-out">
              <option value="option1" className="rounded-lg">Select an option</option>
              <option value="option1">Pavilhão de mecânica III - V1.2</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>


          </div>
          <div>
            <label htmlFor="studyRoom" className="text-lg font-semibold mb-2 block">Rating *</label>
            <input type="number" name="studyRoom" id="studyRoom" min="0" max="10" placeholder="Enter rating out of 10" className="border-gray-400 border-2 rounded-md py-2 px-4 w-72" />

          </div>
          <div>
            <label htmlFor="Fichas disponíveis na sala" className="text-lg font-semibold mb-2 block">Fichas disponíveis na sala</label>
            <input type="number" name="studyRoom" id="studyRoom" min="0" max="50" placeholder="Enter aproximate number" className="border-gray-400 border-2 rounded-md py-2 px-4 w-72" />

          </div>

          {/* <div>
      <label htmlFor="comment" className="text-lg font-semibold mb-2 block">Comment</label>
      <textarea name="comment" id="comment" rows="1" required className="border-gray-400 border-2 p-2 rounded-lg"></textarea>
    </div> */}
          <Link href="/ISTstudy" type="submit" className="text-center text-black bg-indigo-300 py-3 px-6 rounded-full font-bold  hover:text-white hover:bg-indigo-500 transition duration-300 ease-in-out">Submit</Link>
        </form>
      </section>





    </div>
  );
}

export default ISTreviewStudy;
