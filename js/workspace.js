
var WS_NAME = 'MicroGPTWS';
var workspace;

export function initWorkspace(config) {
	workspace = Blockly.inject('blocklyDiv', config);

	var INITIAL_STATE = localStorage.getItem(WS_NAME);

	loadWorkspace(INITIAL_STATE);

	if(!config || config.readOnly == true) {
		updateCode();
	} else {
		workspace.addChangeListener(updateCode);
	}
}

function loadWorkspace(state) {
	if(state) {
		try {
			Blockly.serialization.workspaces.load(JSON.parse(state), workspace);
		} catch(e) {
			console.log(e); // load failed ( possibly due to block structure change )
			delete localStorage[WS_NAME]; // cleaning up last saved state
		}
	}
}

const supportedEvents = new Set([ Blockly.Events.BLOCK_CHANGE, Blockly.Events.BLOCK_CREATE, Blockly.Events.BLOCK_DELETE, Blockly.Events.BLOCK_MOVE, ]);

var threeDiv = document.getElementById('threeDiv');
var codeDiv = document.getElementById('codeDiv');

function updateCode(event) {

	if (workspace.isDragging()) return;
	if (event && !supportedEvents.has(event.type)) return;

	var state = Blockly.serialization.workspaces.save(workspace);
	localStorage.setItem(WS_NAME, JSON.stringify(state));

	const code = javascript.javascriptGenerator.workspaceToCode(workspace);
	if(codeDiv) codeDiv.innerText = code;

}
