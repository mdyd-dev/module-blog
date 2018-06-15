const Generator = require('yeoman-generator');
const chalk = require('chalk');
const path = require('path');
const targetPath = path.join(process.cwd(), '../../../marketplace_builder');
const isEmpty = input => (input.length === 0 ? console.log(chalk.red('\nCant be empty')) : true);

module.exports = class extends Generator {
  prompting() {
    const prompts = [
      {
        type: 'input',
        name: 'blog_scope',
        message: 'Your blog path:',
        default: 'blog'
      },
      {
        type: "list",
        name: "blog_type",
        message: "Your blog type is:",
        choices: ["Instance Blog", "User Blog" ]
      },
      {
        when: function(props) { return (/Instance Blog/i).test(props.blog_type); },
        type: 'input',
        name: 'admin_profile_name',
        default: 'admin',
        message: 'Please provide name of instance profile type that is allowed to access admin part of the blog:'
      },
      {
        type: 'input',
        name: 'layout_name',
        message: 'Your blog layout name:',
        default: 'blog-layout'
      }
    ];

    return this.prompt(prompts).then(props => {
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(this.templatePath(".") + '/common', this.destinationPath('../../..'), this.props);

    this.fs.move(targetPath + '/views/layouts/blog.liquid',
      targetPath + '/views/layouts/' + this.props.layout_name + '.liquid')

    if (this.props.blog_scope != 'blog') {
      console.log("Moving to: ", targetPath + '/views/pages/' + this.props.blog_scope)
      this.fs.move(targetPath + '/views/pages/blog/**',
        targetPath + '/views/pages/' + this.props.blog_scope)
    }

    if (this.props.blog_type == 'User Blog') {
      this.fs.copyTpl(this.templatePath(".") + '/user_blog', this.destinationPath('../../..'), this.props);
    } else {
      this.fs.copyTpl(this.templatePath(".") + '/instance_blog', this.destinationPath('../../..'), this.props);
    }
  }

  install() {
    console.log(chalk.green('MPP :: Blog :: Installing'));
    // console.log(chalk.green("MPP :: Blog :: Installing NPM dependencies"));

    // process.chdir(`${process.cwd()}/${this.projectDir}`);
    // this.npmInstall();
  }

  end() {
    console.log(chalk.green('MPP :: BlogModule :: Module files generated'));
  }
};
