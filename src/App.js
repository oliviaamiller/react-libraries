import data from './Data';
import MaterialTable from 'material-table';
import './App.css';

function App() {
  return (
    <div className="App">
      <MaterialTable
        options={{
          search: false
        }}
        title='people'
        columns={[
          { title: 'first name' },
          { title: 'last name' },
          { title: 'gender' },
          { title: 'age' },
          { title: 'pet' },
          { title: 'favorite food' },
        ]}
        data={data}/>
    </div>
  );
}

export default App;