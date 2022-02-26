const { awscdk } = require('projen');
const project = new awscdk.AwsCdkTypeScriptApp({

  author: 'Catenary.Cloud',
  authorAddress: 'hi@catenary.cloud',
  defaultReleaseBranch: 'main',
  description: 'CDK app to show Cloudformation parameters parsing',
  cdkVersion: '2.8.0',
  defaultReleaseBranch: 'main',
  name: 'cdk-certificatemanager',
  buildWorkflow: false,
  rebuildBot: false,
  releaseWorkflow: false,
  mergify: false,
  pullRequestTemplate: false,
  projenUpgrade: false,
  workflows: false,
  github: false,
  license: false,
  staleBranches: false,
});

project.synth();


