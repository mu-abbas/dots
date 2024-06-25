'use client';

import Container from '../micro/Container';
import CTALinkV2 from '../navigation/CTALinkV2';

function ReadyToStart() {
  return (
    <section className="readyToStart bg-center bg-contain bg-navy bg-readyToStart text-offWhite sticky top-0 rounded-t-[2rem] pb-[2rem] lg:rounded-t-[3rem] lg:pb-[3rem] 2xl:rounded-t-[4rem] 2xl:pb-[4rem] 2xl:-mt-[4rem] -mt-[2rem] lg:-mt-[3rem]">
      <Container>
        <div className="flex flex-col items-center gap-8 py-12">
          <span className="w-36 md:w-40 lg:w-44 2xl:w-48">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 174 140" fill="none">
              <g clipPath="url(#clip0_1102_2814)">
                <path
                  opacity="0.2"
                  d="M17.17 86.6201L153.85 86.6201C163.333 86.6201 171.02 78.9328 171.02 69.4501V66.1201C171.02 56.6374 163.333 48.9501 153.85 48.9501L17.17 48.9501C7.68729 48.9501 1.52588e-05 56.6374 1.52588e-05 66.1201V69.4501C1.52588e-05 78.9328 7.68729 86.6201 17.17 86.6201Z"
                  fill="#C9F28D"
                ></path>
                <path
                  opacity="0.2"
                  d="M96.92 113.92L125.97 135.803L168.701 79.0762L139.651 57.1932L96.92 113.92Z"
                  fill="#C9F28D"
                ></path>
                <path
                  d="M114.1 139.91C124.505 139.91 132.94 131.475 132.94 121.07C132.94 110.665 124.505 102.23 114.1 102.23C103.695 102.23 95.2598 110.665 95.2598 121.07C95.2598 131.475 103.695 139.91 114.1 139.91Z"
                  fill="#C9F28D"
                ></path>
                <path
                  d="M154.44 86.6199C164.845 86.6199 173.28 78.185 173.28 67.7799C173.28 57.3749 164.845 48.9399 154.44 48.9399C144.035 48.9399 135.6 57.3749 135.6 67.7799C135.6 78.185 144.035 86.6199 154.44 86.6199Z"
                  fill="#C9F28D"
                ></path>
                <path
                  opacity="0.2"
                  d="M118.689 3.11655L92.207 28.0459L140.887 79.7578L167.369 54.8285L118.689 3.11655Z"
                  fill="#C9F28D"
                ></path>
                <path
                  d="M108.74 37.68C119.145 37.68 127.58 29.245 127.58 18.84C127.58 8.43496 119.145 0 108.74 0C98.3349 0 89.8999 8.43496 89.8999 18.84C89.8999 29.245 98.3349 37.68 108.74 37.68Z"
                  fill="#C9F28D"
                ></path>
                <path
                  d="M154.44 86.45C164.845 86.45 173.28 78.0151 173.28 67.61C173.28 57.205 164.845 48.77 154.44 48.77C144.035 48.77 135.6 57.205 135.6 67.61C135.6 78.0151 144.035 86.45 154.44 86.45Z"
                  fill="#C9F28D"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1102_2814">
                  <rect width="173.28" height="139.91" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </span>
          <h2 className="max-w-xs pb-6 text-4xl font-light text-center sm:max-w-sm sm:pb-8 lg:pb-10 2xl:pb-12 sm:text-5xl md:text-6xl md:max-w-lg lg:text-8xl lg:max-w-3xl">
            Ready to start the project?
          </h2>
          <CTALinkV2 href="/contact-us" color="black" label="Connect with Dots" greyBorder={true} />
        </div>
      </Container>
    </section>
  );
}

export default ReadyToStart;
