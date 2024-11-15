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

const Chart = ({
  height,
  name,
  symbol,
}: {
  height: number;
  name: string;
  symbol: string;
}) => {
  const fontFamily = Platform.select({ ios: 'Helvetica', default: 'serif' });
  const fontStyle = {
    fontFamily,
    fontSize: 10,
    fontStyle: 'italic',
    fontWeight: 'bold',
  };
  const font = matchFont(fontStyle);

  const { state, isActive } = useChartPressState({ x: 0, y: { price: 0 } });

  const { data: tickers } = useQuery({
    queryKey: ['tickers'],
    queryFn: async (): Promise<any[]> =>
      fetch(`/api/tickers`).then((res) => res.json()),
  });

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

  const ToolTip = ({
    x,
    y,
  }: {
    x: SharedValue<number>;
    y: SharedValue<number>;
  }) => {
    return <Circle cx={x} cy={y} r={8} color={Colors.accent} />;
  };

  return (
    <View style={[styles.chart, { height }]}>
      {tickers && (
        <>
          <View style={{ marginBottom: 16 }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: 'bold',
                color: Colors.text,
                fontFamily: 'Montserrat_700Bold',
              }}
            >
              {name}{' '}
              <Text
                style={{
                  color: Colors.accent,
                  fontSize: 24,
                  fontFamily: 'Montserrat_700Bold',
                }}
              >
                {symbol?.toUpperCase()}
              </Text>
            </Text>
            {!isActive && (
              <View style={{ marginVertical: 8, gap: 8 }}>
                <Text
                  style={{
                    fontSize: 22,
                    fontWeight: 'bold',
                    color: Colors.text,
                    fontFamily: 'Montserrat_600SemiBold',
                  }}
                >
                  {tickers[tickers.length - 1].price.toFixed(2)} €
                </Text>
                <Text
                  style={{
                    fontSize: 18,
                    color: Colors.text,
                    fontFamily: 'Montserrat_600SemiBold',
                  }}
                >
                  Today
                </Text>
              </View>
            )}
            {isActive && (
              <View style={{ marginVertical: 8, gap: 8 }}>
                <AnimatedTextInput
                  editable={false}
                  underlineColorAndroid={'transparent'}
                  style={{
                    fontSize: 22,
                    fontWeight: 'bold',
                    color: Colors.text,
                    fontFamily: 'Montserrat_600SemiBold',
                  }}
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
            data={tickers!}
            xKey='timestamp'
            yKeys={['price']}
          >
            {({ points }) => (
              <>
                <Line
                  points={points.price}
                  color={Colors.accent}
                  strokeWidth={3}
                />
                {isActive && (
                  <ToolTip x={state.x.position} y={state.y.price.position} />
                )}
              </>
            )}
          </CartesianChart>
        </>
      )}
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({
  chart: {
    backgroundColor: Colors.card_dark,
    borderRadius: 12,
    marginTop: 8,
    padding: 12,
  },
});
