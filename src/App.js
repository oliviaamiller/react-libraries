import data from './data';
import MaterialTable from 'material-table';
// import { makeColumns } from './data-utils';
import './App.css';
import { VictoryBar, VictoryChart } from 'victory';
import { ageAndPet } from './data-utils';



function App() {

  return (
    <div className="App">
      <MaterialTable
        options={{
          search: false,
          rowStyle: {
            backgroundColor: '#F5FFFE'
          },
          headerStyle: {
            backgroundColor: '#70A5C4'
          }
        }}
        title='people'
        columns={[
          { title: 'first name', field: 'first_name' },
          { title: 'last name', field: 'last_name' },
          { title: 'gender', field: 'gender' },
          { title: 'age', field: 'age' },
          { title: 'pet', field: 'pet' },
          { title: 'favorite food', field: 'favorite_food' },
        ]}
        data={data}/>

      <VictoryChart>
        <VictoryBar 
          data={ageAndPet(data)} 
          x='pet'
          y='age'
        />
      </VictoryChart>
        
    </div>
  );
}

export default App;