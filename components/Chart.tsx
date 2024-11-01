import { Colors } from '@/constants/Colors';
import { Circle, matchFont } from '@shopify/react-native-skia';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React from 'react';
import { Platform, StyleSheet, Text, TextInput, View } from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedProps,
} from 'react-native-reanimated';
import { CartesianChart, Line, useChartPressState } from 'victory-native';

const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

const ToolTip = ({
  x,
  y,
}: {
  x: SharedValue<number>;
  y: SharedValue<number>;
}) => {
  return <Circle cx={x} cy={y} r={8} color={Colors.accent} />;
};

const Chart = ({ height }: { height: number }) => {
  const fontFamily = Platform.select({ ios: 'Helvetica', default: 'serif' });
  const fontStyle = {
    fontFamily,
    fontSize: 10,
    fontStyle: 'italic',
    fontWeight: 'bold',
  };
  const font = matchFont(fontStyle);

  const { state, isActive } = useChartPressState({ x: 0, y: { price: 0 } });

  const animatedText = useAnimatedProps(() => {
    return {
      text: `${state.y.price.value.value.toFixed(2)} €`,
      defaultValue: '',
    };
  });

  const animatedDateText = useAnimatedProps(() => {
    const date = new Date(state.x.value.value);
    return {
      text: `${date.toLocaleDateString()}`,
      defaultValue: '',
    };
  });

  const { data: ticker } = useQuery({
    queryKey: ['tickers'],
    queryFn: async (): Promise<any[]> =>
      fetch(`/api/tickers`).then((res) => res.json()),
  });

  console.log(ticker);

  return (
    <View style={[styles.chart, { height }]}>
      {ticker && (
        <View style={{ marginBottom: 16 }}>
          <Text
            style={{ fontSize: 30, fontWeight: 'bold', color: Colors.text }}
          >
            Bitcoin{' '}
            <Text style={{ color: Colors.accent, fontSize: 24 }}>BTC</Text>
          </Text>
          {!isActive && (
            <View style={{ marginVertical: 8, gap: 8 }}>
              <Text
                style={{ fontSize: 22, fontWeight: 'bold', color: Colors.text }}
              >
                {ticker[ticker.length - 1].price.toFixed(2)} €
              </Text>
              <Text style={{ fontSize: 18, color: Colors.text }}>Today</Text>
            </View>
          )}
          {isActive && (
            <View style={{ marginVertical: 8, gap: 8 }}>
              <AnimatedTextInput
                editable={false}
                underlineColorAndroid={'transparent'}
                style={{ fontSize: 22, fontWeight: 'bold', color: Colors.text }}
                animatedProps={animatedText}
              ></AnimatedTextInput>
              <AnimatedTextInput
                editable={false}
                underlineColorAndroid={'transparent'}
                style={{ fontSize: 18, color: Colors.text }}
                animatedProps={animatedDateText}
              ></AnimatedTextInput>
            </View>
          )}
        </View>
      )}
      <CartesianChart
        chartPressState={state}
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
            {isActive && (
              <ToolTip x={state.x.position} y={state.y.price.position} />
            )}
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
