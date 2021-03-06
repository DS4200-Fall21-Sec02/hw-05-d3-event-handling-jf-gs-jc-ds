// write your javascript code here.
// feel free to change the pre-set attributes as you see fit

let margin = {
    top: 60,
    left: 50,
    right: 30,
    bottom: 35
  },
  width = 500 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

//SVG that will hold the visualization 
let svg = d3.select('#vis')
  .append('svg')
  .attr('preserveAspectRatio', 'xMidYMid meet') // this will scale your visualization according to the size of its parent element and the page.
  .attr('width', '100%') // this is now required by Chrome to ensure the SVG shows up at all
  .style('background-color', 'white') 
  .style('border', 'solid')
  .attr('viewBox', [0, 0, width + margin.left + margin.right, height + margin.top + margin.bottom].join(' '))


// Add a square 
let rect = svg.append('rect')
  .attr('x', '100')
  .attr('y', '200')
  .attr('width', '20%')
  .attr('height', '20%')
  .attr('fill', '#a6cee3')
  .on('click', squareclicked)
  .on('mouseover', rectborderhover)
  .on('mouseleave', rectbordernothover)
  .call(d3.drag()
         .on("drag", draggedrect));



// Add a circle 
let circle = svg.append('circle') 
  .attr('cx', '350')
  .attr('cy', '250')
  .attr('r', '60')
  .attr('fill', '#b2df8a')
  .on('dblclick', circleddoubleclicked)
  .on('click', circleclicked)
  .on('mouseover', circleborderhover)
  .on('mouseleave', circlebordernothover)
  .call(d3.drag()
         .on("drag", draggedcirc));
 

// enable random color of square based on circle click
function circleclicked() {

  let random = Math.floor(Math.random() * 10)
  rect.attr('fill', d3.schemeCategory10[random]);

}

// enable random color of circle based on square click
function squareclicked() {

  let random = Math.floor(Math.random() * 10)
  circle.attr('fill', d3.schemeCategory10[random]);

}

// enable random color of circle and square based on circle click
function circleddoubleclicked() {


  
  let random = Math.floor(Math.random() * 10)
  let random1 = Math.floor(Math.random() * 11)
  circle.attr('fill', d3.schemeCategory10[random]);
  rect.attr('fill', d3.schemeCategory10[random1]);

}

// enable black border around circle when mouse hovers over
function circleborderhover(){
  circle.attr('stroke', 'black')
}

// disable black border around circle when mouse leaves
function circlebordernothover(){
  circle.attr('stroke', circle.color)
}

// enable black border around rect when mouse hovers over
function rectborderhover(){
  rect.attr('stroke', 'black')
}

// disable black border around rect when mouse hovers over
function rectbordernothover(){
  rect.attr('stroke', circle.color)
}

// drag the circle -- only different from rect because of cy and cx instead of x and y and bring it forwardc
function draggedcirc(event, d) {
  d3.select(this).attr('cx', event.x).attr('cy', event.y).raise();
}

// drag the rect and bring it forward
function draggedrect(event, d) {
  d3.select(this).attr('x', event.x).attr('y', event.y).raise();
}






