import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export interface BarChartProps {
  data: { id: string, value: string }[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const d3Container = useRef(null);

  useEffect(() => {
    if (data && d3Container.current) {
      const margin = { top: 20, right: 30, bottom: 30, left: 40 },
          width = 960 - margin.left - margin.right,
          height = 500 - margin.top - margin.bottom;


      d3.select(d3Container.current).selectAll("*").remove();

      const svg = d3
        .select(d3Container.current)
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);


      const x = d3
        .scaleBand()
        .range([0, width])
        .padding(0.1)
        .domain(data.map(d => d.id));


      svg
        .append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x))
        .selectAll("text")
          .attr("transform", "translate(-10,0)rotate(-45)")
          .style("text-anchor", "end");


      const y = d3
        .scaleLinear()
        .domain([0, d3.max(data, d => parseInt(d.value)) ?? 0])
        .range([height, 0]);


      svg.append('g').call(d3.axisLeft(y));


      svg.selectAll(".bar")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("x", d => x(d.id) ?? 0)
        .attr("y", height)
        .attr("width", x.bandwidth())
        .attr("height", 0) 
        .attr("fill", "steelblue")
        .transition() 
        .duration(2000) 
        .attr("y", d => y(parseInt(d.value))) 
        .attr("height", d => height - y(parseInt(d.value))); 
    }
  }, [data]); 

  return (
    <svg
      className="d3-component"
      ref={d3Container}
    />
  );
};

export default BarChart;
