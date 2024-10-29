import { Colors } from '@/constants/Colors';
import { ticker } from '@/data/ticker';
import { matchFont } from '@shopify/react-native-skia';
import { format } from 'date-fns';
import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { CartesianChart, Line } from 'victory-native';

const Chart = ({ height }: { height: number }) => {
  const fontFamily = Platform.select({ ios: 'Helvetica', default: 'serif' });
  const fontStyle = {
    fontFamily,
    fontSize: 10,
    fontStyle: 'italic',
    fontWeight: 'bold',
  };
  const font = matchFont(fontStyle);

  return (
    <View style={[styles.chart, { height }]}>
      {ticker && (
        <View>
          <Text
            style={{ fontSize: 30, fontWeight: 'bold', color: Colors.text }}
          >
            Bitcoin{' '}
            <Text style={{ color: Colors.accent, fontSize: 24 }}>BTC</Text>
          </Text>
        </View>
      )}
      <CartesianChart
        axisOptions={{
          font,
          tickCount: 5,
          labelOffset: { x: -2, y: 0 },
          labelColor: Colors.text,
          formatYLabel: (v) => `${v} €`,
          formatXLabel: (ms) => format(new Date(ms), 'MM/yy'),
        }}
        data={ticker!}
        xKey='timestamp'
        yKeys={['price']}
      >
        {({ points }) => (
          <>
            <Line points={points.price} color={Colors.accent} strokeWidth={3} />
          </>
        )}
      </CartesianChart>
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({
  chart: {
    backgroundColor: Colors.card_light,
    borderRadius: 12,
    marginTop: 8,
    padding: 12,
  },
});
