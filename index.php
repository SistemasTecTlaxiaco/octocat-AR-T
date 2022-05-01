<!DOCTYPE html>
<html lang="en">
  <head>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/dist/mindar-image.prod.js"></script>
    <script src="https://aframe.io/releases/1.2.0/aframe.min.js"></script>    
    <script src="https://cdn.jsdelivr.net/gh/donmccurdy/aframe-extras@v6.1.1/dist/aframe-extras.min.js"></script>
    <script src="https://cdn.jsdelivr.net/gh/hiukim/mind-ar-js@1.1.4/dist/mindar-image-aframe.prod.js"></script>   
    <script>
      const showInfo = () => {
        let y = 0;
        const infoButton = document.querySelector("#info-button");
        const ideaButton = document.querySelector("#idea-button");
        const webButton = document.querySelector("#web-button");
        const gitButton = document.querySelector("#git-button");
        const text = document.querySelector("#text");

        infoButton.setAttribute("visible", true);
        setTimeout(() => {
          ideaButton.setAttribute("visible", true);
        }, 300);
        setTimeout(() => {
          webButton.setAttribute("visible", true);
        }, 600);
        setTimeout(() => {
          gitButton.setAttribute("visible", true);
        }, 900);

        let currentTab = '';
        webButton.addEventListener('click', function (evt) {
          text.setAttribute("value", "https://octoartlax.com.mx/");
          currentTab = 'web';
        });
        ideaButton.addEventListener('click', function (evt) {
          text.setAttribute("value", "sabias que... Existe una comunidad dedicada a mi? En esta puedes encontrar imagenes (avatares) de mis diferentes fasetas o compartir imagenes referentes a mi. Visita: https://octodex.github.com/");
          currentTab = 'idea';
          setTimeout(() => {
                showPortfolio(() => {
                 //
                });
              }, 300);
        });
        infoButton.addEventListener('click', function (evt) {
          text.setAttribute("value", "Hola, mi nombre es Octocat mascota e imagen (logotipo) de Github, mi nombre e imagen hace referencia a las ramificaciones que tienen mis tectaculos, tal cual podrian tenerlos los repositorios de GitHub");
          currentTab = 'info';
        });
        gitButton.addEventListener('click', function (evt) {
          console.log("loc");
          text.setAttribute("value", "Visita nuestro repositorio para ver como creamos esta maravilla");
          currentTab = 'git';
        });

        text.addEventListener('click', function (evt) {
          if (currentTab === 'web') {
            window.location.href="https://octoartlax.com.mx/";
          }
          if (currentTab === 'idea') {
            window.location.href="https://octodex.github.com/";
          }
          if (currentTab === 'git') {
            window.location.href="https://github.com/SistemasTecTlaxiaco/Octacat-AR";
          }
        });
      }

      const showPortfolio = (done) => {
        const portfolio = document.querySelector("#portfolio-panel");
        const portfolioLeftButton = document.querySelector("#portfolio-left-button");
        const portfolioRightButton = document.querySelector("#portfolio-right-button");
        const paintandquestPreviewButton = document.querySelector("#paintandquest-preview-button");

        let y = 0;
        let currentItem = 0;

        portfolio.setAttribute("visible", true);

        const showPortfolioItem = (item) => {
          for (let i = 0; i <= 2; i++) {
            document.querySelector("#portfolio-item" + i).setAttribute("visible", i === item);
          }
        }
        const id = setInterval(() => {
          y += 0.008;
          if (y >= 0.6) {
            clearInterval(id);
            portfolioLeftButton.setAttribute("visible", true);
            portfolioRightButton.setAttribute("visible", true);
            portfolioLeftButton.addEventListener('click', () => {
              currentItem = (currentItem + 1) % 3;
              showPortfolioItem(currentItem);
            });
            portfolioRightButton.addEventListener('click', () => {
              currentItem = (currentItem - 1 + 3) % 3;
              showPortfolioItem(currentItem);
            });

            paintandquestPreviewButton.addEventListener('click', () => {
              paintandquestPreviewButton.setAttribute("visible", false);
              const testVideo = document.createElement( "video" );
              const canplayWebm = testVideo.canPlayType( 'video/webm; codecs="vp8, vorbis"' );
              if (canplayWebm == "") {
                document.querySelector("#paintandquest-video-link").setAttribute("src", "#paintandquest-video-mp4");
                document.querySelector("#paintandquest-video-mp4").play();
              } else {
                document.querySelector("#paintandquest-video-link").setAttribute("src", "#paintandquest-video-webm");
                document.querySelector("#paintandquest-video-webm").play();
              }
            });

            setTimeout(() => {
              done();
            }, 500);
          }
          portfolio.setAttribute("position", "0 " + y + " -0.01");
        }, 10);
      }

      const showAvatar = (onDone) => {
        const avatar = document.querySelector("#avatar");
        let z = -0.3;
        const id = setInterval(() => {
          z += 0.008;
          if (z >= 0.3) {
            clearInterval(id);
            onDone();
          }
          avatar.setAttribute("position", "0 -0.25 " + z);
        }, 10);
      }

      AFRAME.registerComponent('mytarget', {
        init: function () {
          this.el.addEventListener('targetFound', event => {
            console.log("target found");
            showAvatar(() => {
              //
              setTimeout(() => {
                    showInfo();
                  }, 300);
            });
          });
          this.el.addEventListener('targetLost', event => {
            console.log("target found");
          });
          //this.el.emit('targetFound');
        }
      });
    </script>

    <style>
      body {
        margin: 0;
      }
      .example-container {
        overflow: hidden;
        position: absolute;
        width: 100%;
        height: 100%;
      }
     
      #example-scanning-overlay {
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background: transparent;
	z-index: 2;
      }
      @media (min-aspect-ratio: 1/1) {
	#example-scanning-overlay .inner {
	  width: 50vh;
	  height: 50vh;
	}
      }
      @media (max-aspect-ratio: 1/1) {
	#example-scanning-overlay .inner {
	  width: 80vw;
	  height: 80vw;
	}
      }

      #example-scanning-overlay .inner {
	display: flex;
	align-items: center;
	justify-content: center;
	position: relative;

	background:
	  linear-gradient(to right, white 10px, transparent 10px) 0 0,
	  linear-gradient(to right, white 10px, transparent 10px) 0 100%,
	  linear-gradient(to left, white 10px, transparent 10px) 100% 0,
	  linear-gradient(to left, white 10px, transparent 10px) 100% 100%,
	  linear-gradient(to bottom, white 10px, transparent 10px) 0 0,
	  linear-gradient(to bottom, white 10px, transparent 10px) 100% 0,
	  linear-gradient(to top, white 10px, transparent 10px) 0 100%,
	  linear-gradient(to top, white 10px, transparent 10px) 100% 100%;
	background-repeat: no-repeat;
	background-size: 40px 40px;
      }

      #example-scanning-overlay.hidden {
	display: none;
      }

      #example-scanning-overlay img {
	opacity: 0.6;
	width: 90%;
	align-self: center;
      }

      #example-scanning-overlay .inner .scanline {
	position: absolute;
	width: 100%;
	height: 10px;
	background: white;
	animation: move 2s linear infinite;
      }
      @keyframes move {
	0%, 100% { top: 0% }
	50% { top: calc(100% - 10px) }
      }
    </style>
  </head>
  <body>
  <div class="example-container">
    <div id="example-scanning-overlay" class="hidden">
      <div class="inner">
        <img src="assets/card.png"/>
        <div class="scanline"></div>
      </div>
      </div>
          <a-scene
          mindar-image="imageTargetSrc: https://cdn.glitch.global/16b440ad-e892-4085-9aee-0cf4887d328f/targets%20(3).mind?v=1647492652448; showStats: false; uiScanning: #example-scanning-overlay;"
          embedded color-space="sRGB" renderer="colorManagement: true, physicallyCorrectLights"
          vr-mode-ui="enabled: false"
          device-orientation-permission-ui="enabled: false"
      >
        <a-assets> 
        <img id="card" src="assets/card.png" />     
          <img id="icon-idea" src="Assets/icons/idea.png" />
          <img id="icon-web" src="Assets/icons/web.png" />
          <img id="icon-info" src="Assets/icons/info.png" />        
          <img id="icon-git" src="Assets/icons/github.png" />
          <img id="icon-play" src="Assets/icons/play.png" />
          <img id="icon-left" src="Assets/icons/left.png" />
          <img id="icon-right" src="Assets/icons/right.png" />
          <img id="paintandquest-preview" src="Assets/portfolio/preview.png" />
          <video id="paintandquest-video-mp4" autoplay="false" loop="true" src="Assets/portfolio/prev.mp4"></video>
          <video id="paintandquest-video-webm" autoplay="false" loop="true" src="Assets/portfolio/prev.webm"></video>
          <img id="coffeemachine-preview" src="Assets/portfolio/1.png" />
          <img id="peak-preview" src="Assets/portfolio/2.png" />
        
          <a-asset-item id="Modelo3D" src="https://cdn.glitch.global/16b440ad-e892-4085-9aee-0cf4887d328f/octocatgit.glb?v=1648149096491"></a-asset-item>
        </a-assets>
        
        <a-camera position="0 0 0" look-controls="enabled: false" cursor="fuse: false; rayOrigin: mouse;" raycaster="far: 10000; objects: .clickable"></a-camera>
        <a-entity id="mytarget" mytarget mindar-image-target="targetIndex: 0">
        <a-plane src="#card" position="0 0 0" height="0.552" width="1" rotation="0 0 0"></a-plane>
           <a-entity visible=false id="portfolio-panel" position="0 0 -0.01">
              <a-text value="" color="black" align="center" width="2" position="0 0.4 0"></a-text>
              <a-entity id="portfolio-item0">
                <a-video id="paintandquest-video-link" webkit-playsinline playsinline width="1" height="0.552" position="0 0 0"></a-video>
                <a-image id="paintandquest-preview-button" class="clickable" src="#paintandquest-preview" alpha-test="0.5" position="0 0 0" height="0.552" width="1">
                </a-image>
              </a-entity>
              <a-entity id="portfolio-item1" visible=false>
                <a-image class="clickable" src="#coffeemachine-preview" alpha-test="0.5" position="0 0 0" height="0.552" width="1">
                </a-image>
              </a-entity>
              <a-entity id="portfolio-item2" visible=false>
                <a-image class="clickable" src="#peak-preview" alpha-test="0.5" position="0 0 0" height="0.552" width="1">
                </a-image>
              </a-entity>
    
              <a-image visible=false id="portfolio-left-button" class="clickable" src="#icon-left" position="-0.7 0 0" height="0.15" width="0.15"></a-image>
              <a-image visible=false id="portfolio-right-button" class="clickable" src="#icon-right" position="0.7 0 0" height="0.15" width="0.15"></a-image>
            </a-entity>
    
            <a-image visible=false id="info-button" class="clickable" src="#icon-info" position="-0.42 -0.5 0" height="0.15" width="0.15"
              animation="property: scale; to: 1.2 1.2 1.2; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"
            ></a-image>
    
            <a-image visible=false id="idea-button" class="clickable" src="#icon-idea" alpha-test="0.5" position="-0.14 -0.5 0" height="0.15" width="0.15"
              animation="property: scale; to: 1.2 1.2 1.2; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"
            ></a-image>
    
            <a-image visible=false id="web-button" class="clickable" src="#icon-web"  position="0.14 -0.5 0" height="0.15" width="0.15"
              animation="property: scale; to: 1.2 1.2 1.2; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"
            ></a-image>
    
            <a-image visible=false id="git-button" class="clickable" src="#icon-git" position="0.42 -0.5 0" height="0.15" width="0.15"
              animation="property: scale; to: 1.2 1.2 1.2; dur: 1000; easing: easeInOutQuad; loop: true; dir: alternate"
            ></a-image>
            <a-gltf-model
              id="avatar"
              rotation="0 0 0"
              position="0 -0.25 0"
              scale="0.1 0.1 0.1"
              src="#Modelo3D"
              animation-mixer
            >        
            </a-gltf-model>
            <a-text id="text" class="clickable" value="" color="white" align="center" width="1" position="0 -1.001 0" geometry="primitive:plane; height: 0.5; width: 1.4;" material="color: black; opacity: 0.5"></a-text>
          </a-entity>
        </a-scene> 
    </div>
  </body>
</html>
