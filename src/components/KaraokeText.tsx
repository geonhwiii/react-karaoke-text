import type React from 'react'
import { useEffect, useRef, useState } from 'react'

export interface KaraokeTextProps {
  /** 표시할 텍스트 */
  text: string
  /** 애니메이션 진행률 (0-100) */
  progress: number
  /** 텍스트 색상 */
  color?: string
  /** 활성화된 텍스트 색상 */
  activeColor?: string
  /** 폰트 크기 */
  fontSize?: string | number
  /** 폰트 두께 */
  fontWeight?: string | number
  /** 애니메이션 지속 시간 (ms) */
  duration?: number
  /** 커스텀 클래스명 */
  className?: string
  /** 커스텀 스타일 */
  style?: React.CSSProperties
}

export const KaraokeText: React.FC<KaraokeTextProps> = ({
  text,
  progress,
  color = '#666666',
  activeColor = '#007AFF',
  fontSize = '24px',
  fontWeight = 600,
  duration = 300,
  className = '',
  style = {},
}) => {
  const textRef = useRef<HTMLDivElement>(null)
  const [currentProgress, setCurrentProgress] = useState(0)

  useEffect(() => {
    const startTime = Date.now()
    const startProgress = currentProgress
    const targetProgress = Math.max(0, Math.min(100, progress))
    const progressDiff = targetProgress - startProgress

    if (Math.abs(progressDiff) < 0.1) {
      setCurrentProgress(targetProgress)
      return
    }

    const animate = () => {
      const elapsed = Date.now() - startTime
      const ratio = Math.min(elapsed / duration, 1)

      // easeOutCubic 함수 적용
      const easedRatio = 1 - (1 - ratio) ** 3
      const newProgress = startProgress + progressDiff * easedRatio

      setCurrentProgress(newProgress)

      if (ratio < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [progress, duration, currentProgress])

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-block',
    fontSize: typeof fontSize === 'number' ? `${fontSize}px` : fontSize,
    fontWeight,
    color,
    overflow: 'hidden',
    ...style,
  }

  const activeStyle: React.CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: `${currentProgress}%`,
    height: '100%',
    color: activeColor,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    background: `linear-gradient(90deg, ${activeColor} 0%, ${activeColor} 85%, transparent 100%)`,
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    transition: 'none',
  }

  return (
    <div ref={textRef} className={`karaoke-text ${className}`} style={containerStyle}>
      <span className="karaoke-text__base">{text}</span>
      <span className="karaoke-text__active" style={activeStyle} aria-hidden="true">
        {text}
      </span>
    </div>
  )
}
