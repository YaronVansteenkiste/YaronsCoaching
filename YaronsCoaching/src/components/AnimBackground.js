import React, { useEffect } from 'react';
import * as THREE from 'three';
import smokeTexture from '../images/smoke.png';

function AnimBackground() {
  useEffect(() => {
    const background = document.getElementById('background');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);

    camera.position.z = 1;
    camera.rotation.x = 1.16;
    camera.rotation.y = -0.12;
    camera.rotation.z = 0.27;

    window.addEventListener('mousemove', onMouseMove, false);

    function onMouseMove(event) {
      scene.position.x = (event.clientX - window.innerWidth * 0.5) * 0.03;
      scene.position.z = (event.clientY - window.innerHeight * -0.5) * -0.03;
    }

    const light = new THREE.AmbientLight(0x4477B0);
    scene.add(light);

    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    scene.fog = new THREE.FogExp2(0x060E18, 0.001);
    renderer.setClearColor(scene.fog.color);
    background.appendChild(renderer.domElement);

    const cloudParticles = [];
    const loader = new THREE.TextureLoader();

    loader.load(smokeTexture, (texture) => {
      const cloudGeometry = new THREE.PlaneGeometry(500, 500);
      const cloudMaterial = new THREE.MeshLambertMaterial({
        map: texture,
        transparent: true,
      });

      for (let p = 0; p < 50; p++) {
        const cloud = new THREE.Mesh(cloudGeometry, cloudMaterial);
        cloud.position.set(
          Math.random() * 800 - 400,
          500,
          Math.random() * 500 - 450
        );
        cloud.rotation.x = 1.16;
        cloud.rotation.y = -0.12;
        cloud.rotation.z = Math.random() * 2 * Math.PI;
        cloud.material.opacity = 1;
        cloudParticles.push(cloud);
        scene.add(cloud);
      }

      function animate() {
        cloudParticles.forEach((p) => {
          p.rotation.z -= 0.002;
        });

        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      }

      animate();
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return <div id='background'></div>;
}

export default AnimBackground;
