import Dither from './Dither.jsx'

const ditherOverlayStyle = {
  backgroundImage: 'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
  backgroundSize: '8px 8px'
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-white"
    >
      <div className="absolute inset-0 pointer-events-none">
        <Dither
          disableAnimation={false}
          enableMouseInteraction
          mouseRadius={0.25}
          colorNum={4}
          waveAmplitude={0.28}
          waveFrequency={3}
          waveSpeed={0.08}
          pixelSize={2.5}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80 pointer-events-none" />
      <div className="absolute inset-0 mix-blend-overlay opacity-25 pointer-events-none" style={ditherOverlayStyle} />
      <div className="relative z-10 text-center max-w-5xl px-6 py-24 space-y-12">
        <h1 className="text-4xl md:text-6xl text-extralight">
          Juan Pablo Kass
        </h1>
        <p className="mx-6 md:mx-0">
          Software developer specialized in front-end & UX/UI design.
        </p>
      </div>
    </section>
  )
}