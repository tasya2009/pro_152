AFRAME.registerComponent('car', {
    init: function () {
      // Add a car to the scene
      this.el.setAttribute('position', '0 1 -5');
      this.el.setAttribute('rotation', '0 0 0');
  
      // Load the car model (you can replace this with your actual car model)
      const carModel = document.createElement('a-box');
      carModel.setAttribute('width', '2');
      carModel.setAttribute('height', '1');
      carModel.setAttribute('depth', '1');
      carModel.setAttribute('color', 'blue');
      this.el.appendChild(carModel);
  
      // Add the base component to the car
      this.el.setAttribute('base', '');
  
      this.el.addEventListener('click', this.changeCarView.bind(this));
    },
  
    changeCarView: function () {
      // Change the car's rotation to showcase different views
      const currentRotation = this.el.getAttribute('rotation');
      const newRotation = {
        x: currentRotation.x,
        y: currentRotation.y + 90, // Rotate by 90 degrees on each click
        z: currentRotation.z,
      };
      this.el.setAttribute('rotation', newRotation);
    }
  });
  