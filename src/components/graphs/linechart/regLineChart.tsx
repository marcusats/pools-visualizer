import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export interface LineChartProps {
  data: { id: string, value: string }[];
}

const RegLineChart: React.FC<LineChartProps> = ({ data }) => {
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

      const x = d3.scaleLinear()
        .domain(d3.extent(data, d => +d.id) as [number, number])
        .range([0, width]);

      svg.append('g')
        .attr('transform', `translate(0,${height})`)
        .call(d3.axisBottom(x));

      const y = d3.scaleLinear()
        .domain([0, d3.max(data, d => +d.value) as number])
        .range([height, 0]);

      svg.append('g').call(d3.axisLeft(y));

      const line = d3.line<{ id: string; value: string }>()
        .x(d => x(+d.id))
        .y(d => y(+d.value));

      const path = svg.append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', 'steelblue')
        .attr('stroke-width', 1.5)
        .attr('d', line);

      const totalLength = path.node()?.getTotalLength() || 0;

      path
        .attr('stroke-dasharray', `${totalLength} ${totalLength}`)
        .attr('stroke-dashoffset', totalLength)
        .transition()
        .duration(2000)
        .attr('stroke-dashoffset', 0);
    }
  }, [data]);

  return (
    <svg
      className="d3-component"
      ref={d3Container}
    />
  );
};

export default RegLineChart;