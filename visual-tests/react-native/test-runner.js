#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 RoughJS React Native Visual Test Runner');
console.log('==========================================');

const projectDir = __dirname;
const packageJsonPath = path.join(projectDir, 'package.json');

// Check if dependencies are installed
if (!fs.existsSync(path.join(projectDir, 'node_modules'))) {
  console.log('📦 Installing dependencies...');
  try {
    execSync('npm install', { cwd: projectDir, stdio: 'inherit' });
    console.log('✅ Dependencies installed successfully');
  } catch (error) {
    console.error('❌ Failed to install dependencies:', error.message);
    process.exit(1);
  }
} else {
  console.log('✅ Dependencies already installed');
}

// Check if rough.rn.js exists (local copy)
const roughPath = path.join(projectDir, 'rough.rn.js');
const roughSourcePath = path.join(projectDir, '../../bundled/rough.rn.js');

if (!fs.existsSync(roughPath)) {
  if (fs.existsSync(roughSourcePath)) {
    console.log('📋 Copying rough.rn.js from bundled directory...');
    fs.copyFileSync(roughSourcePath, roughPath);
    console.log('✅ rough.rn.js copied successfully');
  } else {
    console.log('❌ rough.rn.js not found. Please build the project first.');
    console.log('Run: npm run build:rn from the root directory');
    process.exit(1);
  }
} else {
  console.log('✅ rough.rn.js found');
}

// Function to run tests on different platforms
function runTest(platform, port = 3000) {
  console.log(`\n🧪 Starting ${platform.toUpperCase()} tests...`);
  
  const commands = {
    web: `expo start --web --port ${port}`,
    ios: 'expo start --ios',
    android: 'expo start --android'
  };
  
  const command = commands[platform];
  if (!command) {
    console.error(`❌ Unknown platform: ${platform}`);
    return false;
  }
  
  try {
    console.log(`📱 Running: ${command}`);
    console.log(`🌐 For web tests, open: http://localhost:${port}`);
    console.log('📝 Visual verification required - check that all tests render correctly');
    console.log('⏹️  Press Ctrl+C to stop the test server\n');
    
    execSync(command, { cwd: projectDir, stdio: 'inherit' });
    return true;
  } catch (error) {
    if (error.signal === 'SIGINT') {
      console.log('\n⏹️  Test server stopped by user');
      return true;
    }
    console.error(`❌ Failed to run ${platform} tests:`, error.message);
    return false;
  }
}

// Parse command line arguments
const args = process.argv.slice(2);
const platform = args[0] || 'web';
const port = args[1] || 3000;

const validPlatforms = ['web', 'ios', 'android'];
if (!validPlatforms.includes(platform)) {
  console.log('Usage: node test-runner.js [platform] [port]');
  console.log('Platforms: web (default), ios, android');
  console.log('Port: only used for web platform (default: 3000)');
  console.log('\nExamples:');
  console.log('  node test-runner.js web 3001');
  console.log('  node test-runner.js ios');
  console.log('  node test-runner.js android');
  process.exit(1);
}

// Run the test
const success = runTest(platform, port);
process.exit(success ? 0 : 1);