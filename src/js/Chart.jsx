import React from "react";
import { Link } from "react-router-dom";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from "recharts";

const Chart = props => {
  const tweets = props.tweets;
  var data = [];
  var total_count = 0;

  for (var index = 0; index < tweets.length; index++) {
    if (index == 0) {
      total_count += tweets[index].count;
      data.push({
        count: tweets[index].count,
        time: Date.parse(tweets[index].time)
      });
    } else if (index > 0) {
      const current = new Date(tweets[index].time).getDay();
      const previous = new Date(tweets[index - 1].time).getDay();
      total_count += tweets[index].count;

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
        <CartesianGrid stroke="#000" strokeDasharray="3 3" />
        <Line type="monotone" dataKey="count" stroke="#8884d8" />
      </LineChart>
      <div className="result-paragraph">
        Word {props.word} appeared {total_count} times in recent 200 tweets.{" "}
      </div>
      <Link to="/">Try again</Link>
    </div>
  );
};

export default Chart;
