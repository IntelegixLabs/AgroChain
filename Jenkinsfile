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
        stage('Build') {
            steps {
                sh "pwd"
                dir('agrochain') {
                    sh "pwd"
                    sh 'npm run build'
                }
                sh "pwd"
            }
        }
        stage("Deploy") {
            steps {
                sh "sudo rm -rf /var/www/agrochain"
                sh "sudo cp -r ${WORKSPACE}/agrochain/build/ /var/www/agrochain"
            }
        }
    }
}
