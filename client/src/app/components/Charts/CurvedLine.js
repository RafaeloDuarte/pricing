import React, { useRef, useEffect, useState } from 'react';
import { select, axisBottom, axisRight, scaleLinear, scaleBand } from 'd3';

function CurvedLine() {

    const [data, setData] = useState([25, 30, 45, 60, 20, 65, 75])
    const svgRef = useRef()

    useEffect(() => {
        const svg = select(svgRef.current)
        const xScale = scaleBand()
            .domain(data.map((value, index) => index))
            .range([0, 300])
            .padding(0.5)

        const yScale = scaleLinear()
            .domain([0, 150])
            .range([150, 0])
        const colorScale = scaleLinear()
            .domain([0, 100, 150])
            .range(["green","orange", "red"])
        const xAxis = axisBottom(xScale).ticks(data.length)
        svg.select(".x-axis")
            .style("transform", "translateY(150px)")
            .call(xAxis)

        const yAxis = axisRight(yScale)
        svg.select(".y-axis")
            .style("transform", "translateX(300px)")
            .call(yAxis)

        svg.selectAll(".bar")
            .data(data)
            .join("rect")
            .attr("class", "bar")
            .attr("fill", colorScale)
            .style("transform", "scale(1,-1)")
            .attr("x", (value, index) => xScale(index))
            .attr("y", -150)
            .attr("width", xScale.bandwidth())
            .transition()
            .attr("height", value => 150 - yScale(value))

    }, [data])

    return (
        <>
            <svg ref={svgRef}>
                <g className="x-axis" />
                <g className="y-axis" />
            </svg>
            <br /><br />
            <button onClick={() => setData(data.map(value => value + 5))}>Update Data</button>
            <button onClick={() => setData(data.filter(value => value <= 35))}>Filter Data</button>

        </>
    );
}

export default CurvedLine;