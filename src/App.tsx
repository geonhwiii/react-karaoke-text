import type React from 'react'
import { useEffect, useState } from 'react'
import { KaraokeText } from './components/KaraokeText'
import './App.css'

const sampleTexts = [
  '안녕하세요, React Karaoke Text입니다',
  'Apple Music 스타일의 노래 자막 효과',
  '왼쪽부터 오른쪽으로 자연스러운 그라데이션',
  'Beautiful gradient animation for lyrics',
]

function App() {
  const [progress, setProgress] = useState(0)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [speed, setSpeed] = useState(2)

  useEffect(() => {
    let interval: number

    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            // 다음 텍스트로 이동
            setCurrentTextIndex((prevIndex) =>
              prevIndex >= sampleTexts.length - 1 ? 0 : prevIndex + 1,
            )
            return 0
          }
          return prev + speed
        })
      }, 50)
    }

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [isPlaying, speed])

  const handlePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const handleReset = () => {
    setProgress(0)
    setIsPlaying(false)
  }

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(Number(e.target.value))
  }

  const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpeed(Number(e.target.value))
  }

  const handleTextChange = (index: number) => {
    setCurrentTextIndex(index)
    setProgress(0)
  }

  return (
    <div className="app">
      <div className="header">
        <h1>React Karaoke Text</h1>
        <p>Apple Music 스타일의 노래 자막 라이브러리</p>
      </div>

      <div className="demo-section">
        <div className="karaoke-container">
          <KaraokeText
            text={sampleTexts[currentTextIndex]}
            progress={progress}
            fontSize="32px"
            fontWeight="700"
            color="#666666"
            activeColor="#007AFF"
            duration={200}
          />
        </div>

        <div className="controls">
          <div className="control-group">
            <label htmlFor="progress">진행률: {progress.toFixed(1)}%</label>
            <input
              id="progress"
              type="range"
              min="0"
              max="100"
              step="0.1"
              value={progress}
              onChange={handleProgressChange}
              className="slider"
            />
          </div>

          <div className="control-group">
            <label htmlFor="speed">속도: {speed}x</label>
            <input
              id="speed"
              type="range"
              min="0.5"
              max="5"
              step="0.5"
              value={speed}
              onChange={handleSpeedChange}
              className="slider"
            />
          </div>

          <div className="button-group">
            <button type="button" onClick={handlePlay} className="btn primary">
              {isPlaying ? '일시정지' : '재생'}
            </button>
            <button type="button" onClick={handleReset} className="btn secondary">
              초기화
            </button>
          </div>
        </div>

        <div className="text-selector">
          <h3>텍스트 선택</h3>
          <div className="text-buttons">
            {sampleTexts.map((text, index) => (
              <button
                key={text}
                type="button"
                onClick={() => handleTextChange(index)}
                className={`btn text-btn ${index === currentTextIndex ? 'active' : ''}`}
              >
                {text.length > 30 ? `${text.substring(0, 30)}...` : text}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="examples">
        <h2>다양한 스타일 예시</h2>

        <div className="example">
          <h3>기본 스타일</h3>
          <KaraokeText text="기본 스타일의 카라오케 텍스트" progress={progress * 0.8} />
        </div>

        <div className="example">
          <h3>큰 폰트</h3>
          <KaraokeText
            text="큰 폰트 사이즈"
            progress={progress * 0.6}
            fontSize="48px"
            fontWeight="800"
          />
        </div>

        <div className="example">
          <h3>커스텀 컬러</h3>
          <KaraokeText
            text="커스텀 컬러 스타일"
            progress={progress * 0.9}
            color="#999999"
            activeColor="#FF6B35"
            fontSize="28px"
          />
        </div>

        <div className="example">
          <h3>빠른 애니메이션</h3>
          <KaraokeText
            text="빠른 애니메이션 효과"
            progress={progress}
            duration={100}
            activeColor="#34C759"
            fontSize="24px"
          />
        </div>
      </div>
    </div>
  )
}

export default App
