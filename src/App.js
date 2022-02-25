import data from './data';
import './App.css';
import { VictoryBar, 
  VictoryChart, 
  VictoryAxis, 
  VictoryLabel, 
  VictoryPortal, 
  VictoryPie,
  VictoryLine,
  VictoryStack } from 'victory';
import { ageAndCountry, carsInFrance, mNamesLocation } from './data-utils';

console.log(mNamesLocation(data));

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

      
      <svg viewBox="0 0 400 400">
        <VictoryPie
          standalone={false}
          width={400} height={400}
          padding={{ top: 120, bottom: 120, left: 120, right: 120 }}
          colorScale={['blue', 'pink', 'gold', 'black', 'red', 'green']}
          data={carsInFrance(data)}
        />
        <VictoryLabel 
          style={{ fontSize: 18 }}
          x={150} y={50}
          text="Cars in Indonesia"/>
      </svg>
  
    

      <VictoryChart>
        <VictoryStack>
        colorScale={['tomato', 'orange', 'gold']}
        
          <VictoryBar />
        
        
        
      
        </VictoryStack>

      </VictoryChart>
        
    </div>
  );
}

export default App;