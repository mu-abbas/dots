'use client';
function IntroVideo() {
  return (
    <video autoPlay loop muted playsInline className="w-full">
      <source src="dots-intro-423.mp4" type="video/mp4" media="(max-width:423px)" />
      <source src="dots-intro-640.mp4" type="video/mp4" media="(max-width:640px)" />
      <source src="dots-intro-853.mp4" type="video/mp4" media="(max-width:853px)" />
      <source src="dots-intro-1280.mp4" type="video/mp4" media="(max-width:1536px)" />
      <source src="dots-intro-1920.mp4" type="video/mp4" />
      <p className="text-center">Your browser does not support the video tag. 😞</p>
    </video>
  );
}

export default IntroVideo;