import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lumina Web3 - Marketing Agency | Discovery',
  description: 'Get your FREE marketing audit report. $150M+ funding raised, billions in generated token volume, 132+ clients.',
  openGraph: {
    title: 'Lumina Web3 - Marketing Agency | Discovery',
    description: 'Get your FREE marketing audit report. Viral growth hacking for Web3 projects.',
    type: 'website',
  },
}

export default function LIDiscoveryPage() {
  return (
    <iframe 
      src="https://interesting-report-487536.framer.app/discovery-li"
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
