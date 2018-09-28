import React from "react";
import { Link } from "react-router-dom";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const Chart = props => {
  const tweets = props.tweets;
  var data = [];

  for (var index = 0; index < tweets.length; index++) {
    if (index == 0) {
      data.push({
        count: tweets[index].count,
        time: Date.parse(tweets[index].time)
      });
    } else if (index > 0) {
      const current = new Date(tweets[index].time).getDay();
      const previous = new Date(tweets[index - 1].time).getDay();

      if (current === previous) {
        data[data.length - 1].count += tweets[index].count;
      } else {
        data.push({
          count: tweets[index].count,
          time: Date.parse(tweets[index].time)
        });
      }
    }
  }

  return (
    <div className="example-chart">
      <LineChart width={1000} height={420} data={data}>
        <XAxis
          scale="time"
          dataKey="time"
          domain={["dataMin", "dataMax"]}
          name="Time"
          tickFormatter={time => {
            const date = new Date(time);
            return `${date.getDate()}.${date.getMonth() +
              1}.${date.getFullYear()}`;
          }}
          type="number"
          interval="preserveStartEnd"
          dy={10}
        />
        <YAxis type="number" domain={[0, "dataMax"]} />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="count" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default Chart;
