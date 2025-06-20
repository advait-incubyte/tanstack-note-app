import ReactMarkdown from "react-markdown";
import './styles.css'

interface MarkdownViewerProps {
    markdown: string,
    className?: string,
}

const MarkdownViewer: React.FC<MarkdownViewerProps> = ({ markdown, className }) => {
    return (
        <div className={className}>
            <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
    )
}

export default MarkdownViewer;