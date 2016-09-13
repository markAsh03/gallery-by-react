require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

import ReactDOM from 'react-dom';

var imageDatas = require('../data/imageDatas.json');


// 自执行函数
//获取图片相关的数据，将图片名转成图片的URL路径信息
imageDatas = (function genImageUrl(imageDataArray){

  for(var i=0;i < imageDataArray.length; i++){

    var singleImageData = imageDataArray[i];

    singleImageData.imageUrl =  require("../images/"+singleImageData.filename);

    imageDataArray[i] = singleImageData;
  }

  return imageDataArray;
})(imageDatas);

// imageDatas = genImageUrl(imageDatas);

var ImageFigure = React.createClass({
  render:function(){
    return(
      <figure className="img-figure">
        <img src={this.props.data.imageUrl} alt={this.props.data.title}/>
        <figcaption className="figcaption">
          <h2 className="img-title">{this.props.data.title}</h2>
        </figcaption>
      </figure>
    );
  }
});

class AppComponent extends React.Component {
  render() {
    var controllerUnits = [],imgFigures =[];

    return (
      <section className="stage">
        <section className="img-sec">

        </section>
        <nav className="controller-nav">

        </nav>
      </section>
    );
  }

  componentDidMount(){

  }
}

AppComponent.defaultProps = {
};

ReactDOM.render(<AppComponent />,document.getElementById("app"))

export default AppComponent;
