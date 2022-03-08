# Uberflip Engineer I Technical Challenge

## Introduction

This is a simple web application built to help developer candidates demonstrate practical skills with

* [React](https://reactjs.org/)
* [axios](https://www.npmjs.com/package/axios)
* [React Responsive Carousel](https://www.npmjs.com/package/react-responsive-carousel)
* [Gitpod](https://www.gitpod.io/)
* [RestAPI](https://apodapi.herokuapp.com/)

## Getting Started

In order to run this application and complete the specified tasks, please complete the following setup tasks:

### 1. Clone this repository

Clone this repository into your personal Github account.

### 2. Create an account on [Gitpod](https://www.gitpod.io/)

Using the Github account used in the previous step, create a free account on Gitpod.

### 3. Open the repository in a Gitpod workspace

To open the newly cloned repository into a Gitpod workspace, simply navigate to your repo's Github page, prefix the URL with `gitpod.io/#/`, and press Enter. You should be redirected to Gitpod and see some setup taking place.

For additional information on starting your first workspace, please see [this documentation](https://www.gitpod.io/docs/getting-started#start-your-first-workspace).

Example URL: `gitpod.io/#/https://github.com/{github_account_name}/interview-eng-i`

### 4. Install application dependencies

Once the setup from the previous step is complete, you should be redirected to an in-browser version of Visual Studio Code. Additionally, a termnial should have automatically opened and started to install the application's dependencies.

Once the application's dependencies are installed, the start script will execute and open your application in a browser preview tab in Visual Studio Code.

You're now ready to begin your tasks!

## How to Share Workspaces

Sharing running workspaces makes it possible to quickly look at a workspace together with a (remote) colleague [Gitpod Sharing Workspace](https://www.gitpod.io/docs/sharing-and-collaboration#sharing-running-workspaces).
To share your workspace navigate to the workspaces page:

1. Move your mouse over the workspace you want to share (change the filter to All if you don’t see your workspace).
2. Click the three dots menu to the right of the highlighted workspace.
3. Click Share

This marks your workspace as shared. When you open it, you can copy & share its URL.

## Tasks

### 1. Fetch and render images in the `ImageCarousel` component

Using the supplied API endpoint listed in the resources section below, fetch and display the results in the 'ImageCarousel' component. This component and its images should be visible on the homepage.

Note: The project comes configured with [axios](https://www.npmjs.com/package/axios) as a helpful HTTP client, as well as [React Responsive Carousel](https://www.npmjs.com/package/react-responsive-carousel) to handle the core carousel functionality.

### 2. Add Heading bar

Make the heading bar look similar to the mockup.  There is a banner image in the `assets` folder.

### 3. Extend `Carousel` props

Add props to the `ImageCarousel` component that control the `showThumbs` and `showIndicators` props on the `Carousel` child component.  Make sure the thumbnails are not visible, but the indicators are visible.

### 4. Response data

Add the name and latin name of the image to the carousel.

### 5. Arrow keys functionality

Make the toggle work, the right arrow shoud go to the next image while its updates the number indicating which slide show the user is currently viewing and the left arrow should do the opposite of the right arrow

### 6. Add a loading indicator

While waiting for the results from the image API to be returned and rendered, display a loading indicator. A spinner image can be found under the `public` directory. The spinner should be displayed at 100% of its size in the middle of the page.

### 7. Style the `ImageCarousel` component

Using the included mockup, position and size the `ImageCarousel` component on the page, with considerations for how responsive it is on smaller screen sizes.

## Resources

* API Endpoint: `https://zoo-animal-api.herokuapp.com/animals/rand/5`

![Mockup](https://raw.githubusercontent.com/uberflip/interview-eng-i/main/mockup.png)
