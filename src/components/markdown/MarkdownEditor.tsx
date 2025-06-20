import { 
    MDXEditor, 
    headingsPlugin, 
    listsPlugin, 
    quotePlugin, 
    markdownShortcutPlugin,
} from "@mdxeditor/editor";
import '@mdxeditor/editor/style.css'
import './styles.css'

interface MarkdownEditorProps {
    markdown: string,
    className?: string,
    placeholder?: string,
    onChange: (markdown: string) => void
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({ markdown, className, placeholder, onChange }) => {
    return (
        <MDXEditor
            className={className}
            markdown={markdown}
            contentEditableClassName="prose"
            placeholder={placeholder}
            plugins={[headingsPlugin(), listsPlugin(), quotePlugin(), markdownShortcutPlugin()]}
            onChange={onChange}
        />
    )
}

export default MarkdownEditor;