exports.description = 'Create a spumko repo';

exports.template = function(grunt, init, done) {

    init.process({}, [
        init.prompt('name', 'spumko-repo'),
        init.prompt('description', 'description')
    ], function(err, props) {

        var files = init.filesToCopy(props);
        init.copyAndProcess(files, props);

        init.writePackageJSON('package.json', {
            name: props.name,
            decription: props.description,
            version: '0.0.1',
            repository: 'git://github.com/spumko/' + props.name,
            keywords: ['spumko'],
            main: 'index',
            node_version: '0.10.x',
            peerDependencies: {
            },
            dependencies: {
            },
            devDependencies: {
                'lab': '0.1.x'
            },
            npm_test: 'make test-cov',
            licenses: [{
                'type': 'BSD',
                'url': 'http://github.com/spumko/' + props.name + '/raw/master/LICENSE'
            }]
        });

        done();
    });
};
