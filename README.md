## Before installation
Before starting to install the Blog Module, make sure you have: 

* a Platform OS Instance
* your codebase
* Node Package Manager
* the latest version of the [Marketplace Kit](https://github.com/mdyd-dev/marketplace-kit) installed on your computer  

## Installing the Blog Module

To install the Blog Module, go to the root directory of your codebase (e.g. `marketplace-example`) and enter the following command in the command-line application of your choice: 

`npm i  @platform-os/blog`

The installer starts and asks you the following:

* `? Your blog path:`: Enter the path where you would like to display your blog, for example `blog`. Don't enter the full URL. 
* `? Your blog type is:`: Select the type of your blog with the up and down arrow keys. The **Instance blog** is the main blog of the site, where the Instance owner can create and edit posts. **User blogs** allow any user to create a blog, and the owner of the blog can create and edit posts. 
* `? Please provide name of instance profile type that is allowed to access admin part of the blog:`: Every user has an `instance_profile_type` (user type, e.g. default or admin). Depending on what your site does (e.g. connects experts with lawyers) you can have additional instance profile types (e.g. expert and lawyer). Specify here which users will be able to access the admin interface of the blog by entering their instance profile type. Enter `default` to use the default instance profile type. 
* `? Your blog layout name:`: You can have a layout specific to your blog (e.g. widgets, columns, etc.), specify it here. To use the default blog layout provided by the Blog Module enter `blog-layout`. 

The installer runs and the Blog Module is installed. 

## Deploying your blog

Deploy your Instance with the `--force` flag, for example:

`marketplace-kit deploy staging --force`

## Enabling the blog

Go to [your-Instance-URL]/blog/admin/settings. Enter a title for your blog, and make sure the `Enable` button is turned on. Save your changes. 

You can now see your blog at [your-Instance-URL]/blog.
