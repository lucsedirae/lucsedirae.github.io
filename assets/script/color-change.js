function colorChange() {
    anime
      .timeline({
        loop: true,
      })
      .add({
        targets: "#my-name",
        delay: 1000,
        duration: 6000,
        color: "rgb(172, 143, 250)",
      })
      .add({
        targets: "#my-name",
        delay: 500,
        duration: 8000,
        color: "rgb(255, 255, 255)",
      });
  
    anime
      .timeline({
        loop: true,
      })
      .add({
        targets: "#navBtn0",
        delay: 3000,
        duration: 2000,
        color: "rgb(240, 230, 140)",
      })
      .add({
        targets: "#navBtn0",
        delay: 500,
        duration: 3000,
        color: "rgb(255, 255, 255)",
      });
  
    anime
      .timeline({
        loop: true,
      })
      .add({
        targets: "#navBtn1",
        delay: 5000,
        duration: 3000,
        color: "rgb(216, 112, 147)",
      })
      .add({
        targets: "#navBtn1",
        delay: 500,
        duration: 5000,
        color: "rgb(255, 255, 255)",
      });
  
    anime
      .timeline({
        loop: true,
      })
      .add({
        targets: "#navBtn2",
        delay: 6000,
        duration: 3000,
        color: "rgb(135, 206, 235)",
      })
      .add({
        targets: "#navBtn2",
        delay: 500,
        duration: 2000,
        color: "rgb(255, 255, 255)",
      });
  
    anime
      .timeline({
        loop: true,
      })
      .add({
        targets: "#navBtn3",
        delay: 4500,
        duration: 3000,
        color: "rgb(152, 251, 152)",
      })
      .add({
        targets: "#navBtn3",
        delay: 500,
        duration: 5000,
        color: "rgb(255, 255, 255)",
      });
  }
  