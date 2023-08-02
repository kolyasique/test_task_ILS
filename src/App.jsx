import MapContainerComponent from './components/MapContainerComponent';
import MenuComponent from './components/MenuComponent';

import cl from './App.module.scss'
function App() {
  return (
    <div className="App">
        <div className={cl.windowWrapper}>
          <div className={cl.window}>
              <div className={cl.mapWrapper}>
                <MapContainerComponent/>
              </div>
              <div className={cl.listWrapper}>
                <MenuComponent />
              </div> 
          </div>
        </div>
    </div>
  );
}

export default App;
