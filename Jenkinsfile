pipeline {
  agent {
    node {
      label 'nodejs'
    }

  }
  stages {
    stage('checkout') {
      steps {
        git(credentialsId: 'fcf654a06d66d8ed583e9010c72696a94ad55197', url: 'https://github.com/PREMKUMARM/100percent.git', branch: 'master', changelog: true)
      }
    }

  }
}