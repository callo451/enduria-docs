import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  productSidebar: [
    {type: 'doc', id: 'getting-started/welcome', label: 'Welcome'},
    {type: 'doc', id: 'getting-started/first-steps', label: 'First steps'},
    {type: 'category', label: 'Using Enduria', link: {type: 'doc', id: 'product/overview'}, items: [
      'product/tickets', 'product/assets', 'product/projects', 'product/knowledge-base', 'product/customer-portal',
    ]},
    'troubleshooting',
  ],
  adminSidebar: [
    {type: 'doc', id: 'admin/overview', label: 'Administration overview'},
    'admin/users-and-permissions', 'admin/branding', 'admin/integrations',
  ],
  apiSidebar: [
    {type: 'doc', id: 'api/overview', label: 'API overview'},
    'api/authentication', 'api/requests-and-responses', 'api/webhooks', 'api/reference',
  ],
  hostingSidebar: [
    {type: 'doc', id: 'self-hosting/overview', label: 'Self-hosting overview'},
    'self-hosting/configuration', 'self-hosting/upgrades', 'self-hosting/backups',
  ],
};

export default sidebars;
