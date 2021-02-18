// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	const axios = require('axios');
	const messageWindow = (str) => {
		vscode.window.showInformationMessage(str);
	}

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "dogge" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json


	let testMethod = vscode.commands.registerCommand('dogge.meme', () => {
		axios.get('https://official-joke-api.appspot.com/random_joke')
		.then((res) => {
			messageWindow(res.data.setup);
			setTimeout(function() {messageWindow(res.data.punchline)}, 1500);
		})
	});

	//re-inventing the wheel
	const methods = [testMethod];
	methods.forEach(method => {
		console.log(method);
		context.subscriptions.push(method);
	})
	//context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}