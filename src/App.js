import data from './data';
import './App.css';
import { VictoryBar, 
  VictoryChart, 
  VictoryAxis, 
  VictoryLabel, 
  VictoryPortal, 
  VictoryPie } from 'victory';
import { ageAndCountry, carsInFrance } from './data-utils';

console.log(carsInFrance(data));

function App() {

  return (
    <div className="App">
    
      <VictoryChart height={400} width={800}
        domainPadding={20}
      >
        <VictoryLabel text='Age in Each Country' x={400} y={30} textAnchor="middle"/>
        <VictoryAxis
          crossAxis
          style={{ tickLabels: { fontSize: 10 } }}
          tickLabelComponent={<VictoryPortal>
            <VictoryLabel 
              angle={-90}
              textAnchor='end' />
          </VictoryPortal>} />

        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`${x}yrs`)}
        />
        <VictoryBar 
          alignment='start'
          style={{ data: { fill: 'gold', width: 10 } }}
          data={ageAndCountry(data)} 
          x='location'
          y='age'
        />
      </VictoryChart>

      <VictoryPie>
        
      </VictoryPie>
        
    </div>
  );
}

export default App;