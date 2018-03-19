import React from "react";


class TrailBlazingContainer extends React.Component {

// WILL HAVE A BUTTON FOR SIGNING IN OR SIGNING UP

  render() {
    return (
      <div>
      <div className="landing-page-component">
        <div class="video-background">
          <div class="video-foreground">
              <iframe src="https://youtube.com/embed/gKmO0RjeE1g?autoplay=1&loop=1&playlist=gKmO0RjeE1g" frameborder="0" webkitallowfullscreen allowfullscreen loop="true"></iframe>
          </div>
        </div>
        <div className="landing-page-title-box">
          <h1 id="h1-small-landing">Some clever tagline. </h1>
          <h1 id="h1-large-landing">Trail Blazin. </h1>
          <h3>Wherever you go, never be without somwehere to run.</h3>

        </div>


      </div>
    </div>

    )
  }
 }
export default TrailBlazingContainer
