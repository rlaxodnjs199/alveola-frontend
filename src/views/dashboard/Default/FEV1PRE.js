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
  ReferenceLine,
  ResponsiveContainer,
  Label,
} from 'recharts';

const FEV1PREChart = () => {
  const c1Data01 = [
    {
      type: 'Cluster1-baseline',
      FEV1PRED: 48,
      FEV1overFVC: 42.5,
    },
  ];
  const c1Data02 = [
    {
      type: 'Cluster1-year1',
      FEV1PRED: 48,
      FEV1overFVC: 41,
    },
  ];
  const c2Data01 = [
    {
      type: 'Cluster2-baseline',
      FEV1PRED: 66,
      FEV1overFVC: 54,
    },
  ];
  const c2Data02 = [
    {
      type: 'Cluster2-year1',
      FEV1PRED: 66,
      FEV1overFVC: 53,
    },
  ];
  const c3Data01 = [
    {
      type: 'Cluster3-baseline',
      FEV1PRED: 87,
      FEV1overFVC: 66,
    },
  ];
  const c3Data02 = [
    {
      type: 'Cluster3-year1',
      FEV1PRED: 85.5,
      FEV1overFVC: 66,
    },
  ];
  const c4Data01 = [
    {
      type: 'Cluster4-baseline',
      FEV1PRED: 88,
      FEV1overFVC: 71,
    },
  ];
  const c4Data02 = [
    {
      type: 'Cluster4-year1',
      FEV1PRED: 87.5,
      FEV1overFVC: 69,
    },
  ];
  const s1Data01 = [
    {
      type: 'Subject-baseline',
      FEV1PRED: 75,
      FEV1overFVC: 60,
    },
  ];
  const s1Data02 = [
    {
      type: 'Subject-year1',
      FEV1PRED: 75,
      FEV1overFVC: 58,
    },
  ];

  return (
    <ResponsiveContainer width={350} height={350}>
      <ScatterChart margin={{ top: 45, right: 5, left: 30, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <ZAxis dataKey="type" />
        <XAxis
          id="c2x1"
          dataKey="FEV1PRED"
          type="number"
          domain={['dataMin - 5', 'dataMax + 5']}
          tickCount={20}
        >
          <Label
            value="FEV1 predicted (%)"
            offset={-1}
            position="insideBottom"
          />
        </XAxis>
        <YAxis
          id="c2y1"
          dataKey="FEV1overFVC"
          type="number"
          label={{
            value: 'FEV1 / FVC ratio (%)',
            offset: 28,
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
          wrapperStyle={{ top: 40, left: 50 }}
          iconSize="7"
          payload={[
            { value: 'Cluster 1', type: 'line', color: 'red' },
            { value: 'Cluster 2', type: 'line', color: 'blue' },
            { value: 'Cluster 3', type: 'line', color: 'green' },
            { value: 'Cluster 4', type: 'line', color: 'purple' },
          ]}
        />
        <ReferenceLine alwaysShow y={70} stroke="red" strokeDasharray="3 3" />
        <ReferenceLine alwaysShow x={80} stroke="red" strokeDasharray="3 3" />
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

export default FEV1PREChart;
