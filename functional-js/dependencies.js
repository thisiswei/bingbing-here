var loremIpsum = {
  "name": "lorem-ipsum",
  "version": "0.1.1",
  "dependencies": {
    "optimist": {
      "version": "0.3.7",
      "dependencies": {
        "wordwrap": {
          "version": "0.0.2"
        }
      }
    },
    "inflection": {
      "version": "1.2.6"
    }
  }
};


function getDependencies(tree) {
  return _doGetDependencies(tree.dependencies, []);
}


function _doGetDependencies(dependencies, accumulated) {
  if (dependencies === undefined) {
    return accumulated;
  }
  var keys = Object.keys(dependencies);
  if (keys.length === 0) {
    return accumulated;
  }

  var currentLevelDependencies = keys.map(k => k + '@' + dependencies[k].version);
  var children = keys.reduce(function(acc, k) {
    var value = dependencies[k].dependencies || {};
    return Object.assign(acc, value);
  }, {});

  return _doGetDependencies(children, accumulated.concat(currentLevelDependencies).sort());
}


function getDependencies(mod, result) {
  result = result || []
  var dependencies = mod && mod.dependencies || []
  Object.keys(dependencies).forEach(function(dep) {
    var key = dep + '@' + mod.dependencies[dep].version
    if (result.indexOf(key) === -1) result.push(key)
    getDependencies(mod.dependencies[dep], result)
  })
  return result.sort()
}
