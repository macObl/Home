import p5 from 'p5';
import React, { useEffect, useRef } from 'react';

const Sketch = () => {
  const sketchRef = useRef(null);

  useEffect(() => {
    const sketch = new p5((p) => {
      const canvasSize = 1540;
      const cx = canvasSize / 2;
      const colours = {};

      const size = 50;
      const spacing = size;
      const tranglePoints = [];

      let cycle = 0;
      const elements = [];

      var canvas;

      p.windowResized = () => {
         p.resizeCanvas(document.body.scrollWidth, document.body.scrollHeight -100);
      }


      p.setup = () =>  {
        canvas = p.createCanvas(document.body.scrollWidth, document.body.scrollHeight -100);
        canvas.position(0,0);
        canvas.style('z-index', '-1');
        p.colorMode(p.RGB, 255, 255, 255, 1);

        
        colours.bg = [24, 25, 46];
        colours.lines = [30, 32, 59];

       
        tranglePoints[0] = {
          x: size * p.cos(p.radians(270)),
          y: size * p.sin(p.radians(270)),
        };
        
        tranglePoints[1] = {
          x: size * p.cos(p.radians(30)),
          y: size * p.sin(p.radians(30)),
        };
        
        tranglePoints[2] = {
          x: size * p.cos(p.radians(150)),
          y: size * p.sin(p.radians(150)),
        };

        
        for (let x = 0; x < 35; x++) {
          for (let y = 0; y < 50; y++) {
            let xOffset = 0;
            if (y % 2 === 0) {
              xOffset = spacing;
            }
            elements.push(new Trangle(
              x * spacing * 2 + xOffset,
              y * spacing * 1.7,
            ));
          }
        }
      }


      p.draw = () => {
        p.background(...colours.bg);
        p.stroke(...colours.lines);
        p.strokeWeight(10);
        p.noFill();

        
        elements.forEach((e) => {
          e.update();
          e.render();
        });

        
        cycle += 0.01;
      }


      class Trangle {
        constructor(x, y) {
          this.x = x;
          this.y = y;
          this.dist = -p.dist(this.x, this.y, cx, cx) / cx;
          this.rotation = this.dist;
        }

        update() {
          let sineWave = p.sin((cycle + this.dist) * 2);
          sineWave = p.constrain(sineWave, -0.2, 0.8);
          sineWave = p.map(sineWave, -0.2, 0.8, 0, 1);
          sineWave = easeInOutCubic(sineWave, 0, 1, 1);
          this.rotation = sineWave;
        }

        render() {
          p.push();
          p.translate(this.x, this.y);
          p.rotate(this.rotation * (p.TWO_PI / 6));

          
          for (let i = 0; i < 3; i++) {
            p.line(0, 0, tranglePoints[i].x, tranglePoints[i].y);
          }
          p.pop();
        }
      }


      function easeInOutCubic(t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t + b;
        return c/2*((t-=2)*t*t + 2) + b;
      }

    }, sketchRef.current);

    
    return () => {
      console.log("Cleanup called");
      sketch.remove();
    };
  }, []);

  return (
    <div ref={sketchRef}>
    </div>
  );
};

export default Sketch;
