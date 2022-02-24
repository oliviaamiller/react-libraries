import data from './data';
import './App.css';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryLabel } from 'victory';
import { ageAndCountry } from './data-utils';



function App() {

  return (
    <div className="App">
    
      <VictoryChart
        domainPadding={20}>
        <VictoryAxis
          crossAxis
          style={{ tickLabels: { fontSize: 5 } }}
          tickLabelComponent={<VictoryLabel angle={90}/>}/>

        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (`${x}yrs`)}
        />
        <VictoryBar 
          data={ageAndCountry(data)} 
          x='location'
          y='age'
        />
      </VictoryChart>
        
    </div>
  );
}

export default App;