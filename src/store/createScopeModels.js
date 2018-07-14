

export function createScopeModelName(modelName: string, scope: string): string {
  return `${scope}@${modelName}`;
}

export function extractModelName(scopeModelName: string, scope: string): string {
  const snippets = scopeModelName.split('@');
  return snippets[0] === scope ? snippets[1] : '';
}


function createScopeModels(models: {}, scope: string): {} {
  const scopeModels = {};
  Object.keys(models).forEach((modelName) => {
    const scopeModelName = createScopeModelName(modelName, scope);
    scopeModels[scopeModelName] = models[modelName];
  });

  return scopeModels;
}
export default createScopeModels;
