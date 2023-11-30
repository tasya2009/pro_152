AFRAME.registerComponent('base', {
    init: function () {
      // Add a base to the car
      const base = document.createElement('a-box');
      base.setAttribute('width', '4');
      base.setAttribute('height', '0.2');
      base.setAttribute('depth', '2');
      base.setAttribute('color', 'gray');
      this.el.appendChild(base);
    }
  });
  