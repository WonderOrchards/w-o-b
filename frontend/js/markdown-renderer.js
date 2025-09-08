// Markdown rendering functionality
export function markdownToHtml(text) {
  return text
    // Headers
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^#### (.*$)/gim, '<h4>$1</h4>')
    .replace(/^##### (.*$)/gim, '<h5>$1</h5>')
    .replace(/^###### (.*$)/gim, '<h6>$1</h6>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/__(.*?)__/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/_(.*?)_/g, '<em>$1</em>')
    // Strikethrough
    .replace(/~~(.*?)~~/g, '<del>$1</del>')
    // Links
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
    // Images
    .replace(/!\[(.*?)\]\((.*?)\)/g, '<img alt="$1" src="$2" />')
    // Blockquotes
    .replace(/^>\s(.*$)/gim, '<blockquote>$1</blockquote>')
    // Horizontal rule
    .replace(/^\-\-\-\-*$/gim, '<hr />')
    // Unordered lists
    .replace(/^\s*[\-\*\+]\s(.*$)/gim, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
    // Ordered lists
    .replace(/^\s*\d+\.\s(.*$)/gim, '<li>$1</li>')
    .replace(/(<li>.*<\/li>)/gs, function(match) {
      return /<li>.*<\/li>/.test(match) ? '<ol>' + match + '</ol>' : match;
    })
    // Paragraphs
    .replace(/^\s*(\n)?(.+)/gim, function(m){
      return /\<(\/)?(h\d|ul|ol|li|blockquote|pre|img|hr)/.test(m) ? m : '<p>'+m+'</p>';
    })
    // Code blocks
    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre><code class="$1">$2</code></pre>')
    // Inline code
    .replace(/`(.*?)`/g, '<code>$1</code>')
    // Tables (basic support)
    .replace(/^\|(.+)\|$/gm, function(match, row) {
      if (match.startsWith('|--')) return ''; // Skip separator rows for now
      const cells = row.split('|').map(cell => `<td>${cell.trim()}</td>`).join('');
      return `<tr>${cells}</tr>';
    })
    .replace(/(<tr>.*<\/tr>)/gs, function(match) {
      return /<tr>.*<\/tr>/.test(match) ? '<table>' + match + '</table>' : match;
    });
}

export function renderFile(content, filePath, fileContentElement) {
  const html = markdownToHtml(content);
  fileContentElement.innerHTML = html;
  
  // Update browser history
  history.pushState({ path: filePath }, '', `#${filePath}`);
}