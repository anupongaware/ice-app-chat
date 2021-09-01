import React from 'react';
import { Container, Row, Col, Panel, Button, Icon} from 'rsuite';

const SignIn = () => {
  

  return (
    <Container>
      <Row>
        <Col xs={24} md={12} midOffset={6}>
          <Panel>
            <div className="text-center">
              <h2>Welcome to Chat</h2>
              <p>Progreesive chat platform for neophyte</p>
            </div>

            <div>
              <Button block color ="blue">
                <Icon icon="facebook"/> Continue with Facebook
              </Button>

              <Button block color ="green">
                <Icon icon="facebook"/> Continue with Facebook
              </Button>
            </div>


          </Panel>
        </Col>
      </Row>
    </Container>
  );
};

export default SignIn;
