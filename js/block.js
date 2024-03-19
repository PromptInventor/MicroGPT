
Blockly.Blocks['create_entity'] = {
	init: function() {
	this.appendDummyInput()
		.appendField("Create Entity : ")
        .appendField(new Blockly.FieldTextInput('User'), 'entity');
	this.setOutput("entity");
    this.setColour(240);
    this.setTooltip("Create a Entity");
  }
};

Blockly.Blocks['create_api'] = {
	init: function() {
	this.appendDummyInput()
		.appendField("Create API for ");
	this.appendValueInput("entity")
        .appendField("entity");
	this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setColour(240);
    this.setTooltip("Create an API");
  }
};


Blockly.Blocks['create_topic'] = {
	init: function() {
	this.appendDummyInput()
		.appendField("Create Topic for ");
	this.appendValueInput("entity")
        .appendField("entity");
	this.setPreviousStatement(true);
	this.setNextStatement(true);
	//this.setOutput("topic");
    this.setColour(240);
    this.setTooltip("Create an Topic");
  }
};


Blockly.Blocks['create_app'] = {
	init: function() {
	this.appendDummyInput()
		.appendField("Create Application ");
    this.appendStatementInput("components")
		.appendField("with components");
	//this.setNext
    this.setColour(240);
    this.setTooltip("Create an Application");
  }
};
