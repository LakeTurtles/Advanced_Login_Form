
    const canvas = document.getElementById('starsCanvas');
    const ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];

    // Function to generate random number within a range
    function random(min, max) {
      return Math.random() * (max - min) + min;
    }

    // Function to create a star
    function createStar() {
      return {
        x: random(0, canvas.width),
        y: random(0, canvas.height),
        radius: random(1, 3),
        color: '#2e5cab',
        velocity: {
          x: random(-0.5, 1.5),
          y: random(-0.5, 0.5)
        }
      };
    }

    // Function to draw a star
    function drawStar(star) {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fillStyle = star.color;
      ctx.fill();
    }

    // Function to update stars position
    function updateStars() {
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];

        star.x += star.velocity.x;
        star.y += star.velocity.y;

        if (star.x < 0 || star.x > canvas.width || star.y < 0 || star.y > canvas.height) {
          // Reset star position if it goes out of the canvas
          stars[i] = createStar();
        }
      }
    }

    // Function to animate the stars
    function animateStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < stars.length; i++) {
        drawStar(stars[i]);
      }

      updateStars();

      requestAnimationFrame(animateStars);
    }

    // Initialize stars
    for (let i = 0; i < 200; i++) {
      stars.push(createStar());
    }

    // Start animation
    animateStars();

    // Resize canvas on window resize
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });




    
    
    var canvas2 = document.getElementById("draegertitle");
    var ctx2 = canvas2.getContext("2d");
    
    // Text properties
    var text = "Draeger Labs";
    var fontSize = 30;
    var y = 40;
    
    // Initial position
    var x = canvas2.width + 200; // Off-screen to the right
    
    function draw() {
        // Clear the canvas
        ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    
        // Pseudo-3D effect
        ctx2.font = fontSize + "px Arial";
    
        // Draw the darkest text
        ctx2.fillStyle = "#3405f0";
        ctx2.fillText(text, x - 2, y - 2);
    
        // Draw the lighter text
        ctx2.fillStyle = "#4789fc";
        ctx2.fillText(text, x - 1, y - 1);
    
        // Draw the lightest text
        ctx2.fillStyle = "#26f50f";
        ctx2.fillText(text, x, y);
    
        // Update position for the next frame
        x -= 2; // Move backward by decrementing x
    
        // Check if the text has moved off-screen to the left
        if (x < -200) {
            x = canvas2.width + 200; // Reset to the initial position off-screen to the right
        }
    
        // Request the next animation frame
        requestAnimationFrame(draw);
    }
    
    // Start the backward animation
    draw();



    
// var canvas2 = document.getElementById("draegertitle");


// var ctx2 = canvas2.getContext("2d");

// // Text properties
// var text = "Draeger Labs";
// var fontSize = 30;
// var y = 40;

// // Initial position
// var x = -200; // Off-screen to the left

// function draw() {
//     // Clear the canvas
//     ctx2.clearRect(0, 0, canvas2.width, canvas2.height);

//     // Pseudo-3D effect
//     ctx2.font = fontSize + "px Arial";

//     // Draw the darkest text
//     ctx2.fillStyle = "#3405f0";
//     ctx2.fillText(text, x - 2, y - 2);

//     // Draw the lighter text
//     ctx2.fillStyle = "#4789fc";
//     ctx2.fillText(text, x - 1, y - 1);

//     // Draw the lightest text
//     ctx2.fillStyle = "#26f50f";
//     ctx2.fillText(text, x, y);

//     // Update position for next frame
//     x += 2; // Adjust the speed as needed

//     // Check if the text has moved off-screen to the right
//     if (x > canvas2.width) {
//         x = -200; // Reset to the initial position off-screen to the left
//     }

//     // Request the next animation frame
//     requestAnimationFrame(draw);
// }

// // Start the animation
// draw();









const canvas3 = document.getElementById('tetrah');
const ctx3 = canvas3.getContext('2d');

const tetrahedronVertices = [
  { x: 0, y: -100, z: 0 },
  { x: 87, y: 50, z: 0 },
  { x: -87, y: 50, z: 0 },
  { x: 0, y: 50, z: 100 }
];

