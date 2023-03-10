module.exports = function (plop) {
    // controller generator
    plop.setGenerator('component', {
        description: 'application component',
        prompts: [{
            type: 'input',
            name: 'name',
            message: 'component name please'
        }],
        actions: [
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/index.tsx',
                templateFile: 'templates/index.tsx.hbs'
            },
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/index.test.tsx',
                templateFile: 'templates/index.test.tsx.hbs'
            },
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/{{name}}.stories.tsx',
                templateFile: 'templates/stories.tsx.hbs'
            },
            {
                type: 'add',
                path: '../src/components/{{pascalCase name}}/styles.ts',
                templateFile: 'templates/styles.ts.hbs'
            }
        ]
    });
};