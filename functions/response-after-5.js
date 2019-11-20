const sleep = function(ms = 5000) {
  return new Promise(resolve => setTimeout(resolve, ms));
};

exports.handler = async function(event, context) {
  await sleep();
  return { statusCode: 200, body: "hello react" };
};
