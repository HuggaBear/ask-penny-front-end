import { useState } from 'react';
import './App.css';
import { brandColors } from './theme';
import {
  Button,
  Input,
  Textarea,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Badge,
  Modal,
  ModalFooter,
} from './components/primitives';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="app">
      <div className="container">
        {/* Header */}
        <header className="header">
          <h1>Ask Penny AI</h1>
          <p className="subtitle">Primitive Components Library</p>
          <p className="status">Week 1 Day 2 Complete ✅ All Primitive Components Built</p>
        </header>

        {/* Buttons */}
        <Card>
          <CardHeader>
            <h2>Buttons</h2>
          </CardHeader>
          <CardBody>
            <div className="demo-section">
              <h3>Variants</h3>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="primary" disabled>Disabled</Button>
              </div>
            </div>
            <div className="demo-section">
              <h3>Sizes</h3>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
            <div className="demo-section">
              <h3>Full Width</h3>
              <Button fullWidth>Full Width Button</Button>
            </div>
          </CardBody>
        </Card>

        {/* Inputs */}
        <Card>
          <CardHeader>
            <h2>Inputs</h2>
          </CardHeader>
          <CardBody>
            <div className="demo-section">
              <Input
                label="Name"
                placeholder="Enter your name"
                helperText="This is helper text"
                fullWidth
              />
            </div>
            <div className="demo-section">
              <Input
                label="Email"
                type="email"
                placeholder="you@example.com"
                isInvalid
                errorText="Please enter a valid email address"
                fullWidth
              />
            </div>
            <div className="demo-section">
              <Textarea
                label="Message"
                placeholder="Enter your message"
                helperText="Maximum 500 characters"
                fullWidth
                minRows={4}
              />
            </div>
          </CardBody>
        </Card>

        {/* Cards */}
        <Card>
          <CardHeader>
            <h2>Cards</h2>
          </CardHeader>
          <CardBody>
            <div className="demo-section">
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px' }}>
                <Card variant="default" padding="md">
                  <strong>Default Card</strong>
                  <p style={{ margin: '8px 0 0', fontSize: '14px', color: 'var(--brand-textLight)' }}>
                    Standard shadow
                  </p>
                </Card>
                <Card variant="elevated" padding="md">
                  <strong>Elevated Card</strong>
                  <p style={{ margin: '8px 0 0', fontSize: '14px', color: 'var(--brand-textLight)' }}>
                    Stronger shadow
                  </p>
                </Card>
                <Card variant="outlined" padding="md">
                  <strong>Outlined Card</strong>
                  <p style={{ margin: '8px 0 0', fontSize: '14px', color: 'var(--brand-textLight)' }}>
                    Border instead
                  </p>
                </Card>
              </div>
            </div>
            <div className="demo-section">
              <Card variant="outlined">
                <CardHeader>
                  <strong>Card with Subcomponents</strong>
                </CardHeader>
                <CardBody>
                  <p>This card uses CardHeader, CardBody, and CardFooter subcomponents for better structure.</p>
                </CardBody>
                <CardFooter>
                  <Button variant="ghost" size="sm">Cancel</Button>
                  <Button variant="primary" size="sm">Confirm</Button>
                </CardFooter>
              </Card>
            </div>
          </CardBody>
        </Card>

        {/* Avatars */}
        <Card>
          <CardHeader>
            <h2>Avatars</h2>
          </CardHeader>
          <CardBody>
            <div className="demo-section">
              <h3>Sizes</h3>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <Avatar name="John Doe" size="sm" />
                <Avatar name="John Doe" size="md" />
                <Avatar name="John Doe" size="lg" />
                <Avatar name="John Doe" size="xl" />
              </div>
            </div>
            <div className="demo-section">
              <h3>Roles</h3>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                  <Avatar name="User" role="user" size="lg" />
                  <p style={{ fontSize: '12px', marginTop: '8px', color: 'var(--brand-textLight)' }}>User</p>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <Avatar name="Penny" role="assistant" size="lg" />
                  <p style={{ fontSize: '12px', marginTop: '8px', color: 'var(--brand-textLight)' }}>Assistant</p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Badges */}
        <Card>
          <CardHeader>
            <h2>Badges</h2>
          </CardHeader>
          <CardBody>
            <div className="demo-section">
              <h3>Subtle (Default)</h3>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <Badge colorScheme="green">Discovery</Badge>
                <Badge colorScheme="blue">Qualification</Badge>
                <Badge colorScheme="purple">Proposal</Badge>
                <Badge colorScheme="orange">Negotiation</Badge>
                <Badge colorScheme="red">Closed Lost</Badge>
                <Badge colorScheme="gray">Inactive</Badge>
              </div>
            </div>
            <div className="demo-section">
              <h3>Solid</h3>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <Badge colorScheme="green" variant="solid">Success</Badge>
                <Badge colorScheme="blue" variant="solid">Info</Badge>
                <Badge colorScheme="purple" variant="solid">Feature</Badge>
                <Badge colorScheme="orange" variant="solid">Warning</Badge>
                <Badge colorScheme="red" variant="solid">Error</Badge>
              </div>
            </div>
            <div className="demo-section">
              <h3>Outline</h3>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <Badge colorScheme="green" variant="outline">Active</Badge>
                <Badge colorScheme="blue" variant="outline">Pending</Badge>
                <Badge colorScheme="purple" variant="outline">Review</Badge>
                <Badge colorScheme="red" variant="outline">Archived</Badge>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Modal */}
        <Card>
          <CardHeader>
            <h2>Modal</h2>
          </CardHeader>
          <CardBody>
            <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>

            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="Example Modal"
              size="md"
            >
              <p>This is a modal dialog. It can be used for focused interactions like forms, confirmations, or displaying detailed information.</p>
              <p style={{ marginTop: '12px' }}>
                Press ESC or click the overlay to close.
              </p>
              <ModalFooter>
                <Button variant="ghost" onClick={() => setIsModalOpen(false)}>
                  Cancel
                </Button>
                <Button variant="primary" onClick={() => setIsModalOpen(false)}>
                  Confirm
                </Button>
              </ModalFooter>
            </Modal>
          </CardBody>
        </Card>

        {/* Brand Colors Reference */}
        <Card>
          <CardHeader>
            <h2>Brand Colors Reference</h2>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '16px' }}>
              <div>
                <div style={{ width: '100%', height: '60px', backgroundColor: brandColors.primary, borderRadius: '8px' }}></div>
                <p style={{ fontSize: '12px', marginTop: '8px', fontWeight: 500 }}>Primary Red</p>
                <p style={{ fontSize: '11px', color: 'var(--brand-textMuted)', fontFamily: 'monospace' }}>{brandColors.primary}</p>
              </div>
              <div>
                <div style={{ width: '100%', height: '60px', backgroundColor: brandColors.secondary, borderRadius: '8px' }}></div>
                <p style={{ fontSize: '12px', marginTop: '8px', fontWeight: 500 }}>Secondary Red</p>
                <p style={{ fontSize: '11px', color: 'var(--brand-textMuted)', fontFamily: 'monospace' }}>{brandColors.secondary}</p>
              </div>
              <div>
                <div style={{ width: '100%', height: '60px', backgroundColor: brandColors.charcoal, borderRadius: '8px' }}></div>
                <p style={{ fontSize: '12px', marginTop: '8px', fontWeight: 500 }}>Charcoal</p>
                <p style={{ fontSize: '11px', color: 'var(--brand-textMuted)', fontFamily: 'monospace' }}>{brandColors.charcoal}</p>
              </div>
              <div>
                <div style={{ width: '100%', height: '60px', backgroundColor: brandColors.gray200, borderRadius: '8px', border: '1px solid #ccc' }}></div>
                <p style={{ fontSize: '12px', marginTop: '8px', fontWeight: 500 }}>Light Grey</p>
                <p style={{ fontSize: '11px', color: 'var(--brand-textMuted)', fontFamily: 'monospace' }}>{brandColors.gray200}</p>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Next Steps */}
        <Card style={{ backgroundColor: 'rgba(233, 70, 41, 0.05)', border: '1px solid rgba(233, 70, 41, 0.2)' }}>
          <CardHeader>
            <h3>🚀 Week 1 Day 2 Complete</h3>
          </CardHeader>
          <CardBody>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>✅ TypeScript types defined</li>
              <li>✅ Component directories created</li>
              <li>✅ Button primitive component</li>
              <li>✅ Input primitive component</li>
              <li>✅ Textarea primitive component</li>
              <li>✅ Card primitive component</li>
              <li>✅ Avatar primitive component</li>
              <li>✅ Badge primitive component</li>
              <li>✅ Modal primitive component</li>
              <li><strong>Next: Week 1 Day 3 - Build chat components with assistant-ui</strong></li>
            </ul>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default App;
