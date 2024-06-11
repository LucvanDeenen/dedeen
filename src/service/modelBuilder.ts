import { showSaveFilePicker, showOpenFilePicker } from 'file-system-access';

import { DraggableInstance } from '@/models/item';
import { LineInstance } from '@/models/line';
import { FileExport } from '@/models/export';

export async function exportToJson(positions: DraggableInstance, lines: LineInstance) {
    const jsonExport: FileExport = {
        positions: positions,
        lines: lines,
    }

    try {
        const fileHandle = await showSaveFilePicker({
            types: [{
                description: 'JSON Files',
                accept: {
                    'application/json': ['.json'],
                },
            },],
        });

        const writable = await fileHandle.createWritable();
        const jsonString = JSON.stringify(jsonExport, null, 2);

        await writable.write(jsonString);
        await writable.close();
    }
    catch (error) {
        if (error instanceof DOMException && error.message === "The user aborted a request.") return;

        const blob = new Blob([JSON.stringify(jsonExport)], { type: 'application/json' });
        const a = document.createElement('a');

        a.href = URL.createObjectURL(blob);
        a.download = 'positional.json';
        a.click();
        URL.revokeObjectURL(a.href);
    }
}

export async function importJson(): Promise<FileExport> {
    try {
        const [fileHandle] = await showOpenFilePicker({
            types: [
                {
                    description: 'JSON Files',
                    accept: {
                        'application/json': ['.json'],
                    },
                },
            ],
        });

        const file = await fileHandle.getFile();
        const data = await file.text();
        return JSON.parse(data) as Promise<FileExport>;
    } catch (error) {
        if (error instanceof DOMException && error.message === "The user aborted a request.") throw error; 
        else throw error;
    }
}