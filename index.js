#!/usr/bin/env node

// Import necessary modules
import debounce from 'lodash.debounce'; // Import debounce function to limit how often a function can run
import chokidar from 'chokidar'; // Import chokidar for file watching
import program from 'caporal'; // Import caporal for CLI argument parsing
import fs from 'fs'; // Import fs for file system operations
import { spawn } from 'child_process'; // Import spawn to run child processes
import chalk from 'chalk'; // Import chalk for colored output

// Define the CLI tool using caporal, a framework for building CLI applications
program
    .version('1.0.0') // Set the version of the CLI tool
    .argument('[filename]', 'Name of a file to execute') // Define optional argument for the file name
    .action(async ({ filename }) => { // Define the action to take when the CLI command is executed
        const name = filename || 'index.js'; // Use the provided filename or default to 'index.js'

        try {
            await fs.promises.access(name); // Check if the file exists and is accessible
        } catch (err) {
            throw new Error(`Could not find the file ${name}`); // If the file is not accessible, throw an error
        }

        let proc; // Variable to hold the child process
        const start = debounce(() => { // Define a debounced function to start the child process
            if (proc) {
                proc.kill(); // If there's an existing process, kill it before starting a new one
            }
            console.log(chalk.bold.blue('>>>> Starting process...')); // Log the process start with colored output
            proc = spawn('node', [name], { stdio: 'inherit' }); // Spawn a new child process to run the file
        }, 100); // Debounce the start function to prevent it from running too often

        // Use chokidar to watch for file changes in the current directory
        chokidar.watch('.').on('add', start).on('change', start).on('unlink', start);
    });

// Parse the command line arguments and execute the CLI program
program.parse(process.argv);