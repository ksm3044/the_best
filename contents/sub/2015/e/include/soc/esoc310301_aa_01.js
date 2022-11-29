(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"transport_atlas_1", frames: [[0,0,303,97],[0,99,303,97]]}
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



(lib.btnCarpngcopy2 = function() {
	this.initialize(ss["transport_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.btnCowpngcopy = function() {
	this.initialize(ss["transport_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



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



(lib.btnCow = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.btnCowpngcopy();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,303,97);


(lib.btnCar = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.btnCarpngcopy2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,303,97);


// stage content:
(lib.RECOVER_transport1 = function(mode,startPosition,loop,reversed) {
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
		let isMouse = false,eventBool = false;
		
		const buttons = [this.btnCow, this.btnCar];
		
		this.questionMovie.visible = false;
		this.showBoat.visible = false;
		this.showCow.visible = false;
		this.hideBoat.visible = false;
		this.hideCow.visible = false;
		this.popupMovie.visible = false;
		
		
		const handlers = {
			clickChooseBtn(event) {
				this.MainVideoId.play();
				console.log(this.MainVideoId);
				
			},
			handleVidDuration (event) {
				
				if (event.currentTarget.currentTime > 9 && event.currentTarget.currentTime < 10) {
					this.MainVideoId.pause();
					buttons.forEach(elm => {
						elm.visible = true;
					});
				}
				
				if (event.currentTarget.currentTime > 165 && event.currentTarget.currentTime < 166) {
					event.currentTarget.pause();
					methods.handleHide();
					playMovie()
					document.getElementById("questionMovie").parentElement.style.display = "block";
					document.getElementById("showBoat").parentElement.style.display = "block";
					document.getElementById("showCow").parentElement.style.display = "block";
					eventBool = true
				}
				if(eventBool){
					document.getElementById("showBoat").parentElement.style.cursor = "pointer"
					document.getElementById("showBoat").parentElement.style.zIndex = "1"
					document.getElementById("showBoat").parentElement.addEventListener("click", methods.clickBoat)
					document.getElementById("showCow").parentElement.style.zIndex = "1"
					document.getElementById("showCow").parentElement.style.cursor = "pointer"
					document.getElementById("showCow").addEventListener("click", methods.clickCow.bind(this))
				}
			}
		}
		
		
		buttons.forEach(function(elm) {
			elm.visible = false;
		});
		
		
		buttons.forEach(elm => {
			 if (elm !== this.startBg) {
				elm.addEventListener('click', function(event) {
					methods.hideStartButtons();
					this.MainVideoId.currentTime = 10;
					this.MainVideoId.play();
				});
			 }
		});
		
		
		
		function bind () {
			setTimeout(function() {
				root.questionMovie.visible = true;
				root.showBoat.visible = true;
				root.showCow.visible = true;
				root.hideBoat.visible = true;
				root.hideCow.visible = true;
				root.popupMovie.visible = true;
				const vid = document.querySelector('#MainVideoId');

				vid.currentTime = 160
				
				
				if (vid) {
					vid.addEventListener('timeupdate', handlers.handleVidDuration.bind(this));
				}
			}, 4000)
			
		}
		
		
		function correctAnswer() {
			this.MainVideoId.currentTime = 166;
			this.MainVideoId.play();
		}
		
		function playMovie(){
			this.showCow.play();
			this.showBoat.play();
			this.hideBoat.play();
		}
		
		
		function showPopup() {
			this.popupMovie.currentTime = 0;
			this.popupMovie.play();
			document.getElementById("popupMovie").parentElement.style.zIndex = "2";
			document.getElementById("popupMovie").parentElement.style.display = "block"
			setTimeout(() => {
				methods.clickPopup();
			},2500)
		}
		
		
		const methods = {
			hideStartButtons() {
				buttons.forEach(function(elm) {
					elm.visible = false;
				});
			},
			handleHide() {
				document.getElementById("MainVideoId").parentElement.style.display = "none";
				document.getElementById("popupMovie").parentElement.style.display = "none";
				document.getElementById("showCow").parentElement.style.display = "none";
				document.getElementById("showBoat").parentElement.style.display = "none";
				document.getElementById("hideBoat").parentElement.style.display = "none";
				document.getElementById("hideCow").parentElement.style.display = "none";
				document.getElementById("questionMovie").parentElement.style.display = "none";
			},
			clickBoat() {
				correctAnswer()
				methods.handleHide();
				document.getElementById("MainVideoId").parentElement.style.display = "block";
				document.getElementById("showBoat").parentElement.style.zIndex = "0"
				eventBool = true;
			},
			clickCow() {
				createjs.Sound.play("clickBtnSound")
				eventBool = false
				document.getElementById("MainVideoId").pause();
				document.getElementById("showBoat").parentElement.style.display = "none"
				document.getElementById("hideBoat").parentElement.style.display = "block"
				document.getElementById("showCow").parentElement.style.zIndex = "0"
				document.getElementById("hideBoat").parentElement.style.zIndex = "1"
				showPopup()
			},
			clickPopup() {
				methods.handleHide();
				document.getElementById("showCow").parentElement.style.zIndex = "1"
				document.getElementById("questionMovie").parentElement.style.display = "block";
				document.getElementById("showBoat").parentElement.style.display = "block";
				document.getElementById("showCow").parentElement.style.display = "block";
			},
		}
		
		
		bind();
		this.pointerEvents = "none";
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// hideVideos
	this.hideBoat = new lib.an_Video({'id': 'hideBoat', 'src':'videos/hideBoat.webm', 'autoplay':true, 'controls':false, 'muted':false, 'loop':true, 'poster':'', 'preload':false, 'class':'video'});

	this.hideBoat.name = "hideBoat";
	this.hideBoat.setTransform(1559.65,625,1.3375,1.3267,0,0,0,200.1,150);

	this.hideCow = new lib.an_Video({'id': 'hideCow', 'src':'videos/hideCow.webm', 'autoplay':true, 'controls':false, 'muted':false, 'loop':true, 'poster':'', 'preload':false, 'class':'video'});

	this.hideCow.name = "hideCow";
	this.hideCow.setTransform(1554.65,244,1.3375,1.3267,0,0,0,200.1,150);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hideCow},{t:this.hideBoat}]}).wait(1));

	// videos
	this.questionMovie = new lib.an_Video({'id': 'questionMovie', 'src':'videos/question.webm', 'autoplay':true, 'controls':false, 'muted':false, 'loop':true, 'poster':'', 'preload':false, 'class':'video'});

	this.questionMovie.name = "questionMovie";
	this.questionMovie.setTransform(686.95,446.4,2.9175,2.9034,0,0,0,200.5,150.3);

	this.showBoat = new lib.an_Video({'id': 'showBoat', 'src':'videos/showHide.webm', 'autoplay':true, 'controls':false, 'muted':false, 'loop':true, 'poster':'', 'preload':false, 'class':'video'});

	this.showBoat.name = "showBoat";
	this.showBoat.setTransform(1559.65,625.65,1.3376,1.3267,0,0,0,200.1,150.5);

	this.showCow = new lib.an_Video({'id': 'showCow', 'src':'videos/showCow.webm', 'autoplay':true, 'controls':false, 'muted':false, 'loop':true, 'poster':'', 'preload':false, 'class':'video'});

	this.showCow.name = "showCow";
	this.showCow.setTransform(1554.9,245.7,1.3375,1.3267,0,0,0,200.3,151.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.showCow},{t:this.showBoat},{t:this.questionMovie}]}).wait(1));

	// popupVideo
	this.popupMovie = new lib.an_Video({'id': 'popupMovie', 'src':'videos/Untitled.webm', 'autoplay':false, 'controls':false, 'muted':false, 'loop':true, 'poster':'', 'preload':false, 'class':'video'});

	this.popupMovie.name = "popupMovie";
	this.popupMovie.setTransform(974.85,437.6,1.9585,1.3777,0,0,0,200.3,150.1);

	this.timeline.addTween(cjs.Tween.get(this.popupMovie).wait(1));

	// video
	this.btnCar = new lib.btnCar();
	this.btnCar.name = "btnCar";
	this.btnCar.setTransform(1373.95,697.3,0.8858,0.8804,0,0,0,151.6,49.2);
	new cjs.ButtonHelper(this.btnCar, 0, 1, 1);

	this.btnCow = new lib.btnCow();
	this.btnCow.name = "btnCow";
	this.btnCow.setTransform(593.65,697.2,0.8875,0.8875,0,0,0,151.7,48.7);
	new cjs.ButtonHelper(this.btnCow, 0, 1, 1);

	this.MainVideoId = new lib.an_Video({'id': 'MainVideoId', 'src':'videos/교통수단_11_22_수정2.mp4', 'autoplay':true, 'controls':false, 'muted':false, 'loop':false, 'poster':'', 'preload':true, 'class':'video'});

	this.MainVideoId.name = "MainVideoId";
	this.MainVideoId.setTransform(960,539.65,4.7999,3.5999,0,0,0,200,149.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.MainVideoId},{t:this.btnCow},{t:this.btnCar}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(957.6,538.2,964.8000000000001,543.5999999999999);
// library properties:
lib.properties = {
	id: '217690B0DA125D4D9B4A08ABB83E56EF',
	width: 1920,
	height: 1080,
	fps: 24,
	color: "#333333",
	opacity: 0.00,
	manifest: [
		{src:"images/transport_atlas_1.png", id:"transport_atlas_1"},
		{src:"sounds/clickBtnSound.mp3", id:"clickBtnSound"},
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
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;