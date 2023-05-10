import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';
import useStore from "@/utils/store";

const HeroChart = ({ names }) => {
  // const graphData = useStore((state) => state.graphData);
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const width = +svg.attr('width');
    const height = +svg.attr('height');

    // Create an array of text elements with initial positions
    const textElements = names.map(d => ({
      x: Math.random() * width,
      y: Math.random() * height,
      text: d.name
    }));

    // Append the text elements to the SVG
    svg.selectAll('text')
      .data(textElements)
      .enter()
      .append('text')
      .text(d => d.text)
      .attr('x', d => d.x)
      .attr('y', d => d.y)
      .style('opacity', 1);

    // Update text element positions on a regular interval
    d3.timer(elapsed => {
      textElements.forEach(d => {
        d.x += Math.sin(elapsed / 1000 + d.x + d.y) * 0.5;
        d.y += Math.cos(elapsed / 1000 + d.x + d.y) * 0.5;

        // Wrap text element positions around the edges of the SVG
        if (d.x < -50) d.x = width + 50;
        if (d.y < -20) d.y = height + 20;
        if (d.x > width + 50) d.x = -50;
        if (d.y > height + 20) d.y = -20;
      });

      // Update text element positions
      svg.selectAll('text')
        .data(textElements)
        .attr('x', d => d.x)
        .attr('y', d => d.y);
    });
  }, [names]);

  return (
    <svg ref={svgRef} width="1200" height="1200"></svg>
  );
};

export default HeroChart;
