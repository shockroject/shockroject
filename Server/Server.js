import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/compile', (req, res) => {
    const latexCode = req.body.code;
    const fileName = `document_${Date.now()}.tex`;
    const filePath = path.join(__dirname, fileName);

    fs.writeFileSync(filePath, latexCode);

    exec(`pdflatex ${fileName}`, (error, stdout, stderr) => {
        if (error) {
            console.error(stderr);
            return res.status(500).json({ error: 'Kompilasi gagal' });
        }

        const pdfPath = filePath.replace('.tex', '.pdf');
        const pdfBuffer = fs.readFileSync(pdfPath);

        fs.unlinkSync(filePath);
        fs.unlinkSync(pdfPath);

        res.setHeader('Content-Type', 'application/pdf');
        res.send(pdfBuffer);
    });
});

const PORT = 5002;
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
});