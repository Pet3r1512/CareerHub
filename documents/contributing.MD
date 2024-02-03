# How to start coding in this repo?

## Basic work flow

### Step 1: Take task

- Finding out how you will work for this task (files, sections, tools,...).
- Plaing for you task.

### Step 2: Create new branch

- Avoiding conflicts between contributors, each person need to create a new branch from MAIN BRANCH to complete your task.
- First, you need to get all the latest code from MAIN BRANCH by using this command:

```html
git checkout main git pull
```

- After this command has completly executed, you will create a new branch:

```html
git checkout -b "your-branch-name"
```

- The branch's name should be easy to understand, corresponding with your task and each words must be seprated by "-". For example, "update-ui-for-login-page"

### Step 3: Tracking your work

- When you coding on new branch, git will watch your work by tracking the differents between the origin code (from MAIN BRANCH) and your code (from THIS BRANCH).
- These changes will be listed at "SOURCE CONTROL" section on your left sidebar.

### Step 4: Commit your changes

- When you have done your task, it's time for you to write descriptions for all your changes in this project.
- You should type your descriptions in "Message Input" on "SOURCE CONTROL" tab that show the repo owner what you have done with these updates.
- In additional, you should write as detailed a description as possible of the changes so that the process of maintaining and fixing errors later will be easier.
- Each commit should be attached with at least 1 file. So, you need to press the "+" button on the file(s) that you want to attach with that commit.

### Step 5: Upload your code to Github

- After writing all the commits for all your changed files, open your terminal to check all your commits again:

```html
git log --oneline
```

- If your latest commit appears on top of this log, then you are free to upload your code to Github:

```html
git push --set-upstream origin your-branch-name
```

- For the first push of any branch, you need to run "--set-upstream origin" to create a remote branch in Github. Since second push, you just need to run:

```html
git push
```

### Step 6: Create a Pull Request (PR)

- When your code is complely pushed to Github, you need to go to this Repo's Github page to create a PR.
- On the repo page, there will be a yellow block that contains your branch's name. In the right side of this block, there is a "Compare and pull request" button. Press on that will automatic create a PR for your branch.
- In the next page, edit the PR's title if you want or you can let Github uses the default title. Then click "Create Pull Request".
- Waiting for all testing is complete and "APPROVED BY PROJECT OWNER", you can press "MERGE" button.
