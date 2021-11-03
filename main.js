rightWristX="";
rightWristY="";
score="";
function setup(){
  var canvas =  createCanvas(700,600);
  canvas.parent('canvas');
  
  video = createCapture(VIDEO);
  video.size(700, 900);
  video.center();
  
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
  }
  
  function modelLoaded() {
    console.log('PoseNet Is Initialized');
  }

  function gotPoses(results)
  {
    if(results.length > 0)
    {
  
      rightWristY = results[0].pose.rightWrist.y;
      rightWristX = results[0].pose.rightWrist.x;
      scoreRightWrist =  results[0].pose.keypoints[10].score;
      console.log(scoreRightWrist);
    }
  }
  function draw(){
    if(score > 0.2)
    {
      fill("red");
      stroke("red");
      circle(rightWristX, rightWristY, 30);
    }

  }

  