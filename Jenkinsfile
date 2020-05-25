pipeline {
  agent {
    node {
      label 'nodejs'
    }

  }
  stages {
    stage('build') {
      steps {
        git(url: 'https://github.com/PREMKUMARM/100percent.git', branch: 'master', changelog: true, credentialsId: '1e74f662a3d6147713ada635e9c9052e15f9447a')
      }
    }

  }
}