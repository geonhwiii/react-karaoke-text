import type React from 'react'
import { useEffect, useState } from 'react'
import { KaraokeText } from './components/KaraokeText'
import './App.css'

// 아이유 - 네모의 꿈 가사
const lyrics = [
  '네모난 침대에서',
  '일어나 눈을 떠보면',
  '네모난 창문으로',
  '보이는 똑같은 풍경',
  '네모난 문을 열고',
  '네모난 테이블에 앉아',
  '네모난 스마트폰 본 뒤',
  '',
  '네모난 책가방에',
  '네모난 책들을 넣고',
  '네모난 버스를 타고',
  '네모난 건물지나',
  '네모난 학교에 들어서면',
  '또 네모난 교실',
  '네모난 칠판과 책상들',
  '',
  '주윌 둘러보면',
  '모두 네모난 것들뿐인데',
  '우린 언제나 듣지',
  '잘난 어른의 멋진 이 말',
  '세상은 둥글게 살아야 해',
  '',
  '지구본을 보면',
  '우리 사는 지구는 둥근데',
  '부속품들은 왜 다',
  '온통 네모난 건지 몰라',
  '어쩌면 그건',
  '네모의 꿈일지 몰라',
]

function App() {
  const [currentLineIndex, setCurrentLineIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [speed, setSpeed] = useState(1.5)

  // 자동 재생 로직
  useEffect(() => {
    let interval: number

    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            // 다음 가사 라인으로 이동
            setCurrentLineIndex((prevIndex) => {
              const nextIndex = prevIndex + 1
              if (nextIndex >= lyrics.length) {
                setIsPlaying(false)
                return 0
              }
              return nextIndex
            })
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
    setCurrentLineIndex(0)
    setIsPlaying(false)
  }

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProgress(Number(e.target.value))
  }

  const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSpeed(Number(e.target.value))
  }

  const handleLineSelect = (index: number) => {
    setCurrentLineIndex(index)
    setProgress(0)
    setIsPlaying(false)
  }

  return (
    <div className="app">
      {/* 헤더 섹션 */}
      <div className="music-header">
        <div className="album-art">
          <div className="vinyl-record">
            <div className="vinyl-center"></div>
          </div>
        </div>
        <div className="song-info">
          <h1 className="song-title">네모의 꿈</h1>
          <h2 className="artist-name">아이유 (IU)</h2>
          <p className="album-name">Last Fantasy</p>
        </div>
      </div>

      {/* 메인 카라오케 섹션 */}
      <div className="karaoke-main">
        <div className="lyrics-container">
          {/* 현재 가사 라인 */}
          <div className="current-line">
            <KaraokeText
              text={lyrics[currentLineIndex] || '♪'}
              progress={progress}
              fontSize="42px"
              fontWeight="700"
              color="rgba(255, 255, 255, 0.3)"
              activeColor="#FF6B6B"
              duration={150}
            />
          </div>

          {/* 다음 가사 라인들 미리보기 */}
          <div className="upcoming-lines">
            {lyrics.slice(currentLineIndex + 1, currentLineIndex + 4).map((line, index) => (
              <div
                key={`upcoming-${currentLineIndex + index + 1}-${line}`}
                className="upcoming-line"
              >
                <span style={{ opacity: 0.6 - index * 0.2 }}>{line || '♪'}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 프로그레스 바 */}
        <div className="progress-section">
          <div className="progress-bar-container">
            <div
              className="progress-bar"
              style={{ width: `${(currentLineIndex / lyrics.length) * 100}%` }}
            ></div>
          </div>
          <div className="progress-info">
            <span>
              {currentLineIndex + 1} / {lyrics.length}
            </span>
          </div>
        </div>
      </div>

      {/* 컨트롤 패널 */}
      <div className="control-panel">
        <div className="playback-controls">
          <button
            type="button"
            onClick={handleReset}
            className="control-btn reset-btn"
            aria-label="초기화"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <title>초기화</title>
              <path d="M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z" />
            </svg>
          </button>

          <button
            type="button"
            onClick={handlePlay}
            className="control-btn play-btn"
            aria-label={isPlaying ? '일시정지' : '재생'}
          >
            {isPlaying ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <title>일시정지</title>
                <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <title>재생</title>
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>
        </div>

        <div className="line-progress">
          <label htmlFor="progress-slider">라인 진행률</label>
          <input
            id="progress-slider"
            type="range"
            min="0"
            max="100"
            step="0.1"
            value={progress}
            onChange={handleProgressChange}
            className="modern-slider"
          />
          <span>{progress.toFixed(0)}%</span>
        </div>

        <div className="speed-control">
          <label htmlFor="speed-slider">재생 속도</label>
          <input
            id="speed-slider"
            type="range"
            min="0.5"
            max="3"
            step="0.1"
            value={speed}
            onChange={handleSpeedChange}
            className="modern-slider"
          />
          <span>{speed.toFixed(1)}x</span>
        </div>
      </div>

      {/* 가사 목록 */}
      <div className="lyrics-list">
        <h3>전체 가사</h3>
        <div className="lyrics-grid">
          {lyrics.map((line, index) => (
            <button
              key={`lyric-${index}-${line}`}
              type="button"
              onClick={() => handleLineSelect(index)}
              className={`lyric-item ${index === currentLineIndex ? 'active' : ''} ${line === '' ? 'empty' : ''}`}
            >
              <span className="line-number">{index + 1}</span>
              <span className="line-text">{line || '♪'}</span>
            </button>
          ))}
        </div>
      </div>

      {/* 스타일 예시 섹션 */}
      <div className="style-showcase">
        <h3>다양한 스타일</h3>

        <div className="style-examples">
          <div className="style-example">
            <h4>클래식</h4>
            <KaraokeText
              text="네모난 침대에서 일어나 눈을 떠보면"
              progress={progress * 0.8}
              fontSize="28px"
              color="#666"
              activeColor="#007AFF"
            />
          </div>

          <div className="style-example">
            <h4>네온</h4>
            <KaraokeText
              text="주윌 둘러보면 모두 네모난 것들뿐인데"
              progress={progress * 0.6}
              fontSize="32px"
              color="rgba(255, 255, 255, 0.2)"
              activeColor="#00F5FF"
              fontWeight="600"
            />
          </div>

          <div className="style-example">
            <h4>웜톤</h4>
            <KaraokeText
              text="세상은 둥글게 살아야 해"
              progress={progress * 0.9}
              fontSize="36px"
              color="rgba(139, 69, 19, 0.3)"
              activeColor="#FF8C00"
              fontWeight="700"
            />
          </div>

          <div className="style-example">
            <h4>미니멀</h4>
            <KaraokeText
              text="어쩌면 그건 네모의 꿈일지 몰라"
              progress={progress}
              fontSize="24px"
              color="#E5E5E5"
              activeColor="#1DB954"
              duration={100}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
