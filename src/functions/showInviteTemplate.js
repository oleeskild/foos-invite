module.exports = ({ headColor, shirtColor, shortsColor, sockColor, ballColor, to, message, from, invitePath, hostName }) => {
    return `
    
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/css/styles.css" />
        <style>
    
          #Socks, #Feet {
              fill: ${sockColor} !important;
          }
    
          #Ball {
              fill: ${ballColor} !important;
          }
    
          #Head {
              fill: ${headColor} !important;
          }
    
          #Body {
              fill: ${shirtColor} !important;
          }
    
          #Shorts {
              fill: ${shortsColor} !important;
          }
        </style>
        <title>Invite foos devs!</title>
      </head>
      <body>
        <div class="container">
          <header>
            <h1 class="title">Foos invite</h1>
          </header>
    
          <div class="flex-container">
            <div class="foos-player">
              <?xml version="1.0" encoding="UTF-8" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"
              ><svg
                width="100%"
                height="100%"
                viewBox="0 0 292 387"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                xml:space="preserve"
                xmlns:serif="http://www.serif.com/"
                style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
              >
                <rect
                  id="Bar"
                  x="0"
                  y="87.781"
                  width="291.212"
                  height="24.997"
                  style="fill:#df9682;"
                />
                <rect
                  id="Bar1"
                  serif:id="Bar"
                  x="0"
                  y="87.781"
                  width="291.212"
                  height="7.944"
                  style="fill-opacity:0.09;"
                />
                <circle
                  id="Head"
                  cx="145.606"
                  cy="35.765"
                  r="35.765"
                  style="fill:#00dbff;"
                />
                <clipPath id="_clip1">
                  <circle cx="145.606" cy="35.765" r="35.765" />
                </clipPath>
                <g clip-path="url(#_clip1)">
                  <path
                    id="Head1"
                    serif:id="Head"
                    d="M159.028,-13.422c27.147,0 49.187,22.04 49.187,49.187c0,27.147 -22.04,49.187 -49.187,49.187c-27.147,0 -49.187,-22.04 -49.187,-49.187c0,-27.147 22.04,-49.187 49.187,-49.187Zm0,6.894c23.342,0 42.293,18.951 42.293,42.293c0,23.342 -18.951,42.292 -42.293,42.292c-23.342,0 -42.292,-18.95 -42.292,-42.292c0,-23.342 18.95,-42.293 42.292,-42.293Z"
                    style="fill-opacity:0.09;"
                  />
                </g>
                <path
                  id="Body"
                  d="M194.659,95.219c0,-13.075 -10.615,-23.689 -23.69,-23.689l-47.379,0c-13.074,0 -23.689,10.614 -23.689,23.689l0,123.871l94.758,0l0,-123.871Z"
                  style="fill:#10e1a8;"
                />
                <clipPath id="_clip2">
                  <path
                    d="M194.659,95.219c0,-13.075 -10.615,-23.689 -23.69,-23.689l-47.379,0c-13.074,0 -23.689,10.614 -23.689,23.689l0,123.871l94.758,0l0,-123.871Z"
                  />
                </clipPath>
                <g clip-path="url(#_clip2)">
                  <rect
                    id="Body1"
                    serif:id="Body"
                    x="90.137"
                    y="64.94"
                    width="19.45"
                    height="154.15"
                    style="fill-opacity:0.11;"
                  />
                </g>
                <path
                  id="Shorts"
                  d="M194.659,219.09l-94.758,0l19.965,55.744l54.827,0l19.966,-55.744Z"
                  style="fill:#e95e4f;"
                />
                <clipPath id="_clip3">
                  <path
                    d="M194.659,219.09l-94.758,0l19.965,55.744l54.827,0l19.966,-55.744Z"
                  />
                </clipPath>
                <g clip-path="url(#_clip3)">
                  <path
                    id="Shorts1"
                    serif:id="Shorts"
                    d="M129.703,274.834l-94.757,0l19.965,-55.744l54.827,0l19.965,55.744Z"
                    style="fill-opacity:0.1;"
                  />
                </g>
                <path
                  id="Socks"
                  d="M119.781,274.834l55.048,0l-13.762,56.693l-27.524,0l-13.762,-56.693Z"
                  style="fill:#00dbff;"
                />
                <clipPath id="_clip4">
                  <path
                    d="M119.781,274.834l55.048,0l-13.762,56.693l-27.524,0l-13.762,-56.693Z"
                  />
                </clipPath>
                <g clip-path="url(#_clip4)">
                  <path
                    id="Socks1"
                    serif:id="Socks"
                    d="M88.325,331.527l55.469,0l-13.868,-56.693l-27.734,0l-13.867,56.693Z"
                    style="fill-opacity:0.09;"
                  />
                </g>
                <rect
                  id="Feet"
                  x="119.781"
                  y="331.527"
                  width="55.048"
                  height="27.057"
                  style="fill:#00d6ff;"
                />
                <path
                  id="Glint"
                  d="M191.195,113.624c0,-0.882 -0.717,-1.599 -1.599,-1.599c-0.883,0 -1.599,0.717 -1.599,1.599l0,32.297c0,0.883 0.716,1.599 1.599,1.599c0.882,0 1.599,-0.716 1.599,-1.599l0,-32.297Z"
                  style="fill:#fff;fill-opacity:0.84;"
                />
                <circle
                  id="Glint-top"
                  serif:id="Glint top"
                  cx="189.596"
                  cy="109.336"
                  r="1.599"
                  style="fill:#fff;fill-opacity:0.84;"
                />
                <circle
                  id="Ball"
                  cx="147.305"
                  cy="359.051"
                  r="27.524"
                  style="fill:#ffcc6e;"
                />
                <clipPath id="_clip5">
                  <circle cx="147.305" cy="359.051" r="27.524" />
                </clipPath>
                <g clip-path="url(#_clip5)">
                  <path
                    id="BallShadow"
                    d="M153.09,323.677c19.266,0 34.907,15.641 34.907,34.907c0,19.266 -15.641,34.907 -34.907,34.907c-19.266,0 -34.907,-15.641 -34.907,-34.907c0,-19.266 15.641,-34.907 34.907,-34.907Zm0,8.727c14.449,0 26.18,11.731 26.18,26.18c0,14.45 -11.731,26.181 -26.18,26.181c-14.449,0 -26.181,-11.731 -26.181,-26.181c0,-14.449 11.732,-26.18 26.181,-26.18Z"
                    style="fill-opacity:0.11;"
                  />
                </g>
              </svg>
            </div>

            <div class="flex-container--column half">
                <div>Here's your link</div>
                <div class="greeting-card">
                    <div style="color: ${shirtColor}"> https://${hostName}/invite/${invitePath} </div>
                </div>
                <div class="greeting-card">
                    <h2>${to}</h2>
                    <div class="message">${message}</div>
                    <div class="from">- ${from}</div>
                </div>
            </div>
          </div>
        </div>
      </body>
    </html>
    
    `
}