# 🎵 React Karaoke Text

<div align="center">

![React Karaoke Text Demo](https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5+-3178C6?style=for-the-badge&logo=typescript)
![Bundle Size](https://img.shields.io/badge/Bundle%20Size-7.6KB-success?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

**Apple Music 스타일의 부드러운 카라오케 텍스트 애니메이션을 위한 React 라이브러리**

*A React library for smooth karaoke text animations inspired by Apple Music*

[English](#english) | [한국어](#korean) | [Demo](https://react-karaoke-text.vercel.app) | [NPM](https://www.npmjs.com/package/react-karaoke-text)

</div>

---

## <a id="korean"></a>🇰🇷 한국어

### ✨ 특징

- 🎵 **Apple Music 스타일** - 애플 뮤직과 같은 부드러운 그라데이션 효과
- ⚡ **경량화** - 7.6KB (gzip: 3.3KB)의 작은 번들 사이즈
- 🎨 **완전 커스터마이징** - 색상, 폰트, 속도 등 모든 스타일 조정 가능
- 📱 **반응형** - 모든 디바이스에서 완벽하게 작동
- ♿ **접근성** - ARIA 속성과 키보드 네비게이션 지원
- 🌙 **다크모드** - 시스템 설정 자동 감지
- 🎯 **TypeScript** - 완전한 타입 안전성

### 🚀 빠른 시작

#### 설치

```bash
# npm
npm install react-karaoke-text

# yarn
yarn add react-karaoke-text

# pnpm
pnpm add react-karaoke-text

# bun
bun add react-karaoke-text
```

#### 기본 사용법

```tsx
import { KaraokeText } from 'react-karaoke-text'
import 'react-karaoke-text/style.css'

function App() {
  const [progress, setProgress] = useState(0)

  return (
    <KaraokeText
      text="안녕하세요, React Karaoke Text입니다"
      progress={progress}
      activeColor="#FF6B6B"
    />
  )
}
```

### 📚 API 레퍼런스

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | **필수** | 표시할 텍스트 |
| `progress` | `number` | **필수** | 애니메이션 진행률 (0-100) |
| `color` | `string` | `#666666` | 기본 텍스트 색상 |
| `activeColor` | `string` | `#007AFF` | 활성화된 텍스트 색상 |
| `fontSize` | `string \| number` | `24px` | 폰트 크기 |
| `fontWeight` | `string \| number` | `600` | 폰트 두께 |
| `duration` | `number` | `300` | 애니메이션 지속 시간 (ms) |
| `className` | `string` | - | 커스텀 CSS 클래스 |
| `style` | `CSSProperties` | - | 인라인 스타일 |

### 🎨 스타일링 예제

#### 커스텀 컬러
```tsx
<KaraokeText
  text="커스텀 컬러 스타일"
  progress={50}
  color="#999999"
  activeColor="#FF6B35"
  fontSize="28px"
/>
```

#### 네온 스타일
```tsx
<KaraokeText
  text="네온 스타일 효과"
  progress={75}
  color="rgba(255, 255, 255, 0.2)"
  activeColor="#00F5FF"
  fontWeight="600"
/>
```

#### 빠른 애니메이션
```tsx
<KaraokeText
  text="빠른 애니메이션"
  progress={progress}
  duration={100}
  activeColor="#34C759"
/>
```

### 🎵 실제 사용 예제 - 아이유 "네모의 꿈"

```tsx
import { useState, useEffect } from 'react'
import { KaraokeText } from 'react-karaoke-text'

const lyrics = [
  '네모난 침대에서',
  '일어나 눈을 떠보면',
  '네모난 창문으로',
  '보이는 똑같은 풍경'
]

function KaraokePlayer() {
  const [currentLine, setCurrentLine] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setCurrentLine(current => 
            current >= lyrics.length - 1 ? 0 : current + 1
          )
          return 0
        }
        return prev + 1.5
      })
    }, 50)

    return () => clearInterval(interval)
  }, [isPlaying])

  return (
    <div>
      <KaraokeText
        text={lyrics[currentLine]}
        progress={progress}
        fontSize="42px"
        fontWeight="700"
        color="rgba(255, 255, 255, 0.3)"
        activeColor="#FF6B6B"
      />
      
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? '일시정지' : '재생'}
      </button>
    </div>
  )
}
```

### 🛠️ 개발

```bash
# 저장소 클론
git clone https://github.com/username/react-karaoke-text.git

# 의존성 설치
bun install

# 개발 서버 실행
bun run dev

# 테스트 실행
bun run test

# 라이브러리 빌드
bun run build:lib
```

---

## <a id="english"></a>🇺🇸 English

### ✨ Features

- 🎵 **Apple Music Style** - Smooth gradient effects just like Apple Music
- ⚡ **Lightweight** - Only 7.6KB (gzip: 3.3KB) bundle size
- 🎨 **Fully Customizable** - Adjust colors, fonts, speed, and more
- 📱 **Responsive** - Works perfectly on all devices
- ♿ **Accessible** - ARIA attributes and keyboard navigation support
- 🌙 **Dark Mode** - Automatic system preference detection
- 🎯 **TypeScript** - Full type safety

### 🚀 Quick Start

#### Installation

```bash
# npm
npm install react-karaoke-text

# yarn
yarn add react-karaoke-text

# pnpm
pnpm add react-karaoke-text

# bun
bun add react-karaoke-text
```

#### Basic Usage

```tsx
import { KaraokeText } from 'react-karaoke-text'
import 'react-karaoke-text/style.css'

function App() {
  const [progress, setProgress] = useState(0)

  return (
    <KaraokeText
      text="Hello, React Karaoke Text!"
      progress={progress}
      activeColor="#FF6B6B"
    />
  )
}
```

### 📚 API Reference

#### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | `string` | **Required** | Text to display |
| `progress` | `number` | **Required** | Animation progress (0-100) |
| `color` | `string` | `#666666` | Base text color |
| `activeColor` | `string` | `#007AFF` | Active text color |
| `fontSize` | `string \| number` | `24px` | Font size |
| `fontWeight` | `string \| number` | `600` | Font weight |
| `duration` | `number` | `300` | Animation duration (ms) |
| `className` | `string` | - | Custom CSS class |
| `style` | `CSSProperties` | - | Inline styles |

### 🎨 Styling Examples

#### Custom Colors
```tsx
<KaraokeText
  text="Custom color style"
  progress={50}
  color="#999999"
  activeColor="#FF6B35"
  fontSize="28px"
/>
```

#### Neon Style
```tsx
<KaraokeText
  text="Neon style effect"
  progress={75}
  color="rgba(255, 255, 255, 0.2)"
  activeColor="#00F5FF"
  fontWeight="600"
/>
```

#### Fast Animation
```tsx
<KaraokeText
  text="Fast animation"
  progress={progress}
  duration={100}
  activeColor="#34C759"
/>
```

### 🎵 Real-world Example - IU's "Square Dream"

```tsx
import { useState, useEffect } from 'react'
import { KaraokeText } from 'react-karaoke-text'

const lyrics = [
  'From a square bed',
  'When I wake up and open my eyes',
  'Through the square window',
  'The same scenery I see'
]

function KaraokePlayer() {
  const [currentLine, setCurrentLine] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          setCurrentLine(current => 
            current >= lyrics.length - 1 ? 0 : current + 1
          )
          return 0
        }
        return prev + 1.5
      })
    }, 50)

    return () => clearInterval(interval)
  }, [isPlaying])

  return (
    <div>
      <KaraokeText
        text={lyrics[currentLine]}
        progress={progress}
        fontSize="42px"
        fontWeight="700"
        color="rgba(255, 255, 255, 0.3)"
        activeColor="#FF6B6B"
      />
      
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  )
}
```

### 🛠️ Development

```bash
# Clone repository
git clone https://github.com/username/react-karaoke-text.git

# Install dependencies
bun install

# Start development server
bun run dev

# Run tests
bun run test

# Build library
bun run build:lib
```

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Development Setup

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Inspired by Apple Music's beautiful karaoke text animations
- Built with modern React and TypeScript
- Uses Vite for fast development and building
- Tested with Vitest and Testing Library

---

<div align="center">

**Made with ❤️ for the React community**

[⭐ Star this repo](https://github.com/username/react-karaoke-text) | [🐛 Report Bug](https://github.com/username/react-karaoke-text/issues) | [💡 Request Feature](https://github.com/username/react-karaoke-text/issues)

</div>
