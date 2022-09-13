// Required by Webpack - do not touch
import * as path from "path";

require.context('../', true, /\.(html|json|txt|dat)$/i)
require.context('../images/', true, /\.(gif|jpg|png|svg|eot|ttf|woff|woff2)$/i)
require.context('../stylesheets/', true, /\.(css|scss)$/i)

// First: Set up your name
let std_name = "Coleton Watt"
document.querySelector('#std_name').innerHTML = `<strong>${std_name}</strong>`

import * as d3 from "d3";
let svg1 = d3.select('main').append('svg')
    .attr('width', 100)
    .attr('height', 100)
    .style('background', 'transparent')
    .style('fill', 'transparent')

svg1.append('circle')
    .attr('cx', 50)
    .attr('cy', 50)
    .attr('r', 10)
    .attr('fill', 'black')
svg1.append("path")
    .style("stroke", "red")
    .style('fill', 'none')
    .style('stroke-width', 4)
    .attr("d", "M20,50 Q50,50 80,50")
svg1.append("path")
    .style("stroke", "blue")
    .style('fill', 'none')
    .style('stroke-width', 8)
    .attr("d", "M20,50 Q50,20 80,50")
svg1.append("path")
    .style("stroke", "blue")
    .style('fill', 'none')
    .style('stroke-width', 8)
    .attr("d", "M20,50 Q50,80 80,50")

function eye() {
    svg1
        .transition()
        .attr('transform', 'rotate(90)')
        .duration(500)
    svg1
        .transition()
        .attr('transform', 'rotate(180)')
        .delay(1000)
        .duration(500)
    svg1
        .transition()
        .attr('transform', 'rotate(270)')
        .delay(2000)
        .duration(500)
    svg1
        .transition()
        .attr('transform', 'rotate(0)')
        .delay(3000)
        .duration(500)

        .on("end", eye)
}
eye();


let svg = d3.select("main").append("svg")
    .attr('width', 100)
    .attr('height', 100)
    .style('background', 'none')
    .style('fill', 'transparent')
svg.append('circle')
    .attr('cx', 20)
    .attr('cy', 80)
    .attr('r', 10)
    .attr('fill', 'black')
svg.append('circle')
    .attr('cx', 80)
    .attr('cy', 80)
    .attr('r', 10)
    .attr('fill', 'black')

svg.append('rect')
    .attr('x', 5)
    .attr('y', 60)
    .attr('width', 90)
    .attr('height', 20)
    .attr('stroke', 'red')
    .attr('fill', 'red')
svg.append('rect')
    .attr('x', 5)
    .attr('y', 40)
    .attr('width', 30)
    .attr('height', 20)
    .attr('stroke', 'blue')
    .attr('fill', 'red')
svg.append('rect')
    .attr('x', 35)
    .attr('y', 40)
    .attr('width', 25)
    .attr('height', 20)
    .attr('stroke', 'blue')
    .attr('fill', 'red')

svg.append('path')
    .style("stroke", "blue")
    .style('fill', 'purple')
    .style('stroke-width', 1)
    .attr("d", "M60,40 L80, 60 L60,60 Z")
    //.attr("d", "M20,50 Q50,50 80,50")



function drive() {
    svg.transition()
        .attr('transform', 'translate(40, 500)')
        .duration(2000)
        .transition()
        .attr('transform', 'translate(60, 120)')
        .duration(2000)
        .transition()
        .attr('transform', 'translate(0, 0)')
        .duration(6000)
        .on("end", drive)
}

drive()


let svg8 = d3.select("main").append("svg")
    .attr('width', 100)
    .attr('height', 100)
    .style('background', 'none')
    .style('fill', 'none')

svg8.append('circle')
    .style("stroke", "black")
    .style("fill", "purple")
    .attr("cx", 25)
    .attr("cy", 25)
    .attr("r", 10);
svg8.append('circle')
    .style("stroke", "black")
    .style("fill", "purple")
    .attr("cx", 12)
    .attr("cy", 38)
    .attr("r", 10);
