// @ts-nocheck
import React, { useRef, useEffect } from "react";
import * as d3 from "d3";
import useStore from "@/utils/store";
import { shortestPathDataExists } from "@/utils/helpers";

function ForceDirectedGraph({ data }: any) {
  const svgRef = useRef();
  const depth = useStore((state) => state.depth);
  const shortestPathData = useStore((state) => state.shortestPathData);
  const showingShortGraph = shortestPathDataExists(shortestPathData);
  const height = showingShortGraph ? 400 : 600;
  const width = showingShortGraph ? 600 : 960;
  const strength = depth == 1 || showingShortGraph ? -400 : -200;

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();
    svg.attr("width", width).attr("height", height);

    const simulation = d3
      .forceSimulation(data.nodes)
      .force(
        "link",
        d3
          .forceLink(data.links)
          .id((d) => d.id)
          .distance(50)
      )
      .force("charge", d3.forceManyBody().strength(strength))
      .force("center", d3.forceCenter(300, 200))
      .force("collide", d3.forceCollide().radius(10))
      .force("x", d3.forceX().x(300))
      .force("y", d3.forceY().y(200));

    const links = svg
      .append("g")
      .attr("class", "links")
      .selectAll("line")
      .data(data.links)
      .enter()
      .append("line")
      .attr("stroke", "gray")
      .attr("stroke-width", (d) => 2)
      .on("mouseover", (event, d) => console.log(d.value));

    const getRandomColor = (max = 150) => {
      const min = 0;
      const r = Math.floor(Math.random() * (max - min) + min);
      const g = Math.floor(Math.random() * (max - min) + min);
      const b = Math.floor(Math.random() * (max - min) + min);
      return `rgb(${r},${g},${b})`;
    };

    const nodes = svg
      .append("g")
      .attr("class", "nodes")
      .selectAll("g")
      .data(data.nodes)
      .enter()
      .append("g")
      .attr("fill", (d) => getRandomColor())
      .on("click", (event, d) => {
        console.log("Clicked node:", d.id);
      });

    const circles = nodes
      .append("circle")
      .attr("r", 7)
      .call(
        d3
          .drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended)
      );

    const labels = nodes
      .append("text")
      .text((d) => d.id)
      .attr("dx", 12)
      .attr("dy", -3);

    simulation.on("tick", () => {
      links
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      circles.attr("cx", (d) => d.x).attr("cy", (d) => d.y);

      labels.attr("x", (d) => d.x).attr("y", (d) => d.y);
    });

    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event, d) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
  });

  return <svg ref={svgRef}></svg>;
}

export default ForceDirectedGraph;
