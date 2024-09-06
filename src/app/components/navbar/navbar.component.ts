import { Component, OnInit } from '@angular/core';
import * as THREE from 'three'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  constructor() {}

  ngOnInit(): void {
    this.initializeProfilePhoto();
  }

  initializeProfilePhoto() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const profileContainer = document.querySelector('#profileContainer') as HTMLElement;
    const renderer = new THREE.WebGLRenderer({
      canvas: document.querySelector('#profileCanvas') as HTMLCanvasElement
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(profileContainer.clientWidth, profileContainer.clientHeight);
    camera.position.setZ(30);
    renderer.render(scene, camera);
  }
}
