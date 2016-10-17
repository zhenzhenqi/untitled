var gallery;

function setup(){
  createCanvas(innerWidth, innerHeight, WEBGL);
  gallery = loadModel('assets/gallery_blender.obj');
}

function draw(){
  background(200);
  model(gallery);
}