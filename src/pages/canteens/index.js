import UniversityList from '../../components/UniversityList';
import Link from 'next/link';

function CantinePage() {
  return (
    <div className="bg-gray-100">


      {/* Main content */}
      <main>
        <UniversityList />
      </main>

    </div>
  );
}

export default CantinePage;
