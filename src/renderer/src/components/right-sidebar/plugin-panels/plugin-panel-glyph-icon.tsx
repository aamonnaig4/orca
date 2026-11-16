import type React from 'react'
import { cn } from '@/lib/class-names'

type GlyphIcon = React.ComponentType<{ size?: number; className?: string }>

const glyphIcons = new Map<string, GlyphIcon>()

/** An activity-bar icon that paints `currentColor` through the plugin image's alpha. */
export function pluginPanelGlyphIcon(url: string): GlyphIcon {
  const cached = glyphIcons.get(url)
  if (cached) {
    return cached
  }
  const mask = `url(${JSON.stringify(url)}) center / contain no-repeat`
  function PluginPanelGlyph({ size = 16, className }: { size?: number; className?: string }) {
    return (
      <span
        aria-hidden="true"
        className={cn('inline-block shrink-0 bg-current', className)}
        style={{ width: size, height: size, mask, WebkitMask: mask }}
      />
    )
  }
  glyphIcons.set(url, PluginPanelGlyph)
  return PluginPanelGlyph
}
