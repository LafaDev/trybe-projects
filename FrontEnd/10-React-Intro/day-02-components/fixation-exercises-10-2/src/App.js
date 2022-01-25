import './App.css';
import Image from './Image';
const staringCat = 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'

function App() {
  return (
    <main>
      <Image source={staringCat} alternativeText="staring cat" />);
    </main>
  )}

export default App;
