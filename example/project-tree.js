export const PROJECT_TREE = [
  {
    text: '.vscode',
    state: {
      opened: true,
      selected: true
    },
    children: [
      { text: 'settings.json', icon: 'jstree-file' }
    ]
  },
  {
    text: 'example',
    state: {
      opened: true,
    },
    children: [
      { text: 'app.js', icon: 'jstree-file' },
      { text: 'index.html', icon: 'jstree-file' }
    ]
  },
  {
    text: 'lib',
    state: {
      opened: true,
    },
    children: [
      { text: 'react-tree.js', icon: 'jstree-file' }
    ]
  },
  {
    text: 'node_modules',
    children: []
  },
  { text: '.babelrc', icon: 'jstree-file' },
  { text: '.gitignore', icon: 'jstree-file' },
  { text: 'jsconfig.json', icon: 'jstree-file' },
  { text: 'LICENSE', icon: 'jstree-file' },
  { text: 'package.json', icon: 'jstree-file' },
  { text: 'webpack.config.js', icon: 'jstree-file' }
];
