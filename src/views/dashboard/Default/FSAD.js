import React from 'react';
import {
  ScatterChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
  Label,
} from 'recharts';

const FSADChart = () => {
  const c1Data01 = [
    {
      type: 'Cluster1-baseline',
      emphysema: 7,
      fSAD: 4.75,
    },
  ];
  const c1Data02 = [
    {
      type: 'Cluster1-year1',
      emphysema: 11.5,
      fSAD: 5.4,
    },
  ];
  const c2Data01 = [
    {
      type: 'Cluster2-baseline',
      emphysema: 13.8,
      fSAD: 6.8,
    },
  ];
  const c2Data02 = [
    {
      type: 'Cluster2-year1',
      emphysema: 12.5,
      fSAD: 6.25,
    },
  ];
  const c3Data01 = [
    {
      type: 'Cluster3-baseline',
      emphysema: 24.1,
      fSAD: 10.5,
    },
  ];
  const c3Data02 = [
    {
      type: 'Cluster3-year1',
      emphysema: 19.2,
      fSAD: 12.25,
    },
  ];
  const c4Data01 = [
    {
      type: 'Cluster4-baseline',
      emphysema: 31.5,
      fSAD: 20.5,
    },
  ];
  const c4Data02 = [
    {
      type: 'Cluster4-year1',
      emphysema: 32.7,
      fSAD: 21.8,
    },
  ];
  const s1Data01 = [
    {
      type: 'Subject-baseline',
      emphysema: 16.5,
      fSAD: 10,
    },
  ];
  const s1Data02 = [
    {
      type: 'Subject-year1',
      emphysema: 15,
      fSAD: 8.5,
    },
  ];

  return (
    <ResponsiveContainer width={350} height={350}>
      <ScatterChart margin={{ top: 25, right: 5, left: 50, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <ZAxis dataKey="type" />
        <XAxis
          id="c1x1"
          dataKey="emphysema"
          type="number"
          domain={['dataMin - 5', 'dataMax + 5']}
          tickCount={20}
        >
          <Label value="fSAD (%)" offset={-1} position="insideBottom" />
        </XAxis>
        <YAxis
          id="c1y1"
          dataKey="fSAD"
          type="number"
          label={{
            value: 'Emphysema (%)',
            offset: 8,
            angle: -90,
            position: 'insideLeft',
          }}
          domain={['dataMin - 5', 'dataMax + 5']}
          tickCount={20}
        />
        <Tooltip />
        <Legend
          layout="horizontal"
          verticalAlign="top"
          align="center"
          wrapperStyle={{ top: 20, left: 65 }}
          iconSize="4"
          payload={[
            { value: 'Cluster 1', type: 'line', color: 'red' },
            { value: 'Cluster 2', type: 'line', color: 'blue' },
            { value: 'Cluster 3', type: 'line', color: 'green' },
            { value: 'Cluster 4', type: 'line', color: 'purple' },
          ]}
        />
        <Scatter name="Cluster 1" data={c1Data01} fill="red" />
        <Scatter shape="cross" data={c1Data02} fill="red" />
        <Scatter name="Cluster 2" data={c2Data01} fill="blue" />
        <Scatter shape="cross" data={c2Data02} fill="blue" />
        <Scatter name="Cluster 3" data={c3Data01} fill="green" />
        <Scatter shape="cross" data={c3Data02} fill="green" />
        <Scatter name="Cluster 4" data={c4Data01} fill="purple" />
        <Scatter shape="cross" data={c4Data02} fill="purple" />
        <Scatter data={s1Data01} fill="black" />
        <Scatter shape="cross" data={s1Data02} fill="black" />
      </ScatterChart>
    </ResponsiveContainer>
  );
};

export default FSADChart;
