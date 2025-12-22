import hljs from 'highlight.js';

export type CodeBlockProps = {
  content: string;
  language?: string;
};

export function DiscordHighlightedCode(props: CodeBlockProps) {
  const highlighted = props.language
    ? hljs.highlight(props.content, { language: props.language })
    : hljs.highlightAuto(props.content);

  return <discord-code multiline dangerouslySetInnerHTML={{ __html: highlighted.value }} />;
}

// TODO: add cdn for styles
