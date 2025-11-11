import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const apps = [
  {
    name: 'personal-site',
    outDir: 'apps/personal-site/dist',
    mountPath: '.',
  },
  {
    name: 'showcase-project',
    outDir: 'apps/showcase-project/dist',
    mountPath: 'projects/showcase-project',
  },
];

const rootDist = path.resolve('dist');

const copyDirContents = (src, dest) => {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirContents(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
};

fs.rmSync(rootDist, { recursive: true, force: true });
fs.mkdirSync(rootDist, { recursive: true });

for (const app of apps) {
  console.log(`\n→ Building ${app.name}...`);
  execSync(`npm run build --workspace ${app.name}`, { stdio: 'inherit' });

  const source = path.resolve(app.outDir);
  if (!fs.existsSync(source)) {
    throw new Error(`Expected build output at ${source} but nothing was found.`);
  }

  const destination =
    app.mountPath === '.' ? rootDist : path.join(rootDist, app.mountPath);

  if (app.mountPath !== '.' && fs.existsSync(destination)) {
    fs.rmSync(destination, { recursive: true, force: true });
  }
  copyDirContents(source, destination);
  console.log(`   Copied ${app.name} into ${destination}`);
}

console.log(`\n✅ Combined builds available in ${rootDist}`);
