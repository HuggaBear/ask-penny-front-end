import './App.css';
import { brandColors } from './theme';

function App() {
  return (
    <div className="app">
      <div className="container">
        {/* Header */}
        <header className="header">
          <h1>Ask Penny AI</h1>
          <p className="subtitle">SalesStar Brand Style Guide</p>
          <p className="status">Week 1 Day 1 Complete ✅ Brand Tokens Ready</p>
        </header>

        {/* Brand Colors */}
        <section className="card">
          <h2>Brand Colors</h2>
          <div className="color-grid">
            <div className="color-item">
              <div className="color-swatch" style={{ backgroundColor: brandColors.primary }}></div>
              <div className="color-info">
                <p className="color-name">Primary Blue</p>
                <p className="color-hex">{brandColors.primary}</p>
              </div>
            </div>
            <div className="color-item">
              <div className="color-swatch" style={{ backgroundColor: brandColors.accent }}></div>
              <div className="color-info">
                <p className="color-name">Accent Orange</p>
                <p className="color-hex">{brandColors.accent}</p>
              </div>
            </div>
            <div className="color-item">
              <div className="color-swatch" style={{ backgroundColor: brandColors.charcoal }}></div>
              <div className="color-info">
                <p className="color-name">Dark Charcoal</p>
                <p className="color-hex">{brandColors.charcoal}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="card">
          <h2>Typography</h2>
          <div className="typography-samples">
            <div className="type-sample">
              <h1 className="sample-h1">Heading 1 - 40px</h1>
              <p className="type-meta">font-weight: 500, line-height: 1.4em</p>
            </div>
            <div className="type-sample">
              <h2 className="sample-h2">Heading 2 - 32px</h2>
              <p className="type-meta">font-weight: 500, line-height: 1.3em</p>
            </div>
            <div className="type-sample">
              <h3 className="sample-h3">Heading 3 - 25px</h3>
              <p className="type-meta">font-weight: 500, line-height: 1.3em</p>
            </div>
            <div className="type-sample">
              <p className="sample-body">
                Body text uses Inter font at 16px with a relaxed line-height of 1.65em for optimal
                readability. This is the standard paragraph text throughout the application.
              </p>
              <p className="type-meta">font-weight: 400, line-height: 1.65em</p>
            </div>
          </div>
        </section>

        {/* Buttons */}
        <section className="card">
          <h2>Buttons</h2>
          <div className="button-group">
            <button className="btn btn-primary">Primary CTA</button>
            <button className="btn btn-secondary">Secondary</button>
            <button className="btn btn-ghost">Ghost</button>
            <button className="btn btn-primary" disabled>
              Disabled
            </button>
          </div>
          <p className="caption">
            Primary buttons use SalesStar accent orange (#E94629) with 4px border radius
          </p>
        </section>

        {/* UI Elements */}
        <section className="card">
          <h2>UI Elements</h2>
          <div className="elements-demo">
            <div className="badges">
              <span className="badge badge-green">Discovery</span>
              <span className="badge badge-blue">Qualification</span>
              <span className="badge badge-purple">Proposal</span>
              <span className="badge badge-orange">Negotiation</span>
              <span className="badge badge-red">Closed Won</span>
            </div>
            <div className="link-demo">
              <a href="#" className="brand-link">
                This is a link using SalesStar primary blue
              </a>
              <p className="caption">Links use #0170B9 and darken to #3A3A3A on hover</p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="card card-info">
          <h3>🚀 Week 1 Day 1 Complete</h3>
          <ul className="checklist">
            <li>✅ Repository initialized with Vite + React + TypeScript</li>
            <li>✅ Dependencies installed (Chakra UI, assistant-ui)</li>
            <li>✅ SalesStar brand style guide created</li>
            <li>✅ Brand tokens extracted and documented</li>
            <li><strong>Next: Week 1 Day 2 - Build primitive components</strong></li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;
