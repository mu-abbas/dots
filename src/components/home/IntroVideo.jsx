'use client';
function IntroVideo() {
  return (
    <video autoPlay loop muted playsInline className="sticky top-0 w-full bg-black">
      <source src="/video/dots-intro-423.mp4" type="video/mp4" media="(max-width:423px)" />
      <source src="/video/dots-intro-640.mp4" type="video/mp4" media="(max-width:640px)" />
      <source src="/video/dots-intro-853.mp4" type="video/mp4" media="(max-width:853px)" />
      <source src="/video/dots-intro-1280.mp4" type="video/mp4" media="(max-width:1536px)" />
      <source src="/video/dots-intro-1920.mp4" type="video/mp4" />
      <p className="text-center">Your browser does not support the video tag. 😞</p>
    </video>
  );
}

export default IntroVideo;
