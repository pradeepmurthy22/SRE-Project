Hello World Service

![image](https://github.com/pradeepmurthy22/SRE-Project/assets/70941318/b9d056f1-c564-4850-9ec5-b934fd53af4a)


In this project,

Step1: Created the simple nodeJS hello world application.
      -> you can find the code repository in the master branch.
      -> Once the code is pushed to the master branch, I have integrated the automation to create the Docker image from Dockerfile and push into the AWS ECR repostiory. The automation script is present in this path : .github/workflows/docker-build.yml
      -> The image will be created and pushed into the ECR
         Ref: 
         ![image](https://github.com/pradeepmurthy22/SRE-Project/assets/70941318/ad7034ae-fe43-4b5d-910f-2d131904f636)

Step2: Infrastructure setup for service.
      -> I have created the EC2 instance with VPC and Security groups(rules) configured.
      -> In EC2 server, deployed the container.
         Ref:
         ![image](https://github.com/pradeepmurthy22/SRE-Project/assets/70941318/c532e218-5163-41be-a28c-3a9e5d0aaed2)

Step3: Monitoring and Alerting.
      -> Configured Prometheus as datasource and Grafana dashboard.
      Ref:
      ![image](https://github.com/pradeepmurthy22/SRE-Project/assets/70941318/0a0fd5cc-299e-4571-a4f7-f0a56272de96)
      ![image](https://github.com/pradeepmurthy22/SRE-Project/assets/70941318/63d77563-bbd6-41c9-bf74-5bb2e2f82651)
      -> Configured Cloudwatch alarm for CPU Utilization and Memory usage. For notification configured the SNS topic and and attached it into the alarm.
      Ref:
      ![image](https://github.com/pradeepmurthy22/SRE-Project/assets/70941318/1b3c43db-6f22-4f5b-b927-f356b93c0af0)
      ![image](https://github.com/pradeepmurthy22/SRE-Project/assets/70941318/114fedc1-6a97-4d8c-adf1-036a8c0df197)

      -> Monitoring purpose created the cloud watch dashboard.
      Ref:
      ![image](https://github.com/pradeepmurthy22/SRE-Project/assets/70941318/6f22966c-3502-4f19-9f37-75e78c27986c)


