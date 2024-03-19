
javascript.javascriptGenerator.forBlock['create_entity'] = function(block) {
  var entity = block.getFieldValue('entity');
  var code = entity;
  return [code, Blockly.JavaScript.ORDER_ATOMIC];
};

var apiCount = 0;
javascript.javascriptGenerator.forBlock['create_api'] = function(block) {
  var entityBlock = Blockly.JavaScript.valueToCode(block, 'entity', Blockly.JavaScript.ORDER_NONE);

  if (!entityBlock) return '';
  var code = `create a rest a API for ${entityBlock} and related CRUD operation, including controller, repository, controller unit test with all operation,`;
  return code;
};

var topicCount = 0;
javascript.javascriptGenerator.forBlock['create_topic'] = function(block) {
  var entityBlock = Blockly.JavaScript.valueToCode(block, 'entity', Blockly.JavaScript.ORDER_NONE);

  if (!entityBlock) return '';
  var code = `create a message/event handler for ${entityBlock} and related producer/consumer, `;
  return code;
};

/*
javascript.javascriptGenerator.forBlock['components'] = function(block) {
  var code = Blockly.JavaScript.valueToCode(block);
  return code;
};
*/

javascript.javascriptGenerator.forBlock['create_app'] = function(block) {
  var compsBlock = Blockly.JavaScript.statementToCode(block, 'components', Blockly.JavaScript.ORDER_NONE);

  if (!compsBlock) return 'Generate a Spring Boot Hello World application ';
  
  var code = `Generate a Spring Boot application with project structure that ${compsBlock}. Application should include  main class, pom.xml , build.gradle and application.properties.`;

  return code;
};