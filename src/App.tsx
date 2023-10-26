import { Table, ColumnCreator } from './containers';
import { TableContext } from './context/tableContext';
import tableStore from './store/tableStore';

const App = () => {
  return (
    <TableContext.Provider value={tableStore}>
      <div className="App">
        <div className='wrapper'>
          <Table/>
          <ColumnCreator/>
        </div>
      </div>
    </TableContext.Provider>
  );
}

export default App;
