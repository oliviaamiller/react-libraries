import data from './data';
import './App.css';
import { VictoryBar, 
  VictoryChart, 
  VictoryAxis, 
  VictoryLabel, 
  VictoryPortal, 
  VictoryPie,
  VictoryLine } from 'victory';
import MaterialTable from 'material-table';
import { carsInCountry, faveColor, agesOverTime } from './data-utils';
import { colorBars } from './functions';


function App() {

  return (
    <div className="App">
      <h1>My Charts</h1>
    
      <VictoryChart height={400} width={800}
        domainPadding={20}
      >
        <VictoryLabel text="Color Popularity" x={400} y={30} textAnchor="middle"/>
        <VictoryAxis
          crossAxis
          style={{ tickLabels: { fontSize: 13 } }}
          tickLabelComponent={<VictoryPortal>
            <VictoryLabel 
              angle={-90}
              textAnchor='end' />
          </VictoryPortal>} />

        <VictoryAxis
          dependentAxis
        />
        <VictoryBar 
          alignment='start'
          style={{ data: { fill: ({ datum }) => colorBars(datum), width: 10 } }}
          data={faveColor(data)}
      
        />
      </VictoryChart>

     

      
      <svg viewBox="0 0 400 400">
        <VictoryPie
          standalone={false}
          width={400} height={400}
          padding={{ top: 120, bottom: 120, left: 120, right: 120 }}
          colorScale={['blue', 'pink', 'gold', 'black', 'red', 'green']}
          data={carsInCountry(data)}
        />
        <VictoryLabel 
          style={{ fontSize: 18 }}
          x={135} y={50}
          text="Cars in Indonesia"/>
      </svg>


      <VictoryChart height={400} width={800}>

        <VictoryLabel text="Average Name Length by Age" x={400} y={20} textAnchor="middle"/>
        <VictoryAxis
          crossAxis
          style={{ tickLabels: { fontSize: 8 } }}
          tickLabelComponent={<VictoryPortal>
            <VictoryLabel 
              textAnchor='end' />
          </VictoryPortal>} />

        <VictoryAxis
          dependentAxis
          style={{ tickLabels: { fontSize: 10 } }}
        />
        <VictoryPortal>
          <VictoryLine
            interpolation='natural'
            style={{
              data: { stroke: 'gold',
                strokeWidth: 2 }, 
            }}
            data={agesOverTime(data)}/>
        </VictoryPortal>
      
      </VictoryChart>

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
          { title: 'car', field: 'car' },
          { title: 'location', field: 'location' },
        ]}
        data={data}/>

    </div>
  
  );
}

export default App;