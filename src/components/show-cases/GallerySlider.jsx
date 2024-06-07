'use client';
function GallerySlider({ setSliderIsOpen }) {
  return (
    <div className="fixed inset-0 z-50 w-screen h-screen bg-black bg-opacity-90 animate-popUp">
      <div className="flex">
        <button className="px-12 py-8 ml-auto text-white scale-150" onClick={() => setSliderIsOpen(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
            <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
          </svg>
        </button>
      </div>
      <div className="flex items-center justify-center h-[75%]">
        <p className="text-xl text-center text-white ">Under Processing...</p>
      </div>
    </div>
  );
}

export default GallerySlider;
