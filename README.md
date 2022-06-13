[![andyhabel](https://circleci.com/gh/andyhabel/capstone-project-final?style=svg)](https://app.circleci.com/pipelines/github/andyhabel/capstone-project-final)

**Udacity Capstone Project**

**Overview:**

In this project many of the skills that were learned over the course of the Udacity Cloud DevOps Engineer program were applied, including:

- Working in AWS Services 
- Using CircleCI to develop a CI/CD pipeline
- Working with AWS CloudFormation 
- Building Kubernetes cluster
- Building containers and using them in pipelines


----
**Project Summary:** 

I developed a CI/CD pipeline to deploy a basic minimal viable product app I wrote that generates a random number and picks a random song based on this number using the genius.com api (https://docs.genius.com/).

The project performs linting on the Dockerfile and application in the inital part of the pipeline.

It then generates a docker image and uploads to the Docker hub repository.

The pipeline then builds the AWS infrastructure using the CircleCI orbs (https://circleci.com/orbs/) for Kubernetes and deploys the container to the kubernetes cluster. The underlying ORBs utilize CloudFormation based on best practices from CircleCI.

Finally the project tests the application is running.  I opted for a blue/green deployment strategy. 

------
**Environment Setup**

| Environment Variable |Description  |
|--|--|
| AWS_DEFAULT_REGION | AWS Region to deploy to (eg. US-WEST-2) |
| AWS_ACCESS_KEY_ID  | AWS IAM key ID |
| AWS_SECRET_ACCESS_KEY | AWS IAM Secret key |
| AWS_ECR_URL |ECR for region, example: XXX.dkr.ecr.us-east-1.amazonaws.com |
| DOCKER_USERNAME | Docker Username  |
| DOCKER_PASSWORD	 |Docker Password  |



