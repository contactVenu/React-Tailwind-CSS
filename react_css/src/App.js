
import './App.css';
import { JobCardNext } from './Screens/JobCardNext';
import { JobCardSave } from './Screens/JobCardSave';
import MultipleCard from './Screens/multipleCardView';
import { SingleCardView } from './Screens/SingleCardView';

function App() {
  return (
    <div className="flex flex-col items-center justify-between min-h-screen gap-4 py-3 bg-blue-50">
      <JobCardNext />
      <JobCardSave />
      <SingleCardView />
      <MultipleCard />
    </div>


  );
}

export default App;
