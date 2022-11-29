(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"emat61060102_aa_01_atlas_1", frames: [[0,0,1921,1081]]},
		{name:"emat61060102_aa_01_atlas_2", frames: [[0,1083,465,465],[0,0,1921,1081]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_2 = function() {
	this.initialize(ss["emat61060102_aa_01_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.자산2 = function() {
	this.initialize(ss["emat61060102_aa_01_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.자산3 = function() {
	this.initialize(ss["emat61060102_aa_01_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.an_Video = function(options) {
	this.initialize();
	this._element = new $.an.Video(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.triangleBg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.자산2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.triangleBg, new cjs.Rectangle(0,0,1921,1081), null);


(lib.rectangleBg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.자산3();
	this.instance.setTransform(-1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.rectangleBg, new cjs.Rectangle(-1,0,1921,1081), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AyJSKMAAAgkTMAkTAAAMAAAAkTg");
	mask.setTransform(116.2,116.2);

	// Layer_3
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,232.4,232.4), null);


(lib.playBtn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(116.2,116.2,1,1,0,0,0,116.2,116.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,232.5,232.5);


// stage content:
(lib.RotateTriangle2Shape = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		canvas.style.zIndex = "1";
		
		const root = this;
		const elm = {
			button: {
				start: this.playBtn,
				reload: {
					angle3: 		this.showTriangle,
					angle4:			this.showRectangle1,
					angle5: 		this.showRectangle2
				}
			},
			title: {
				angle3: 		null,
				angle4:			null,
				angle5:			null		
			},
			coordTriangle: 		false,
			canvas3Angle: 		null,
			canvas4Angle: 		null,
			countdownVid: 		this.countdownVid,
			countdown: 			null,
			triangleBg: 		this.triangleBg,
			rectangleBg:		this.rectangleBg,
			stages: {
				triangle: 			null,
				rectangle: 			null
			},
			rotateObj: 			null,
			selectedObj: 		[]
		}
		
		const params = {
			camera: 6,
			renderer: null,
			controls: null,
			scenes: {},
			cursor: {
				x: 		0,
				y: 		0,
				dx: 	0,
				dy: 	0
			},
			find: {
				triangle	: 		null,
				rectangle	:		null 
			},
			renderer: {
				width: 		null,
				height:		null
			},
			selectedCamera: 		null
		};
		
		const methods = {
			calcSize: function() {
				let width, height;
				const ratio = 1.777777777777778;
				if (window.innerWidth >= 1920 && window.innerHeight >= 1080) {
					width = 1920;
					height = 1080;
				} else {
					if (window.innerWidth > window.innerHeight) {
						height = window.innerHeight;
						width = window.innerHeight * ratio;
					} else {
						width = window.innerWidth;
						height = window.innerWidth / ratio;
					}
				}
				return [width, height];
			},
			initVisible: function() {
				elm.countdownVid.visible = false;
				elm.triangleBg.visible = false;
				elm.rectangleBg.visible = false;
				elm.button.reload.angle3.visible = false;
				elm.button.reload.angle4.visible = false;
				elm.button.reload.angle5.visible = false;
			},
			makeScene: function(elem, integ) {
				const scene = new THREE.Scene();
				const size = methods.calcSize();
				const camera = new THREE.PerspectiveCamera( integ, size[0] / size[1], 0.1, 1000 );
				
				if (elem === '#angle4') {
					params.selectedCamera = camera;
				}
				
				camera.position.z = params.camera;
				params.scenes[elem] = scene;
				scene.elmId = elem;
				
				//const helper = new THREE.DirectionalLightHelper( light, 5 );
				//group.add( helper );
				
				
				return {scene, camera, elem};
			},
			init3d: function() {
				
				const param = [
					{
						selector: '#angle3',
						radius: 1.4,
						camera: 50,
						obj: [{
							height: 2.5,
							angle: 3,
							color: '#5B9FCA'
						}]
					},
					{
						selector: '#angle4',
						radius: 1.2,
						camera: 70,
						obj: [{
							height: 2.5,
							angle: 4,
							color: '#482C91',
							position: {
								x: -1.7,
								y: 0,
								z: 0
							}
						}, {
							height: 2,
							angle: 5,
							color: '#BA318D',
							position: {
								x: 1.7,
								y: 0,
								z: 0
							}
						}]
					}
				];
				
				
				param.forEach(elm => {
					const info = methods.makeScene(elm.selector, elm.camera);
					elm.obj.forEach(child => {
						const group = new THREE.Group();
						const geometry = new THREE.CylinderGeometry(elm.radius, elm.radius, child.height, child.angle);
						const material = new THREE.MeshStandardMaterial({ color: child.color, emissive: child.color });
						const mesh = new THREE.Mesh(geometry, material);
						
						
						let check = false;
						
						const light = new THREE.DirectionalLight( 0xffffff, 0.4 );
						light.position.set(1,5, 1, 0)
						group.add( light );
						
						
						group.add(mesh);
						info.scene.add(group);
						
						
						if (child.position) {
							group.position.x = child.position.x;
							group.position.y = child.position.y;
							group.position.z = child.position.z;
						}
						
					});
					
					console.log(info.scene, '====');
					methods.renderSceneInfo(info);
				});
				
			},
			
			renderSceneInfo: function(sceneInfo) {
				const {scene, camera, elem} = sceneInfo;
				const renderer = new THREE.WebGLRenderer();
				renderer.setClearColor( '#fff', 0);
				const size = methods.calcSize();
				renderer.setSize(size[0], size[1]);
				document.querySelector(elem).appendChild(renderer.domElement);
				params.controls = new THREE.OrbitControls(camera, renderer.domElement);
				params.controls.enabled = false;
				params.renderer.width = renderer.domElement.width;
				params.renderer.height = renderer.domElement.height; 
				
				function animate() {
		          requestAnimationFrame(animate)
					if (scene.elmId === '#angle3') {
						if (params.find.triangle) {
							const el = params.scenes['#' + elm.stages.triangle.id];
							if (!el) {
								return;
							}
							
							const obj = el.children[0];
							if (obj.direction == 'up') {
								if (obj.rotation.x < 1.55) {
								  obj.rotation.x += 0.01;
								}
							  } else {
								  if (obj.rotation.x > -1.55) {
									obj.rotation.x -= 0.01;
								  }
							  }
						  }
					} else {
						if (params.find.rectangle) {
							const el = params.scenes['#' + elm.stages.rectangle.id];
							
							if (!el) {
								return;
							}
							
							const obj = el.children[0];
							if (obj.direction == 'up') {
								if (obj.rotation.x < 1.55) {
								  obj.rotation.x += 0.01;
								}
							} else {
								  if (obj.rotation.x > -1.55) {
									obj.rotation.x -= 0.01;
								}
							}
							
							
							const obj2 = el.children[1];
							if (obj2.direction == 'up') {
								if (obj2.rotation.x < 1.55) {
								  obj2.rotation.x += 0.01;
								}
							} else {
								  if (obj2.rotation.x > -1.55) {
									obj2.rotation.x -= 0.01;
								}
							}
						}
					}
		          render();
				}
				
				function render() {
		          renderer.render(scene, camera)
				}
				
				animate();
			},
			removeCountDown: function(currentId, root) {
				const obj = document.getElementById('countdownVid');
				
				if (!obj) {
					return;
				}
				
				obj.parentElement.style.display = 'none';
				obj.pause();
				createjs.Sound.stop('countDownSound');
				obj.removeEventListener('ended', handlers.countDown);	
				
				const curr = document.querySelector(currentId);
				if (curr) {
					curr.style.pointerEvents = 'none';
				}
				
				setTimeout(function() {
					methods.hideCanvas(currentId, root);
				}, 1000);
			},
			hideCanvas: function(currentId, root) {
				
				if (currentId === '#angle3') {
					const elem = document.querySelector('#angle3');
					elem.style.display = 'none';
					elm.title.angle3.style.display = 'none';
					elm.triangleBg.visible = false;
					root.MainVideoId.currentTime = 81;
					root.MainVideoId.play();
				} else {
					const elem = document.querySelector('#angle4');
					elem.style.display = 'none';
					elm.title.angle4.style.display = 'none';
					elm.title.angle5.style.display = 'none';
					elm.rectangleBg.visible = false;
					root.MainVideoId.currentTime = 135.2;
					root.MainVideoId.play();
				}
			},
			checkSelectedObj: function(obj) {
				let result = false;
				elm.selectedObj.forEach(elm => {
					elm == obj ? result = true : null;
				});
				
				return result;
			}
		};
		
		
		const handlers = {
			countDown: function (event) {
				event.currentTarget.parentElement.style.display = 'none';
				const elem = document.querySelector('#angle3');
				elem.style.pointerEvents = 'none';
				
				if (elem.style.display == 'block') {
					
					const el = params.scenes['#' + elm.stages.triangle.id];
					if (!el) {
						return;
					}
					
					const obj = el.children[0];
					
					if (obj.rotation.x > 0) {
						obj.direction = 'up'
					} else {
						obj.direction = 'down'
					}
					
					params.find.triangle = true;
					
					setTimeout(function() {
						//elm.title.angle3.style.display = 'block';
						
						methods.removeCountDown('#angle3', this);	
					}, 1000);
					
		
				} else {
					const elem = document.querySelector('#angle4');
					elem.style.pointerEvents = 'none';
					
					const el = params.scenes['#' + elm.stages.rectangle.id];
					
					if (!el) {
						return;
					}
					
					const obj = el.children[0];
					
					if (obj.rotation.x > 0) {
						obj.direction = 'up'
					} else {
						obj.direction = 'down'
					}
					
					
					obj2 = el.children[1];
					
					if (obj2.rotation.x > 0) {
						obj2.direction = 'up'
					} else {
						obj2.direction = 'down'
					}
					
					params.find.rectangle = true;
					
					
					elm.title.angle3.addEvent
					
					
					
					setTimeout(function() {
						//elm.title.angle4.style.display = 'block';
						//elm.title.angle5.style.display = 'block';
						methods.removeCountDown('#angle4', this);	
					}, 1000);
				}
				
			},
			updateVid: function(event) {
				const vid = event.currentTarget;
				if (vid.currentTime > 78 && vid.currentTime < 79) {
					vid.pause();
					elm.button.reload.angle3.visible = true;
				}
				
				if (vid.currentTime > 133 && vid.currentTime < 134) {
					vid.pause();
					elm.button.reload.angle4.visible = true;
					elm.button.reload.angle5.visible = true;
				}
			},
			showTrianleCoord: function(event) {
				const elem = document.querySelector('#angle3');
				handlers.createStage();
				elem.style.display = 'block';
				elm.triangleBg.visible = true;
				
				
				const obj = document.getElementById('countdownVid');
				obj.parentElement.style.display = 'block';
				obj.currentTime = 0;
				obj.play();
				createjs.Sound.play('countDownSound');
				obj.addEventListener('ended', handlers.countDown.bind(this));
				event.currentTarget.visible = false;
		
			},
			showRectangleCoord: function(event) {
				const elem = document.querySelector('#angle4');
				handlers.createStage();
				elem.style.display = 'block';
				elm.rectangleBg.visible = true;
				
				
				const obj = document.getElementById('countdownVid');
				obj.parentElement.style.display = 'block';
				obj.currentTime = 0;
				obj.play();
				createjs.Sound.play('countDownSound');
				obj.addEventListener('ended', handlers.countDown.bind(this));
				
				elm.button.reload.angle4.visible = false;
				elm.button.reload.angle5.visible = false;
		
			},
			angle3MouseDown: function(event) {
				elm.canvas3Angle.style.cursor = 'grabbing';
				event.currentTarget.addEventListener("stagemousemove", handlers.angle3MouseMove);
				event.currentTarget.addEventListener("stagemouseup", handlers.angle3MouseUp);
			},
			angle4MouseDown: function(event) {
				
				var raycaster = new THREE.Raycaster();
				var mouse = {};
			    mouse.x = ( event.stageX / params.renderer.width) * 2 - 1;
		        mouse.y = - ( event.stageY / params.renderer.height ) * 2 + 1;
			    raycaster.setFromCamera( mouse, params.selectedCamera );
				
			    var intersects = raycaster.intersectObjects( params.scenes['#angle4'].children );
				if (intersects.length > 0) {
					if (!methods.checkSelectedObj(intersects[0].object.parent.uuid)) {
						elm.rotateObj = intersects[0].object.parent;
					}
				}
				
				elm.canvas4Angle.style.cursor = 'grabbing';
				event.currentTarget.addEventListener("stagemousemove", handlers.angle4MouseMove);
				event.currentTarget.addEventListener("stagemouseup", handlers.angle4MouseUp);
			},
			angle4MouseUp: function(event) {
				elm.canvas4Angle.style.cursor = 'grab';
				elm.rotateObj = null;
				const id = event.currentTarget.id;
				if (!id) {
					return;
				}
				
				if (id === 'angle3') {
					return;
				} 
				
				
				
				const el = params.scenes['#' + id];
				if (!el) {
					return;
				}
				
				
				let obj = el.children;
				if (obj[0].rotation.x > 1.45 || obj[0].rotation.x < -1.45) {
					if (!methods.checkSelectedObj(obj[0].uuid)) {
						elm.selectedObj.push(obj[0].uuid);
					}
					
					//elm.title.angle4.style.display = 'block';
				}
				
				if (obj[1].rotation.x > 1.45 || obj[1].rotation.x < -1.45) {
					if (!methods.checkSelectedObj(obj[1].uuid)) {
						elm.selectedObj.push(obj[1].uuid);
					}
					
					//elm.title.angle5.style.display = 'block';
				}
				
				console.log(elm.selectedObj);
				if (methods.checkSelectedObj(obj[0].uuid) && methods.checkSelectedObj(obj[1].uuid)) {
					methods.removeCountDown('#angle4', this);
				}
				
				
				
				event.currentTarget.removeEventListener("stagemousemove", handlers.angle4MouseMove);
				event.currentTarget.removeEventListener("stagemouseup", handlers.angle4MouseUp);
			},
			angle4MouseMove: function(event) {
				
				if (!elm.rotateObj) {
					return;
				}
				
				
				if (params.cursor.dx > event.stageX) {
					if (elm.rotateObj.rotation.y > -3.1) {
						elm.rotateObj.rotation.y -= 0.04;
					}
				} else {
					if (elm.rotateObj.rotation.y < 3.1) {
						elm.rotateObj.rotation.y += 0.04;
					}
				}
				
				if (params.cursor.dy > event.stageY) {
					if (elm.rotateObj.rotation.x > -1.55) {
						elm.rotateObj.rotation.x -= 0.03;
					}
				} else {
					if (elm.rotateObj.rotation.x < 1.55) {
						elm.rotateObj.rotation.x += 0.03;
					}
				}
				
				params.cursor.dx = event.stageX;
				params.cursor.dy = event.stageY;
			},
			angle3MouseMove: function(event) {
				const id = event.currentTarget.id;
				if (!id) {
					return;
				}
				
				if (id !== 'angle3') {
					return;
				} 
				
				
				
				const el = params.scenes['#' + id];
				if (!el) {
					return;
				}
				
				const obj = el.children[0];
				
				if (params.cursor.dx > event.stageX) {
					if (obj.rotation.y > -3.1) {
						obj.rotation.y -= 0.04;
					}
				} else {
					if (obj.rotation.y < 3.1) {
						obj.rotation.y += 0.04;
					}
				}
				
				if (params.cursor.dy > event.stageY) {
					if (obj.rotation.x > -1.55) {
						obj.rotation.x -= 0.03;
					}
				} else {
					if (obj.rotation.x < 1.55) {
						obj.rotation.x += 0.03;
					}
				}
				
				params.cursor.dx = event.stageX;
				params.cursor.dy = event.stageY;
			},
			angle3MouseUp: function(event) {
				elm.canvas3Angle.style.cursor = 'grab';
				
				const id = event.currentTarget.id;
				if (!id) {
					return;
				}
				
				if (id !== 'angle3') {
					return;
				} 
				
				
				
				const el = params.scenes['#' + id];
				if (!el) {
					return;
				}
				
				const obj = el.children[0];
				
				if (obj.rotation.x > 1.45 || obj.rotation.x < -1.45) {
					//elm.title.angle3.style.display = 'block';
					methods.removeCountDown('#angle3', this);
				}
				
				event.currentTarget.removeEventListener("stagemousemove", handlers.angle3MouseMove);
				event.currentTarget.removeEventListener("stagemouseup", handlers.angle3MouseUp);
			},
			createStage: function() {
				if (!elm.stages.triangle) {
					const can = elm.canvas3Angle.querySelector('canvas');
					elm.stages.triangle = new createjs.Stage(can);
					createjs.Touch.enable(elm.stages.triangle);
					elm.stages.triangle.id = 'angle3';
					elm.stages.triangle.addEventListener("stagemousedown", handlers.angle3MouseDown);
				}
				
				if (!elm.stages.rectangle) {
					const can2 = elm.canvas4Angle.querySelector('canvas');
					elm.stages.rectangle = new createjs.Stage(can2);
					createjs.Touch.enable(elm.stages.rectangle);
					elm.stages.rectangle.id = 'angle4';
					elm.stages.rectangle.addEventListener("stagemousedown", handlers.angle4MouseDown);
				}
			},
		};
		
		
		methods.initVisible();
		const bind = function() {
			
			const param = document.createElement("div");	
			param.id = 'angle3';
			param.style.position = 'absolute';
			param.style.top = '0';
			param.style.left = '0';
			const size = methods.calcSize();
			param.style.width = size[0] + 'px';
			param.style.height = size[1] + 'px';
			param.style.zIndex = '2';
			param.style.display = 'none';
			param.style.cursor = 'grab';
			document.body.appendChild(param);
			elm.canvas3Angle = param;
			
			const param2 = document.createElement("div");	
			param2.id = 'angle4';
			param2.style.position = 'absolute';
			param2.style.top = '0';
			param2.style.left = '0';
			param2.style.width = size[0] + 'px';
			param2.style.height = size[1] + 'px';
			param2.style.zIndex = '2';
			param2.style.display = 'none';
			param.style.cursor = 'grab';
			document.body.appendChild(param2);
			elm.canvas4Angle = param2;
			
			console.log(size, '===');
			const svg = document.createElement("div");
			svg.id = "angle4Title";
			svg.style.position = 'absolute';
			let html = '';
			html += '<div style="position: relative;">';
			html += '<svg style="opacity: 0.8; transform: scale(1.5)" version="1.0" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">';
			html += '<g transform="translate(0.000000,140.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">';
			html += '<path d="M103 1380 c-42 -10 -57 -23 -77 -64 -14 -30 -16 -92 -16 -474 0 -250 4 -451 9 -465 6 -14 22 -37 38 -51 l28 -26 802 0 803 0 21 -41 c46 -91 142 -167 262 -208 60 -21 205 -46 214 -37 3 3 -14 27 -39 55 -49 55 -68 104 -68 180 l0 51 173 0 c189 0 203 4 232 60 13 25 15 100 15 482 0 431 -1 455 -20 485 -10 17 -29 38 -42 45 -19 10 -242 13 -1163 15 -627 0 -1155 -2 -1172 -7z"/> </g></svg>'
			
			html += '<svg style="position: absolute; top: 0; left: 0; transform: scale(1.5)" version="1.0" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">';
			html += '<g transform="translate(0.000000,140.000000) scale(0.100000,-0.100000)" fill="#2f2f7c" stroke="none">';
			html += '<path d="M1712 1148 c-6 -6 -12 -24 -12 -40 0 -26 -2 -27 -62 -30 l-63 -3 0 -40 c0 -38 2 -40 32 -43 l33 -3 -16 -31 c-33 -64 1 -143 73 -174 79 -34 192 0 225 66 22 43 23 108 2 138 -14 21 -14 22 5 22 14 0 21 -7 21 -18 0 -23 19 -42 42 -42 10 0 18 -7 18 -15 0 -8 -8 -15 -19 -15 -46 0 -56 -70 -11 -80 17 -4 26 -14 29 -30 4 -30 17 -40 52 -40 48 0 54 19 54 184 l0 150 -26 10 c-14 5 -38 6 -53 2 -22 -5 -26 -12 -26 -41 0 -28 -4 -35 -19 -35 -13 0 -21 8 -23 23 -3 20 -9 22 -75 25 l-72 3 -3 32 c-3 30 -5 32 -48 35 -26 2 -50 -2 -58 -10z m95 -156 c36 -23 38 -113 3 -132 -51 -27 -90 0 -90 62 0 62 44 97 87 70z"/>';
			html += '<path d="M834 1110 c-20 -8 -21 -17 -27 -187 -3 -98 -3 -214 1 -258 l7 -80 31 -3 c18 -2 36 3 43 11 6 8 15 64 19 123 l7 109 28 3 c32 4 51 34 43 68 -5 19 -13 24 -36 24 l-30 0 0 90 c0 78 -2 91 -19 100 -23 12 -38 12 -67 0z"/>';
			html += '<path d="M1085 1113 c-76 -4 -95 -14 -95 -49 0 -44 23 -54 131 -54 l99 0 0 -103 c0 -112 6 -127 51 -127 50 0 59 28 59 186 0 120 -2 143 -16 148 -15 6 -93 5 -229 -1z"/>';
			html += '<path d="M1398 1109 c-16 -9 -18 -28 -18 -157 0 -162 3 -172 55 -172 43 0 55 16 55 72 0 46 1 47 35 54 25 4 37 13 41 29 9 36 -12 65 -46 65 -29 0 -30 1 -30 50 0 38 -4 52 -19 60 -25 13 -51 12 -73 -1z"/>';
			html += '<path d="M523 1095 c-20 -14 -21 -21 -16 -119 l6 -105 -62 -77 c-33 -42 -61 -84 -61 -93 0 -26 21 -41 56 -41 25 0 41 11 83 55 29 30 54 55 57 55 3 0 31 -18 63 -41 66 -46 97 -48 120 -7 14 24 14 28 -4 49 -11 12 -46 42 -78 66 l-59 45 7 93 c9 114 1 135 -53 135 -21 0 -47 -7 -59 -15z"/>';
			html += '<path d="M1844 751 c-61 -28 -84 -63 -84 -127 0 -44 5 -59 28 -84 60 -68 209 -65 279 5 29 29 33 39 33 87 0 70 -24 110 -77 126 -58 17 -132 14 -179 -7z m138 -78 c40 -36 6 -103 -52 -103 -33 0 -70 30 -70 58 0 10 7 28 16 40 19 27 78 30 106 5z"/>';
			html += '<path d="M1240 753 c-159 -4 -162 -5 -158 -51 l3 -37 142 2 142 3 3 -78 3 -77 36 -3 c21 -2 40 2 46 10 6 7 13 63 14 123 l4 110 -60 1 c-33 0 -112 -1 -175 -3z"/>';
			html += '</g></svg>'
			html += '</div>';
			
			svg.innerHTML = html;
			svg.style.top = '20vh';
			svg.style.left = '10vw';
			svg.style.display = 'none';
			svg.style.zIndex = '20';
			document.body.appendChild(svg);
			elm.title.angle4 = svg;
			
			
			
			const svg2 = document.createElement("div");
			svg2.id = "angle3Title";
			svg2.style.position = 'absolute';
			html = '';
			html += '<div style="position: relative;">';
			html += '<svg style="opacity: 0.8; transform: scale(1.5)" version="1.0" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">';
			html += '<g transform="translate(0.000000,140.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">';
			html += '<path d="M103 1380 c-40 -9 -60 -25 -79 -61 -21 -42 -21 -917 1 -959 29 -56 43 -60 232 -60 l173 0 0 -51 c0 -76 -19 -125 -68 -180 -25 -28 -42 -52 -39 -55 9 -9 154 16 214 37 120 41 216 117 262 208 l21 41 803 0 802 0 28 26 c16 14 32 37 38 51 5 14 9 215 9 465 0 388 -2 444 -16 475 -35 73 61 68 -1209 70 -627 0 -1155 -2 -1172 -7z"/></g></svg>'
			
			html += '<svg style="position: absolute; top: 0; left: 0; transform: scale(1.5)" version="1.0" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">';
			html += '<g transform="translate(0.000000,140.000000) scale(0.100000,-0.100000)" fill="#2f2f7c" stroke="none">';
			html += '<path d="M1712 1148 c-6 -6 -12 -24 -12 -40 0 -26 -2 -27 -62 -30 l-63 -3 0 -40 c0 -38 2 -40 32 -43 l33 -3 -16 -31 c-33 -64 1 -143 73 -174 79 -34 192 0 225 66 22 43 23 108 2 138 -14 21 -14 22 5 22 14 0 21 -7 21 -18 0 -23 19 -42 42 -42 10 0 18 -7 18 -15 0 -8 -8 -15 -19 -15 -46 0 -56 -70 -11 -80 17 -4 26 -14 29 -30 4 -30 17 -40 52 -40 48 0 54 19 54 184 l0 150 -26 10 c-14 5 -38 6 -53 2 -22 -5 -26 -12 -26 -41 0 -28 -4 -35 -19 -35 -13 0 -21 8 -23 23 -3 20 -9 22 -75 25 l-72 3 -3 32 c-3 30 -5 32 -48 35 -26 2 -50 -2 -58 -10z m95 -156 c36 -23 38 -113 3 -132 -51 -27 -90 0 -90 62 0 62 44 97 87 70z"/>';
			html += '<path d="M513 1119 c-7 -7 -9 -37 -6 -83 l6 -72 -62 -69 c-33 -39 -61 -78 -61 -87 0 -24 44 -51 69 -43 11 3 44 29 73 56 l53 51 66 -36 c79 -43 93 -44 115 -11 23 36 11 56 -64 103 l-69 43 5 54 c2 30 2 66 -2 80 -6 23 -11 25 -59 25 -29 0 -58 -5 -64 -11z"/>';
			html += '<path d="M830 1113 c-8 -3 -18 -11 -22 -17 -9 -13 -9 -182 0 -251 l7 -50 45 0 45 0 5 55 c5 52 7 55 35 60 27 5 30 9 30 45 0 36 -3 40 -26 43 -27 3 -39 30 -39 87 0 29 -40 43 -80 28z"/>';
			html += '<path d="M1085 1113 c-76 -4 -95 -14 -95 -49 0 -44 23 -54 131 -54 l99 0 0 -103 c0 -112 6 -127 51 -127 50 0 59 28 59 186 0 120 -2 143 -16 148 -15 6 -93 5 -229 -1z"/>';
			html += '<path d="M1398 1109 c-16 -9 -18 -28 -18 -157 0 -162 3 -172 55 -172 43 0 55 16 55 72 0 46 1 47 35 54 25 4 37 13 41 29 9 36 -12 65 -46 65 -29 0 -30 1 -30 50 0 38 -4 52 -19 60 -25 13 -51 12 -73 -1z"/>';
			html += '<path d="M685 763 c-178 -4 -165 4 -165 -109 0 -142 -11 -134 191 -134 140 0 171 3 175 15 3 8 7 63 7 122 l2 108 -45 1 c-25 0 -99 -1 -165 -3z m115 -123 c0 -47 -12 -53 -110 -48 l-65 3 -3 43 -3 42 90 0 91 0 0 -40z"/>';
			html += '<path d="M1844 751 c-61 -28 -84 -63 -84 -127 0 -44 5 -59 28 -84 60 -68 209 -65 279 5 29 29 33 39 33 87 0 70 -24 110 -77 126 -58 17 -132 14 -179 -7z m138 -78 c40 -36 6 -103 -52 -103 -33 0 -70 30 -70 58 0 10 7 28 16 40 19 27 78 30 106 5z"/>';
			html += '<path d="M1240 753 c-159 -4 -162 -5 -158 -51 l3 -37 142 2 142 3 3 -78 3 -77 36 -3 c21 -2 40 2 46 10 6 7 13 63 14 123 l4 110 -60 1 c-33 0 -112 -1 -175 -3z"/>';
			html += '</g></svg>'
			html += '</div>';
			
			svg2.innerHTML = html;
			svg2.style.top = '20vh';
			if (window.innerWidth > 800) {
				svg2.style.left = (size[0] - 700) + 'px';	
			} else {
				svg2.style.right = '10vw';
			}
			
			svg2.style.display = 'none';
			svg2.style.zIndex = '20';
			document.body.appendChild(svg2);
			elm.title.angle3= svg2;
			
			
			
			
			const svg3 = document.createElement("div");
			svg3.id = "angle5Title";
			svg3.style.position = 'absolute';
			html = '';
			html += '<div style="position: relative;">';
			html += '<svg style="opacity: 0.8; transform: scale(1.5)" version="1.0" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">';
			html += '<g transform="translate(0.000000,140.000000) scale(0.100000,-0.100000)" fill="#ffffff" stroke="none">';
			html += '<path d="M103 1380 c-40 -9 -60 -25 -79 -61 -21 -42 -21 -917 1 -959 29 -56 43 -60 232 -60 l173 0 0 -51 c0 -76 -19 -125 -68 -180 -25 -28 -42 -52 -39 -55 9 -9 154 16 214 37 120 41 216 117 262 208 l21 41 803 0 802 0 28 26 c16 14 32 37 38 51 5 14 9 215 9 465 0 388 -2 444 -16 475 -35 73 61 68 -1209 70 -627 0 -1155 -2 -1172 -7z"/></g></svg>'
			
			html += '<svg style="position: absolute; top: 0; left: 0; transform: scale(1.5)" version="1.0" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">';
			html += '<g transform="translate(0.000000,140.000000) scale(0.100000,-0.100000)" fill="#2f2f7c" stroke="none">';
			html += '<path d="M1682 1148 c-6 -6 -12 -24 -12 -40 0 -26 -2 -27 -62 -30 l-63 -3 -3 -42 -3 -43 36 0 36 0 -16 -30 c-48 -92 28 -190 146 -190 55 0 122 30 144 64 25 38 31 108 12 145 -15 29 -14 31 3 31 11 0 20 -8 22 -21 2 -12 12 -27 23 -33 34 -19 36 -31 7 -36 -23 -4 -27 -10 -27 -40 0 -28 4 -35 25 -40 17 -4 26 -14 29 -30 4 -30 17 -40 52 -40 46 0 52 20 57 174 5 157 -1 176 -56 176 -37 0 -48 -10 -57 -47 -8 -38 -32 -44 -37 -10 -3 20 -9 22 -75 25 l-72 3 -3 32 c-3 30 -5 32 -48 35 -26 2 -50 -2 -58 -10z m101 -163 c38 -38 27 -120 -17 -131 -38 -9 -64 4 -76 40 -23 72 46 139 93 91z"/>';
			html += '<path d="M575 1101 c-163 -76 -146 -313 25 -348 26 -5 30 -10 30 -38 l0 -33 -87 -8 -88 -9 -3 -36 c-2 -27 1 -38 13 -43 19 -7 363 11 415 22 32 7 35 11 35 42 l0 35 -87 -3 -88 -2 0 35 c0 31 4 37 37 50 78 33 113 86 113 170 0 84 -35 137 -112 170 -51 21 -153 19 -203 -4z m185 -103 c29 -31 27 -92 -4 -123 -29 -29 -65 -39 -110 -31 -42 8 -65 33 -73 79 -5 31 -1 40 25 67 27 26 37 30 86 30 44 0 59 -4 76 -22z"/>';
			html += '<path d="M1055 1113 c-79 -4 -95 -14 -95 -54 0 -40 24 -49 134 -49 l96 0 0 -104 c0 -114 7 -130 57 -124 44 5 53 36 53 189 0 116 -2 138 -16 143 -15 6 -93 5 -229 -1z"/>';
			html += '<path d="M1368 1109 c-16 -9 -18 -28 -18 -157 0 -162 3 -172 55 -172 43 0 55 16 55 72 0 46 1 47 35 54 25 4 37 13 41 29 9 36 -12 65 -46 65 -29 0 -30 1 -30 50 0 38 -4 52 -19 60 -25 13 -51 12 -73 -1z"/>';
			html += '<path d="M1814 751 c-79 -36 -111 -110 -78 -177 26 -51 59 -72 124 -80 73 -8 136 10 177 51 29 29 33 39 33 88 0 63 -23 101 -76 123 -47 20 -131 17 -180 -5z m142 -86 c41 -63 -51 -130 -106 -75 -24 24 -25 48 -4 78 22 32 88 31 110 -3z"/>';
			html += '<path d="M1190 751 l-135 -6 0 -40 0 -40 142 2 142 3 3 -78 3 -77 36 -3 c21 -2 40 2 46 10 6 7 13 63 15 123 l3 110 -60 1 c-33 0 -121 -2 -195 -5z"/>';
			html += '</g></svg>'
			html += '</div>';
			svg3.innerHTML = html;
			svg3.style.top = '20vh';
			elm.title.angle5 = svg3;
			
			if (window.innerWidth > 800) {
				svg3.style.left = (size[0] - 600) + 'px';	
			} else {
				svg3.style.right = '10vw';
			}
			svg3.style.display = 'none';
			svg3.style.zIndex = '20';
			document.body.appendChild(svg3);
		
			methods.init3d();
			//elm.title.angle3.visible = false;
			
			
			
			elm.button.reload.angle3.addEventListener('click', handlers.showTrianleCoord.bind(this));
			elm.button.reload.angle4.addEventListener('click', handlers.showRectangleCoord.bind(this));
			elm.button.reload.angle5.addEventListener('click', handlers.showRectangleCoord.bind(this));
			
				
			setTimeout(function() {
				elm.countdownVid.visible = true;
				setTimeout(function() {
					console.log(elm.title.angle3);
					const obj = document.getElementById('countdownVid');
					if (obj) {
						obj.parentElement.style.zIndex = '3';
						obj.parentElement.style.display = 'none';
					}
					
					const vid = document.querySelector('#MainVideoId');
					if (vid) {
						//vid.play();
						//vid.currentTime = 70;
						vid.addEventListener('timeupdate', handlers.updateVid);
					}
				}, 100);
			}, 100);
				
		}
		
		bind(this);
		this.pointerEvents = "none";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer_1
	this.showRectangle2 = new lib.playBtn();
	this.showRectangle2.name = "showRectangle2";
	this.showRectangle2.setTransform(1322.35,353.45,0.8198,0.8196,0,0,0,105.8,116.9);
	new cjs.ButtonHelper(this.showRectangle2, 0, 1, 1);

	this.showRectangle1 = new lib.playBtn();
	this.showRectangle1.name = "showRectangle1";
	this.showRectangle1.setTransform(644.6,434,0.8196,0.8196,0,0,0,116.5,116.5);
	new cjs.ButtonHelper(this.showRectangle1, 0, 1, 1);

	this.showTriangle = new lib.playBtn();
	this.showTriangle.name = "showTriangle";
	this.showTriangle.setTransform(983.95,526,0.5483,0.5483,0,0,0,116.5,116.5);
	new cjs.ButtonHelper(this.showTriangle, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.showTriangle},{t:this.showRectangle1},{t:this.showRectangle2}]}).wait(1));

	// video
	this.rectangleBg = new lib.rectangleBg();
	this.rectangleBg.name = "rectangleBg";
	this.rectangleBg.setTransform(960.5,539.5,1,1,0,0,0,960.5,540.5);

	this.triangleBg = new lib.triangleBg();
	this.triangleBg.name = "triangleBg";
	this.triangleBg.setTransform(960.5,540.5,1,1,0,0,0,960.5,540.5);

	this.countdownVid = new lib.an_Video({'id': 'countdownVid', 'src':'videos/n8gu2-stub3.webm', 'autoplay':false, 'controls':false, 'muted':false, 'loop':false, 'poster':'', 'preload':true, 'class':'video'});

	this.countdownVid.name = "countdownVid";
	this.countdownVid.setTransform(1579.4,93.6,1.703,1.703,0,0,0,200,150.1);

	this.MainVideoId = new lib.an_Video({'id': 'MainVideoId', 'src':'videos/수학%20각기둥의%20이름과%20구성%20요소%20알기.mp4', 'autoplay':true, 'controls':false, 'muted':false, 'loop':false, 'poster':'', 'preload':true, 'class':'video'});

	this.MainVideoId.name = "MainVideoId";
	this.MainVideoId.setTransform(960,540,4.8,3.6,0,0,0,200,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.MainVideoId},{t:this.countdownVid},{t:this.triangleBg},{t:this.rectangleBg}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(957.6,377.2,964.8000000000001,704.5999999999999);
// library properties:
lib.properties = {
	id: '217690B0DA125D4D9B4A08ABB83E56EF',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#333333",
	opacity: 0.00,
	manifest: [
		{src:"images/emat61060102_aa_01_atlas_1.png", id:"emat61060102_aa_01_atlas_1"},
		{src:"images/emat61060102_aa_01_atlas_2.png", id:"emat61060102_aa_01_atlas_2"},
		{src:"sounds/ClickBtnSound.mp3", id:"ClickBtnSound"},
		{src:"sounds/countDownSound.mp3", id:"countDownSound"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js", id:"an.Video"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['217690B0DA125D4D9B4A08ABB83E56EF'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	var parent = this.parent;
	var detach = this.stage == null || this._off || !parent;
	while(parent) {
		if(parent.visible) {
			parent = parent.parent;
		}
		else{
			detach = true;
			break;
		}
	}
	detach = detach && this._element && this._element._attached;
	if(detach) {
		this._element.detach();
		this.dispatchEvent('detached');
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
		this.dispatchEvent('attached');
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;