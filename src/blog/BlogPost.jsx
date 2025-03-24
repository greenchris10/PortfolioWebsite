import ReactMarkdown from 'react-markdown'
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';


const BlogPost = () => {
    const location = useLocation();
    const receivedData = location.state;

    const [markdownContent, setMarkdownContent] = useState('');

          useEffect(() => {
            fetch(receivedData.path)
              .then((response) => response.text())
              .then((text) => setMarkdownContent(text));
          }, []);

    return (
        <div className='blogpost'>
            <h1>{receivedData.title}</h1>
            <h3>{receivedData.date}</h3>
            <div className='markdown-text'>
                <ReactMarkdown>{markdownContent}</ReactMarkdown>
            </div>

        </div>
    )
}
export default BlogPost;