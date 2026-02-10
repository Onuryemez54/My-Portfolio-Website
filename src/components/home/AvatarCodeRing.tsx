import Image from 'next/image';
import { FadeScale } from '../common/animations/FadeScale';

export const AvatarCodeRing = () => {
  return (
    <FadeScale className="md:col-span-2 lg:col-span-3">
      <div className="flex justify-center md:justify-start">
        <div className="hero-wrapper relative aspect-square w-40 sm:w-48 md:w-56 lg:w-72">
          <div className="border-border/50 shadow-accent-border/30 relative z-10 h-full w-full overflow-hidden rounded-full border shadow-lg">
            <Image
              src="/avatar/hero.webp"
              alt="Onur portrait"
              fill
              priority
              loading="eager"
              sizes="
                  (max-width: 639px) 160px,
                  (max-width: 767px) 192px,
                  (max-width: 1023px) 224px,
                  288px
                "
              className="object-cover object-center"
            />
          </div>

          <div className="hero-ring-wrapper pointer-events-none absolute -inset-5 overflow-hidden sm:-inset-6 md:-inset-7 lg:-inset-8">
            <svg
              viewBox="0 0 200 200"
              className="hero-ring"
              aria-hidden
              preserveAspectRatio="xMidYMid meet"
            >
              <defs>
                <path
                  id="heroCircle"
                  d="
              M 100,100
              m -90,0
              a 90,90 0 1,1 180,0
              a 90,90 0 1,1 -180,0
            "
                />
              </defs>

              <text className="text-[8px] tracking-[2px] sm:text-[10px] sm:tracking-[2.5px] md:text-[12px] md:tracking-[3px]">
                <textPath href="#heroCircle">
                  {`{ } < /> ( ) => || && ?? ! { } < /> ( ) => || && ?? [] ! { } < /> ( ) => || && ?? [] !`}
                </textPath>
              </text>
            </svg>
          </div>
        </div>
      </div>
    </FadeScale>
  );
};
