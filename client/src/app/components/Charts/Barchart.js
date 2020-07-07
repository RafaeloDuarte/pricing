import React, { useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import BreadCrumb from '../BreadCrumb'
import './barchart.css'
import { select, scaleBand, scaleLinear, axisBottom, axisRight, line, curveCardinal } from 'd3'

export default function HookReduxBarChart({ priceIndex }) {

    const svgRef = useRef()
    const indicePrecos = priceIndex//useSelector(state => state.data)
    const dispatch = useDispatch()
    function addCourse() {
        const data35 = {
            type: 'ADD_COURSE',
            title: 'GraphQL',
            preco: 'R$ 9,41',
            precoConcorrente: '10,15'
        }
        dispatch({
            type: data35.type,
            data: data35
        })
    }

    function ajustaPreco(preco) {
        if (preco) return Number(preco.replace(',', '.').replace('R$', '').trim())
    }

    function media(precoConc, preco) {
        return (precoConc * 100) / preco
    }

    function drawChart() {
        const data = indicePrecos.map(indice => {
            if (indice.precoConcorrente.precoA > 0) {
                return media(
                    indice.precoConcorrente.precoA,
                    indice.preco
                )
            }
        })
        const svg = select(svgRef.current);
        const xScale = scaleBand()
            .domain([0, 1, 2, 3, 4, 5, 6, 7, 8])
            .range([0, 300])
            .padding(0.5);

        function mouseUp() {
            console.log("mouseUp");
        }

        function mouseDown() {
            console.log("mouseDown");
        }

        const yScale = scaleLinear()
            .domain([0, 150])
            .range([150, 0]);

        const xAxis = axisBottom(xScale)
            .ticks(data.length)
            .tickFormat(index => index);
        svg
            .select(".x-axis")
            .style("transform", "translateY(150px)")
            .call(xAxis);

        const yAxis = axisRight(yScale);
        svg
            .select(".y-axis")
            .style("transform", "translateX(300px)")
            .call(yAxis);

        const colorScale = scaleLinear()
            .domain([0, 50, 150])
            .range(["green", "orange", "red"])
            .clamp(true)

        // generates the "d" attribute of a path element
        const myLine = line()
            .x((value, index) => xScale(index))
            .y(yScale)
            .curve(curveCardinal);

        // renders path element, and attaches
        // the "d" attribute from line generator above

        const sjt = []
        indicePrecos.map(indice => sjt.push(100))

        svg
            .selectAll(".line")
            .data([sjt])
            .join("path")
            .attr("class", "line")
            .attr("d", myLine)
            .attr("fill", "none")
            .attr("stroke", "blue");

        svg.selectAll(".bar")
            .data(data)
            .join("rect")
            .attr("class", "bar")
            .attr("fill", colorScale)
            .style("transform", "scale(1,-1)")
            .attr("x", (value, index) => xScale(index))
            .attr("y", -150)
            .attr("width", xScale.bandwidth())
            .attr("height", value => 150 - yScale(value))
            .on('mouseenter', (value, index) => {
                svg
                    .selectAll(".tooltip")
                    .data([data])
                    .join(enter => enter.append("text").attr("y", yScale(value) - 4))
                    .attr('class', "tooltip")
                    .text(value)
                    .attr("x", xScale(index) + xScale.bandwidth() / 2)
                    .attr("text-anchor", "middle")
                    .transition()
                    .attr("y", yScale(value) - 8)
                    .attr("opcacity", 1)
            })
            .on("mouseleave", () => svg.select(".tooltip").remove())
            .transition()
            .attr("fill", colorScale)
            .attr("heigth", value => 150 - yScale(value))

    }

    useEffect(() => {
        if (indicePrecos.length > 1) drawChart()
    })

    return (
        <>
            <div className="barchart">
                <center>
                    <h4>Análise Mensal do Índice de Preço</h4>
                    <svg ref={svgRef}>
                        <g className="x-axis" />
                        <g className="y-axis" />
                    </svg>
                </center>
            </div>
        </>
    )
}