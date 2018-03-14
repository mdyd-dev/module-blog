const Generator = require('yeoman-generator');
const chalk = require('chalk');
const path = require('path');

const isEmpty = input => (input.length === 0 ? console.log(chalk.red('\nCant be empty')) : true);

module.exports = class extends Generator {
  prompting() {
    const prompts = [
      {
        type: 'input',
        name: 'blog_scope',
        message: 'Your blog slug (ie. blog):',
        default: 'new-blog',
        validate: isEmpty
      }
    ];

    return this.prompt(prompts).then(props => (this.props = props));
  }

  writing() {
    this.fs.copyTpl(this.templatePath('.'), this.destinationPath('../../..'), this.props);
  }

  end() {
    console.log(chalk.green('MPP :: Blog :: Installing'));
    console.log(chalk.green('MPP :: BlogModule :: Module files generated'));
  }
};
