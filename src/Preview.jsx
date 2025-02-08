import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Preview = ({ pdf }) => {
    return (
        <div style={{ width: '50%', padding: '10px' }}>
            <h1>PDF Preview</h1>
            {pdf && (
                <Document file={pdf}>
                    <Page pageNumber={1} />
                </Document>
            )}
        </div>
    );
};

export default Preview;