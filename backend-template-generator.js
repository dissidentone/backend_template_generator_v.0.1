const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const createDirectory = (dirPath) => {
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }
};

const createFile = (filePath, content = '') => {
    fs.writeFileSync(filePath, content, { flag: 'w' });
};

const setupProject = (projectName) => {
    console.log(`🚀 Creating backend template: ${projectName}\n`);

    const basePath = path.join(process.cwd(), projectName);
    createDirectory(basePath);

    // Main directories
    const directories = [
        'src', 'src/controllers', 'src/services', 'src/repositories', 'src/middleware', 
        'src/models', 'src/routes', 'src/config', 'src/tests', 'src/utils'
    ];

    directories.forEach(dir => createDirectory(path.join(basePath, dir)));

    // Creating main files with default content
    createFile(path.join(basePath, 'src/app.ts'), `
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());

export default app;`);

    createFile(path.join(basePath, 'src/server.ts'), `
import app from './app';
import dotenv from 'dotenv';

dotenv.config();
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(\`🚀 Server running on http://localhost:\${PORT}\`);
});`);

    createFile(path.join(basePath, 'src/routes/product.route.ts'), `
import express from 'express';
import productController from '../controllers/product.controller';

const router = express.Router();
router.get('/', productController.getProducts);

export default router;`);

    createFile(path.join(basePath, 'src/controllers/product.controller.ts'), `
import { Request, Response } from 'express';
import productService from '../services/product.service';

const getProducts = async (req: Request, res: Response) => {
    const products = await productService.getAllProducts();
    res.json(products);
};

export default { getProducts };`);

    createFile(path.join(basePath, 'src/services/product.service.ts'), `
import productRepository from '../repositories/product.repository';

const getAllProducts = async () => {
    return await productRepository.findAll();
};

export default { getAllProducts };`);

    createFile(path.join(basePath, 'src/repositories/product.repository.ts'), `
const findAll = async () => {
    return []; // Simulated empty database
};

export default { findAll };`);

    createFile(path.join(basePath, 'package.json'), `{
  "name": "${projectName}",
  "version": "1.0.0",
  "description": "Generated backend template",
  "main": "src/server.ts",
  "scripts": {
    "dev": "ts-node-dev --respawn --transpile-only src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js"
  },
  "dependencies": {
    "express": "^4.17.1",
    "cors": "^2.8.5",
    "helmet": "^4.4.1",
    "dotenv": "^10.0.0"
  },
  "devDependencies": {
    "typescript": "^4.5.4",
    "ts-node-dev": "^1.1.8",
    "jest": "^27.4.5"
  }
}`);

    createFile(path.join(basePath, '.gitignore'), 'node_modules/\ndist/\n.env\n');
    createFile(path.join(basePath, 'README.md'), `# ${projectName}\n\nGenerated backend project with Express and TypeScript.`);

    console.log(`✅ Backend template '${projectName}' created successfully!`);
    console.log('👉 Next steps:');
    console.log(`   cd ${projectName}`);
    console.log('   npm install');
    console.log('   npm run dev');
};

const projectName = process.argv[2];
if (!projectName) {
    console.error('❌ Please provide a project name.');
    process.exit(1);
}
setupProject(projectName);
