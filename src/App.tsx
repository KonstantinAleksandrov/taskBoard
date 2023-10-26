import { Table, ColumnCreator } from './containers';
import { TableContext } from './contexts';
import { tableStore } from './stores';

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
