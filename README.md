# MergeArrayTest

## setup project
- create node.js project
```bash
npm init -y
```
- install package typescript jest
```bash
npm install --save-dev typescript ts-jest @types/jest jest
```
- create tsconfig.js
```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*.ts"],
  "exclude": ["node_modules"]
}
```
- create jest.config.js
```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json'],
  rootDir: 'src',
  testRegex: '.*\\.test\\.ts$'
};
```

## npm script
- update script in file package.json
```json
  "scripts": {
    "test": "jest",
    "build": "tsc"
  },
```

## build and run test
```bash
  npm run build
  npm test
```

## result
![image](https://github.com/user-attachments/assets/0d9b9813-3ae2-47c0-9cba-4b70a08d54ff)
