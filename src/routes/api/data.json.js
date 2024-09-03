import { readFileSync } from 'fs';
import { join } from 'path';

export async function GET() {
    const filePath = join(process.cwd(), 'public', 'data.json');
    const data = JSON.parse(readFileSync(filePath, 'utf8'));
    return {
        status: 200,
        body: data
    };
}