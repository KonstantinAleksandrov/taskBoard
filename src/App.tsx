import Table from './containers/Table/Table';
import ColumnCreator from './containers/ColumnCreator';
import { TableContext } from './context/tableContext';
import storeFactory from './store/storeFactory';

const App = () => {
  return (
    <TableContext.Provider value={storeFactory}>
      <div className="App">
        <div className='wrapper'>
          <Table/>
          <ColumnCreator  storeId={storeFactory.createCreatorStore()}/>
        </div>
      </div>
    </TableContext.Provider>
  );
}

export default App;