const faces = [
  { vertices: [0, 1, 2], color1: 'rgba(255, 0, 100, 0.5)', color2: 'rgba(25, 255, 100, 0.5)' },
  { vertices: [0, 1, 3], color1: 'rgba(100, 255, 0, 0.5)', color2: 'rgba(255, 0, 255, 0.5)' },
  { vertices: [1, 2, 3], color1: 'rgba(12, 10, 125, 0.5)', color2: 'rgba(225, 255, 155, 0.5)' },
  { vertices: [0, 2, 3], color1: 'rgba(255, 255, 100, 0.5)', color2: 'rgba(100, 255, 255, 0.5)' }
];

const edges = [
  [0, 1], [0, 2], [0, 3],
  [1, 2], [1, 3], [2, 3]
];

const circles = [
  { x: 200, y: 200, radius: 30, color: 'rgba(236, 216, 226, 0.5)', speed: 2, angle: 0 },
  { x: 300, y: 100, radius: 20, color: 'rgba(255, 0, 0, 0.5)', speed: 1.5, angle: Math.PI / 4 },
  { x: 300, y: 100, radius: 20, color: 'rgba(95, 216, 245, 0.5)', speed: 1, angle: Math.PI / 2 },
  { x: 300, y: 100, radius: 20, color: 'rgba(105, 206, 245, 0.5)', speed: 1.5, angle: Math.PI / 4 },
  { x: 300, y: 100, radius: 20, color: 'rgba(255, 0, 130, 0.5)', speed: 1, angle: Math.PI  }
];

let rotationAngleX = 0;
let rotationAngleY = 0;

function project(vertex) {
  const scale = 2;
  const perspective = 500;

  const x = vertex.x * scale;
  const y = vertex.y * scale;
  const z = vertex.z * scale;

  const newX = x * Math.cos(rotationAngleY) - z * Math.sin(rotationAngleY);
  const newZ = x * Math.sin(rotationAngleY) + z * Math.cos(rotationAngleY);

  const finalX = newX * Math.cos(rotationAngleX) + y * Math.sin(rotationAngleX);
  const finalY = -newX * Math.sin(rotationAngleX) + y * Math.cos(rotationAngleX);
  const finalZ = newZ;

  const perspectiveRatio = perspective / (perspective + finalZ);

  return {
    x: canvas3.width / 2 + finalX * perspectiveRatio,
    y: canvas3.height / 2 + finalY * perspectiveRatio
  };
}

function drawTetrahedron() {
  for (const face of faces) {
    const faceVertices = face.vertices.map(index => tetrahedronVertices[index]);
    const color1 = face.color1;
    const color2 = face.color2;

    const gradient = ctx3.createLinearGradient(
      faceVertices[0].x, faceVertices[0].y,
      faceVertices[1].x, faceVertices[1].y
    );

    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);

    ctx3.fillStyle = gradient;
    ctx3.beginPath();

    const startVertex = project(faceVertices[0]);
    ctx3.moveTo(startVertex.x, startVertex.y);

    for (let i = 1; i < faceVertices.length; i++) {
      const vertex = project(faceVertices[i]);
      ctx3.lineTo(vertex.x, vertex.y);
    }

    ctx3.closePath();
    ctx3.fill();
  }
}

function drawCircles() {
  for (const circle of circles) {
    ctx3.fillStyle = circle.color;
    ctx3.beginPath();
    const circlePosition = project({ x: circle.x, y: circle.y, z: 0 });
    ctx3.arc(circlePosition.x, circlePosition.y, circle.radius, 0, 2.5 * Math.PI);
    ctx3.closePath();
    ctx3.fill();
  }
}

function animateCircles() {
  for (const circle of circles) {
    circle.angle += circle.speed;
    circle.x = 350 + Math.cos(circle.angle) * 100;
    circle.y = 150 + Math.sin(circle.angle) * 100;
  }
}

function draw2() {
  ctx3.clearRect(0, 0, canvas3.width, canvas3.height);

  drawTetrahedron();
  drawCircles();
  animateCircles();

  // Update rotation angles for animation
  rotationAngleX += 0.00;
  rotationAngleY += 0.01;

  requestAnimationFrame(draw2);
}

draw2();

