/*
This code was made by Colin from codepen.io
 */
if (sessionStorage.getItem("Medusa") == "visited p.5") {
  var lastPos = [
      [0, 0]
    ],
    trailStarted = false,
    lastEvent = 0;

  // Update array of past cursor positions
  var updateTrail = (positions) => {
    positions.forEach((e, i, a) => {
      document.getElementById('trail' + (i + 1)).style.left = e[0] + 'px';
      document.getElementById('trail' + (i + 1)).style.top = e[1] + 'px';
    });
  };
  // Set last event so render function can push to array
  document.addEventListener('mousemove', (e) => {
    lastEvent = e;
    if (!trailStarted) {
      renderTrail(e);
      trailStarted = true;
    }
  });
  // Render the trail using the new positions
  var renderTrail = (e) => {
    lastPos.push([e.clientX, e.clientY]);
    if (lastPos.length > 10) {
      lastPos.shift();
    }
    updateTrail(lastPos);

    requestAnimationFrame(() => {
      renderTrail(lastEvent)
    });
  };

  // Create trail elements on page load
  document.addEventListener('DOMContentLoaded', () => {
    for (var a = 1; a < 11; a++) {
      var elem = document.createElement('div');
      elem.id = 'trail' + a;
      elem.classList.add('trail');
      document.body.appendChild(elem);
    }
  });
}
