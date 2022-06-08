pipeline {
    agent {
        docker {
            image 'node:16-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Initial') {
            steps {
                sh "pwd"
                dir('agrochain') {
                    sh "pwd"
                }
                sh "pwd"
                sh 'node -v'
            }
        }
        stage('Install') {
            steps {
                sh "pwd"
                dir('agrochain') {
                    sh "pwd"
                    sh 'npm install'
                }
                sh "pwd"
            }
        }
    }
}
