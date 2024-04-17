'use client';
function IntroVideo() {
  return (
    <video autoPlay loop muted className="w-full">
      <source src="dots-intro.mp4" type="video/mp4" />
      <p className="text-center">Your browser does not support the video tag. 😞</p>
    </video>
  );
}

export default IntroVideo;
