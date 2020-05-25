pipeline {
  agent {
    node {
      label 'nodejs'
    }

  }
  stages {
    stage('checkout') {
      steps {
           checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/PREMKUMARM/100percent.git']]])
      }
    }

  }
}
