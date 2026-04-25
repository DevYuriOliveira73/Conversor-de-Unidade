import { DarkModeToggle } from './components/ui/DarkModeToggle';
import UnitConverter from './components/UnitConverter';


export default function App () {

  return (
    <section 
      className="w-screen h-screen bg-gray-50 flex items-center justify-center relative"
    >
      <UnitConverter />

      <div className="absolute top-4 right-4">
        <DarkModeToggle />
      </div>
    </section>
  );
}