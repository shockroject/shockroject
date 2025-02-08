import React, { useState } from 'react';
import Editor from './Editor';
import Preview from './Preview';

function App() {
    const [code, setCode] = useState('');
    const [pdf, setPdf] = useState(null);

    const compileLatex = async () => {
        const response = await fetch('http://localhost:5002/compile', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code }),
        });
        const blob = await response.blob();
        console.log("PDF Blob URL:", pdfUrl); // Tambahkan ini
        setPdf(URL.createObjectURL(blob));
    };

    return (
        <div style={{ display: 'flex' }}>
            <Editor code={code} setCode={setCode} compileLatex={compileLatex} />
            <Preview pdf={pdf} />
        </div>
    );
}

export default App;