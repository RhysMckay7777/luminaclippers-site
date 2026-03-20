import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lumina Clippers — The Clipping Network for Brands',
  description: 'The fastest way to mass distribute your brand. Launch campaigns that flood social feeds with clips, built to maximize reach, retention, and results.',
  openGraph: {
    title: 'Lumina Clippers — The Clipping Network for Brands',
    description: 'Flood social feeds with hundreds of clips so your brand dominates the conversation.',
    type: 'website',
  },
}

export default function LIScalePage() {
  return (
    <iframe 
      src="https://caring-vision-569896.framer.app/scale"
      style={{
        width: '100%',
        height: '100vh',
        border: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  )
}
