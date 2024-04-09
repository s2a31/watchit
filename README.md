# WatchIt

A dynamic Node.js tool designed to enhance your development workflow by automatically restarting your application upon detecting file changes. "WatchIt" monitors your project's files and executes the specified script whenever a modification occurs, ensuring you're always running the most up-to-date version of your code.

## Getting Started

These instructions will guide you through the setup process, enabling "WatchIt" to start enhancing your development experience in no time.

### Prerequisites

Ensure you have Node.js installed on your system to use "WatchIt". You can check your current version with the following command:
```
node --version
```

### Installation

1. **Clone the Repository**

   Begin by cloning this repository to your local machine:
   ```
   git clone https://github.com/s2a31/watchit.git
   ```
   
2. **Install Dependencies**

   Navigate into the project directory and install the necessary dependencies with:
   ```
   npm install
   ```

3. **Make `index.js` Executable (Mac/Linux)**

   Before you can harness the power of "WatchIt", you'll need to adjust the file permissions to make `index.js` executable. Execute the following command:
   ```
   chmod +x index.js
   ```

4. **Link the Project Globally**

   To use "WatchIt" from any directory on your system, link the project globally using npm. This step might require administrative privileges:
   ```
   sudo npm link
   ```
   
   This creates a global symlink to your project, allowing you to invoke "WatchIt" by simply typing `watchit` in your terminal.

### Usage

After installation, you can start using "WatchIt" to monitor your Node.js applications. Simply run the following command in the root directory of your project:
```
watchit [filename]
```
Replace `[filename]` with the name of the file you want "WatchIt" to execute automatically upon changes. If no filename is specified, "WatchIt" defaults to running `index.js`.

### Enjoy Continuous Development

With "WatchIt" now set up and ready, enjoy a more streamlined and efficient development process. No more manual restarts; "WatchIt" keeps your application up-to-date with every save.