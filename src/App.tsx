import Add from './components/Add/Add';
import Table from './components/Table/Table';
import AddStore from './store/addStore';

const App = () => {
  return (
    <div className="App">
      <div className='wrapper'>
        <Table/>
        <Add 
        options={
          {
            addType: 'column',
            addStore: new AddStore()
          }
        }
        />
      </div>
    </div>
  );
}

export default App;
