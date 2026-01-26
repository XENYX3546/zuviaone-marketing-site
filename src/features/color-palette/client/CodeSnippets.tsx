'use client';

import { useState } from 'react';
import { Container, Section, Card } from '@/components/ui';
import { Icon } from '@/components/ui';
import { cn } from '@/lib/utils';
import { hexToRgb, hexToHsl } from '@/lib/color-palette';

type CodeSnippetsProps = {
  colors: string[];
};

type SnippetType = 'css' | 'scss' | 'tailwind' | 'json';

function generateSnippet(colors: string[], type: SnippetType): string {
  switch (type) {
    case 'css':
      return `:root {
${colors.map((c, i) => `  --color-${i + 1}: ${c};`).join('\n')}

  /* RGB variants */
${colors.map((c, i) => {
  const rgb = hexToRgb(c);
  return `  --color-${i + 1}-rgb: ${rgb.r}, ${rgb.g}, ${rgb.b};`;
}).join('\n')}
}

/* Usage examples */
.primary-bg { background-color: var(--color-1); }
.accent-text { color: var(--color-2); }
.overlay { background: rgba(var(--color-1-rgb), 0.5); }`;

    case 'scss':
      return `// Color palette variables
${colors.map((c, i) => `$color-${i + 1}: ${c};`).join('\n')}

// Color map for iteration
$palette: (
${colors.map((c, i) => `  "color-${i + 1}": ${c},`).join('\n')}
);

// Usage with map
@each $name, $color in $palette {
  .bg-#{$name} { background-color: $color; }
  .text-#{$name} { color: $color; }
}`;

    case 'tailwind':
      return `// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        palette: {
${colors.map((c, i) => `          ${i + 1}: '${c}',`).join('\n')}
        },
      },
    },
  },
}

// Usage in HTML
// <div class="bg-palette-1 text-palette-2">
// <button class="bg-palette-3 hover:bg-palette-4">`;

    case 'json':
      return JSON.stringify(
        {
          colors: colors.map((hex) => ({
            hex,
            rgb: hexToRgb(hex),
            hsl: hexToHsl(hex),
          })),
        },
        null,
        2
      );

    default:
      return '';
  }
}

export function CodeSnippets({ colors }: CodeSnippetsProps) {
  const [activeTab, setActiveTab] = useState<SnippetType>('css');
  const [copied, setCopied] = useState(false);

  const tabs: { id: SnippetType; label: string }[] = [
    { id: 'css', label: 'CSS' },
    { id: 'scss', label: 'SCSS' },
    { id: 'tailwind', label: 'Tailwind' },
    { id: 'json', label: 'JSON' },
  ];

  const snippet = generateSnippet(colors, activeTab);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section className="bg-neutral-50">
      <Container>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-neutral-900 mb-2">
            Code Snippets
          </h2>
          <p className="text-neutral-600 mb-6">
            Ready-to-use code for your project. Click to copy.
          </p>

          <Card className="overflow-hidden p-0">
            {/* Tabs */}
            <div className="flex border-b border-neutral-200">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    'px-4 py-3 text-sm font-medium transition-colors',
                    activeTab === tab.id
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50/50'
                      : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                  )}
                >
                  {tab.label}
                </button>
              ))}
              <div className="flex-1" />
              <button
                onClick={handleCopy}
                className={cn(
                  'px-4 py-3 text-sm font-medium transition-colors flex items-center gap-2',
                  copied
                    ? 'text-green-600'
                    : 'text-neutral-600 hover:text-blue-600'
                )}
              >
                {copied ? (
                  <>
                    <Icon name="check" size={16} />
                    Copied!
                  </>
                ) : (
                  <>
                    <Icon name="clipboard" size={16} />
                    Copy
                  </>
                )}
              </button>
            </div>

            {/* Code */}
            <div className="p-4 bg-neutral-900 overflow-x-auto">
              <pre className="text-sm text-neutral-100 font-mono whitespace-pre">
                {snippet}
              </pre>
            </div>
          </Card>

          {/* Color Preview Strip */}
          <div className="mt-4 flex rounded-lg overflow-hidden h-8">
            {colors.map((color, i) => (
              <div
                key={i}
                className="flex-1 flex items-center justify-center"
                style={{ backgroundColor: color }}
              >
                <span
                  className="text-[10px] font-mono opacity-80"
                  style={{
                    color:
                      parseInt(color.replace('#', ''), 16) > 0x7fffff
                        ? '#000'
                        : '#fff',
                  }}
                >
                  {i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
