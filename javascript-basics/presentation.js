let car1 = {
  // properties
  brand: "Honda",
  color: "black",
  year: "2019",
  currentSpeed: 200,
  isMoving: false,

  //   methods
  startOrStopCar: function () {() =>
    this.isMoving = !this.isMoving;
  },

  accelerate: function (parameter) {
    if (!this.isMoving) {
      alert("Your car is not moving");
    } else {
      if (this.currentSpeed < 600) {
        this.currentSpeed = this.currentSpeed + parameter;
      } else {
        alert("You have reached your maximum limit");
      }
    }
  },

  slowDown: function () {
    if (this.isMoving) {
      if (this.currentSpeed <= 0) {
        this.currentSpeed = 0;
        this.isMoving = false;
      } else {
        this.currentSpeed = this.currentSpeed - 50;
      }
    } else {
      alert("Your car is not moving");
    }
  },

  stop: function () {
    this.currentSpeed = 0;
    this.isMoving = false;
  },
};

// console.log(car1.currentSpeed)
// car1.accelerate()
// console.log(car1.currentSpeed)

// let speed = 200

// console.log(speed)
device - width;
// function addSpeed (){
//     speed = speed *1.5
// }

// addSpeed()

// console.log(speed)

console.log(car1.currentSpeed);

let pedal = document.getElementById("pedal");
let speed = document.getElementById("speed");
let toggleStart = document.getElementById("start");

toggleStart.addEventListener("click", () => {
  car1.startOrStopCar();
  console.log(car1.isMoving);
});

pedal.addEventListener("click", () => {
  car1.accelerate(100);
  speed.innerHTML = car1.currentSpeed;

  console.log(car1.currentSpeed);
});
