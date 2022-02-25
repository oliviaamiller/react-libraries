import data from './data';
import './App.css';
import { VictoryBar, 
  VictoryChart, 
  VictoryAxis, 
  VictoryLabel, 
  VictoryPortal, 
  VictoryPie,
  VictoryLine } from 'victory';
import { carsInCountry, faveColor, agesOverTime } from './data-utils';
import { colorBars } from './functions';

console.log(colorBars({ x: 'Green' }));

function App() {

  return (
    <div className="App">
    
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
          tickFormat={(x) => (`${x}`)}
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


      <VictoryChart>
        <VictoryLine 
          data={agesOverTime(data)}/>
      
      </VictoryChart>
    
      
      
        
    </div>
  );
}

export default App;