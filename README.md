#Expo CI Example

[![Build Status](https://travis-ci.org/AlexCatch/expo-ci-example.svg?branch=production)](https://travis-ci.org/AlexCatch/expo-ci-example)

This is a basic example of how to use Expo with Travis.

It's a basic counter app that when you press a button it increments a counter on the screen.

When there is a push to production, it triggers a build on Travis that does the following:

- Installs Expo and logs into an account
- Lints the codebase
- Tests the codebase

In the near future it will also do the following:

- Publish the bundled js to Expo
- Build an ipa and apk
- Upload to ITunes connect and Play Store
- Alert Slack channel with status of the build

It would be possible to use Fastlane and Expo's channels feature to build specific versions of the app based on different branches (production/staging/dev etc.)

This would involve different Travis jobs that are triggered on different pushes to branches.