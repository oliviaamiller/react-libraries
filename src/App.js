import data from './data';
import './App.css';
import { VictoryBar, 
  VictoryChart, 
  VictoryAxis, 
  VictoryLabel, 
  VictoryPortal, 
  VictoryPie,
  VictoryLine } from 'victory';
import { carsInCountry, faveColor } from './data-utils';

console.log(faveColor(data));

function App() {

  return (
    <div className="App">
    
      <VictoryChart height={400} width={800}
        domainPadding={20}
      >
        <VictoryLabel text="How Many People's Favorite Colors" x={400} y={30} textAnchor="middle"/>
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
          tickFormat={(x) => (`${x}`)}
        />
        <VictoryBar 
          alignment='start'
          style={{ data: { fill: ({ datum }) => datum.x === 'Green' ? 'green' : datum.x === 'Pink' ? 'pink' : datum.x === 'Yellow' ? 'yellow' : datum.x === 'Puce' ? '#CC8899' : datum.x === 'Turquoise' ? 'turquoise' : datum.x === 'Violet' ? 'violet' : datum.x === 'Goldenrod' ? 'goldenrod' : datum.x === 'Blue' ? 'blue' : datum.x === 'Purple' ? 'purple' : datum.x === 'Khaki' ? 'khaki' : datum.x === 'Fuscia' ? '#D9027D' : datum.x === 'Aquamarine' ? 'aquamarine' : datum.x === 'Maroon' ? 'maroon' : datum.x === 'Mauv' ? '#BB85AB' : datum.x === 'Indigo' ? 'indigo' : datum.x === 'Orange' ? 'orange' : datum.x === 'Teal' ? 'teal' : datum.x === 'Crimson' ? 'crimson' : datum.x === 'Red' ? 'red' : '', width: 10 } }}
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
          x={150} y={50}
          text="Cars in Indonesia"/>
      </svg>


      <VictoryChart>
        <VictoryLine 
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 }
          ]}/>
      </VictoryChart>
    
      
      
        
    </div>
  );
}

export default App;