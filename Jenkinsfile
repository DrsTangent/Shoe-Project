pipeline{
    agent any
    stages{
        stage("Build"){
            steps{
                sh 'sudo docker compose build'
                sh 'sudo docker compose up '
                sh 'sudo docker compose push'
            }
        }
    }
}