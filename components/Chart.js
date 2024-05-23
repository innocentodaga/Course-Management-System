import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const ChartComponent = ({ chartData, title }) => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <View>
      <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>
        {title}
      </Text>
      <LineChart
        data={chartData}
        width={screenWidth}
        height={220}
        yAxisLabel={'No.'}
        chartConfig={{
          backgroundGradientFrom: '#8a4baf',
          backgroundGradientTo: '#6a3093',
          decimalPlaces: 1,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 10
          }, 
          propsForDots:{
            r: '6',
            strokeWidth:'2',
            stroke: 'yellow'
          }
        }}
        
        style={{
          marginVertical: 8,
          borderRadius: 10
        }}
      />
    </View>
  );
};

export default ChartComponent;
