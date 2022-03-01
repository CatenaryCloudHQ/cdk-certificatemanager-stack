
import { App, Stack, StackProps } from 'aws-cdk-lib';
import { CertificateValidation, Certificate } from 'aws-cdk-lib/aws-certificatemanager';
import { HostedZone } from 'aws-cdk-lib/aws-route53';
import { Construct } from 'constructs';


export class CertValidation extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    const myHostedZone = new HostedZone(this, 'HostedZone', {
      zoneName: 'thesite.com',
    });

    new Certificate(this, 'Certificate', {
      domainName: 'dev.thesite.com',
      subjectAlternativeNames: [],
      validation: CertificateValidation.fromDns(myHostedZone),
    });
  }
}

const app = new App();

new CertValidation(app, 'cetificate-validation');

app.synth();