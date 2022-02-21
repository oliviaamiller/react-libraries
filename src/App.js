import data from './Data';
import MaterialTable from 'material-table';
import { useState } from 'react';
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
          { title: 'first name', field: 'name' },
          { title: 'last name', field: 'surname' },
          { title: 'gender', field: 'gender' },
          { title: 'age', field: 'age' },
          { title: 'pet', field: 'pet' },
          { title: 'favorite food', field: 'food' },
        ]}
        data={data}/>
    </div>
  );
}

export default App;