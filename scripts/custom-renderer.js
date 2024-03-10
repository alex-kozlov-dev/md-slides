const { marked } = RevealMarkdown();

// Prevents wrapping images in a paragraph tag
class CustomRenderer extends marked.Renderer {
    paragraph(text) {
        if (text.startsWith('<img')) {
            return text;
        }

        return super.paragraph(text);
    }
}

options.markdown = {
    ...options.markdown,
    renderer: new CustomRenderer(),
};
