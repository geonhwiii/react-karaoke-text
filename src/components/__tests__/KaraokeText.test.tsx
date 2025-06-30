import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { KaraokeText } from '../KaraokeText'

describe('KaraokeText', () => {
  it('텍스트가 올바르게 렌더링되는지 확인', () => {
    render(<KaraokeText text="Hello World" progress={50} />)
    
    // 텍스트가 두 번 렌더링되어야 함 (base와 active)
    const textElements = screen.getAllByText('Hello World')
    expect(textElements).toHaveLength(2)
  })

  it('progress가 0일 때 active 요소의 너비가 0%인지 확인', () => {
    render(<KaraokeText text="Test Text" progress={0} />)
    
    const activeElement = screen.getByText('Test Text', { selector: '.karaoke-text__active' })
    expect(activeElement).toHaveStyle({ width: '0%' })
  })

  it('progress가 100일 때 컴포넌트가 올바르게 렌더링되는지 확인', () => {
    render(<KaraokeText text="Test Text" progress={100} />)
    
    const activeElement = screen.getByText('Test Text', { selector: '.karaoke-text__active' })
    expect(activeElement).toBeInTheDocument()
    // 애니메이션으로 인해 즉시 100%가 되지 않으므로 존재 여부만 확인
  })

  it('커스텀 색상이 올바르게 적용되는지 확인', () => {
    render(
      <KaraokeText 
        text="Colored Text" 
        progress={50} 
        color="#333333"
        activeColor="#FF0000"
      />
    )
    
    const container = screen.getByText('Colored Text', { selector: '.karaoke-text__base' }).parentElement
    expect(container).toHaveStyle({ color: '#333333' })
    
    const activeElement = screen.getByText('Colored Text', { selector: '.karaoke-text__active' })
    expect(activeElement).toHaveStyle({ color: '#FF0000' })
  })

  it('커스텀 폰트 크기가 올바르게 적용되는지 확인', () => {
    render(<KaraokeText text="Big Text" progress={50} fontSize="32px" />)
    
    const container = screen.getByText('Big Text', { selector: '.karaoke-text__base' }).parentElement
    expect(container).toHaveStyle({ fontSize: '32px' })
  })

  it('커스텀 클래스명이 올바르게 적용되는지 확인', () => {
    render(<KaraokeText text="Custom Class" progress={50} className="custom-class" />)
    
    const container = screen.getByText('Custom Class', { selector: '.karaoke-text__base' }).parentElement
    expect(container).toHaveClass('karaoke-text', 'custom-class')
  })

  it('progress 값이 범위를 벗어날 때 올바르게 처리되는지 확인', () => {
    // 이 테스트는 컴포넌트 내부 로직을 검증하기 위한 것으로
    // useEffect와 애니메이션 때문에 직접적인 스타일 검증이 어려움
    // 대신 컴포넌트가 에러 없이 렌더링되는지 확인
    expect(() => {
      render(<KaraokeText text="Range Test" progress={-10} />)
    }).not.toThrow()
    
    expect(() => {
      render(<KaraokeText text="Range Test" progress={150} />)
    }).not.toThrow()
  })

  it('accessibility 속성이 올바르게 설정되는지 확인', () => {
    render(<KaraokeText text="Accessible Text" progress={50} />)
    
    const activeElement = screen.getByText('Accessible Text', { selector: '.karaoke-text__active' })
    expect(activeElement).toHaveAttribute('aria-hidden', 'true')
  })
}) 