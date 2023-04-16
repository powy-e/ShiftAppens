import UniversityList from '../../components/UniversityList';

function CantinePage() {
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
            <li><Link href="/cantine" className="hover:text-black hover:font-bold">Canteens</Link></li>
            <li><Link href="/study" className="hover:text-black hover:font-bold">Study Rooms</Link></li>
            <li><Link href="/profile" className="hover:text-black hover:font-bold">My Profile</Link></li>
            <li><Link href="/contacts" className="hover:text-black hover:font-bold" >Contact</Link></li>
          </ul>
        </div>
      </nav>

     {/* Main content */}
     <main>
        <UniversityList />
      </main>

       

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

export default CantinePage;
