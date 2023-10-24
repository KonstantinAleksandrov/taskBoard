import Table from './components/Table/Table';
import AddStore from './store/addStore';
import ColumnCreator from './components/ColumnCreator';

const App = () => {
  return (
    <div className="App">
      <div className='wrapper'>
        <Table/>
        <ColumnCreator  addStore={new AddStore()}/>
      </div>
    </div>
  );
}

export default App;
