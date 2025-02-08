import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/stex/stex';

const Editor = ({ code, setCode, compileLatex }) => {
    return (
        <div style={{ width: '50%', padding: '10px' }}>
            <h1>LaTeX Editor</h1>
            <CodeMirror
                value={code}
                options={{ mode: 'stex', theme: 'material', lineNumbers: true }}
                onBeforeChange={(editor, data, value) => setCode(value)}
            />
            <button onClick={compileLatex} style={{ marginTop: '10px' }}>
                Compile
            </button>
        </div>
    );
};

export default Editor;