svg8.append('circle')
    .style("stroke", "black")
    .style("fill", "purple")
    .attr("cx", 38)
    .attr("cy", 12)
    .attr("r", 10);


svg8.append('circle')
    .style("stroke", "black")
    .style("fill", "purple")
    .attr("cx", 75)
    .attr("cy", 75)
    .attr("r", 10);
svg8.append('circle')
    .style("stroke", "black")
    .style("fill", "purple")
    .attr("cx", 88)
    .attr("cy", 62)
    .attr("r", 10);
svg8.append('circle')
    .style("stroke", "black")
    .style("fill", "purple")
    .attr("cx", 62)
    .attr("cy", 88)
    .attr("r", 10);
svg8.append('rect')
    .style("stroke", "black")
    .attr('x', 30)
    .attr('y', 30)
    .attr('width', 40)
    .attr('height', 40)
    .attr('fill', 'purple')


function fly() {
    svg8.transition()
        .attr('transform', 'rotate(90)')
        .duration(2000)
        .transition()
        .attr('transform', 'translate(380, 120)')
        .duration(2000)
        .transition()
        .attr('transform', 'rotate(270)')
        .duration(2000)
        .transition()
        .attr('transform', 'translate(0, 0)')
        .duration(4000)
        .on("end", fly)
}
fly();

let svg6 = d3.select("main").append("svg")
    .attr('width', 100)
    .attr('height', 100)
    .style('background', 'none')
    .style('fill', 'none')
svg6.append('circle')
    .style("stroke", "black")
    .style("fill", "cyan")
    .attr("cx", 50)
    .attr("cy", 50)
    .attr("r", 40);
svg6.append('circle')
    .style("stroke", "black")
    .style("fill", "purple")
    .attr("cx", 50)
    .attr("cy", 50)
    .attr("r", 30);
svg6.append('circle')
    .style("stroke", "black")
    .style("fill", "cyan")
    .attr("cx", 50)
    .attr("cy", 50)
    .attr("r", 20);
svg6.append('circle')
    .style("stroke", "black")
    .style("fill", "purple")
    .attr("cx", 50)
    .attr("cy", 50)
    .attr("r", 10);


function bounce() {
    svg6.transition()
        .attr('transform', 'scale(2.5)')
        .duration(2000)
        .transition()
        .attr('transform', 'translate(-240, 400)')
        .duration(2000)
        .transition()
        .attr('transform', 'scale(1.5)')
        .duration(2000)
        .transition()
        .attr('transform', 'translate(0, 0)')
        .duration(1000)
        .on("end", bounce)
}
bounce();

let svg5 = d3.select("main").append("svg")
    .attr('width', 100)
    .attr('height', 100)
    .style('background', 'none')
    .style('fill', 'none')

svg5.append('circle')
    .attr('cx', 20)
    .attr('cy', 20)
    .attr('r', 5)
    .attr('stroke', 'black')
    .attr('fill', 'transparent')
svg5.append('path')
    .style("stroke", "black")
    .style('fill', 'none')
    .style('stroke-width', 1.5)
    .attr("d", "M23.5,23 Q40, 50 60,60")
let ball =  svg5.append('circle')
    .attr('cx', 60)
    .attr('cy', 60)
    .attr('r', 10)
    .attr('stroke', 'black')
    .attr('fill', 'green')

function yoyo() {

    svg5.transition()
        //style("fill", "cyan")
        .attr('transform', 'scale(-0.2)')
        .duration(9000)
        .transition()
        .attr('transform', 'translate(0, 0)')
        .duration(7000)
        .on("end", yoyo)

    ball.transition()
        .style("fill", "orange")
        .duration(3000)
        .transition()
        .style("fill", "cyan")
        .duration(16000)
        .transition()
        .style("fill", "green")
        .duration(1000);

    // svg5.transition()
    //     .attr('transform', 'translate(0, 0)')
    //     .duration(1000)
    //     .on("end", yoyo)
}
yoyo()
